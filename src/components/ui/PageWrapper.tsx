'use client'
import { useEffect, useState } from 'react'

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  
  return (
    <div className={`transition-all duration-700 ease-out
      ${mounted 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-6'
      }`}
    >
      {children}
    </div>
  )
}
