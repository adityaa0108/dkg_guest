'use client';

import Image from 'next/image';

export default function FrameImageSection() {
  return (
    <section className="w-full mt-6 lg:mt-8">
      <div className="relative w-full">
        <Image
          src="/images/Frame%202147224890.png"
          alt="Decoration"
          width={1920}
          height={600}
          className="w-full h-auto object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}
