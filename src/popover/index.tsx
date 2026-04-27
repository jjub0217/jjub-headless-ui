import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  useId,
  type ReactNode,
  type ComponentPropsWithoutRef,
} from 'react'
import { createPortal } from 'react-dom'

// ─── Context ──────────────────────────────────────────────
interface PopoverContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
  triggerId: string
  contentId: string
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

const PopoverContext = createContext<PopoverContextValue | null>(null)

function usePopoverContext() {
  const context = useContext(PopoverContext)
  if (!context) {
    throw new Error('Popover components must be used within Popover.Root.')
  }
  return context
}

// ─── Popover.Root ─────────────────────────────────────────
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
    <PopoverContext.Provider
      value={{
        open,
        onOpenChange: handleOpenChange,
        triggerId: `${baseId}-popover-trigger`,
        contentId: `${baseId}-popover-content`,
        triggerRef,
      }}
    >
      {children}
    </PopoverContext.Provider>
  )
}

// ─── Popover.Trigger ──────────────────────────────────────
interface TriggerProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

function Trigger({ children, className, ...props }: TriggerProps) {
  const { open, onOpenChange, triggerId, contentId, triggerRef } = usePopoverContext()

  return (
    <button
      ref={triggerRef}
      id={triggerId}
      type="button"
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-controls={open ? contentId : undefined}
      onClick={() => onOpenChange(!open)}
      data-state={open ? 'open' : 'closed'}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── Popover.Content ──────────────────────────────────────
interface ContentProps extends ComponentPropsWithoutRef<'div'> {
  onEscapeKeyDown?: (event: globalThis.KeyboardEvent) => void
  children: ReactNode
}

function Content({ onEscapeKeyDown, children, className, ...props }: ContentProps) {
  const { open, onOpenChange, contentId, triggerId, triggerRef } = usePopoverContext()
  const contentRef = useRef<HTMLDivElement>(null)

  // ESC key and outside click handling
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscapeKeyDown?.(e)
        if (!e.defaultPrevented) {
          onOpenChange(false)
          triggerRef.current?.focus()
        }
      }
    }

    const handleClickOutside = (e: globalThis.MouseEvent) => {
      const target = e.target as Node
      if (
        contentRef.current &&
        !contentRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        onOpenChange(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, onOpenChange, onEscapeKeyDown, triggerRef])

  // Move focus into content when opened
  useEffect(() => {
    if (open) {
      const focusable = contentRef.current?.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      focusable?.focus()
    }
  }, [open])

  if (!open) return null

  return createPortal(
    <div
      ref={contentRef}
      id={contentId}
      role="dialog"
      aria-labelledby={triggerId}
      data-state={open ? 'open' : 'closed'}
      className={className}
      {...props}
    >
      {children}
    </div>,
    document.body
  )
}

// ─── Popover.Close ────────────────────────────────────────
interface CloseProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode
}

function Close({ children = '✕', className, ...props }: CloseProps) {
  const { onOpenChange, triggerRef } = usePopoverContext()

  return (
    <button
      type="button"
      aria-label="Close popover"
      onClick={() => {
        onOpenChange(false)
        triggerRef.current?.focus()
      }}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── Export ───────────────────────────────────────────────
export const Popover = {
  Root,
  Trigger,
  Content,
  Close,
}
