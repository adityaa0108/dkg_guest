"use client";

import React from "react";

const BACKGROUND_IMAGES = [
  { id: 1, src: "/images/Background.png", alt: "Celebration" },
  { id: 2, src: "/images/Background (1).png", alt: "Celebration" },
  { id: 3, src: "/images/Background (2).png", alt: "Celebration" },
  { id: 4, src: "/images/Background (3).png", alt: "Celebration" },
  { id: 5, src: "/images/Background (4).png", alt: "Celebration" },
];

export default function WelcomeToDKGPro() {
  return (
    <section className="w-full max-w-[95vw] sm:max-w-[92vw] mx-auto my-12 sm:my-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Images - pill-shaped row */}
        <div className="flex gap-3 sm:gap-4 justify-center items-center flex-wrap px-4 sm:px-6 pt-8 sm:pt-10">
          {BACKGROUND_IMAGES.map((img) => (
            <div
              key={img.id}
              className="flex-1 min-w-0 rounded-[9999px] overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="block w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Text content */}
        <div className="text-center px-4 sm:px-6 pt-6 sm:pt-8 pb-8 sm:pb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#9B49C5] mb-3">
            Welcome To DKG Pro
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8">
            we are thrilled to offer a range of exceptional decoration services
            tailored to elevate your space.
          </p>

          {/* BOOK A CALL button */}
          <a
            href="#"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base tracking-wider uppercase transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #F9A8D4 0%, #C084FC 100%)",
            }}
          >
            BOOK A CALL
          </a>
        </div>
      </div>
    </section>
  );
}
