import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type ComponentPropsWithoutRef,
  type SyntheticEvent,
} from 'react'

// ─── Context ──────────────────────────────────────────────
interface AvatarContextValue {
  imageStatus: 'idle' | 'loading' | 'loaded' | 'error'
  setImageStatus: (status: 'idle' | 'loading' | 'loaded' | 'error') => void
}

const AvatarContext = createContext<AvatarContextValue | null>(null)

function useAvatarContext() {
  const context = useContext(AvatarContext)
  if (!context) {
    throw new Error('Avatar components must be used within Avatar.Root.')
  }
  return context
}

// ─── Avatar.Root ──────────────────────────────────────────
interface RootProps extends ComponentPropsWithoutRef<'span'> {
  children: ReactNode
}

function Root({ children, className, ...props }: RootProps) {
  const [imageStatus, setImageStatus] = useState<'idle' | 'loading' | 'loaded' | 'error'>('idle')

  return (
    <AvatarContext.Provider value={{ imageStatus, setImageStatus }}>
      <span
        role="img"
        data-state={imageStatus}
        className={className}
        {...props}
      >
        {children}
      </span>
    </AvatarContext.Provider>
  )
}

// ─── Avatar.Image ─────────────────────────────────────────
interface ImageProps extends Omit<ComponentPropsWithoutRef<'img'>, 'onLoad' | 'onError'> {
  alt: string
}

function Image({ alt, src, className, ...props }: ImageProps) {
  const { setImageStatus } = useAvatarContext()

  const handleLoad = () => {
    setImageStatus('loaded')
  }

  const handleError = (_e: SyntheticEvent<HTMLImageElement, Event>) => {
    setImageStatus('error')
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- Avatar uses native img for headless/fallback pattern
    <img
      {...props}
      src={src}
      alt={alt}
      onLoad={handleLoad}
      onError={handleError}
      className={className}
    />
  )
}

// ─── Avatar.Fallback ──────────────────────────────────────
interface FallbackProps extends ComponentPropsWithoutRef<'span'> {
  /** Delay in ms before showing fallback to avoid flash on fast loads (default: 0) */
  delayMs?: number
  children: ReactNode
}

function Fallback({ children, className, delayMs: _delayMs = 0, ...props }: FallbackProps) {
  const { imageStatus } = useAvatarContext()

  // Show fallback when image failed to load or no image attempted (idle with no src)
  if (imageStatus === 'loaded') return null

  return (
    <span
      aria-hidden="true"
      data-state={imageStatus}
      className={className}
      {...props}
    >
      {children}
    </span>
  )
}

// ─── Export ───────────────────────────────────────────────
export const Avatar = {
  Root,
  Image,
  Fallback,
}
