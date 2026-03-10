'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

// Types
interface SubMenuItem {
  id: string;
  label: string;
  href: string;
}

interface SubMenuCategory {
  id: string;
  title: string;
  items: SubMenuItem[];
}

interface MenuItem {
  id: string;
  label: string;
  href: string;
  hasDropdown: boolean;
  image?: string;
  categories?: SubMenuCategory[];
}

// Mock API function - Replace with your actual API endpoint
const fetchNavigationData = async (): Promise<MenuItem[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: 'anniversary',
      label: 'Anniversary',
      href: '/categories/anniversary',
      hasDropdown: true,
      image: 'https://images.unsplash.com/photo-1529634597767-fbef2a7a6690?w=800&h=600&fit=crop',
      categories: [
        {
          id: 'candlelight-dinner',
          title: 'CANDLELIGHT DINNER',
          items: [
            { id: '1', label: 'Private Couple Experience', href: '/anniversary/private-couple' },
            { id: '2', label: 'Rooftop Dinners', href: '/anniversary/rooftop' },
            { id: '3', label: 'Poolside Candlelight Dinners', href: '/anniversary/poolside' },
            { id: '4', label: 'Private Dinner & Movie', href: '/anniversary/dinner-movie' },
            { id: '5', label: 'Lunch Special Dining', href: '/anniversary/lunch-special' },
            { id: '6', label: 'Couple Activities', href: '/anniversary/activities' }
          ]
        },
        {
          id: 'decorations',
          title: 'DECORATIONS',
          items: [
            { id: '7', label: 'Anniversary Party Decors', href: '/anniversary/party-decors' },
            { id: '8', label: 'Hotel Room Decoration', href: '/anniversary/hotel-room' },
            { id: '9', label: '1st Anniversary Decors', href: '/anniversary/1st' },
            { id: '10', label: '25th Anniversary Decors', href: '/anniversary/25th' },
            { id: '11', label: '50th Anniversary Decors', href: '/anniversary/50th' },
            { id: '12', label: 'Canopy Decorations at Home', href: '/anniversary/canopy' },
            { id: '13', label: 'Wedding Night Decorations', href: '/anniversary/wedding-night' }
          ]
        },
        {
          id: 'gifts',
          title: 'ANNIVERSARY GIFTS',
          items: [
            { id: '14', label: 'Bubble Balloon Buckets', href: '/anniversary/bubble-balloons' },
            { id: '15', label: 'Photo Frames', href: '/anniversary/photo-frames' },
            { id: '16', label: 'Balloon Box Surprise', href: '/anniversary/balloon-box' },
            { id: '17', label: 'Digital Surprises', href: '/anniversary/digital' },
            { id: '18', label: 'Cake & Bouquet Combos', href: '/anniversary/cake-bouquet' },
            { id: '19', label: 'Photo Gifts', href: '/anniversary/photo-gifts' },
            { id: '20', label: 'Heart Shape Cakes', href: '/anniversary/heart-cakes' },
            { id: '21', label: 'Bouquets', href: '/anniversary/bouquets' }
          ]
        }
      ]
    },
    {
      id: 'birthdays',
      label: 'Birthdays',
      href: '/categories/birthdays',
      hasDropdown: true,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
      categories: [
        {
          id: 'birthday-parties',
          title: 'BIRTHDAY PARTIES',
          items: [
            { id: 'b1', label: 'Kids Birthday Party', href: '/birthdays/kids' },
            { id: 'b2', label: 'Adult Birthday Party', href: '/birthdays/adult' },
            { id: 'b3', label: 'Surprise Birthday Party', href: '/birthdays/surprise' },
            { id: 'b4', label: 'Themed Birthday Decor', href: '/birthdays/themed' }
          ]
        },
        {
          id: 'birthday-decor',
          title: 'BIRTHDAY DECORATIONS',
          items: [
            { id: 'b5', label: 'Balloon Decorations', href: '/birthdays/balloons' },
            { id: 'b6', label: 'Room Decorations', href: '/birthdays/room-decor' },
            { id: 'b7', label: 'Outdoor Party Setup', href: '/birthdays/outdoor' }
          ]
        },
        {
          id: 'birthday-gifts',
          title: 'BIRTHDAY GIFTS',
          items: [
            { id: 'b8', label: 'Customized Cakes', href: '/birthdays/cakes' },
            { id: 'b9', label: 'Gift Hampers', href: '/birthdays/hampers' },
            { id: 'b10', label: 'Photo Collages', href: '/birthdays/collages' }
          ]
        }
      ]
    },
    {
      id: 'candlelight-dinners',
      label: 'Candlelight Dinners',
      href: '/categories/candlelight-dinners',
      hasDropdown: true,
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
      categories: [
        {
          id: 'dinner-venues',
          title: 'DINNER VENUES',
          items: [
            { id: 'cd1', label: 'Rooftop Venues', href: '/candlelight/rooftop' },
            { id: 'cd2', label: 'Poolside Venues', href: '/candlelight/poolside' },
            { id: 'cd3', label: 'Garden Venues', href: '/candlelight/garden' },
            { id: 'cd4', label: 'Private Dining Rooms', href: '/candlelight/private' }
          ]
        },
        {
          id: 'dinner-packages',
          title: 'DINNER PACKAGES',
          items: [
            { id: 'cd5', label: 'Romantic Dinner for Two', href: '/candlelight/romantic' },
            { id: 'cd6', label: 'Anniversary Special', href: '/candlelight/anniversary' },
            { id: 'cd7', label: 'Proposal Package', href: '/candlelight/proposal' }
          ]
        },
        {
          id: 'dinner-addons',
          title: 'ADD-ONS',
          items: [
            { id: 'cd8', label: 'Live Music', href: '/candlelight/music' },
            { id: 'cd9', label: 'Floral Decorations', href: '/candlelight/flowers' },
            { id: 'cd10', label: 'Photography', href: '/candlelight/photography' }
          ]
        }
      ]
    },
    {
      id: 'decorations',
      label: 'Decorations',
      href: '/categories/decorations',
      hasDropdown: true,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      categories: [
        {
          id: 'home-decor',
          title: 'HOME DECORATIONS',
          items: [
            { id: 'd1', label: 'Living Room Decor', href: '/decorations/living-room' },
            { id: 'd2', label: 'Bedroom Decor', href: '/decorations/bedroom' },
            { id: 'd3', label: 'Garden Decor', href: '/decorations/garden' },
            { id: 'd4', label: 'Balcony Decor', href: '/decorations/balcony' }
          ]
        },
        {
          id: 'party-decor',
          title: 'PARTY DECORATIONS',
          items: [
            { id: 'd5', label: 'Balloon Arrangements', href: '/decorations/balloons' },
            { id: 'd6', label: 'Floral Arrangements', href: '/decorations/flowers' },
            { id: 'd7', label: 'LED Light Setup', href: '/decorations/led' }
          ]
        },
        {
          id: 'theme-decor',
          title: 'THEMED DECORATIONS',
          items: [
            { id: 'd8', label: 'Vintage Theme', href: '/decorations/vintage' },
            { id: 'd9', label: 'Modern Theme', href: '/decorations/modern' },
            { id: 'd10', label: 'Traditional Theme', href: '/decorations/traditional' }
          ]
        }
      ]
    },
    {
      id: 'festivals',
      label: 'Festivals',
      href: '/categories/festivals',
      hasDropdown: true,
      image: 'https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=800&h=600&fit=crop',
      categories: [
        {
          id: 'festival-decor',
          title: 'FESTIVAL DECORATIONS',
          items: [
            { id: 'f1', label: 'Diwali Decorations', href: '/festivals/diwali' },
            { id: 'f2', label: 'Christmas Decorations', href: '/festivals/christmas' },
            { id: 'f3', label: 'Holi Celebrations', href: '/festivals/holi' },
            { id: 'f4', label: 'Eid Decorations', href: '/festivals/eid' }
          ]
        },
        {
          id: 'festival-gifts',
          title: 'FESTIVAL GIFTS',
          items: [
            { id: 'f5', label: 'Gift Hampers', href: '/festivals/hampers' },
            { id: 'f6', label: 'Sweets & Chocolates', href: '/festivals/sweets' },
            { id: 'f7', label: 'Decorative Items', href: '/festivals/items' }
          ]
        },
        {
          id: 'festival-events',
          title: 'FESTIVAL EVENTS',
          items: [
            { id: 'f8', label: 'Community Celebrations', href: '/festivals/community' },
            { id: 'f9', label: 'Corporate Events', href: '/festivals/corporate' },
            { id: 'f10', label: 'Home Celebrations', href: '/festivals/home' }
          ]
        }
      ]
    },
    {
      id: 'kids-celebrations',
      label: "Kid's Celebrations",
      href: '/categories/kids-celebrations',
      hasDropdown: true,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
      categories: [
        {
          id: 'kids-parties',
          title: "KIDS PARTIES",
          items: [
            { id: 'k1', label: 'Theme Parties', href: '/kids/theme' },
            { id: 'k2', label: 'Cartoon Character Parties', href: '/kids/cartoon' },
            { id: 'k3', label: 'Outdoor Games', href: '/kids/outdoor' },
            { id: 'k4', label: 'Magic Shows', href: '/kids/magic' }
          ]
        },
        {
          id: 'kids-decor',
          title: "KIDS DECORATIONS",
          items: [
            { id: 'k5', label: 'Balloon Decor', href: '/kids/balloons' },
            { id: 'k6', label: 'Character Cutouts', href: '/kids/cutouts' },
            { id: 'k7', label: 'Themed Backdrops', href: '/kids/backdrops' }
          ]
        },
        {
          id: 'kids-entertainment',
          title: "ENTERTAINMENT",
          items: [
            { id: 'k8', label: 'Clowns & Performers', href: '/kids/clowns' },
            { id: 'k9', label: 'Face Painting', href: '/kids/facepainting' },
            { id: 'k10', label: 'Puppet Shows', href: '/kids/puppets' }
          ]
        }
      ]
    },
    {
      id: 'home-decoration',
      label: "HOME DEDCORATION",
      href: '/categories/home-decoration',
      hasDropdown: true,
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop',
      categories: [
        {
          id: 'room-decor',
          title: 'ROOM DECORATIONS',
          items: [
            { id: 'h1', label: 'Master Bedroom', href: '/home/master-bedroom' },
            { id: 'h2', label: 'Kids Room', href: '/home/kids-room' },
            { id: 'h3', label: 'Guest Room', href: '/home/guest-room' },
            { id: 'h4', label: 'Study Room', href: '/home/study-room' }
          ]
        },
        {
          id: 'seasonal-decor',
          title: 'SEASONAL DECORATIONS',
          items: [
            { id: 'h5', label: 'Summer Vibes', href: '/home/summer' },
            { id: 'h6', label: 'Winter Warmth', href: '/home/winter' },
            { id: 'h7', label: 'Monsoon Fresh', href: '/home/monsoon' }
          ]
        },
        {
          id: 'special-occasions',
          title: 'SPECIAL OCCASIONS',
          items: [
            { id: 'h8', label: 'House Warming', href: '/home/housewarming' },
            { id: 'h9', label: 'Welcome Baby', href: '/home/baby' },
            { id: 'h10', label: 'Festive Makeover', href: '/home/festive' }
          ]
        }
      ]
    },
    {
      id: 'corporate-events',
      label: 'Corporate Events',
      href: '/categories/corporate-events',
      hasDropdown: false
    },
    {
      id: 'tent-services',
      label: 'Tent Services',
      href: '/categories/tent-services',
      hasDropdown: false
    }
  ];
};

export default function NavigationBar() {
  const router = useRouter();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCategoryClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setActiveDropdown(null);
    router.push(href);
  };

  useEffect(() => {
    const loadNavigation = async () => {
      try {
        const data = await fetchNavigationData();
        setMenuItems(data);
      } catch (error) {
        console.error('Failed to load navigation:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadNavigation();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setActiveDropdown(null);
      }
    };

    const closeDropdown = () => {
      setActiveDropdown(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', closeDropdown, true);
    document.addEventListener('scroll', closeDropdown, true);
    window.addEventListener('wheel', closeDropdown, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', closeDropdown, true);
      document.removeEventListener('scroll', closeDropdown, true);
      window.removeEventListener('wheel', closeDropdown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  if (isLoading) {
    return (
      <nav className="w-full bg-white border-b border-gray-200">
        <div className="max-w-[100vw] mx-auto px-[6vw] sm:px-[5vw] lg:px-[4vw] xl:px-[5vw] 2xl:px-[6vw] py-[0.6vw] flex items-center justify-between gap-[1.2vw]">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-[1vw] min-h-3 bg-gray-200 rounded animate-pulse w-[6vw] min-w-16" />
          ))}
        </div>
      </nav>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      <nav className="w-full bg-white border-b border-gray-200 relative z-50">
        <div className="max-w-[100vw] mx-auto px-[6vw] sm:px-[5vw] lg:px-[4vw] xl:px-[5vw] 2xl:px-[6vw]">
          <ul className="flex items-center justify-between gap-[1.2vw] py-[0.6vw]">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="relative flex items-center"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleCategoryClick(e, item.href)}
                  className={`px-[0.4vw] py-[0.4vw] flex items-center gap-[0.3vw] text-gray-800 text-[0.7vw] min-[375px]:text-xs font-medium uppercase tracking-wide transition-all whitespace-nowrap cursor-pointer hover:text-[#6B2D5C] ${
                    activeDropdown === item.id ? 'text-[#6B2D5C]' : ''
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-[0.9vw] min-w-3 h-[0.9vw] min-h-3 shrink-0 transition-transform duration-300 ${
                        activeDropdown === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Dropdown Card - Fixed to center of screen, inside dropdownRef so clicks don't close */}
      {activeDropdown && menuItems.find(item => item.id === activeDropdown)?.categories && (
        <div
          className="fixed left-1/2 -translate-x-1/2 z-40 top-[7.5vw]"
          style={{ width: 'calc(100% - 8rem)', maxWidth: '88vw' }}
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dropdown-card">
            <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 rounded-[1.25vw] shadow-2xl overflow-hidden">
              {/* Dropdown Title */}
              <div className="px-[2.08vw] pt-[2.08vw] pb-[0.5vw]">
                <h3 className="text-white text-[1.1vw] min-[375px]:text-base font-bold uppercase tracking-wider">
                  {menuItems.find(item => item.id === activeDropdown)?.label}
                </h3>
              </div>
              <div className="flex p-[2.08vw] pt-0 gap-[2.08vw]">
                {/* Left Side - Image */}
                <div className="w-[23.44vw] flex-shrink-0">
                  <div className="relative h-full rounded-[0.83vw] overflow-hidden shadow-xl group">
                    <img
                      src={menuItems.find(item => item.id === activeDropdown)?.image}
                      alt={menuItems.find(item => item.id === activeDropdown)?.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>

                {/* Right Side - Menu Items */}
                <div className="flex-1 grid grid-cols-3 gap-10">
                  {menuItems
                    .find(item => item.id === activeDropdown)
                    ?.categories?.map((category) => {
                      const parentItem = menuItems.find(item => item.id === activeDropdown);
                      const subCategoryHref = parentItem ? `${parentItem.href}/${category.id}` : '#';
                      return (
                      <div key={category.id} className="space-y-5 group">
                        <Link
                          href={subCategoryHref}
                          onClick={(e) => handleCategoryClick(e, subCategoryHref)}
                          className="block text-pink-200 text-[0.85vw] min-[375px]:text-sm font-bold tracking-wider uppercase border-b border-pink-400/30 pb-[0.63vw] transition-all duration-300 group-hover:border-pink-300/60 group-hover:text-white cursor-pointer"
                        >
                          {category.title}
                        </Link>
                        <ul className="space-y-2.5">
                          {category.items.map((subItem) => {
                            const itemSlug = subItem.href.split('/').filter(Boolean).pop() || subItem.id;
                            const itemHref = `${parentItem?.href || ''}/${category.id}/${itemSlug}`;
                            return (
                              <li key={subItem.id}>
                                <Link
                                  href={itemHref}
                                  onClick={(e) => handleCategoryClick(e, itemHref)}
                                  className="block text-pink-100 text-[0.78vw] py-[0.31vw] px-[0.42vw] rounded-[0.42vw] hover:bg-white/10 hover:text-white hover:translate-x-2 transition-all duration-300 ease-out hover:shadow-lg backdrop-blur-sm"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .dropdown-card {
          animation: dropdownSlide 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}