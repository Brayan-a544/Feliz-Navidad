"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const newStars = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient aurora */}
      <div className="aurora-container absolute inset-0">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
      </div>

      {/* Twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white star-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      <div className="shooting-star" style={{ top: "20%", animationDelay: "0s" }} />
      <div className="shooting-star" style={{ top: "40%", animationDelay: "3s" }} />
      <div className="shooting-star" style={{ top: "60%", animationDelay: "6s" }} />
    </div>
  )
}
