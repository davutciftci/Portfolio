import { useEffect, useState } from 'react'

/**
 * Heavy canvas/GSAP animations mount after idle so FCP/LCP paint first.
 * Respects prefers-reduced-motion (no deferred load — static UI stays).
 */
export function useDeferredEffects(): boolean {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const run = () => setShow(true)
    let idleId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(run, { timeout: 2000 })
    } else {
      timeoutId = window.setTimeout(run, 200)
    }

    return () => {
      if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
  }, [])

  return show
}
