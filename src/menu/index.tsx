import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  useId,
  type ReactNode,
  type KeyboardEvent,
  type ComponentPropsWithoutRef,
} from 'react'
import { createPortal } from 'react-dom'

// ─── Context ──────────────────────────────────────────────
interface MenuContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
  activeIndex: number
  setActiveIndex: (index: number) => void
  contentId: string
  triggerRef: React.RefObject<HTMLButtonElement | null>
  contentRef: React.RefObject<HTMLDivElement | null>
}

const MenuContext = createContext<MenuContextValue | null>(null)

function useMenuContext() {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('Menu components must be used within Menu.Root.')
  }
  return context
}

// ─── Menu.Root ────────────────────────────────────────────
interface RootProps {
  children: ReactNode
}

function Root({ children }: RootProps) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const baseId = useId()
  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleOpenChange = useCallback((newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      setActiveIndex(-1)
    }
  }, [])

  return (
    <MenuContext.Provider
      value={{
        open,
        onOpenChange: handleOpenChange,
        activeIndex,
        setActiveIndex,
        contentId: `${baseId}-menu`,
        triggerRef,
        contentRef,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

// ─── Menu.Trigger ─────────────────────────────────────────
interface TriggerProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

function Trigger({ children, className, ...props }: TriggerProps) {
  const { open, onOpenChange, contentId, triggerRef } = useMenuContext()

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onOpenChange(true)
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      onOpenChange(true)
    }
  }

  return (
    <button
      ref={triggerRef}
      type="button"
      role="button"
      aria-haspopup="menu"
      aria-expanded={open}
      aria-controls={open ? contentId : undefined}
      onClick={() => onOpenChange(!open)}
      onKeyDown={handleKeyDown}
      data-state={open ? 'open' : 'closed'}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── Menu.Content ─────────────────────────────────────────
interface ContentProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

function Content({ children, className, ...props }: ContentProps) {
  const { open, onOpenChange, contentId, activeIndex, setActiveIndex, triggerRef, contentRef } =
    useMenuContext()

  // Outside click and ESC handling
  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e: globalThis.MouseEvent) => {
      const target = e.target as Node
      if (
        contentRef.current &&
        !contentRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        onOpenChange(false)
        triggerRef.current?.focus()
      }
    }

    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onOpenChange, triggerRef, contentRef])

  // Auto-focus first item on open
  useEffect(() => {
    if (open) {
      setActiveIndex(0)
      setTimeout(() => {
        const items = contentRef.current?.querySelectorAll<HTMLElement>(
          '[role="menuitem"]:not([aria-disabled="true"])'
        )
        items?.[0]?.focus()
      }, 0)
    }
  }, [open, setActiveIndex, contentRef])

  // Arrow key navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const items = contentRef.current?.querySelectorAll<HTMLElement>(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )
    if (!items || items.length === 0) return

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault()
        const next = activeIndex < items.length - 1 ? activeIndex + 1 : 0
        setActiveIndex(next)
        items[next]?.focus()
        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        const prev = activeIndex > 0 ? activeIndex - 1 : items.length - 1
        setActiveIndex(prev)
        items[prev]?.focus()
        break
      }
      case 'Home': {
        e.preventDefault()
        setActiveIndex(0)
        items[0]?.focus()
        break
      }
      case 'End': {
        e.preventDefault()
        const last = items.length - 1
        setActiveIndex(last)
        items[last]?.focus()
        break
      }
      case 'Tab': {
        onOpenChange(false)
        break
      }
    }
  }

  if (!open) return null

  return createPortal(
    <div
      ref={contentRef}
      id={contentId}
      role="menu"
      aria-orientation="vertical"
      data-state={open ? 'open' : 'closed'}
      onKeyDown={handleKeyDown}
      className={className}
      {...props}
    >
      {children}
    </div>,
    document.body
  )
}

// ─── Menu.Item ────────────────────────────────────────────
interface ItemProps extends ComponentPropsWithoutRef<'div'> {
  disabled?: boolean
  onSelect?: () => void
  children: ReactNode
}

function Item({ disabled = false, onSelect, children, className, onClick, ...props }: ItemProps) {
  const { onOpenChange } = useMenuContext()

  const handleClick = () => {
    if (disabled) return
    onSelect?.()
    onOpenChange(false)
    onClick?.({} as React.MouseEvent<HTMLDivElement>)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      data-disabled={disabled ? '' : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── Menu.Separator ───────────────────────────────────────
interface SeparatorProps extends ComponentPropsWithoutRef<'div'> {}

function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={className}
      {...props}
    />
  )
}

// ─── Export ───────────────────────────────────────────────
export const Menu = {
  Root,
  Trigger,
  Content,
  Item,
  Separator,
}
