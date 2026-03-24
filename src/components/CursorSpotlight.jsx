import { useEffect, useState } from 'react'

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: -200, y: -200 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <div
      className="cursor-spotlight"
      style={{
        opacity: isVisible ? 0.08 : 0,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 212, 255, 0.6), rgba(168, 85, 247, 0.3) 40%, transparent 70%)`,
      }}
    />
  )
}
