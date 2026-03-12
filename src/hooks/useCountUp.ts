'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Counts a number from 0 to `target` over `duration` ms when `active` becomes true.
 * Returns the current display value (rounded integer).
 */
export function useCountUp(target: number, duration = 1500, active = false) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!active) return
    const startTime = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [active, target, duration])

  return count
}
