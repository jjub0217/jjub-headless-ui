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
interface AccordionContextValue {
  value: string[]
  onToggle: (itemValue: string) => void
  type: 'single' | 'multiple'
  collapsible: boolean
  orientation: 'horizontal' | 'vertical'
  baseId: string
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within Accordion.Root.')
  }
  return context
}

// ─── Item Context ─────────────────────────────────────────
interface ItemContextValue {
  value: string
  isOpen: boolean
  disabled: boolean
  triggerId: string
  contentId: string
}

const ItemContext = createContext<ItemContextValue | null>(null)

function useItemContext() {
  const context = useContext(ItemContext)
  if (!context) {
    throw new Error('Accordion.Trigger and Accordion.Content must be used within Accordion.Item.')
  }
  return context
}

// ─── Accordion.Root ───────────────────────────────────────
interface SingleRootProps {
  type: 'single'
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  collapsible?: boolean
}

interface MultipleRootProps {
  type: 'multiple'
  defaultValue?: string[]
  value?: string[]
  onValueChange?: (value: string[]) => void
  collapsible?: never
}

type RootProps = (SingleRootProps | MultipleRootProps) & {
  orientation?: 'horizontal' | 'vertical'
  disabled?: boolean
  children: ReactNode
  className?: string
}

function Root(props: RootProps) {
  const {
    type,
    orientation = 'vertical',
    disabled = false,
    children,
    className,
  } = props

  const baseId = useId()

  const [singleValue, setSingleValue] = useState<string>(
    type === 'single' ? ((props as SingleRootProps).defaultValue ?? '') : ''
  )
  const [multipleValue, setMultipleValue] = useState<string[]>(
    type === 'multiple' ? ((props as MultipleRootProps).defaultValue ?? []) : []
  )

  const collapsible = type === 'single' ? ((props as SingleRootProps).collapsible ?? false) : true

  const getCurrentValue = (): string[] => {
    if (type === 'single') {
      const controlled = (props as SingleRootProps).value
      const val = controlled !== undefined ? controlled : singleValue
      return val ? [val] : []
    } else {
      const controlled = (props as MultipleRootProps).value
      return controlled !== undefined ? controlled : multipleValue
    }
  }

  const value = getCurrentValue()

  const onToggle = useCallback(
    (itemValue: string) => {
      if (disabled) return

      if (type === 'single') {
        const singleProps = props as SingleRootProps
        const isControlled = singleProps.value !== undefined
        const currentVal = isControlled ? singleProps.value : singleValue

        if (currentVal === itemValue) {
          if (collapsible) {
            if (!isControlled) setSingleValue('')
            singleProps.onValueChange?.('')
          }
        } else {
          if (!isControlled) setSingleValue(itemValue)
          singleProps.onValueChange?.(itemValue)
        }
      } else {
        const multipleProps = props as MultipleRootProps
        const isControlled = multipleProps.value !== undefined
        const currentVal = isControlled ? multipleProps.value! : multipleValue

        const newValue = currentVal.includes(itemValue)
          ? currentVal.filter((v) => v !== itemValue)
          : [...currentVal, itemValue]

        if (!isControlled) setMultipleValue(newValue)
        multipleProps.onValueChange?.(newValue)
      }
    },
    [type, props, singleValue, multipleValue, collapsible, disabled]
  )

  return (
    <AccordionContext.Provider value={{ value, onToggle, type, collapsible, orientation, baseId }}>
      <div className={className} data-orientation={orientation}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

// ─── Accordion.Item ───────────────────────────────────────
interface ItemProps extends ComponentPropsWithoutRef<'div'> {
  value: string
  disabled?: boolean
  children: ReactNode
}

function Item({ value: itemValue, disabled = false, children, className, ...itemProps }: ItemProps) {
  const { value, baseId } = useAccordionContext()
  const isOpen = value.includes(itemValue)

  return (
    <ItemContext.Provider
      value={{
        value: itemValue,
        isOpen,
        disabled,
        triggerId: `${baseId}-trigger-${itemValue}`,
        contentId: `${baseId}-content-${itemValue}`,
      }}
    >
      <div
        data-state={isOpen ? 'open' : 'closed'}
        data-disabled={disabled ? '' : undefined}
        className={className}
        {...itemProps}
      >
        {children}
      </div>
    </ItemContext.Provider>
  )
}

// ─── Accordion.Header ─────────────────────────────────────
interface HeaderProps extends ComponentPropsWithoutRef<'h3'> {
  children: ReactNode
}

function Header({ children, className, ...headerProps }: HeaderProps) {
  return (
    <h3 className={className} {...headerProps}>
      {children}
    </h3>
  )
}

// ─── Accordion.Trigger ────────────────────────────────────
interface TriggerProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

function Trigger({ children, className, ...triggerProps }: TriggerProps) {
  const { onToggle, orientation } = useAccordionContext()
  const { value, isOpen, disabled, triggerId, contentId } = useItemContext()
  const triggerRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    if (!disabled) {
      onToggle(value)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const isVertical = orientation === 'vertical'
    const prevKey = isVertical ? 'ArrowUp' : 'ArrowLeft'
    const nextKey = isVertical ? 'ArrowDown' : 'ArrowRight'

    const triggers = triggerRef.current
      ?.closest('[data-orientation]')
      ?.querySelectorAll<HTMLButtonElement>('button[aria-expanded]:not([disabled])')

    if (!triggers || triggers.length === 0) return

    const currentIndex = Array.from(triggers).indexOf(triggerRef.current!)
    let nextIndex: number | null = null

    switch (e.key) {
      case nextKey:
        nextIndex = (currentIndex + 1) % triggers.length
        break
      case prevKey:
        nextIndex = (currentIndex - 1 + triggers.length) % triggers.length
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = triggers.length - 1
        break
      default:
        return
    }

    e.preventDefault()
    triggers[nextIndex].focus()
  }

  return (
    <button
      ref={triggerRef}
      type="button"
      id={triggerId}
      aria-expanded={isOpen}
      aria-controls={contentId}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      data-state={isOpen ? 'open' : 'closed'}
      data-disabled={disabled ? '' : undefined}
      className={className}
      {...triggerProps}
    >
      {children}
    </button>
  )
}

// ─── Accordion.Content ────────────────────────────────────
interface ContentProps extends ComponentPropsWithoutRef<'div'> {
  forceMount?: boolean
  children: ReactNode
}

function Content({ forceMount = false, children, className, style, ...contentProps }: ContentProps) {
  const { isOpen, triggerId, contentId } = useItemContext()

  return (
    <div
      role="region"
      id={contentId}
      aria-labelledby={triggerId}
      aria-hidden={!isOpen}
      data-state={isOpen ? 'open' : 'closed'}
      className={className}
      style={{
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows 400ms cubic-bezier(0.87, 0, 0.13, 1)',
        ...style,
      }}
      {...contentProps}
    >
      <div style={{ overflow: 'hidden', minHeight: 0 }}>
        {children}
      </div>
    </div>
  )
}

// ─── Export ───────────────────────────────────────────────
export const Accordion = {
  Root,
  Item,
  Header,
  Trigger,
  Content,
}
