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
interface TabsContextValue {
  value: string
  onValueChange: (value: string) => void
  orientation: 'horizontal' | 'vertical'
  activationMode: 'automatic' | 'manual'
  baseId: string
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within Tabs.Root.')
  }
  return context
}

// ─── Tabs.Root ────────────────────────────────────────────
interface RootProps {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  orientation?: 'horizontal' | 'vertical'
  activationMode?: 'automatic' | 'manual'
  children: ReactNode
  className?: string
}

function Root({
  defaultValue,
  value: controlledValue,
  onValueChange,
  orientation = 'horizontal',
  activationMode = 'automatic',
  children,
  className,
}: RootProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? '')
  const baseId = useId()

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
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange, orientation, activationMode, baseId }}>
      <div className={className} data-orientation={orientation}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

// ─── Tabs.List ────────────────────────────────────────────
interface ListProps extends ComponentPropsWithoutRef<'div'> {
  loop?: boolean
  children: ReactNode
}

function List({ loop = true, children, className, ...props }: ListProps) {
  const { orientation } = useTabsContext()
  const listRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const tabs = listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])')
    if (!tabs || tabs.length === 0) return

    const currentIndex = Array.from(tabs).findIndex((tab) => tab === document.activeElement)
    if (currentIndex === -1) return

    const isHorizontal = orientation === 'horizontal'
    const prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp'
    const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown'

    let nextIndex: number | null = null

    switch (e.key) {
      case nextKey:
        nextIndex = loop ? (currentIndex + 1) % tabs.length : Math.min(currentIndex + 1, tabs.length - 1)
        break
      case prevKey:
        nextIndex = loop ? (currentIndex - 1 + tabs.length) % tabs.length : Math.max(currentIndex - 1, 0)
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = tabs.length - 1
        break
      default:
        return
    }

    e.preventDefault()
    tabs[nextIndex].focus()
  }

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-orientation={orientation}
      onKeyDown={handleKeyDown}
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── Tabs.Tab ─────────────────────────────────────────────
interface TabProps extends ComponentPropsWithoutRef<'button'> {
  value: string
  disabled?: boolean
  children: ReactNode
}

function Tab({ value: tabValue, disabled = false, children, className, ...props }: TabProps) {
  const { value, onValueChange, activationMode, baseId } = useTabsContext()
  const isSelected = value === tabValue

  const handleClick = () => {
    if (!disabled) {
      onValueChange(tabValue)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (activationMode === 'manual' && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onValueChange(tabValue)
    }
  }

  const handleFocus = () => {
    if (activationMode === 'automatic' && !disabled) {
      onValueChange(tabValue)
    }
  }

  return (
    <button
      role="tab"
      type="button"
      id={`${baseId}-tab-${tabValue}`}
      aria-selected={isSelected}
      aria-controls={`${baseId}-panel-${tabValue}`}
      tabIndex={isSelected ? 0 : -1}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      className={className}
      data-state={isSelected ? 'active' : 'inactive'}
      data-disabled={disabled ? '' : undefined}
      {...props}
    >
      {children}
    </button>
  )
}

// ─── Tabs.Panel ───────────────────────────────────────────
interface PanelProps extends ComponentPropsWithoutRef<'div'> {
  value: string
  forceMount?: boolean
  children: ReactNode
}

function Panel({ value: panelValue, forceMount = false, children, className, ...props }: PanelProps) {
  const { value, baseId } = useTabsContext()
  const isSelected = value === panelValue

  if (!isSelected && !forceMount) {
    return null
  }

  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${panelValue}`}
      aria-labelledby={`${baseId}-tab-${panelValue}`}
      tabIndex={0}
      hidden={!isSelected}
      className={className}
      data-state={isSelected ? 'active' : 'inactive'}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── Export ───────────────────────────────────────────────
export const Tabs = {
  Root,
  List,
  Tab,
  Panel,
}
