import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from 'react'
import {
  prepareWithSegments,
  layout,
  walkLineRanges,
  type PreparedTextWithSegments,
} from '@chenglou/pretext'

interface BubbleProps extends ComponentPropsWithoutRef<'div'> {
  /** 메시지 텍스트 (Pretext가 측정하기 위해 string이어야 함). */
  text: string
  /** 버블 최대 너비 (px). 미지정 시 Pretext 최적화 없이 자연 fit-content로 렌더. */
  maxWidth?: number
  /** 텍스트의 whitespace 처리. 'pre-wrap'은 \n과 연속 공백 보존 (채팅 멀티라인 메시지에 사용). 기본 'normal'. */
  whiteSpace?: 'normal' | 'pre-wrap'
}

/**
 * 같은 줄 수를 유지하는 가장 좁은 너비에서의 최대 줄 폭을 반환.
 * 이진 탐색으로 줄 수가 늘어나기 직전의 최소 너비를 찾고, 그 너비에서 walkLineRanges로 가장 긴 줄 폭을 추출.
 * (사용자는 내부를 안 봐도 됨 — Math.ceil()처럼 그냥 호출해서 결과만 사용)
 */
function findTightWidth(
  handle: PreparedTextWithSegments,
  maxAvailableWidth: number,
  lineHeight: number,
): number {
  // 목표 줄 수 (이 줄 수가 늘어나지 않게 유지하면서 너비를 좁힐 거임)
  const targetLineCount = layout(
    handle,
    maxAvailableWidth,
    lineHeight,
  ).lineCount

  // 같은 줄 수를 유지하는 최소 너비를 찾는 중
  // 그 너비는 narrowEnd와 wideEnd 사이 어딘가에 있음
  let narrowEnd = 1 // 같은 줄 수를 유지하는 최소 너비는 이 값 이상
  let wideEnd = maxAvailableWidth // 같은 줄 수를 유지하는 최소 너비는 이 값 이하

  // 두 끝이 만날 때까지 반복
  while (narrowEnd < wideEnd) {
    const tryWidth = Math.floor((narrowEnd + wideEnd) / 2)
    const tryLineCount = layout(handle, tryWidth, lineHeight).lineCount

    if (tryLineCount <= targetLineCount) {
      wideEnd = tryWidth
    } else {
      narrowEnd = tryWidth + 1
    }
  }

  // 두 끝이 만난 값에서 가장 긴 줄 폭 추출
  let maxLineWidth = 0
  walkLineRanges(handle, narrowEnd, (line) => {
    if (line.width > maxLineWidth) maxLineWidth = line.width
  })

  return Math.ceil(maxLineWidth)
}

/**
 * Pretext 기반 채팅 버블.
 * fit-content가 만드는 데드 스페이스를 없애고, 텍스트에 딱 맞는 너비로 버블을 만듦.
 * Canvas measureText로 글자 폭을 캐싱한 후 산수만 수행 (DOM 측정 없음).
 */
export function Bubble({
  text,
  maxWidth,
  whiteSpace = 'normal',
  style,
  ...rest
}: BubbleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tightWidth, setTightWidth] = useState<number | null>(null)

  useEffect(() => {
    const el = ref.current
    // maxWidth 미지정 시 Pretext 측정 안 함 (자연 fit-content로 렌더)
    if (!el || maxWidth === undefined) {
      setTightWidth(null)
      return
    }

    const cs = getComputedStyle(el)
    const font = cs.font
    const lineHeight = parseFloat(cs.lineHeight) || 20
    const paddingX =
      parseFloat(cs.paddingLeft || '0') +
      parseFloat(cs.paddingRight || '0')

    const textWidth = maxWidth - paddingX

    const handle = prepareWithSegments(text, font, {
      wordBreak: 'keep-all',
      whiteSpace,
    })
    const tw = findTightWidth(handle, textWidth, lineHeight)
    setTightWidth(tw + paddingX)
  }, [text, maxWidth, whiteSpace])

  return (
    <div
      ref={ref}
      style={{
        boxSizing: 'border-box',
        maxWidth: maxWidth !== undefined ? `${maxWidth}px` : undefined,
        width: tightWidth !== null ? `${tightWidth}px` : 'fit-content',
        wordBreak: 'keep-all',
        overflowWrap: 'break-word',
        whiteSpace: whiteSpace === 'pre-wrap' ? 'pre-wrap' : undefined,
        ...style,
      }}
      {...rest}
    >
      {text}
    </div>
  )
}
