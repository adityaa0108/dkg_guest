import React, { useState } from 'react';
import { Heart, ArrowDown } from 'lucide-react';

const LevelUp = () => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const packages = [
    {
      id: 1,
      title: "Minnie Mouse Themed Birthday Party",
      description: "Learn planning, coordination, and leadership skills to manage projects effectively.",
      rating: 4.0,
      imagePosition: "right"
    },
    {
      id: 2,
      title: "Minnie Mouse Themed Birthday Party",
      description: "Learn planning, coordination, and leadership skills to manage projects effectively.",
      rating: 4.0,
      imagePosition: "left"
    },
    {
      id: 3,
      title: "Minnie Mouse Themed Birthday Party",
      description: "Learn planning, coordination, and leadership skills to manage projects effectively.",
      rating: 4.0,
      imagePosition: "right"
    }
  ];

  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-[0.73vw]">
      <div className="flex gap-[0.42vw]">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className="w-[1.04vw] h-[1.04vw]">
            <svg
              viewBox="0 0 20 20"
              fill={star <= rating ? "#FCD34D" : "#F4F4F5"}
              className="w-full h-full"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        ))}
      </div>
      <span className="text-purple-500 text-[1.04vw] font-semibold">{rating.toFixed(1)}</span>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-neutral-50 rounded-[1.67vw] shadow-[0px_56px_120px_0px_rgba(0,0,0,0.15)] overflow-hidden p-[1.25vw] md:p-[6.25vw]">
      {/* Header Section */}
      <div className="max-w-[82.5vw] mx-auto mb-[1.25vw]">
        <h1 className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent  text-[1.88vw] md:text-[7.81vw] font-bold leading-tight mb-[1.25vw]">
          Level Up Your Birthday Party
        </h1>
        <p className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent  text-[1.04vw] md:text-[3.13vw] font-normal max-w-2xl">
          we are thrilled to offer a range of exceptional decoration services tailored to elevate your space.
        </p>
      </div>

      {/* Banner Image */}
      <div className="max-w-[82.5vw] mx-auto mb-[2.5vw]">
        <div className="w-full h-[20.83vw] md:h-[81.77vw] rounded-[1.67vw] overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&h=900&fit=crop"
            alt="Birthday party decoration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Package Cards */}
      <div className="max-w-[82.5vw] mx-auto space-y-12">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="group relative h-[26.04vw] md:h-[81.77vw] rounded-[1.67vw] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0 flex flex-col md:flex-row">
              {/* Content Side */}
              <div
                className={`w-full md:w-1/2 p-[1.67vw] md:p-[8.33vw] lg:p-[9.38vw] flex flex-col justify-between z-10 bg-white ${
                  pkg.imagePosition === "left" ? "md:order-2" : ""
                }`}
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent  text-[0.73vw] md:text-[2.08vw] font-semibold uppercase tracking-[0.13vw] opacity-70">
                      at your location
                    </p>
                    <h2 className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent  text-[1.56vw] md:text-[6.25vw] font-normal leading-tight tracking-wide">
                      {pkg.title}
                    </h2>
                    <p className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent  text-[0.94vw] md:text-[3.13vw] font-normal opacity-70 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>
                  <StarRating rating={pkg.rating} />
                </div>

                <div className="flex items-center gap-[1.25vw] mt-[1.67vw]">
                  <button className="flex-1 md:flex-none md:w-auto px-[1.67vw] py-[0.83vw] md:py-[0.83vw] bg-gradient-to-l from-purple-500 to-pink-500 rounded-full flex items-center justify-center gap-[0.52vw] hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <span className="text-white text-[0.94vw] md:text-[2.6vw] font-semibold uppercase">
                      Book Now
                    </span>
                    <ArrowDown className="w-[1.25vw] h-[1.25vw] md:w-[4.17vw] md:h-[4.17vw] text-white rotate-[-90deg]" />
                  </button>
                  <button
                    onClick={() => toggleFavorite(pkg.id)}
                    className="w-[4.17vw] h-[4.17vw] md:w-[8.33vw] md:h-[8.33vw] rounded-xl border border-pink-900/20 flex items-center justify-center hover:bg-pink-50 transition-all duration-300"
                  >
                    <Heart
                      className={`w-[1.67vw] h-[1.67vw] md:w-[5.21vw] md:h-[5.21vw] transition-all duration-300 ${
                        favorites[pkg.id]
                          ? "fill-pink-500 stroke-pink-500"
                          : "stroke-pink-900"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Image Side - Default State */}
              <div
                className={`absolute md:relative w-full md:w-1/2 h-full transition-all duration-700 ease-in-out ${
                  pkg.imagePosition === "left" ? "md:order-1" : ""
                } md:opacity-100 opacity-20 md:translate-y-0 group-hover:opacity-0 group-hover:translate-y-4`}
              >
                <img
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=900&fit=crop"
                  alt="Birthday decoration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Side - Hover State */}
              <div
                className={`absolute md:relative w-full md:w-1/2 h-full transition-all duration-700 ease-in-out ${
                  pkg.imagePosition === "left" ? "md:order-1" : ""
                } opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0`}
              >
                <img
                  src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&h=900&fit=crop"
                  alt="Birthday cake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="max-w-[82.5vw] mx-auto mt-[2.5vw]">
        <button className="w-full md:w-auto px-[2.5vw] py-[1.04vw] bg-white rounded-full flex items-center justify-center gap-[0.63vw] hover:shadow-lg hover:scale-105 transition-all duration-300 mx-auto">
          <span className="text-pink-900 text-[1.04vw] md:text-[3.13vw] font-medium uppercase tracking-wide">
            explore More
          </span>
          <ArrowDown className="w-[1.67vw] h-[1.67vw] text-pink-900 rotate-[-90deg]" />
        </button>
      </div>
    </div>
  );
};

export default LevelUp;LevelUp