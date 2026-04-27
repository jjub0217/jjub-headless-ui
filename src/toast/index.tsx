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

// ─── Types ────────────────────────────────────────────────
export type ToastVariant = 'success' | 'error' | 'warning' | 'info'

export interface ToastItem {
  id: string
  title?: string
  description?: string
  variant?: ToastVariant
  duration?: number
}

// ─── Context ──────────────────────────────────────────────
interface ToastContextValue {
  toasts: ToastItem[]
  addToast: (toast: Omit<ToastItem, 'id'>) => string
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

function useToastContext() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('Toast components must be used within Toast.Provider.')
  }
  return context
}

// ─── useToast ─────────────────────────────────────────────
export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within Toast.Provider.')
  }
  return {
    addToast: context.addToast,
    removeToast: context.removeToast,
    toasts: context.toasts,
  }
}

// ─── Toast.Provider ───────────────────────────────────────
interface ProviderProps {
  children: ReactNode
  /** Maximum number of toasts to display at once */
  maxToasts?: number
}

function Provider({ children, maxToasts = 5 }: ProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const counterRef = useRef(0)

  const addToast = useCallback(
    (toast: Omit<ToastItem, 'id'>): string => {
      counterRef.current += 1
      const id = `toast-${counterRef.current}`
      setToasts((prev) => {
        const next = [...prev, { ...toast, id }]
        return next.length > maxToasts ? next.slice(next.length - maxToasts) : next
      })
      return id
    },
    [maxToasts]
  )

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

// ─── Toast.Root ───────────────────────────────────────────
interface RootProps extends ComponentPropsWithoutRef<'li'> {
  /** Toast id — used to auto-dismiss */
  toastId: string
  /** Auto-dismiss duration in ms. 0 = no auto-dismiss */
  duration?: number
  children: ReactNode
}

function Root({ toastId, duration = 4000, children, className, ...props }: RootProps) {
  const { removeToast } = useToastContext()

  useEffect(() => {
    if (duration <= 0) return
    const timer = setTimeout(() => removeToast(toastId), duration)
    return () => clearTimeout(timer)
  }, [toastId, duration, removeToast])

  return (
    <li
      role="status"
      aria-atomic="true"
      data-toast-id={toastId}
      className={className}
      {...props}
    >
      {children}
    </li>
  )
}

// ─── Toast.Title ──────────────────────────────────────────
interface TitleProps extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode
}

function Title({ children, className, ...props }: TitleProps) {
  return (
    <p data-toast-title="" className={className} {...props}>
      {children}
    </p>
  )
}

// ─── Toast.Description ────────────────────────────────────
interface DescriptionProps extends ComponentPropsWithoutRef<'p'> {
  children: ReactNode
}

function Description({ children, className, ...props }: DescriptionProps) {
  return (
    <p data-toast-description="" className={className} {...props}>
      {children}
    </p>
  )
}

// ─── Toast.Close ──────────────────────────────────────────
interface CloseProps extends ComponentPropsWithoutRef<'button'> {
  toastId: string
  children?: ReactNode
}

function Close({ toastId, children = '✕', className, ...props }: CloseProps) {
  const { removeToast } = useToastContext()

  return (
    <button
      type="button"
      aria-label="Close notification"
      onClick={() => removeToast(toastId)}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── Toast.Viewport ───────────────────────────────────────
// Renders the aria-live region and all active toasts via portal.
interface ViewportProps extends ComponentPropsWithoutRef<'ol'> {
  /** Where to portal. Defaults to document.body */
  container?: HTMLElement
}

function Viewport({ container, className, ...props }: ViewportProps) {
  const { toasts } = useToastContext()

  return createPortal(
    <ol
      aria-live="polite"
      aria-label="Notifications"
      data-toast-viewport=""
      className={className}
      {...props}
    >
      {toasts.map((toast) => (
        <Root key={toast.id} toastId={toast.id} duration={toast.duration} data-variant={toast.variant}>
          <div>
            {toast.title && <Title>{toast.title}</Title>}
            {toast.description && <Description>{toast.description}</Description>}
          </div>
          <Close toastId={toast.id} />
        </Root>
      ))}
    </ol>,
    container ?? document.body
  )
}

// ─── Export ───────────────────────────────────────────────
export const Toast = {
  Provider,
  Viewport,
  Root,
  Title,
  Description,
  Close,
}
