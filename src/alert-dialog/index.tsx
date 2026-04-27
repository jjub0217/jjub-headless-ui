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
import { useFocusTrap } from '../utils/use-focus-trap'
import { useBodyScrollLock } from '../utils/use-body-scroll-lock'

// ─── Context ──────────────────────────────────────────────
interface AlertDialogContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
  titleId: string
  descriptionId: string
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

const AlertDialogContext = createContext<AlertDialogContextValue | null>(null)

function useAlertDialogContext() {
  const context = useContext(AlertDialogContext)
  if (!context) {
    throw new Error('AlertDialog components must be used within AlertDialog.Root.')
  }
  return context
}

// ─── AlertDialog.Root ─────────────────────────────────────
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
    <AlertDialogContext.Provider
      value={{
        open,
        onOpenChange: handleOpenChange,
        titleId: `${baseId}-alert-dialog-title`,
        descriptionId: `${baseId}-alert-dialog-description`,
        triggerRef,
      }}
    >
      {children}
    </AlertDialogContext.Provider>
  )
}

// ─── AlertDialog.Trigger ──────────────────────────────────
interface TriggerProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

function Trigger({ children, className, ...props }: TriggerProps) {
  const { open, onOpenChange, triggerRef } = useAlertDialogContext()

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

// ─── AlertDialog.Portal ───────────────────────────────────
interface PortalProps {
  children: ReactNode
  container?: HTMLElement
}

function Portal({ children, container }: PortalProps) {
  const { open } = useAlertDialogContext()

  if (!open) return null

  return createPortal(children, container ?? document.body)
}

// ─── AlertDialog.Overlay ──────────────────────────────────
interface OverlayProps extends ComponentPropsWithoutRef<'div'> {}

function Overlay({ className, ...props }: OverlayProps) {
  const { open } = useAlertDialogContext()

  // Unlike Dialog, clicking the overlay does NOT close the alert dialog
  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className={className}
      {...props}
    />
  )
}

// ─── AlertDialog.Content ──────────────────────────────────
interface ContentProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

function Content({ children, className, ...props }: ContentProps) {
  const { open, titleId, descriptionId, triggerRef } = useAlertDialogContext()
  const contentRef = useRef<HTMLDivElement>(null)

  // Focus trap
  useFocusTrap(contentRef, open)

  // Body scroll lock
  useBodyScrollLock(open)

  // Unlike Dialog, ESC key does NOT close the alert dialog

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
      role="alertdialog"
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

// ─── AlertDialog.Title ────────────────────────────────────
interface TitleProps extends ComponentPropsWithoutRef<'h2'> {
  children: ReactNode
}

function Title({ children, className, ...props }: TitleProps) {
  const { titleId } = useAlertDialogContext()

  return (
    <h2 id={titleId} className={className} {...props}>
      {children}
    </h2>
  )
}

// ─── AlertDialog.Description ──────────────────────────────
interface DescriptionProps extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode
}

function Description({ children, className, ...props }: DescriptionProps) {
  const { descriptionId } = useAlertDialogContext()

  return (
    <p id={descriptionId} className={className} {...props}>
      {children}
    </p>
  )
}

// ─── AlertDialog.Action ───────────────────────────────────
interface ActionProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

function Action({ children, className, ...props }: ActionProps) {
  const { onOpenChange } = useAlertDialogContext()

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

// ─── AlertDialog.Cancel ───────────────────────────────────
interface CancelProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

function Cancel({ children, className, ...props }: CancelProps) {
  const { onOpenChange } = useAlertDialogContext()

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
export const AlertDialog = {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Action,
  Cancel,
}
