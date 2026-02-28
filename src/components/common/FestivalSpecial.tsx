// "use client";

// import React, { useRef } from "react";
// import { ChevronRight } from "lucide-react";

// const GALLERY_IMAGES = [
//   { id: 3, src: "/images/Image (3).png", alt: "Festival decoration" },
//   { id: 4, src: "/images/Image (4).png", alt: "Festival celebration" },
//   { id: 5, src: "/images/Image (5).png", alt: "Festival lights" },
//   { id: 6, src: "/images/Image (6).png", alt: "Festival colors" },
//   { id: 7, src: "/images/Image (3).png", alt: "Festival decoration" },
// ];

// export default function FestivalSpecial() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   return (
//     <section className="w-full max-w-[95vw] sm:max-w-[92vw] mx-auto my-12 sm:my-16 px-4 sm:px-6 lg:px-8">
//       <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.08)] overflow-hidden p-8 sm:p-10 lg:p-12">
//         {/* Header */}
//         <div className="mb-6 sm:mb-8">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#A052D2] mb-3">
//             Make Every Festival Special
//           </h2>
//           <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
//             we are thrilled to offer a range of exceptional decoration services
//             tailored to elevate your space.
//           </p>
//         </div>

//         {/* Top wide image */}
//         <div className="w-full rounded-xl overflow-hidden mb-6 sm:mb-8">
//           <img
//             src="/images/Image Placeholder.png"
//             alt="Festival decoration"
//             className="w-full h-auto object-cover"
//           />
//         </div>

//         {/* Scrollable gallery */}
//         <div
//           ref={scrollRef}
//           className="overflow-x-auto overflow-y-hidden scrollbar-hide flex gap-4 pb-2 -mx-1"
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//             WebkitOverflowScrolling: "touch",
//           }}
//         >
//           {GALLERY_IMAGES.map((img) => (
//             <div
//               key={img.id}
//               className="group flex-shrink-0 w-52 sm:w-60 lg:w-72 aspect-[3/4] rounded-3xl overflow-hidden relative cursor-pointer"
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//               {/* Hover overlay - pills via ::before/::after, text above with z-10 */}
//               <div className="festival-card-overlay absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between items-center py-4 px-3">
//                 <span className="festival-tab-text z-10 px-5 py-2 text-white text-xs font-semibold tracking-wider whitespace-nowrap">
//                   PHOTOGRAPHY
//                 </span>
//                 <a
//                   href="#"
//                   className="festival-tab-text z-10 px-5 py-2 text-white text-xs font-semibold tracking-wider whitespace-nowrap flex items-center gap-1.5 hover:opacity-90"
//                 >
//                   EXPLORE MORE
//                   <ChevronRight className="w-3.5 h-3.5" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* EXPLORE MORE link */}
//         <div className="flex justify-center mt-8">
//           <a
//             href="#"
//             className="inline-flex items-center gap-2 text-gray-600 font-medium text-sm sm:text-base hover:text-gray-900 transition-colors"
//           >
//             EXPLORE MORE
//             <ChevronRight className="w-4 h-4" />
//           </a>
//         </div>
//       </div>

//       <style jsx global>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         /* Hover overlay with pill shapes via pseudo-elements */
//         .festival-card-overlay {
//           transition: opacity 0.3s ease;
//         }
//         .festival-card-overlay::before,
//         .festival-card-overlay::after {
//           content: "";
//           position: absolute;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 92%;
//           max-width: 200px;
//           height: 40px;
//           background: linear-gradient(90deg, #EC4899 0%, #A855F7 100%);
//           pointer-events: none;
//         }
//         /* Top pill: curved to align with rounded-3xl */
//         .festival-card-overlay::before {
//           top: 12px;
//           border-radius: 24px 24px 9999px 9999px;
//         }
//         /* Bottom pill: curved to align with rounded-3xl */
//         .festival-card-overlay::after {
//           bottom: 12px;
//           border-radius: 9999px 9999px 24px 24px;
//         }
//         .group:hover .festival-card-overlay {
//           opacity: 1;
//         }
//         .festival-tab-text {
//           text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  { id: 3, src: "/images/Image (3).png", alt: "Festival decoration" },
  { id: 4, src: "/images/Image (4).png", alt: "Festival celebration" },
  { id: 5, src: "/images/Image (5).png", alt: "Festival lights" },
  { id: 6, src: "/images/Image (6).png", alt: "Festival colors" },
  { id: 7, src: "/images/Image (3).png", alt: "Festival decoration" },
];

export default function FestivalSpecial() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full max-w-[95vw] sm:max-w-[92vw] mx-auto my-12 sm:my-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.08)] overflow-hidden p-8 sm:p-10 lg:p-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#A052D2] mb-3">
            Make Every Festival Special
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
            we are thrilled to offer a range of exceptional decoration services
            tailored to elevate your space.
          </p>
        </div>

        {/* Top wide image */}
        <div className="w-full rounded-xl overflow-hidden mb-6 sm:mb-8">
          <img
            src="/images/Image Placeholder.png"
            alt="Festival decoration"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Scrollable gallery */}
        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide flex gap-4 pb-2 -mx-1"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="group flex-shrink-0 w-52 sm:w-60 lg:w-72 aspect-[3/4] rounded-3xl overflow-hidden relative cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay - pills via ::before/::after, text above with z-10 */}
              <div className="festival-card-overlay absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between items-center py-4 px-3">
                <span className="festival-tab-text z-10 px-5 py-2 text-white text-xs font-semibold tracking-wider whitespace-nowrap">
                  PHOTOGRAPHY
                </span>
                <a
                  href="#"
                  className="festival-tab-text z-10 px-5 py-2 text-white text-xs font-semibold tracking-wider whitespace-nowrap flex items-center gap-1.5 hover:opacity-90"
                >
                  EXPLORE MORE
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* EXPLORE MORE link */}
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-600 font-medium text-sm sm:text-base hover:text-gray-900 transition-colors"
          >
            EXPLORE MORE
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hover overlay with pill shapes via pseudo-elements */
        .festival-card-overlay {
          transition: opacity 0.3s ease;
        }
        .festival-card-overlay::before,
        .festival-card-overlay::after {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 92%;
          max-width: 200px;
          height: 40px;
          background: linear-gradient(90deg, #EC4899 0%, #A855F7 100%);
          pointer-events: none;
          border-radius: 50px;
        }
        /* Top pill */
        .festival-card-overlay::before {
          top: 12px;
        }
        /* Bottom pill */
        .festival-card-overlay::after {
          bottom: 12px;
        }
        .group:hover .festival-card-overlay {
          opacity: 1;
        }
        .festival-tab-text {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}

