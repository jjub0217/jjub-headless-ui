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
interface DialogContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
  titleId: string
  descriptionId: string
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

const DialogContext = createContext<DialogContextValue | null>(null)

function useDialogContext() {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('Dialog components must be used within Dialog.Root.')
  }
  return context
}

// ─── Dialog.Root ──────────────────────────────────────────
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
    <DialogContext.Provider
      value={{
        open,
        onOpenChange: handleOpenChange,
        titleId: `${baseId}-dialog-title`,
        descriptionId: `${baseId}-dialog-description`,
        triggerRef,
      }}
    >
      {children}
    </DialogContext.Provider>
  )
}

// ─── Dialog.Trigger ───────────────────────────────────────
interface TriggerProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

function Trigger({ children, className, ...props }: TriggerProps) {
  const { open, onOpenChange, triggerRef } = useDialogContext()

  return (
    <button
      ref={triggerRef}
      type="button"
      onClick={() => onOpenChange(true)}
      data-state={open ? 'open' : 'closed'}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── Dialog.Portal ────────────────────────────────────────
interface PortalProps {
  children: ReactNode
  container?: HTMLElement
}

function Portal({ children, container }: PortalProps) {
  const { open } = useDialogContext()

  if (!open) return null

  return createPortal(children, container ?? document.body)
}

// ─── Dialog.Overlay ───────────────────────────────────────
interface OverlayProps extends ComponentPropsWithoutRef<'div'> {}

function Overlay({ className, onClick, ...props }: OverlayProps) {
  const { open, onOpenChange } = useDialogContext()

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onOpenChange(false)
    }
    onClick?.(e)
  }

  return (
    <div
      onClick={handleClick}
      data-state={open ? 'open' : 'closed'}
      className={className}
      {...props}
    />
  )
}

// ─── Dialog.Content ───────────────────────────────────────
interface ContentProps extends ComponentPropsWithoutRef<'div'> {
  onEscapeKeyDown?: (event: globalThis.KeyboardEvent) => void
  children: ReactNode
}

function Content({ onEscapeKeyDown, children, className, ...props }: ContentProps) {
  const { open, onOpenChange, titleId, descriptionId, triggerRef } = useDialogContext()
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

  if (!open) return null

  return (
    <div
      ref={contentRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      data-state={open ? 'open' : 'closed'}
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── Dialog.Title ─────────────────────────────────────────
interface TitleProps extends ComponentPropsWithoutRef<'h2'> {
  children: ReactNode
}

function Title({ children, className, ...props }: TitleProps) {
  const { titleId } = useDialogContext()

  return (
    <h2 id={titleId} className={className} {...props}>
      {children}
    </h2>
  )
}

// ─── Dialog.Description ───────────────────────────────────
interface DescriptionProps extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode
}

function Description({ children, className, ...props }: DescriptionProps) {
  const { descriptionId } = useDialogContext()

  return (
    <p id={descriptionId} className={className} {...props}>
      {children}
    </p>
  )
}

// ─── Dialog.Close ─────────────────────────────────────────
interface CloseProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

function Close({ children, className, ...props }: CloseProps) {
  const { onOpenChange } = useDialogContext()

  return (
    <button
      type="button"
      onClick={() => onOpenChange(false)}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── Export ───────────────────────────────────────────────
export const Dialog = {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
}
