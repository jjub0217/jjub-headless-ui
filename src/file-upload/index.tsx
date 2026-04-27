import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useId,
  type ReactNode,
  type DragEvent,
  type ComponentPropsWithoutRef,
} from 'react'

// ─── Types ─────────────────────────────────────────────────
export interface UploadedFile {
  file: File
  previewUrl: string | null
  id: string
}

// ─── Hook ─────────────────────────────────────────────────
interface UseFileUploadOptions {
  multiple?: boolean
  accept?: string[]
  maxSize?: number // bytes
  maxFiles?: number
}

export function useFileUpload(options: UseFileUploadOptions = {}) {
  const { multiple = true, accept, maxSize, maxFiles } = options
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [errors, setErrors] = useState<string[]>([])

  const validate = useCallback(
    (file: File): string | null => {
      if (accept && accept.length > 0) {
        const isAccepted = accept.some((type) => {
          if (type.endsWith('/*')) {
            return file.type.startsWith(type.slice(0, -1))
          }
          return file.type === type || file.name.endsWith(type.replace('*', ''))
        })
        if (!isAccepted) return `File type not accepted: ${file.type}`
      }
      if (maxSize !== undefined && file.size > maxSize) {
        return `File too large: ${file.name} (max ${maxSize} bytes)`
      }
      return null
    },
    [accept, maxSize]
  )

  const addFiles = useCallback(
    (incoming: File[]) => {
      const newErrors: string[] = []
      const newFiles: UploadedFile[] = []

      for (const file of incoming) {
        if (maxFiles !== undefined && files.length + newFiles.length >= maxFiles) {
          newErrors.push(`Maximum ${maxFiles} file(s) allowed`)
          break
        }
        const error = validate(file)
        if (error) {
          newErrors.push(error)
          continue
        }
        const previewUrl = file.type.startsWith('image/') ? URL.createObjectURL(file) : null
        newFiles.push({ file, previewUrl, id: `${Date.now()}-${Math.random()}` })
      }

      setErrors(newErrors)
      setFiles((prev) => (multiple ? [...prev, ...newFiles] : newFiles.slice(0, 1)))
    },
    [files.length, maxFiles, multiple, validate]
  )

  const removeFile = useCallback((id: string) => {
    setFiles((prev) => {
      const target = prev.find((f) => f.id === id)
      if (target?.previewUrl) URL.revokeObjectURL(target.previewUrl)
      return prev.filter((f) => f.id !== id)
    })
  }, [])

  const clearFiles = useCallback(() => {
    setFiles((prev) => {
      prev.forEach((f) => { if (f.previewUrl) URL.revokeObjectURL(f.previewUrl) })
      return []
    })
    setErrors([])
  }, [])

  return { files, errors, addFiles, removeFile, clearFiles }
}

// ─── Context ──────────────────────────────────────────────
interface FileUploadContextValue {
  files: UploadedFile[]
  addFiles: (files: File[]) => void
  removeFile: (id: string) => void
  inputId: string
  multiple: boolean
  accept?: string
  disabled: boolean
  isDragging: boolean
  setIsDragging: (v: boolean) => void
}

const FileUploadContext = createContext<FileUploadContextValue | null>(null)

function useFileUploadContext() {
  const context = useContext(FileUploadContext)
  if (!context) {
    throw new Error('FileUpload components must be used within FileUpload.Root.')
  }
  return context
}

// ─── FileUpload.Root ──────────────────────────────────────
interface RootProps {
  files: UploadedFile[]
  addFiles: (files: File[]) => void
  removeFile: (id: string) => void
  multiple?: boolean
  accept?: string
  disabled?: boolean
  children: ReactNode
  className?: string
}

function Root({
  files,
  addFiles,
  removeFile,
  multiple = true,
  accept,
  disabled = false,
  children,
  className,
}: RootProps) {
  const inputId = useId()
  const [isDragging, setIsDragging] = useState(false)

  return (
    <FileUploadContext.Provider value={{ files, addFiles, removeFile, inputId, multiple, accept, disabled, isDragging, setIsDragging }}>
      <div
        className={className}
        data-disabled={disabled ? '' : undefined}
      >
        {children}
      </div>
    </FileUploadContext.Provider>
  )
}

// ─── FileUpload.Dropzone ──────────────────────────────────
interface DropzoneProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}

function Dropzone({ children, className, ...props }: DropzoneProps) {
  const { addFiles, inputId, disabled, isDragging, setIsDragging } = useFileUploadContext()

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (!disabled) setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    if (disabled) return
    const droppedFiles = Array.from(e.dataTransfer.files)
    if (droppedFiles.length > 0) addFiles(droppedFiles)
  }

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label="파일을 드래그하거나 클릭하여 업로드"
      aria-disabled={disabled || undefined}
      aria-live="polite"
      data-state={isDragging ? 'dragging' : 'idle'}
      data-disabled={disabled ? '' : undefined}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => {
        if (!disabled) document.getElementById(inputId)?.click()
      }}
      onKeyDown={(e) => {
        if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          document.getElementById(inputId)?.click()
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── FileUpload.Input ─────────────────────────────────────
interface FileInputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'onChange' | 'multiple' | 'accept' | 'id'> {}

function FileUploadInput({ className, ...props }: FileInputProps) {
  const { addFiles, inputId, multiple, accept, disabled } = useFileUploadContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = useCallback(() => {
    const input = inputRef.current
    if (!input?.files) return
    addFiles(Array.from(input.files))
    // Reset so same file can be re-selected
    input.value = ''
  }, [addFiles])

  return (
    <input
      {...props}
      ref={inputRef}
      id={inputId}
      type="file"
      multiple={multiple}
      accept={accept}
      disabled={disabled}
      onChange={handleChange}
      aria-hidden="true"
      tabIndex={-1}
      className={className}
      style={{ display: 'none' }}
    />
  )
}

// ─── FileUpload.Preview ───────────────────────────────────
interface PreviewProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactNode
}

function Preview({ children, className, ...props }: PreviewProps) {
  return (
    <ul role="list" aria-label="업로드된 파일 목록" className={className} {...props}>
      {children}
    </ul>
  )
}

// ─── FileUpload.Item ──────────────────────────────────────
interface ItemProps extends ComponentPropsWithoutRef<'li'> {
  file: UploadedFile
  children: ReactNode
}

function Item({ file, children, className, ...props }: ItemProps) {
  return (
    <li
      role="listitem"
      aria-label={file.file.name}
      data-file-id={file.id}
      className={className}
      {...props}
    >
      {children}
    </li>
  )
}

// ─── Export ───────────────────────────────────────────────
export const FileUpload = {
  Root,
  Dropzone,
  Input: FileUploadInput,
  Preview,
  Item,
}
