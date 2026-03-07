'use client';

import Image from 'next/image';
import { User } from 'lucide-react';

const EVENT_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    hasOverlay: true,
    reviewer: { name: 'John Doe', title: 'CEO, XYZ Corp' },
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop',
    hasOverlay: false,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop',
    hasOverlay: false,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    hasOverlay: false,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop',
    hasOverlay: false,
  },
];

const REVIEWS = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, XYZ Corp',
    quote:
      'Working with this team was an absolute pleasure. Their expertise and commitment to excellence helped us achieve results beyond our expectations. Highly recommended!',
  },
  {
    id: 2,
    name: 'John Doe',
    title: 'CEO, XYZ Corp',
    quote:
      'Working with this team was an absolute pleasure. Their expertise and commitment to excellence helped us achieve results beyond our expectations. Highly recommended!',
  },
  {
    id: 3,
    name: 'John Doe',
    title: 'CEO, XYZ Corp',
    quote:
      'Working with this team was an absolute pleasure. Their expertise and commitment to excellence helped us achieve results beyond our expectations. Highly recommended!',
  },
  {
    id: 4,
    name: 'John Doe',
    title: 'CEO, XYZ Corp',
    quote:
      'Working with this team was an absolute pleasure. Their expertise and commitment to excellence helped us achieve results beyond our expectations. Highly recommended!',
  },
];

export default function ReviewsSection() {
  return (
    <div className="mt-12 lg:mt-16 overflow-hidden">
      <div className="bg-[#FAF5F9] rounded-2xl p-6 lg:p-8 border border-purple-100/50 overflow-hidden">
        <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-6 uppercase tracking-tight">
          Reviews
        </h2>

        {/* Event Image Gallery - horizontally scrollable, significantly rounded corners */}
        <div
          className="customize-scroll overflow-x-auto pb-4 mb-8 -mx-4 px-4 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex gap-4">
            {EVENT_IMAGES.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-72 h-52 lg:w-80 lg:h-56 rounded-2xl overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={`Event ${item.id}`}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
                {item.hasOverlay && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 45%, transparent 75%)',
                    }}
                    aria-hidden
                  />
                )}
                {item.hasOverlay && item.reviewer && (
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{item.reviewer.name}</p>
                        <p className="text-white/90 text-xs">{item.reviewer.title}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Customer Review Cards - subtle rounded corners, light border/shadow */}
        <div className="space-y-4">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg p-6 border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100/80 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-purple-500" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500 mb-3">{review.title}</p>
                  <p className="text-gray-600 leading-relaxed text-[15px]">{review.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
