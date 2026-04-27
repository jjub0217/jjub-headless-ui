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
  type CompositionEvent,
} from 'react'

// ─── Context ──────────────────────────────────────────────
interface TagInputContextValue {
  tags: string[]
  addTag: (tag: string) => void
  removeTag: (index: number) => void
  removeLastTag: () => void
  inputId: string
  maxTags?: number
  disabled: boolean
}

const TagInputContext = createContext<TagInputContextValue | null>(null)

function useTagInputContext() {
  const context = useContext(TagInputContext)
  if (!context) {
    throw new Error('TagInput components must be used within TagInput.Root.')
  }
  return context
}

// ─── TagInput.Root ────────────────────────────────────────
interface RootProps {
  defaultValue?: string[]
  value?: string[]
  onValueChange?: (value: string[]) => void
  maxTags?: number
  disabled?: boolean
  children: ReactNode
  className?: string
}

function Root({
  defaultValue = [],
  value: controlledValue,
  onValueChange,
  maxTags,
  disabled = false,
  children,
  className,
}: RootProps) {
  const [uncontrolledTags, setUncontrolledTags] = useState<string[]>(defaultValue)
  const inputId = useId()

  const isControlled = controlledValue !== undefined
  const tags = isControlled ? controlledValue : uncontrolledTags

  const addTag = useCallback(
    (tag: string) => {
      const trimmed = tag.trim()
      if (!trimmed || disabled) return
      if (maxTags !== undefined && tags.length >= maxTags) return
      if (tags.includes(trimmed)) return

      const newTags = [...tags, trimmed]
      if (!isControlled) setUncontrolledTags(newTags)
      onValueChange?.(newTags)
    },
    [tags, isControlled, onValueChange, maxTags, disabled]
  )

  const removeTag = useCallback(
    (index: number) => {
      if (disabled) return
      const newTags = tags.filter((_, i) => i !== index)
      if (!isControlled) setUncontrolledTags(newTags)
      onValueChange?.(newTags)
    },
    [tags, isControlled, onValueChange, disabled]
  )

  const removeLastTag = useCallback(() => {
    if (disabled || tags.length === 0) return
    const newTags = tags.slice(0, -1)
    if (!isControlled) setUncontrolledTags(newTags)
    onValueChange?.(newTags)
  }, [tags, isControlled, onValueChange, disabled])

  return (
    <TagInputContext.Provider value={{ tags, addTag, removeTag, removeLastTag, inputId, maxTags, disabled }}>
      <div
        className={className}
        data-disabled={disabled ? '' : undefined}
        aria-disabled={disabled || undefined}
      >
        {children}
      </div>
    </TagInputContext.Provider>
  )
}

// ─── TagInput.Input ───────────────────────────────────────
interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'value' | 'defaultValue'> {
  placeholder?: string
}

function Input({ placeholder, className, ...props }: InputProps) {
  const { addTag, removeLastTag, inputId, maxTags, tags, disabled } = useTagInputContext()
  const [inputValue, setInputValue] = useState('')
  // Track IME composition to avoid adding tags mid-composition (e.g. Korean input)
  const isComposingRef = useRef(false)

  const isAtMax = maxTags !== undefined && tags.length >= maxTags

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isComposingRef.current) {
      e.preventDefault()
      if (inputValue.trim()) {
        addTag(inputValue)
        setInputValue('')
      }
    }
    if (e.key === 'Backspace' && inputValue === '') {
      e.preventDefault()
      removeLastTag()
    }
  }

  const handleCompositionStart = (_e: CompositionEvent<HTMLInputElement>) => {
    isComposingRef.current = true
  }

  const handleCompositionEnd = (e: CompositionEvent<HTMLInputElement>) => {
    isComposingRef.current = false
    setInputValue(e.currentTarget.value)
  }

  return (
    <input
      {...props}
      id={inputId}
      type="text"
      role="combobox"
      aria-autocomplete="list"
      aria-expanded={false}
      aria-label={props['aria-label'] ?? 'Add tag'}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      placeholder={isAtMax ? undefined : placeholder}
      disabled={disabled || isAtMax}
      data-at-max={isAtMax ? '' : undefined}
      className={className}
    />
  )
}

// ─── TagInput.Tag ─────────────────────────────────────────
interface TagProps extends ComponentPropsWithoutRef<'span'> {
  value: string
  index: number
  children: ReactNode
}

function Tag({ value, index, children, className, ...props }: TagProps) {
  return (
    <span
      role="listitem"
      aria-label={`태그: ${value}`}
      data-tag-index={index}
      className={className}
      {...props}
    >
      {children}
    </span>
  )
}

// ─── TagInput.Remove ──────────────────────────────────────
interface RemoveProps extends ComponentPropsWithoutRef<'button'> {
  index: number
  children?: ReactNode
}

function Remove({ index, children, className, ...props }: RemoveProps) {
  const { removeTag, disabled } = useTagInputContext()

  return (
    <button
      {...props}
      type="button"
      aria-label="태그 삭제"
      onClick={() => removeTag(index)}
      disabled={disabled}
      data-disabled={disabled ? '' : undefined}
      className={className}
    >
      {children ?? '×'}
    </button>
  )
}

// ─── Export ───────────────────────────────────────────────
export const TagInput = {
  Root,
  Input,
  Tag,
  Remove,
}
