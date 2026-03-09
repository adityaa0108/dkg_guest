'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Search, Heart, ShoppingCart, X } from 'lucide-react';

export default function Header() {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [wishlistItems] = useState([
    { id: 1, name: 'Product 1', price: '$99.99', image: '🎁' },
    { id: 2, name: 'Product 2', price: '$149.99', image: '📦' }
  ]);

  return (
    <>
      <header className="w-full">
        {/* Top Bar */}
        <div className="w-full bg-[#faf8f5] border-b border-gray-200">
          <div className="max-w-[1920px] mx-auto px-28">
            <div className="flex items-center justify-between py-5 gap-6">
              {/* Logo */}
              <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center cursor-pointer shrink-0">
                  <Image
                    src="/images/Logo.svg"
                    alt="DKGPro"
                    width={140}
                    height={40}
                    priority
                    className="h-10 w-auto"
                  />
                </Link>

                {/* Location Button */}
                <button className="h-12 px-4 py-2 rounded-full border border-gray-300 bg-white flex items-center gap-2 hover:bg-gray-50 transition-colors shrink-0">
                  <MapPin className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-700 text-base font-medium whitespace-nowrap">
                    Delhi NCR
                  </span>
                </button>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-2xl relative min-w-0">
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  <input
                    type="text"
                    placeholder="Search for..."
                    className="w-full h-12 pl-14 pr-6 rounded-full border border-gray-300 bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-6 shrink-0">
                <div className="flex items-center gap-3">
                  {/* Wishlist Button */}
                  <button
                    onClick={() => setIsWishlistOpen(!isWishlistOpen)}
                    className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors relative"
                    aria-label="Wishlist"
                  >
                    <Heart className="w-6 h-6 text-gray-700" />
                    {wishlistItems.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                        {wishlistItems.length}
                      </span>
                    )}
                  </button>

                  {/* Cart Button */}
                  <button
                    className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors relative"
                    aria-label="Shopping Cart"
                  >
                    <ShoppingCart className="w-6 h-6 text-gray-700" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                      0
                    </span>
                  </button>
                </div>

                {/* Login Button */}
                <Link
                  href="/login"
                  className="h-10 px-8 bg-[#6B2D5C] text-white text-sm font-semibold rounded-full hover:bg-[#5a2650] transition-colors uppercase flex items-center justify-center"
                >
                  Login
                </Link>
              </div>
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