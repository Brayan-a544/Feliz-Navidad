"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
  onComplete?: () => void
}

export function TypewriterText({ text, className = "", speed = 100, onComplete }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timer)
    } else {
      onComplete?.()
      // Hide cursor after typing is complete
      const cursorTimer = setTimeout(() => setShowCursor(false), 1000)
      return () => clearTimeout(cursorTimer)
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <span className={className}>
      {displayedText}
      {showCursor && <span className="animate-pulse text-primary">|</span>}
    </span>
  )
}
