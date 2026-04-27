import { useState, useEffect, useRef, useCallback, useLayoutEffect, useReducer } from 'react'

/**
 * Radix UI의 Presence 패턴을 그대로 구현한 Hook.
 * @radix-ui/react-presence 소스 코드 기반.
 *
 * CSS @keyframes 애니메이션이 완료될 때까지 DOM 제거를 지연시킵니다.
 * CSS transition은 지원하지 않음 — @keyframes animation만 감지합니다.
 */

function useStateMachine(
  initialState: string,
  machine: Record<string, Record<string, string>>
) {
  return useReducer(
    (state: string, event: string) => machine[state]?.[event] ?? state,
    initialState
  )
}

function getAnimationName(styles: CSSStyleDeclaration | null) {
  return styles?.animationName || 'none'
}

export function usePresence(present: boolean) {
  const [node, setNode] = useState<HTMLElement>()
  const stylesRef = useRef<CSSStyleDeclaration | null>(null)
  const prevPresentRef = useRef(present)
  const prevAnimationNameRef = useRef<string>('none')
  const initialState = present ? 'mounted' : 'unmounted'

  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: 'unmounted',
      ANIMATION_OUT: 'unmountSuspended',
    },
    unmountSuspended: {
      MOUNT: 'mounted',
      ANIMATION_END: 'unmounted',
    },
    unmounted: {
      MOUNT: 'mounted',
    },
  })

  useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current)
    prevAnimationNameRef.current = state === 'mounted' ? currentAnimationName : 'none'
  }, [state])

  useLayoutEffect(() => {
    const styles = stylesRef.current
    const wasPresent = prevPresentRef.current
    const hasPresentChanged = wasPresent !== present

    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current
      const currentAnimationName = getAnimationName(styles)

      if (present) {
        send('MOUNT')
      } else if (currentAnimationName === 'none' || styles?.display === 'none') {
        send('UNMOUNT')
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName
        if (wasPresent && isAnimating) {
          send('ANIMATION_OUT')
        } else {
          send('UNMOUNT')
        }
      }
      prevPresentRef.current = present
    }
  }, [present, send])

  useLayoutEffect(() => {
    if (node) {
      let timeoutId: number
      const ownerWindow = node.ownerDocument.defaultView ?? window

      const handleAnimationEnd = (event: AnimationEvent) => {
        const currentAnimationName = getAnimationName(stylesRef.current)
        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName))
        if (event.target === node && isCurrentAnimation) {
          send('ANIMATION_END')
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode
            node.style.animationFillMode = 'forwards'
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === 'forwards') {
                node.style.animationFillMode = currentFillMode
              }
            })
          }
        }
      }

      const handleAnimationStart = (event: AnimationEvent) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current)
        }
      }

      node.addEventListener('animationstart', handleAnimationStart)
      node.addEventListener('animationcancel', handleAnimationEnd)
      node.addEventListener('animationend', handleAnimationEnd)

      return () => {
        ownerWindow.clearTimeout(timeoutId)
        node.removeEventListener('animationstart', handleAnimationStart)
        node.removeEventListener('animationcancel', handleAnimationEnd)
        node.removeEventListener('animationend', handleAnimationEnd)
      }
    } else {
      send('ANIMATION_END')
    }
  }, [node, send])

  return {
    isPresent: ['mounted', 'unmountSuspended'].includes(state),
    ref: useCallback((node: HTMLElement | null) => {
      stylesRef.current = node ? getComputedStyle(node) : null
      setNode(node ?? undefined)
    }, []),
  }
}
