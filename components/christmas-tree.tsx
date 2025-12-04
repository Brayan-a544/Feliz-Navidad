"use client"

export function ChristmasTree() {
  return (
    <div className="relative w-32 h-40 md:w-40 md:h-52">
      <svg viewBox="0 0 100 130" className="w-full h-full">
        {/* Star on top */}
        <polygon points="50,0 53,12 65,12 55,20 60,32 50,24 40,32 45,20 35,12 47,12" fill="#FFD700" className="glow" />

        {/* Tree layers */}
        <polygon points="50,20 75,50 25,50" fill="#1a5f2a" />
        <polygon points="50,35 80,70 20,70" fill="#1e6b30" />
        <polygon points="50,50 85,95 15,95" fill="#227536" />

        {/* Tree trunk */}
        <rect x="42" y="95" width="16" height="20" fill="#5c3d2e" />

        {/* Ornaments */}
        <circle cx="40" cy="45" r="3" fill="#ff4444" className="twinkle" />
        <circle cx="60" cy="48" r="3" fill="#FFD700" className="twinkle" style={{ animationDelay: "0.3s" }} />
        <circle cx="35" cy="65" r="3" fill="#4488ff" className="twinkle" style={{ animationDelay: "0.6s" }} />
        <circle cx="65" cy="62" r="3" fill="#ff4444" className="twinkle" style={{ animationDelay: "0.9s" }} />
        <circle cx="50" cy="55" r="3" fill="#FFD700" className="twinkle" style={{ animationDelay: "0.2s" }} />
        <circle cx="30" cy="85" r="4" fill="#ff4444" className="twinkle" style={{ animationDelay: "0.5s" }} />
        <circle cx="50" cy="78" r="3" fill="#4488ff" className="twinkle" style={{ animationDelay: "0.8s" }} />
        <circle cx="70" cy="82" r="4" fill="#FFD700" className="twinkle" style={{ animationDelay: "0.4s" }} />
        <circle cx="42" cy="90" r="3" fill="#4488ff" className="twinkle" style={{ animationDelay: "0.7s" }} />
        <circle cx="58" cy="88" r="3" fill="#ff4444" className="twinkle" style={{ animationDelay: "1s" }} />

        {/* Garland/tinsel lines */}
        <path d="M30 60 Q50 55 70 60" stroke="#FFD700" strokeWidth="1" fill="none" opacity="0.6" />
        <path d="M25 80 Q50 75 75 80" stroke="#FFD700" strokeWidth="1" fill="none" opacity="0.6" />
      </svg>
    </div>
  )
}
