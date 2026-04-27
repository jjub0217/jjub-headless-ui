import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useId,
  type ReactNode,
  type KeyboardEvent,
  type ComponentPropsWithoutRef,
} from 'react'

// ─── Context ──────────────────────────────────────────────
interface RadioGroupContextValue {
  value: string
  onValueChange: (value: string) => void
  name: string
  disabled: boolean
  orientation: 'horizontal' | 'vertical'
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

function useRadioGroupContext() {
  const context = useContext(RadioGroupContext)
  if (!context) {
    throw new Error('RadioGroup components must be used within RadioGroup.Root.')
  }
  return context
}

// ─── RadioGroup.Root ──────────────────────────────────────
interface RootProps extends ComponentPropsWithoutRef<'div'> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  name?: string
  disabled?: boolean
  orientation?: 'horizontal' | 'vertical'
  children: ReactNode
}

function Root({
  defaultValue = '',
  value: controlledValue,
  onValueChange,
  name,
  disabled = false,
  orientation = 'vertical',
  children,
  className,
  ...props
}: RootProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const generatedName = useId()

  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const handleValueChange = useCallback(
    (newValue: string) => {
      if (disabled) return
      if (!isControlled) {
        setUncontrolledValue(newValue)
      }
      onValueChange?.(newValue)
    },
    [disabled, isControlled, onValueChange]
  )

  const rootRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const isVertical = orientation === 'vertical'
    const prevKey = isVertical ? 'ArrowUp' : 'ArrowLeft'
    const nextKey = isVertical ? 'ArrowDown' : 'ArrowRight'

    if (![prevKey, nextKey, 'Home', 'End'].includes(e.key)) return

    const options = rootRef.current?.querySelectorAll<HTMLButtonElement>('[role="radio"]:not([disabled])')
    if (!options || options.length === 0) return

    const currentIndex = Array.from(options).findIndex((opt) => opt === document.activeElement)
    let nextIndex: number

    switch (e.key) {
      case nextKey:
        nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0
        break
      case prevKey:
        nextIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = options.length - 1
        break
      default:
        return
    }

    e.preventDefault()
    const nextOption = options[nextIndex]
    nextOption.focus()
    const optionValue = nextOption.getAttribute('data-value')
    if (optionValue) {
      handleValueChange(optionValue)
    }
  }

  return (
    <RadioGroupContext.Provider
      value={{
        value,
        onValueChange: handleValueChange,
        name: name ?? generatedName,
        disabled,
        orientation,
      }}
    >
      <div
        ref={rootRef}
        role="radiogroup"
        aria-orientation={orientation}
        onKeyDown={handleKeyDown}
        className={className}
        {...props}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

// ─── RadioGroup.Option ────────────────────────────────────
interface OptionProps extends ComponentPropsWithoutRef<'button'> {
  value: string
  disabled?: boolean
  children: ReactNode
}

function Option({ value: optionValue, disabled: optionDisabled = false, children, className, ...props }: OptionProps) {
  const { value, onValueChange, disabled: groupDisabled } = useRadioGroupContext()
  const isSelected = value === optionValue
  const isDisabled = groupDisabled || optionDisabled

  const handleClick = () => {
    if (!isDisabled) {
      onValueChange(optionValue)
    }
  }

  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      disabled={isDisabled}
      tabIndex={isSelected ? 0 : -1}
      onClick={handleClick}
      data-state={isSelected ? 'checked' : 'unchecked'}
      data-disabled={isDisabled ? '' : undefined}
      data-value={optionValue}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── RadioGroup.Indicator ─────────────────────────────────
interface IndicatorProps extends ComponentPropsWithoutRef<'span'> {
  children?: ReactNode
}

function Indicator({ children, className, ...props }: IndicatorProps) {
  const context = useContext(RadioGroupContext)
  if (!context) {
    throw new Error('RadioGroup.Indicator must be used within RadioGroup.Root.')
  }

  // Decorative element — use parent button's data-state for CSS styling
  return (
    <span
      aria-hidden="true"
      className={className}
      {...props}
    >
      {children}
    </span>
  )
}

// ─── Export ───────────────────────────────────────────────
export const RadioGroup = {
  Root,
  Option,
  Indicator,
}
