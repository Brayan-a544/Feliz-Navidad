"use client"

import { useState, useEffect } from "react"
import { Snowfall } from "./snowfall"
import { ChristmasTree } from "./christmas-tree"
import { Reindeer } from "./reindeer"
import { TypewriterText } from "./typewriter-text"
import { ChristmasLights } from "./christmas-lights"
import { AnimatedBackground } from "./animated-background"

export function ChristmasCard() {
  const [showContent, setShowContent] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const letterContent = [
    "I hope this holiday season brings you endless joy, warmth, and all the wonderful things you deserve.",
    "May the coming year be filled with prosperity, success, and beautiful moments that make your heart smile.",
    "Wishing you peace, love, and happiness not just during this festive season, but throughout all the days ahead.",
    "May your dreams come true and your path be illuminated with hope and endless possibilities.",
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#1a2744] to-[#0d1a2d]">
      <AnimatedBackground />
      <Snowfall />
      <ChristmasLights />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Header decoration */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-4">
            <span className="text-[#FFD700] text-3xl glow">&#10022;</span>
            <h1 className="font-sans text-2xl md:text-4xl text-[#FFD700] tracking-wider glow">Merry Christmas</h1>
            <span className="text-[#FFD700] text-3xl glow">&#10022;</span>
          </div>
        </div>

        {/* Main card with entrance animation */}
        <div className="w-full max-w-4xl mx-auto mt-16 card-entrance">
          <div className="relative bg-[#1a2744]/70 backdrop-blur-md rounded-3xl border border-[#FFD700]/30 p-8 md:p-12 shadow-2xl">
            {/* Animated corner decorations */}
            <div className="absolute top-4 left-4 w-10 h-10 border-l-3 border-t-3 border-[#c41e3a] rounded-tl-lg pulse-soft" />
            <div
              className="absolute top-4 right-4 w-10 h-10 border-r-3 border-t-3 border-[#c41e3a] rounded-tr-lg pulse-soft"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute bottom-4 left-4 w-10 h-10 border-l-3 border-b-3 border-[#c41e3a] rounded-bl-lg pulse-soft"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-4 right-4 w-10 h-10 border-r-3 border-b-3 border-[#c41e3a] rounded-br-lg pulse-soft"
              style={{ animationDelay: "1.5s" }}
            />

            {/* Greeting with typewriter effect */}
            <div className="text-center mb-8">
              {showContent && (
                <TypewriterText
                  text="Dear Edgar Emmanuel,"
                  className="font-sans text-4xl md:text-6xl text-[#c41e3a] font-bold"
                  onComplete={() => setTypingComplete(true)}
                />
              )}
            </div>

            {/* Letter content with staggered fade-in */}
            <div
              className={`space-y-6 transition-all duration-1000 ${typingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              {letterContent.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-serif text-lg md:text-xl text-white/90 leading-relaxed text-center fade-in-up"
                  style={{
                    animationDelay: `${index * 0.4}s`,
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Decorations row with improved animations */}
            <div
              className={`flex items-end justify-center gap-12 md:gap-20 mt-12 transition-all duration-1000 delay-500 ${typingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="float" style={{ animationDelay: "0.5s" }}>
                <Reindeer />
              </div>
              <div className="float" style={{ animationDelay: "0s" }}>
                <ChristmasTree />
              </div>
            </div>

            {/* Signature with glow effect */}
            <div
              className={`text-center mt-12 transition-all duration-1000 delay-700 ${typingComplete ? "opacity-100" : "opacity-0"}`}
            >
              <p className="font-sans text-2xl md:text-3xl text-[#FFD700] glow">With warmest wishes,</p>
              <p className="font-sans text-xl text-white/60 mt-2">Season&apos;s Greetings 2024</p>
            </div>
          </div>
        </div>

        {/* Bottom snowflake decorations */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <span className="text-2xl text-[#c41e3a] twinkle">&#10052;</span>
          <span className="text-3xl text-[#FFD700] twinkle" style={{ animationDelay: "0.3s" }}>
            &#10052;
          </span>
          <span className="text-2xl text-[#228b22] twinkle" style={{ animationDelay: "0.6s" }}>
            &#10052;
          </span>
        </div>
      </div>
    </div>
  )
}
