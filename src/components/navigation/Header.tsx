'use client';

import { useState } from 'react';
import { MapPin, Search, Heart, ShoppingCart, X } from 'lucide-react';

export default function Header() {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [wishlistItems] = useState([
    { id: 1, name: 'Product 1', price: '$99.99', image: '🎁' },
    { id: 2, name: 'Product 2', price: '$149.99', image: '📦' }
  ]);

  return (
    <>
      <header className="w-full bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto px-28">
          <div className="flex items-center justify-between py-7 gap-6">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 p-2 cursor-pointer">
                <div className="w-9 h-8 bg-gradient-to-l from-purple-500 to-pink-500 rounded"></div>
                <div className="w-4 h-5 bg-gradient-to-l from-purple-500 to-pink-500 rounded"></div>
                <div className="w-10 h-5 bg-purple-500 rounded"></div>
                <div className="w-16 h-6 bg-gradient-to-l from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs font-bold">
                  Pro
                </div>
              </div>

              {/* Location Button */}
              <button className="h-12 px-4 py-2 rounded-full border border-pink-900 flex items-center gap-2 hover:bg-pink-50 transition-colors">
                <MapPin className="w-5 h-5 text-pink-900" />
                <span className="text-pink-900 text-base font-medium whitespace-nowrap">
                  Delhi NCR
                </span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl relative">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-900" />
                <input
                  type="text"
                  placeholder="Search for..."
                  className="w-full h-12 pl-14 pr-6 rounded-full border border-pink-900/20 bg-white text-pink-900 placeholder:text-pink-900/60 focus:outline-none focus:border-pink-900 transition-colors"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                {/* Wishlist Button */}
                <button
                  onClick={() => setIsWishlistOpen(!isWishlistOpen)}
                  className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-pink-50 transition-colors relative"
                  aria-label="Wishlist"
                >
                  <Heart className="w-6 h-6 text-pink-900" />
                  {wishlistItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                      {wishlistItems.length}
                    </span>
                  )}
                </button>

                {/* Cart Button */}
                <button
                  className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-pink-50 transition-colors relative"
                  aria-label="Shopping Cart"
                >
                  <ShoppingCart className="w-6 h-6 text-pink-900" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>

              {/* Login Button */}
              <button className="h-12 px-8 bg-pink-900 text-white text-sm font-semibold rounded-full hover:bg-pink-800 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Wishlist Popup */}
      {isWishlistOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsWishlistOpen(false)}
          />

          {/* Popup */}
          <div className="fixed right-8 top-24 w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-900" />
                <h2 className="text-lg font-semibold text-gray-900">My Wishlist</h2>
                <span className="px-2 py-0.5 bg-pink-100 text-pink-900 text-xs font-medium rounded-full">
                  {wishlistItems.length}
                </span>
              </div>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="max-h-96 overflow-y-auto">
              {wishlistItems.length > 0 ? (
                <div className="p-4 space-y-3">
                  {wishlistItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center text-2xl">
                        {item.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-pink-900 font-semibold">{item.price}</p>
                      </div>
                      <button className="px-4 py-2 bg-pink-900 text-white text-sm font-medium rounded-lg hover:bg-pink-800 transition-colors">
                        Add
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Your wishlist is empty</p>
                  <p className="text-sm text-gray-400 mt-1">Start adding items you love!</p>
                </div>
              )}
            </div>

            {/* Footer */}
            {wishlistItems.length > 0 && (
              <div className="p-4 border-t border-gray-200">
                <button className="w-full py-3 bg-pink-900 text-white font-semibold rounded-lg hover:bg-pink-800 transition-colors">
                  View All Items
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}