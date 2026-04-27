import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
  type KeyboardEvent,
  type ComponentPropsWithoutRef,
} from 'react'

// ─── Context ──────────────────────────────────────────────
interface ToolbarContextValue {
  orientation: 'horizontal' | 'vertical'
}

const ToolbarContext = createContext<ToolbarContextValue | null>(null)

function useToolbarContext() {
  const context = useContext(ToolbarContext)
  if (!context) {
    throw new Error('Toolbar components must be used within Toolbar.Root.')
  }
  return context
}

// ─── ToggleGroup Context ───────────────────────────────────
interface ToggleGroupContextValue {
  value: string
  onValueChange: (value: string) => void
}

const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(null)

function useToggleGroupContext() {
  const context = useContext(ToggleGroupContext)
  if (!context) {
    throw new Error('Toolbar.ToggleItem must be used within Toolbar.ToggleGroup.')
  }
  return context
}

// ─── Toolbar.Root ─────────────────────────────────────────
interface RootProps extends ComponentPropsWithoutRef<'div'> {
  orientation?: 'horizontal' | 'vertical'
  'aria-label'?: string
  children: ReactNode
}

function Root({
  orientation = 'horizontal',
  'aria-label': ariaLabel,
  children,
  className,
  ...props
}: RootProps) {
  const toolbarRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const isHorizontal = orientation === 'horizontal'
    const prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp'
    const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown'

    if (![prevKey, nextKey, 'Home', 'End'].includes(e.key)) return

    // Collect all focusable toolbar items (buttons and links not disabled)
    const items = toolbarRef.current?.querySelectorAll<HTMLElement>(
      '[role="toolbar"] > button:not([disabled]), [role="toolbar"] > a, [role="toolbar"] > [role="group"] button:not([disabled])'
    )
    if (!items || items.length === 0) return

    // Flatten: include only items directly under toolbar or within groups
    const allItems = toolbarRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]):not([tabindex="-1"]), a:not([disabled])'
    )
    if (!allItems || allItems.length === 0) return

    const focusableItems = Array.from(allItems)
    const currentIndex = focusableItems.findIndex((item) => item === document.activeElement)
    if (currentIndex === -1) return

    let nextIndex: number

    switch (e.key) {
      case nextKey:
        nextIndex = (currentIndex + 1) % focusableItems.length
        break
      case prevKey:
        nextIndex = (currentIndex - 1 + focusableItems.length) % focusableItems.length
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = focusableItems.length - 1
        break
      default:
        return
    }

    e.preventDefault()
    focusableItems[nextIndex].focus()
  }

  return (
    <ToolbarContext.Provider value={{ orientation }}>
      <div
        ref={toolbarRef}
        role="toolbar"
        aria-label={ariaLabel}
        aria-orientation={orientation}
        onKeyDown={handleKeyDown}
        className={className}
        data-orientation={orientation}
        {...props}
      >
        {children}
      </div>
    </ToolbarContext.Provider>
  )
}

// ─── Toolbar.Button ───────────────────────────────────────
interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  disabled?: boolean
  children: ReactNode
}

function Button({ disabled = false, children, className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      data-disabled={disabled ? '' : undefined}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── Toolbar.Separator ────────────────────────────────────
interface SeparatorProps extends ComponentPropsWithoutRef<'div'> {
  orientation?: 'horizontal' | 'vertical'
}

function Separator({ orientation, className, ...props }: SeparatorProps) {
  const { orientation: toolbarOrientation } = useToolbarContext()
  // Separator is perpendicular to the toolbar orientation
  const separatorOrientation = orientation ?? (toolbarOrientation === 'horizontal' ? 'vertical' : 'horizontal')

  return (
    <div
      role="separator"
      aria-orientation={separatorOrientation}
      data-orientation={separatorOrientation}
      className={className}
      {...props}
    />
  )
}

// ─── Toolbar.ToggleGroup ──────────────────────────────────
interface ToggleGroupProps extends ComponentPropsWithoutRef<'div'> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  'aria-label'?: string
  children: ReactNode
}

function ToggleGroup({
  value: controlledValue,
  defaultValue = '',
  onValueChange,
  'aria-label': ariaLabel,
  children,
  className,
  ...props
}: ToggleGroupProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)

  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const handleValueChange = useCallback(
    (newValue: string) => {
      if (!isControlled) {
        setUncontrolledValue(newValue)
      }
      onValueChange?.(newValue)
    },
    [isControlled, onValueChange]
  )

  return (
    <ToggleGroupContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div
        role="group"
        aria-label={ariaLabel}
        className={className}
        {...props}
      >
        {children}
      </div>
    </ToggleGroupContext.Provider>
  )
}

// ─── Toolbar.ToggleItem ───────────────────────────────────
interface ToggleItemProps extends ComponentPropsWithoutRef<'button'> {
  value: string
  disabled?: boolean
  children: ReactNode
}

function ToggleItem({ value: itemValue, disabled = false, children, className, ...props }: ToggleItemProps) {
  const { value, onValueChange } = useToggleGroupContext()
  const isPressed = value === itemValue

  const handleClick = () => {
    if (!disabled) {
      // Toggle off if already selected, otherwise select
      onValueChange(isPressed ? '' : itemValue)
    }
  }

  return (
    <button
      type="button"
      aria-pressed={isPressed}
      disabled={disabled}
      onClick={handleClick}
      data-state={isPressed ? 'on' : 'off'}
      data-disabled={disabled ? '' : undefined}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── Export ───────────────────────────────────────────────
export const Toolbar = {
  Root,
  Button,
  Separator,
  ToggleGroup,
  ToggleItem,
}
