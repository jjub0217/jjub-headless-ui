import { useEffect } from 'react'

/**
 * Locks body scroll when active.
 * Restores original overflow style on cleanup.
 */
export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [active])
}
