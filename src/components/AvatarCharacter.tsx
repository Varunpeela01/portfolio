import React, { useState } from 'react';

interface AvatarCharacterProps {
  mouseOffset?: { x: number; y: number };
}

export const AvatarCharacter: React.FC<AvatarCharacterProps> = () => {
  const [glassesGlow, setGlassesGlow] = useState(true);

  return (
    <div
      className="relative flex flex-col items-center justify-center select-none group cursor-pointer"
      onClick={() => setGlassesGlow(!glassesGlow)}
      title="Click to toggle visor illumination"
    >
      {/* Ambient electric blue & cyan aura behind avatar */}
      <div className="absolute -top-6 h-52 w-52 rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent blur-3xl pointer-events-none" />

      {/* 3D Stylized Character SVG Illustration - Scaled to balanced proportions */}
      <div className="relative w-44 aspect-[320/360] sm:w-52 transition-transform duration-300 ease-out group-hover:scale-105">
        <svg
          viewBox="0 0 320 360"
          className="w-full h-full drop-shadow-[0_16px_32px_rgba(56,189,248,0.2)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Skin Shading Gradients */}
            <radialGradient id="faceGrad" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#FFDFC4" />
              <stop offset="65%" stopColor="#F5B895" />
              <stop offset="100%" stopColor="#D98A62" />
            </radialGradient>

            <linearGradient id="skinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C87A52" />
              <stop offset="100%" stopColor="#9C5230" />
            </linearGradient>

            {/* Hair Gradients */}
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#322822" />
              <stop offset="50%" stopColor="#1B1410" />
              <stop offset="100%" stopColor="#0B0907" />
            </linearGradient>

            {/* Glowing Blue/Cyan Rim Light */}
            <linearGradient id="rimLightBlue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>

            {/* T-Shirt Gradient */}
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E2430" />
              <stop offset="70%" stopColor="#131720" />
              <stop offset="100%" stopColor="#0A0D14" />
            </linearGradient>

            {/* Glowing Electric Cyan Glasses Gradient */}
            <linearGradient id="glassesGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            {/* Filter for neon glowing glasses */}
            <filter id="neonGlowBlue" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* BACK HAIR VOLUME */}
          <path
            d="M95 125 C80 180 88 230 110 240 C125 240 195 240 210 240 C232 230 240 180 225 125 Z"
            fill="url(#hairGrad)"
          />

          {/* SHOULDERS & UPPER BODY */}
          <path
            d="M60 360 C55 315 75 275 110 260 L210 260 C245 275 265 315 260 360 Z"
            fill="url(#shirtGrad)"
          />

          {/* Subtle Electric Blue Rim Lighting on Shoulders */}
          <path
            d="M60 360 C55 315 75 275 110 260"
            stroke="url(#rimLightBlue)"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M260 360 C265 315 245 275 210 260"
            stroke="url(#rimLightBlue)"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* T-SHIRT BRANDING TEXT */}
          <text
            x="160"
            y="312"
            textAnchor="middle"
            fill="#EAEAEA"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="900"
            fontSize="18"
            letterSpacing="3"
            opacity="0.92"
          >
            DESIGNER
          </text>
          <text
            x="160"
            y="325"
            textAnchor="middle"
            fill="#38BDF8"
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="600"
            fontSize="7"
            letterSpacing="2"
            opacity="0.95"
          >
            VARUN PEELA · 2025
          </text>

          {/* FOLDED ARMS & HANDS OVER CHEST */}
          <g>
            <path
              d="M78 355 C90 320 130 330 170 338 C195 342 225 345 235 360"
              fill="#161B24"
              stroke="#0E1219"
              strokeWidth="2"
            />
            <path
              d="M242 355 C230 320 185 330 145 338 C120 342 90 345 85 360"
              fill="#141822"
              stroke="#0E1219"
              strokeWidth="2"
            />
            <rect x="200" y="338" width="16" height="8" rx="2" fill="#202A3C" transform="rotate(-15 200 338)" />
            <line x1="202" y1="342" x2="214" y2="339" stroke="#38BDF8" strokeWidth="1.2" />
          </g>

          {/* NECK */}
          <path d="M138 230 L138 266 C138 274 182 274 182 266 L182 230 Z" fill="url(#skinShadow)" />
          <path d="M142 232 C150 248 170 248 178 232 Z" fill="#E89F78" />

          {/* HEAD / JAW SHAPE */}
          <path
            d="M106 145 C106 220 120 246 160 246 C200 246 214 220 214 145 C214 90 200 75 160 75 C120 75 106 90 106 145 Z"
            fill="url(#faceGrad)"
          />

          {/* EARS */}
          <path d="M102 152 C94 152 94 176 104 178 Z" fill="#EFA581" />
          <path d="M218 152 C226 152 226 176 216 178 Z" fill="#EFA581" />

          {/* BEARD & MUSTACHE */}
          <path
            d="M122 178 C122 226 136 248 160 248 C184 248 198 226 198 178 C194 195 186 206 178 206 C170 206 166 198 160 198 C154 198 150 206 142 206 C134 206 126 195 122 178 Z"
            fill="#211711"
          />
          <path
            d="M140 196 C148 192 156 196 160 200 C164 196 172 192 180 196 C174 204 164 206 160 206 C156 206 146 204 140 196 Z"
            fill="#1B120B"
          />
          <path d="M148 208 C154 216 166 216 172 208" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

          {/* NOSE */}
          <path d="M157 165 C155 178 153 182 160 183 C167 182 165 178 163 165" stroke="#D98A62" strokeWidth="3" strokeLinecap="round" />

          {/* EYES & EYEBROWS */}
          <path d="M125 136 C132 131 144 133 148 137" stroke="#18110A" strokeWidth="4" strokeLinecap="round" />
          <path d="M195 136 C188 131 176 133 172 137" stroke="#18110A" strokeWidth="4" strokeLinecap="round" />

          <ellipse cx="137" cy="148" rx="7" ry="7.5" fill="#1A120B" />
          <circle cx="139" cy="146" r="2.2" fill="#FFFFFF" />
          <ellipse cx="183" cy="148" rx="7" ry="7.5" fill="#1A120B" />
          <circle cx="185" cy="146" r="2.2" fill="#FFFFFF" />

          {/* GLOWING CYAN/BLUE GLASSES */}
          <g filter={glassesGlow ? 'url(#neonGlowBlue)' : undefined}>
            <rect
              x="120"
              y="134"
              width="36"
              height="28"
              rx="8"
              fill="rgba(56, 189, 248, 0.12)"
              stroke="url(#glassesGradBlue)"
              strokeWidth="4"
            />
            <rect
              x="164"
              y="134"
              width="36"
              height="28"
              rx="8"
              fill="rgba(56, 189, 248, 0.12)"
              stroke="url(#glassesGradBlue)"
              strokeWidth="4"
            />
            <path d="M156 144 C158 141 162 141 164 144" stroke="url(#glassesGradBlue)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M120 142 L104 146" stroke="url(#glassesGradBlue)" strokeWidth="3" strokeLinecap="round" />
            <path d="M200 142 L216 146" stroke="url(#glassesGradBlue)" strokeWidth="3" strokeLinecap="round" />
            <line x1="126" y1="138" x2="148" y2="158" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="170" y1="138" x2="192" y2="158" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* HAIR POMPADOUR */}
          <path
            d="M102 128 C98 90 115 54 150 48 C175 44 200 52 216 75 C228 92 225 118 220 135 C215 110 205 92 185 86 C165 80 140 82 125 96 C115 106 108 116 102 128 Z"
            fill="url(#hairGrad)"
          />
          <path
            d="M135 60 C160 52 190 60 205 82"
            stroke="url(#rimLightBlue)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      </div>
    </div>
  );
};
