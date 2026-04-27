import {
  useState,
  useCallback,
  type ComponentPropsWithoutRef,
} from 'react'

// ─── Toggle.Root ──────────────────────────────────────────
interface RootProps extends ComponentPropsWithoutRef<'button'> {
  defaultPressed?: boolean
  pressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  disabled?: boolean
}

/**
 * Headless Toggle (Switch) component.
 *
 * Uses role="switch" and aria-checked to communicate
 * on/off state to screen readers.
 */
function Root({
  defaultPressed = false,
  pressed: controlledPressed,
  onPressedChange,
  disabled = false,
  children,
  className,
  ...props
}: RootProps) {
  const [uncontrolledPressed, setUncontrolledPressed] = useState(defaultPressed)

  const isControlled = controlledPressed !== undefined
  const pressed = isControlled ? controlledPressed : uncontrolledPressed

  const handleToggle = useCallback(() => {
    if (disabled) return
    const next = !pressed
    if (!isControlled) {
      setUncontrolledPressed(next)
    }
    onPressedChange?.(next)
  }, [disabled, pressed, isControlled, onPressedChange])

  return (
    <button
      type="button"
      role="switch"
      aria-checked={pressed}
      disabled={disabled}
      onClick={handleToggle}
      data-state={pressed ? 'on' : 'off'}
      data-disabled={disabled ? '' : undefined}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── Export ───────────────────────────────────────────────
export const Toggle = {
  Root,
}
