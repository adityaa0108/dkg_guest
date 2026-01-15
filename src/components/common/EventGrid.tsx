import React from 'react';

const EventGrid = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Birthday Celebration",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop",
    //   description: "Colorful decorations"
    },
    {
      id: 2,
      title: "Anniversary Party",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop",
    //   description: "Elegant settings"
    },
    {
      id: 3,
      title: "Kids Party",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop",
    //   description: "Fun themed decor"
    },
    {
      id: 4,
      title: "Garden Party",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400&h=400&fit=crop",
    //   description: "Outdoor celebrations"
    },
    {
      id: 5,
      title: "Candlelight Dinner",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop",
    //   description: "Romantic ambiance"
    },
    {
      id: 6,
      title: "Festival Decor",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=400&fit=crop",
    //   description: "Traditional celebrations"
    },
    {
      id: 7,
      title: "Corporate Event",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=400&fit=crop",
    //   description: "Professional setup"
    },
    {
      id: 8,
      title: "Wedding Decor",
      image: "https://images.unsplash.com/photo-1519167758481-83f29da8fd36?w=400&h=400&fit=crop",
    //   description: "Beautiful arrangements"
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-rose-50 rounded-[32px] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  {/* <p className="text-sm text-white/90">{item.description}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGrid;