import {
  createContext,
  useContext,
  type ReactNode,
  type ComponentPropsWithoutRef,
} from 'react'

// ─── Context ──────────────────────────────────────────────
interface ProgressContextValue {
  value: number | null
  max: number
  percentage: number | null
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

function useProgressContext() {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('Progress components must be used within Progress.Root.')
  }
  return context
}

// ─── Progress.Root ────────────────────────────────────────
interface RootProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  /** Current progress value. Pass null for indeterminate state. */
  value?: number | null
  /** Maximum value (default: 100). */
  max?: number
  children: ReactNode
}

function Root({ value = null, max = 100, children, className, ...props }: RootProps) {
  const clampedValue = value !== null ? Math.min(Math.max(0, value), max) : null
  const percentage = clampedValue !== null ? Math.round((clampedValue / max) * 100) : null

  return (
    <ProgressContext.Provider value={{ value: clampedValue, max, percentage }}>
      <div
        role="progressbar"
        aria-valuenow={clampedValue ?? undefined}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={
          percentage !== null
            ? `${percentage}% progress`
            : 'Loading'
        }
        aria-valuetext={percentage !== null ? `${percentage}%` : undefined}
        data-state={percentage === 100 ? 'complete' : clampedValue === null ? 'indeterminate' : 'loading'}
        className={className}
        {...props}
      >
        {children}
      </div>
    </ProgressContext.Provider>
  )
}

// ─── Progress.Indicator ───────────────────────────────────
interface IndicatorProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}

function Indicator({ children, className, style, ...props }: IndicatorProps) {
  const { percentage } = useProgressContext()

  return (
    <div
      data-percentage={percentage ?? undefined}
      data-indeterminate={percentage === null ? '' : undefined}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── Export ───────────────────────────────────────────────
export const Progress = {
  Root,
  Indicator,
}
