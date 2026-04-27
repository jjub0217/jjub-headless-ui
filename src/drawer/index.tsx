import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  useId,
  type ReactNode,
  type MouseEvent,
  type ComponentPropsWithoutRef,
} from 'react'
import { createPortal } from 'react-dom'
import { useFocusTrap } from '../utils/use-focus-trap'
import { useBodyScrollLock } from '../utils/use-body-scroll-lock'

// ─── Context ──────────────────────────────────────────────
interface DrawerContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
  titleId: string
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

const DrawerContext = createContext<DrawerContextValue | null>(null)

function useDrawerContext() {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error('Drawer components must be used within Drawer.Root.')
  }
  return context
}

// ─── Drawer.Root ──────────────────────────────────────────
interface RootProps {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

function Root({ defaultOpen = false, open: controlledOpen, onOpenChange, children }: RootProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const baseId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)

  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen)
      }
      onOpenChange?.(newOpen)
    },
    [isControlled, onOpenChange]
  )

  return (
    <DrawerContext.Provider
      value={{
        open,
        onOpenChange: handleOpenChange,
        titleId: `${baseId}-drawer-title`,
        triggerRef,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}

// ─── Drawer.Trigger ───────────────────────────────────────
interface TriggerProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

function Trigger({ children, className, ...props }: TriggerProps) {
  const { open, onOpenChange, triggerRef } = useDrawerContext()

  return (
    <button
      ref={triggerRef}
      type="button"
      aria-expanded={open}
      aria-haspopup="dialog"
      onClick={() => onOpenChange(true)}
      data-state={open ? 'open' : 'closed'}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── Drawer.Overlay ───────────────────────────────────────
interface OverlayProps extends ComponentPropsWithoutRef<'div'> {}

function Overlay({ className, onClick, ...props }: OverlayProps) {
  const { open, onOpenChange } = useDrawerContext()

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onOpenChange(false)
    }
    onClick?.(e)
  }

  // Keep overlay in sync with content animation
  if (!open) return null

  return (
    <div
      aria-hidden="true"
      onClick={handleClick}
      data-state={open ? 'open' : 'closed'}
      className={className}
      {...props}
    />
  )
}

// ─── Drawer.Content ───────────────────────────────────────
type DrawerSide = 'left' | 'right' | 'top' | 'bottom'

interface ContentProps extends ComponentPropsWithoutRef<'div'> {
  side?: DrawerSide
  onEscapeKeyDown?: (event: globalThis.KeyboardEvent) => void
  children: ReactNode
}

function Content({ side = 'right', onEscapeKeyDown, children, className, ...props }: ContentProps) {
  const { open, onOpenChange, titleId, triggerRef } = useDrawerContext()
  const contentRef = useRef<HTMLDivElement>(null)

  // Focus trap
  useFocusTrap(contentRef, open)

  // Body scroll lock
  useBodyScrollLock(open)

  // ESC key handling
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscapeKeyDown?.(e)
        if (!e.defaultPrevented) {
          onOpenChange(false)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onOpenChange, onEscapeKeyDown])

  // Restore focus to trigger on close
  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current && !open) {
      triggerRef.current?.focus()
    }
    prevOpen.current = open
  }, [open, triggerRef])

  // Slide animation: keep in DOM during close animation
  const [shouldRender, setShouldRender] = useState(open)
  const [animState, setAnimState] = useState<'open' | 'closing' | 'closed'>(open ? 'open' : 'closed')

  useEffect(() => {
    if (open) {
      setShouldRender(true)
      // Start from closed position, then animate to open on next frame
      setAnimState('closed')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimState('open'))
      })
    } else if (animState === 'open') {
      setAnimState('closing')
    }
  }, [open])

  const handleTransitionEnd = () => {
    if (animState === 'closing') {
      setAnimState('closed')
      setShouldRender(false)
    }
  }

  if (!shouldRender) return null

  const transformMap: Record<DrawerSide, Record<string, string>> = {
    left: { open: 'translateX(0)', closing: 'translateX(-100%)', closed: 'translateX(-100%)' },
    right: { open: 'translateX(0)', closing: 'translateX(100%)', closed: 'translateX(100%)' },
    top: { open: 'translateY(0)', closing: 'translateY(-100%)', closed: 'translateY(-100%)' },
    bottom: { open: 'translateY(0)', closing: 'translateY(100%)', closed: 'translateY(100%)' },
  }

  return (
    <div
      ref={contentRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      data-state={open ? 'open' : 'closed'}
      data-side={side}
      className={className}
      onTransitionEnd={handleTransitionEnd}
      style={{
        transform: transformMap[side][animState],
        transition: 'transform 300ms cubic-bezier(0.32, 0.72, 0, 1)',
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── Drawer.Title ─────────────────────────────────────────
interface TitleProps extends ComponentPropsWithoutRef<'h2'> {
  children: ReactNode
}

function Title({ children, className, ...props }: TitleProps) {
  const { titleId } = useDrawerContext()

  return (
    <h2 id={titleId} className={className} {...props}>
      {children}
    </h2>
  )
}

// ─── Drawer.Close ─────────────────────────────────────────
interface CloseProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

function Close({ children, className, ...props }: CloseProps) {
  const { onOpenChange } = useDrawerContext()

  return (
    <button
      type="button"
      aria-label="Close drawer"
      onClick={() => onOpenChange(false)}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── Drawer.Portal ────────────────────────────────────────
interface PortalProps {
  children: ReactNode
  container?: HTMLElement
}

function Portal({ children, container }: PortalProps) {
  return createPortal(children, container ?? document.body)
}

// ─── Export ───────────────────────────────────────────────
export const Drawer = {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Close,
}
