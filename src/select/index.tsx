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
interface SelectContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
  value: string
  onValueChange: (value: string) => void
  activeIndex: number
  setActiveIndex: (index: number) => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
  baseId: string
}

const SelectContext = createContext<SelectContextValue | null>(null)

function useSelectContext() {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error('Select components must be used within Select.Root.')
  }
  return context
}

// ─── Select.Root ──────────────────────────────────────────
interface RootProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  children: ReactNode
}

function Root({ defaultValue = '', value: controlledValue, onValueChange, children }: RootProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const baseId = useId()

  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const handleValueChange = useCallback(
    (newValue: string) => {
      if (!isControlled) {
        setUncontrolledValue(newValue)
      }
      onValueChange?.(newValue)
      setOpen(false)
    },
    [isControlled, onValueChange]
  )

  return (
    <SelectContext.Provider
      value={{
        open,
        onOpenChange: setOpen,
        value,
        onValueChange: handleValueChange,
        activeIndex,
        setActiveIndex,
        triggerRef,
        baseId,
      }}
    >
      {children}
    </SelectContext.Provider>
  )
}

// ─── Select.Trigger ───────────────────────────────────────
interface TriggerProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

function Trigger({ children, className, ...props }: TriggerProps) {
  const { open, onOpenChange, triggerRef, baseId } = useSelectContext()

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault()
      onOpenChange(true)
    }
  }

  return (
    <button
      ref={triggerRef}
      type="button"
      role="combobox"
      aria-expanded={open}
      aria-haspopup="listbox"
      aria-controls={`${baseId}-listbox`}
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

// ─── Select.Value ─────────────────────────────────────────
interface ValueProps {
  placeholder?: string
  children?: ReactNode
}

function Value({ placeholder, children }: ValueProps) {
  const { value } = useSelectContext()

  if (!value && placeholder) {
    return <span data-placeholder="">{placeholder}</span>
  }

  return <span>{children ?? value}</span>
}

// ─── Select.Content ───────────────────────────────────────
interface ContentProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

function Content({ children, className, ...props }: ContentProps) {
  const { open, onOpenChange, triggerRef, baseId, activeIndex, setActiveIndex } = useSelectContext()
  const contentRef = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e: globalThis.MouseEvent) => {
      const target = e.target as Node
      if (
        contentRef.current && !contentRef.current.contains(target) &&
        triggerRef.current && !triggerRef.current.contains(target)
      ) {
        onOpenChange(false)
      }
    }

    const handleEscape = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open, onOpenChange, triggerRef])

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const options = contentRef.current?.querySelectorAll<HTMLDivElement>('[role="option"]:not([aria-disabled="true"])')
    if (!options || options.length === 0) return

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault()
        const next = activeIndex < options.length - 1 ? activeIndex + 1 : 0
        setActiveIndex(next)
        options[next]?.scrollIntoView({ block: 'nearest' })
        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        const prev = activeIndex > 0 ? activeIndex - 1 : options.length - 1
        setActiveIndex(prev)
        options[prev]?.scrollIntoView({ block: 'nearest' })
        break
      }
      case 'Home': {
        e.preventDefault()
        setActiveIndex(0)
        options[0]?.scrollIntoView({ block: 'nearest' })
        break
      }
      case 'End': {
        e.preventDefault()
        const last = options.length - 1
        setActiveIndex(last)
        options[last]?.scrollIntoView({ block: 'nearest' })
        break
      }
      case 'Enter':
      case ' ': {
        e.preventDefault()
        if (activeIndex >= 0 && activeIndex < options.length) {
          options[activeIndex]?.click()
        }
        break
      }
    }
  }

  // Reset activeIndex and auto-focus on open
  useEffect(() => {
    if (open) {
      setActiveIndex(0)
      // Auto-focus the listbox when opened
      setTimeout(() => contentRef.current?.focus(), 0)
    }
  }, [open, setActiveIndex])

  if (!open) return null

  // Get active option id for aria-activedescendant
  const options = contentRef.current?.querySelectorAll<HTMLDivElement>('[role="option"]:not([aria-disabled="true"])')
  const activeOptionId = options && activeIndex >= 0 && activeIndex < options.length
    ? options[activeIndex]?.id
    : undefined

  return createPortal(
    <div
      ref={contentRef}
      role="listbox"
      id={`${baseId}-listbox`}
      tabIndex={0}
      aria-activedescendant={activeOptionId}
      onKeyDown={handleKeyDown}
      className={className}
      {...props}
    >
      {children}
    </div>,
    document.body
  )
}

// ─── Select.Option ────────────────────────────────────────
interface OptionProps extends ComponentPropsWithoutRef<'div'> {
  value: string
  disabled?: boolean
  children: ReactNode
}

function Option({ value: optionValue, disabled = false, children, className, ...props }: OptionProps) {
  const { value, onValueChange, baseId } = useSelectContext()
  const isSelected = value === optionValue

  const handleClick = () => {
    if (!disabled) {
      onValueChange(optionValue)
    }
  }

  return (
    <div
      role="option"
      id={`${baseId}-option-${optionValue}`}
      aria-selected={isSelected}
      aria-disabled={disabled}
      onClick={handleClick}
      data-state={isSelected ? 'checked' : 'unchecked'}
      data-disabled={disabled ? '' : undefined}
      data-value={optionValue}
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── Export ───────────────────────────────────────────────
export const Select = {
  Root,
  Trigger,
  Value,
  Content,
  Option,
}
