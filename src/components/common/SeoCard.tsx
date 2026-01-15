import React, { useState } from 'react';

const BirthdayPartySection = () => {
  const [selectedCity, setSelectedCity] = useState('Delhi NCR');

  const cities = [
    'Delhi NCR',
    'Gurugram',
    'Noida',
    'Bangalore',
    'Hyderabad',
    'Mumbai',
    'Pune',
    'Ahmedabad',
    'Lucknow',
    'Chennai'
  ];

  const services = [
    'Birthday Decorations',
    'Party Decorations',
    'Candlelight Dinner',
    'Personalised Gifts',
    'Personalised Gifts',
    'Party Entertainment',
    'Corporate Events',
    'Food Catering',
    'Photography Services',
    'Photography Services',
    'Anniversary Decorations',
    'Baby Shower Celebration',
    'Baby Welcome Decorations',
    'Christmas/Xmas Decorations',
    'Christmas/Xmas Decorations',
    'Kids Birthday Celebration',
    'Kids Birthday Celebration',
    'First Birthday Decoration',
    'First Birthday Decoration',
    'Diwali Decorations',
    'Diwali Decorations',
    'Naming Ceremony Decorations',
    'Naming Ceremony Decorations',
    'Naming Ceremony Decorations',
    'Naming Ceremony Decorations'
  ];

  return (
    <div className="min-h-screen  p-8 flex items-center justify-center">
      <div className="w-full max-w-[1680px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-12">
          <div className="flex flex-col gap-10">
            {/* Heading */}
            <h2 className="text-pink-900 text-3xl font-bold leading-9" style={{ fontFamily: 'Helvetica Rounded, system-ui, sans-serif' }}>
              Host your next birthday party with ease.
            </h2>

            {/* City Pills */}
            <div className="flex items-center gap-3 flex-wrap">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`
                    px-6 h-12 rounded-full transition-all duration-200
                    outline outline-[1.5px] outline-offset-[-1.5px] outline-purple-500
                    flex items-center justify-center
                    text-sm font-semibold uppercase tracking-wide
                    ${selectedCity === city
                      ? 'bg-gradient-to-l from-purple-500 to-pink-500 text-white'
                      : 'bg-transparent text-purple-500 hover:bg-purple-50'
                    }
                  `}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-5 gap-0 rounded-xl overflow-hidden border border-gray-200">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full p-4 bg-white border-r border-b border-gray-100 last:border-r-0 cursor-pointer hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-200"
                >
                  <div className="text-gray-800 text-base font-normal leading-6">
                    {service}
                  </div>
                  <div className="text-gray-500 text-sm font-normal leading-5">
                    in {selectedCity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayPartySection;