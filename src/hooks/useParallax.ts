'use client'
import { useEffect, useRef, useState } from 'react'

export function useParallax(speed: number = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) 
      return
      
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerY = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      setOffset((centerY - viewportCenter) * speed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}
