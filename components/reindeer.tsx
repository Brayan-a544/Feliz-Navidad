"use client"

export function Reindeer() {
  return (
    <div className="relative w-32 h-40 md:w-40 md:h-48">
      <svg viewBox="0 0 120 150" className="w-full h-full">
        {/* Antlers with animation */}
        <g className="antlers">
          <path
            d="M35 35 L30 15 L25 22 M30 15 L22 12 M30 15 L35 8"
            stroke="#6B4423"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M85 35 L90 15 L95 22 M90 15 L98 12 M90 15 L85 8"
            stroke="#6B4423"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Ears */}
        <ellipse cx="30" cy="45" rx="10" ry="14" fill="#C4956A" />
        <ellipse cx="30" cy="45" rx="6" ry="9" fill="#E8C4A0" />
        <ellipse cx="90" cy="45" rx="10" ry="14" fill="#C4956A" />
        <ellipse cx="90" cy="45" rx="6" ry="9" fill="#E8C4A0" />

        {/* Head */}
        <ellipse cx="60" cy="55" rx="30" ry="28" fill="#C4956A" />

        {/* Face lighter area */}
        <ellipse cx="60" cy="65" rx="18" ry="14" fill="#E8C4A0" />

        {/* Eyes */}
        <g className="eyes">
          <ellipse cx="48" cy="50" rx="7" ry="8" fill="white" />
          <ellipse cx="72" cy="50" rx="7" ry="8" fill="white" />
          <circle cx="49" cy="51" r="4" fill="#2D1B0E" />
          <circle cx="73" cy="51" r="4" fill="#2D1B0E" />
          {/* Eye shine */}
          <circle cx="51" cy="49" r="1.5" fill="white" />
          <circle cx="75" cy="49" r="1.5" fill="white" />
        </g>

        {/* Eyebrows for expression */}
        <path d="M42 42 Q48 40 53 43" stroke="#6B4423" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M67 43 Q72 40 78 42" stroke="#6B4423" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Rudolph's glowing red nose */}
        <circle cx="60" cy="72" r="10" fill="#E63946" className="nose-glow" />
        <circle cx="60" cy="72" r="7" fill="#FF4757" />
        <ellipse cx="57" cy="69" rx="2.5" ry="2" fill="#FF8A8A" />

        {/* Smile */}
        <path d="M52 82 Q60 90 68 82" stroke="#6B4423" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Cheeks */}
        <circle cx="42" cy="68" r="5" fill="#FFAA9F" opacity="0.5" />
        <circle cx="78" cy="68" r="5" fill="#FFAA9F" opacity="0.5" />

        {/* Neck */}
        <ellipse cx="60" cy="95" rx="18" ry="12" fill="#C4956A" />

        {/* Body */}
        <ellipse cx="60" cy="115" rx="28" ry="22" fill="#C4956A" />
        <ellipse cx="60" cy="118" rx="20" ry="16" fill="#E8C4A0" />

        {/* Collar */}
        <path d="M38 95 Q60 105 82 95" stroke="#C41E3A" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Bell */}
        <circle cx="60" cy="105" r="7" fill="#FFD700" className="bell-swing" />
        <ellipse cx="60" cy="109" rx="4" ry="2" fill="#DAA520" />
        <circle cx="60" cy="108" r="2" fill="#B8860B" />

        {/* Front legs */}
        <rect x="42" y="130" width="10" height="18" rx="4" fill="#A0785A" />
        <rect x="68" y="130" width="10" height="18" rx="4" fill="#A0785A" />

        {/* Hooves */}
        <ellipse cx="47" cy="148" rx="6" ry="3" fill="#4A3728" />
        <ellipse cx="73" cy="148" rx="6" ry="3" fill="#4A3728" />

        {/* Tail */}
        <ellipse cx="88" cy="115" rx="6" ry="4" fill="#C4956A" className="tail-wag" />
      </svg>
    </div>
  )
}
