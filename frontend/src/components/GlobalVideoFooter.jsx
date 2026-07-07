import React from 'react';

export const GlobalVideoFooter = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0A0512] via-[#12071E] to-[#08020E] border-t border-[#D4A75F]/15 py-12 sm:py-16 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full border border-[#D4A75F] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Stretched Full-Size SVG */}
      <div className="w-full relative px-4 sm:px-8">
        <svg className="w-full h-auto select-none mx-auto" viewBox="0 0 1000 180" style={{ maxHeight: '220px' }}>
          <defs>
            <mask id="text-mask" x="0" y="0" width="100%" height="100%">
              <rect x="0" y="0" width="100%" height="100%" fill="black" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="115"
                fontWeight="950"
                fontFamily="'Outfit', 'Inter', sans-serif"
                letterSpacing="0.08em"
              >
                SS JEWELLERY
              </text>
            </mask>
          </defs>
          
          <foreignObject x="0" y="0" width="100%" height="100%" mask="url(#text-mask)">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/jewelry-showcase.mp4"
              style={{ filter: 'brightness(1.25) contrast(1.15)' }}
            />
          </foreignObject>

          {/* Golden outline framing to align with website brand color theme */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="none"
            stroke="#D4A75F"
            strokeWidth="0.8"
            strokeOpacity="0.85"
            fontSize="115"
            fontWeight="950"
            fontFamily="'Outfit', 'Inter', sans-serif"
            letterSpacing="0.08em"
            className="pointer-events-none"
          >
            SS JEWELLERY
          </text>
        </svg>
      </div>
    </footer>
  );
};
