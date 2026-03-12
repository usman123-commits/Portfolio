'use client'
import { useEffect, useRef, useState } from 'react'

interface ParallaxTransform {
  translateY: number
  rotateX: number
  rotateZ: number
}

export function useParallax(speed: number = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState<ParallaxTransform>({
    translateY: 0,
    rotateX: 0,
    rotateZ: 0,
  })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) 
      return
    if (window.innerWidth < 768) return

    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // How far element is from center of viewport (-1 to 1)
      const centerY = rect.top + rect.height / 2
      const distanceFromCenter = (centerY - viewportHeight / 2) / viewportHeight
      
      // translateY — same as before
      const translateY = distanceFromCenter * speed * viewportHeight * 0.3
      
      // rotateX — tilts forward/back as element enters from bottom
      // Max 4 degrees, settles to 0 when centered
      const rotateX = distanceFromCenter * 4
      
      // rotateZ — very subtle lean (max 1.5 degrees)
      const rotateZ = distanceFromCenter * 1.5

      setTransform({ translateY, rotateX, rotateZ })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  // Return both ref and a ready-to-use style object
  const style = {
    transform: `
      perspective(1000px)
      translateY(${transform.translateY}px)
      rotateX(${transform.rotateX}deg)
      rotateZ(${transform.rotateZ}deg)
    `,
    transition: 'transform 0.1s ease-out',
    willChange: 'transform',
  }

  return { ref, style }
}
