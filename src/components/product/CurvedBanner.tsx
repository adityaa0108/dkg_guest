'use client';

import Image from 'next/image';
import Link from 'next/link';

const BANNER_ITEMS = [
  {
    id: 'photography',
    label: 'PHOTOGRAPHY',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop',
    href: '/photography',
  },
  {
    id: 'catering',
    label: 'CATERING SERVICE',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop',
    href: '/catering',
  },
  {
    id: 'games',
    label: 'GAMES & ACTIVITIES',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
    href: '/games-activities',
  },
  {
    id: 'effects',
    label: 'SPECIAL EFFECTS',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop',
    href: '/special-effects',
  },
];

const PANEL_CLIP_PATHS = [
  'polygon(0 0, 100% 0, 92% 100%, 0 100%)', // first: diagonal right
  'polygon(8% 0, 100% 0, 92% 100%, 0 100%)', // middle: diagonal both
  'polygon(8% 0, 100% 0, 92% 100%, 0 100%)', // middle: diagonal both
  'polygon(8% 0, 100% 0, 100% 100%, 0 100%)', // last: diagonal left only
];

export default function CurvedBanner() {
  return (
    <div className="w-full overflow-hidden rounded-2xl">
      <div className="flex">
        {BANNER_ITEMS.map((item, index) => (
          <Link
            key={item.id}
            href={item.href}
            className={`group relative flex-1 min-w-0 overflow-hidden ${
              index > 0 ? '-ml-[8%]' : ''
            }`}
            style={{
              clipPath: PANEL_CLIP_PATHS[index],
            }}
          >
            {/* Image section */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Gradient band with label - magenta to purple */}
            <div
              className="relative flex items-center justify-center py-4 px-4"
              style={{
                background: 'linear-gradient(90deg, #D946EF 0%, #A855F7 50%, #7C3AED 100%)',
              }}
            >
              <span className="text-white text-sm lg:text-base font-bold uppercase tracking-wide">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
