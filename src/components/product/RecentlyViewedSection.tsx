'use client';

import Image from 'next/image';

const RECENTLY_VIEWED_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop', alt: 'Sparkler' },
  { id: 2, src: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=300&fit=crop', alt: 'Birthday cake' },
  { id: 3, src: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop', alt: 'Gift boxes' },
  { id: 4, src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop', alt: 'Sparklers' },
  { id: 5, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop', alt: 'Party' },
  { id: 6, src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop', alt: 'Event' },
];

export default function RecentlyViewedSection() {
  return (
    <div className="mt-12 lg:mt-16 overflow-hidden">
      <div className="bg-[#FAF5F9] rounded-2xl p-6 lg:p-8 border border-purple-100/50 overflow-hidden shadow-sm">
        <h2 className="text-[#582C4A] text-xl lg:text-2xl font-bold mb-6">Recently Viewed</h2>

        <div
          className="customize-scroll overflow-x-auto pb-4 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex gap-4">
            {RECENTLY_VIEWED_IMAGES.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-64 h-48 lg:w-72 lg:h-52 rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="288px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
