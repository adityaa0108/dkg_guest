import React from 'react';

export default function CategoryBanner() {
  return (
    <div className="relative w-[95vw] h-[34.32vw] overflow-hidden rounded-[1.25vw] ml-[2.5vw] mr-[2.9vw] mt-[2.5vw]">
      {/* Background Image */}
      <div>
      <img
        src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1824&h=659&fit=crop"
        alt="Birthday party with cake and happy birthday candles"
        className="absolute inset-0 w-full h-full object-cover"
      />
      </div>
      {/* Gradient Overlay - Left to Right (Black to Transparent) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-[2.5vw] max-w-[35vw]">
        <h1 className="text-white text-[3.13vw] font-bold mb-[0.83vw] leading-tight">
          Minnie Mouse Themed Birthday Party
        </h1>
        <p className="text-white text-[0.94vw] opacity-90">
          Learn planning, coordination, and leadership skills to manage projects effectively.
        </p>
      </div>
    </div>
  );
}