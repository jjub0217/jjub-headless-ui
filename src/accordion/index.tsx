import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useId,
  useEffect,
  type ReactNode,
  type KeyboardEvent,
  type ComponentPropsWithoutRef,
  type CSSProperties,
} from 'react'
import { prepare, layout } from '@chenglou/pretext'

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

// ─── Accordion.PretextContent ─────────────────────────────
// Content와 같은 역할이지만 height transition을 Pretext로 계산.
// children이 string이면 Pretext가 텍스트 폭/높이를 산수로 측정 (forced reflow 0회).
// children이 JSX이면 DOM의 scrollHeight로 fallback 측정 (1회 reflow).
interface PretextContentProps extends ComponentPropsWithoutRef<'div'> {
  forceMount?: boolean
  /** Pretext가 layout 계산에 사용할 최대 너비. 미지정 시 컨테이너의 offsetWidth를 마운트 시 1회 측정. */
  maxWidth?: number
  /** 텍스트 wrapper(inner div)에 적용할 스타일. padding/font/color 등 텍스트 측정·렌더링에 영향을 주는 스타일은 여기에 둠. */
  innerStyle?: CSSProperties
  /** 텍스트 wrapper(inner div)에 적용할 className. */
  innerClassName?: string
  children: ReactNode
}

function PretextContent({
  forceMount = false,
  maxWidth,
  innerStyle,
  innerClassName,
  children,
  className,
  style,
  ...contentProps
}: PretextContentProps) {
  const { isOpen, triggerId, contentId } = useItemContext()
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    const targetWidth = maxWidth ?? container.offsetWidth
    const text = typeof children === 'string' ? children : null

    if (text !== null) {
      // Pretext path — string children
      const cs = getComputedStyle(inner)
      const font = cs.font
      const lineHeight = parseFloat(cs.lineHeight) || 22.4
      const paddingV =
        parseFloat(cs.paddingTop || '0') + parseFloat(cs.paddingBottom || '0')

      const handle = prepare(text, font)
      const result = layout(handle, targetWidth, lineHeight)
      setContentHeight(result.height + paddingV)
    } else {
      // DOM fallback — JSX children
      setContentHeight(inner.scrollHeight)
    }
  }, [children, maxWidth])

  return (
    <div
      ref={containerRef}
      role="region"
      id={contentId}
      aria-labelledby={triggerId}
      aria-hidden={!isOpen}
      data-state={isOpen ? 'open' : 'closed'}
      className={className}
      style={{
        overflow: 'hidden',
        height:
          isOpen && contentHeight !== null ? `${contentHeight}px` : '0px',
        transition: 'height 400ms cubic-bezier(0.87, 0, 0.13, 1)',
        ...style,
      }}
      {...contentProps}
    >
      <div ref={innerRef} className={innerClassName} style={innerStyle}>
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
  PretextContent,
}
