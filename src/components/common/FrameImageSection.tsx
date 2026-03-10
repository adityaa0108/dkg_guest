'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import vector from "../../../public/component/vectors.svg";
import girl from "../../../public/component/girl.svg";
import stars from "../../../public/component/star.svg";
import boy from "../../../public/component/boy.svg";

export default function FrameImageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    // <section className="w-full mt-6 lg:mt-8">
    //   <div className="relative w-full">
    //     <Image
    //       src="/images/Frame%202147224890.png"
    //       alt="Decoration"
    //       width={1920}
    //       height={600}
    //       className="w-full h-auto object-cover object-center"
    //       priority
    //     />
    //   </div>
    // </section>
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center px-[2.53vw] pt-[25.63vw] pb-[13.02vw] bg-white"
    >

      {/* Wrapper */}
      <div className="relative w-full max-w-[100vw]">

        {/* Girl — slides in from the left */}
        <div
          className="absolute left-0 bottom-[10.5vw] z-20 translate-y-[-60%] transition-all duration-700 ease-out"
          style={{
            transform: `translateX(${isVisible ? "0px" : "-180px"}) translateY(-60%)`,
            opacity: isVisible ? 1 : 0,
            transitionDelay: "0ms",
          }}
        >
          <Image
            src={girl}
            alt="girl"
            width={220}
            height={280}
            className="object-contain"
          />
        </div>

        {/* Stars — fades + drops in from above */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-[29.82vw] z-20 translate-y-[-75%] transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            marginTop: isVisible ? "0px" : "-30px",
            transitionDelay: "200ms",
          }}
        >
          <Image
            src={stars}
            alt="stars"
            width={320}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Boy — slides in from the right */}
        <div
          className="absolute right-0 bottom-[10.5vw] z-20 translate-y-[-60%] transition-all duration-700 ease-out"
          style={{
            transform: `translateX(${isVisible ? "0px" : "180px"}) translateY(-60%)`,
            opacity: isVisible ? 1 : 0,
            transitionDelay: "0ms",
          }}
        >
          <Image
            src={boy}
            alt="boy"
            width={220}
            height={280}
            className="object-contain"
          />
        </div>

        {/* Main pink card */}
        <div
          className="relative w-full rounded-[2.5vw] bg-pink-100 overflow-hidden"
          style={{
            boxShadow: "0px 0px 120px 0px rgba(0,0,0,0.15)",
            outline: "2px solid rgba(236,72,153,0.20)",
            outlineOffset: "-2px",
            minHeight: "37.4vw",
          }}
        >

          {/* Vectors image */}
          <Image
            src={vector}
            alt="vectors"
            className="absolute inset-0 w-[95.39vw] h-[20.85vw] object-cover object-center mt-[13.45vw]"
            width={0}
            height={0}
          />

          {/* Card content */}
          <div className="relative z-10 flex flex-col items-center justify-start pt-[3.33vw] px-[1.25vw]">
            {/* Title */}
            <h2
              className="text-[2.6rem] font-extrabold text-center mb-[0.83vw] leading-tight bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent"
              
            >
              Kid&apos;s Theme Decoration
            </h2>

            {/* Subtitle */}
            <p
              className="text-center text-[1vw] font-semibold max-w-[38.02vw] leading-relaxed bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{ opacity: 0.85 }}
            >
              we are thrilled to offer a range of exceptional decoration
              services tailored to elevate your space.
            </p>
          </div>

        </div>

      </div>

      {/* SEE ALL button */}
      <div className="relative z-10 mt-[-1.46vw]">
        <button
          className="flex items-center gap-[0.42vw] border-2 border-pink-400 text-pink-500 bg-white hover:bg-pink-50 transition-colors duration-200 rounded-full px-[2.92vw] py-[0.83vw] text-[0.68vw] font-bold tracking-[0.13em] cursor-pointer shadow-sm"
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          SEE ALL <span>→</span>
        </button>
      </div>

    </section>
  );
}
