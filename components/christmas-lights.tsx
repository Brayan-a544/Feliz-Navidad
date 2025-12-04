"use client"

import { useEffect, useState } from "react"

export function ChristmasLights() {
  const [lights, setLights] = useState<{ id: number; color: string; delay: number }[]>([])

  useEffect(() => {
    const colors = ["#ff4444", "#44ff44", "#4444ff", "#FFD700", "#ff44ff"]
    const lightArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      delay: i * 0.15,
    }))
    setLights(lightArray)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
      {/* Wire */}
      <svg className="w-full h-16" viewBox="0 0 100 10" preserveAspectRatio="none">
        <path
          d="M0 5 Q5 8 10 5 Q15 2 20 5 Q25 8 30 5 Q35 2 40 5 Q45 8 50 5 Q55 2 60 5 Q65 8 70 5 Q75 2 80 5 Q85 8 90 5 Q95 2 100 5"
          stroke="#1a1a1a"
          strokeWidth="0.3"
          fill="none"
        />
      </svg>

      {/* Lights */}
      <div className="absolute top-2 left-0 right-0 flex justify-between px-4">
        {lights.map((light) => (
          <div
            key={light.id}
            className="w-3 h-4 md:w-4 md:h-5 rounded-b-full twinkle"
            style={{
              backgroundColor: light.color,
              boxShadow: `0 0 10px ${light.color}, 0 0 20px ${light.color}`,
              animationDelay: `${light.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
