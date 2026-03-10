"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ALL_TAGS = [
  "#Best in Delhi",
  "#Roof Top",
  "#Dinning",
  "#Nice View",
  "#Vibe",
  "#Date Night",
];

const SIDEBAR_IMAGES = [
  { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop", alt: "Sparkler" },
  { src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=300&fit=crop", alt: "Birthday cake" },
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop", alt: "Celebration" },
];

const VENUES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1160&h=580&fit=crop",
    date: "Aug 5, 2024",
    title: "The Ritz: Your Dream Wedding Awaits",
    caption: "At The Ritz, we handle every detail, from the grand ballroom to the intimate garden ceremony. Our expert planners ensure a seamless experience, coordinating with top-tier vendors for decor, catering, and entertainment, so you can cherish every moment.",
    tags: ["#Best in Delhi", "#Dinning", "#Date Night"],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1160&h=580&fit=crop",
    date: "Aug 12, 2024",
    title: "Celebrate At The Grand Olinda Ballroom",
    caption: "Experience the charm of outdoor celebrations at The Grand Olinda Ballroom. Surrounded by lush greenery and elegant setups, this venue offers the perfect backdrop for weddings, anniversaries, and special milestones.",
    tags: ["#Best in Delhi", "#Nice View", "#Vibe"],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1464369095431-e9a21285b5f3?w=1160&h=580&fit=crop",
    date: "Aug 18, 2024",
    title: "Say 'I Do' At The Emerald Gardens",
    caption: "A luxurious indoor ballroom with ornate architecture, crystal chandeliers, and elegantly set tables. The Emerald Gardens creates a magical atmosphere for your dream wedding.",
    tags: ["#Best in Delhi", "#Dinning", "#Nice View"],
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1160&h=580&fit=crop",
    date: "Sep 2, 2024",
    title: "Terrace Nights: Where Vibes Meet Stars",
    caption: "Terrace Nights is the ultimate rooftop escape for those who love good music, great company, and an electric atmosphere. Whether it's a date night or a celebration, the vibe here is always unmatched.",
    tags: ["#Roof Top", "#Vibe", "#Date Night"],
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1160&h=580&fit=crop",
    date: "Sep 10, 2024",
    title: "Sky Lounge: Above the City Skyline",
    caption: "Experience dining at new heights. Sky Lounge offers a breathtaking rooftop setting with panoramic views of the city, curated menus, and an ambiance that turns every meal into a memory worth keeping.",
    tags: ["#Roof Top", "#Nice View", "#Vibe"],
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1160&h=580&fit=crop",
    date: "Sep 20, 2024",
    title: "The Grand Table: Fine Dining Redefined",
    caption: "Indulge in an extraordinary culinary journey at The Grand Table. With a Michelin-starred chef, seasonal ingredients, and an intimate atmosphere, every dish tells a story of passion and craftsmanship.",
    tags: ["#Dinning", "#Best in Delhi", "#Nice View"],
  },
];

const CARD_SHADOW = "0px 4px 16px 0px rgba(236,72,153,0.08), 0px 20px 56px -8px rgba(0,0,0,0.12), 0px 40px 80px -12px rgba(236,72,153,0.10)";
const CARD_SHADOW_HOVER = "0px 4px 16px 0px rgba(236,72,153,0.12), 0px 20px 56px -8px rgba(0,0,0,0.18), 0px 40px 80px -12px rgba(236,72,153,0.15)";

const cardStyles = `
  .venue-shadow-wrap {
    transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                box-shadow 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 24px;
  }
  .venue-shadow-wrap:hover {
    transform: translateY(-6px);
    box-shadow: ${CARD_SHADOW_HOVER} !important;
  }
  .venue-image {
    transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.55s ease;
    will-change: transform;
  }
  .venue-shadow-wrap:hover .venue-image {
    transform: scale(1.06);
    filter: brightness(1.07);
  }
`;

const CARDS_PER_PAGE = 3;

export default function VenuePageContent() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleTagClick = (tag: string) => {
    setActiveTag((prev) => (prev === tag ? null : tag));
    setCurrentPage(1);
  };

  const isVisible = (venue: (typeof VENUES)[0]) => {
    if (!activeTag) return true;
    return venue.tags.includes(activeTag);
  };

  const filteredVenues = VENUES.filter(isVisible);
  const totalPages = Math.ceil(filteredVenues.length / CARDS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const paginatedVenues = filteredVenues.slice(startIndex, startIndex + CARDS_PER_PAGE);

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <style dangerouslySetInnerHTML={{ __html: cardStyles }} />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
        {/* Left — Venue Cards */}
        <div className="flex-1 min-w-0 flex flex-col gap-8 w-full">
          {paginatedVenues.map((venue) => (
            <div
              key={venue.id}
              className="transition-all duration-500 ease-in-out"
              style={{
                opacity: isVisible(venue) ? 1 : 0,
                transform: isVisible(venue) ? "scale(1) translateY(0px)" : "scale(0.95) translateY(20px)",
                pointerEvents: isVisible(venue) ? "auto" : "none",
                maxHeight: isVisible(venue) ? "1000px" : "0px",
                marginBottom: isVisible(venue) ? undefined : "-2rem",
              }}
            >
              <div
                className="venue-shadow-wrap w-full"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <div className="relative bg-white rounded-[1.25vw] overflow-hidden w-full">
                  {/* Image */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl">
                    <img
                      className="venue-image w-full h-full object-cover"
                      src={venue.image}
                      alt={venue.title}
                    />
                    <div className="absolute left-4 bottom-4 px-3 py-1.5 bg-gray-800/80 rounded-lg backdrop-blur-sm">
                      <span className="text-white text-sm font-medium">
                        {venue.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 p-6 sm:p-8">
                    <h2 className="text-black text-xl sm:text-2xl font-semibold leading-tight">
                      {venue.title}
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {venue.caption}
                    </p>
                    <a
                      href="#"
                      className="text-[#C64E59] text-sm font-medium underline underline-offset-2 hover:text-[#a83e47] transition-colors w-fit"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredVenues.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-gray-500 font-medium">
                No venues match <span className="text-[#C64E59]">{activeTag}</span>
              </p>
              <button
                onClick={() => setActiveTag(null)}
                className="mt-4 text-[#C64E59] underline text-sm hover:text-[#a83e47] transition-colors"
              >
                Clear filter
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredVenues.length > 0 && totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 pt-8">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      currentPage === page
                        ? "bg-purple-800 text-white"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    }`}
                    aria-label={`Go to page ${page}`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          )}
        </div>

        {/* Right — Tags & Image Gallery */}
        <div className="flex-shrink-0 w-full lg:w-80 xl:w-96 lg:sticky lg:top-24">
          <div
            className="p-6 rounded-2xl bg-white flex flex-col gap-6 shadow-lg"
            style={{ boxShadow: CARD_SHADOW }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-black text-lg font-semibold">Tags</h3>
                {activeTag && (
                  <button
                    onClick={() => setActiveTag(null)}
                    className="text-[#C64E59] text-sm underline hover:text-[#a83e47] transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {ALL_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all border ${
                      activeTag === tag
                        ? "bg-[#C64E59] text-white border-[#C64E59]"
                        : "bg-[#FDF3F4] text-[#C64E59] border-[#C64E59] hover:bg-[#F9E5E7]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-px bg-gray-200" />
            <p className="text-gray-500 text-sm">
              {activeTag
                ? `${filteredVenues.length} venue(s) match "${activeTag}"`
                : `Showing all ${VENUES.length} venues`}
            </p>
            <div className="flex flex-col gap-3">
              {SIDEBAR_IMAGES.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
