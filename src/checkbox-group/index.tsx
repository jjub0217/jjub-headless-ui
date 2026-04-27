import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
  type ComponentPropsWithoutRef,
} from 'react'

// ─── Context ──────────────────────────────────────────────
interface CheckboxGroupContextValue {
  value: string[]
  onToggle: (optionValue: string) => void
  disabled: boolean
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null)

function useCheckboxGroupContext() {
  const context = useContext(CheckboxGroupContext)
  if (!context) {
    throw new Error('CheckboxGroup components must be used within CheckboxGroup.Root.')
  }
  return context
}

// ─── CheckboxGroup.Root ───────────────────────────────────
interface RootProps extends ComponentPropsWithoutRef<'div'> {
  defaultValue?: string[]
  value?: string[]
  onValueChange?: (value: string[]) => void
  disabled?: boolean
  children: ReactNode
}

function Root({
  defaultValue = [],
  value: controlledValue,
  onValueChange,
  disabled = false,
  children,
  className,
  ...props
}: RootProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const onToggle = useCallback(
    (optionValue: string) => {
      if (disabled) return

      const newValue = value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue]

      if (!isControlled) {
        setUncontrolledValue(newValue)
      }
      onValueChange?.(newValue)
    },
    [disabled, value, isControlled, onValueChange]
  )

  return (
    <CheckboxGroupContext.Provider value={{ value, onToggle, disabled }}>
      <div
        role="group"
        aria-labelledby={props['aria-labelledby']}
        className={className}
        {...props}
      >
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  )
}

// ─── CheckboxGroup.Option ─────────────────────────────────
interface OptionProps extends ComponentPropsWithoutRef<'button'> {
  value: string
  disabled?: boolean
  children: ReactNode
}

function Option({ value: optionValue, disabled: optionDisabled = false, children, className, ...props }: OptionProps) {
  const { value, onToggle, disabled: groupDisabled } = useCheckboxGroupContext()
  const isChecked = value.includes(optionValue)
  const isDisabled = groupDisabled || optionDisabled

  const handleClick = () => {
    if (!isDisabled) {
      onToggle(optionValue)
    }
  }

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={isChecked}
      disabled={isDisabled}
      onClick={handleClick}
      data-state={isChecked ? 'checked' : 'unchecked'}
      data-disabled={isDisabled ? '' : undefined}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── CheckboxGroup.Indicator ──────────────────────────────
interface IndicatorProps extends ComponentPropsWithoutRef<'span'> {
  children?: ReactNode
}

function Indicator({ children, className, ...props }: IndicatorProps) {
  return (
    <span aria-hidden="true" className={className} {...props}>
      {children}
    </span>
  )
}

// ─── Export ───────────────────────────────────────────────
export const CheckboxGroup = {
  Root,
  Option,
  Indicator,
}
