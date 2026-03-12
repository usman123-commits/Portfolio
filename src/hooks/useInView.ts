'use client'
import { useEffect, useRef, useState } from 'react'

export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'none'

export function useInView(
  threshold = 0.15,
  direction: AnimationDirection = 'up'
) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  const getTransform = () => {
    if (inView) return 'translate(0, 0)'
    switch (direction) {
      case 'up':    return 'translate(0, 40px)'
      case 'down':  return 'translate(0, -40px)'
      case 'left':  return 'translate(-60px, 0)'
      case 'right': return 'translate(60px, 0)'
      case 'none':  return 'translate(0, 0)'
      default:      return 'translate(0, 40px)'
    }
  }

  const animationStyle = {
    opacity: inView ? 1 : 0,
    transform: getTransform(),
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  }

  return { ref, inView, animationStyle }
}
