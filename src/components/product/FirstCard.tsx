import React, { useState } from 'react';
import { MapPin, Star, Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductBookingPage = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [pincode, setPincode] = useState('');
    const [date, setDate] = useState('');

    const images = [
        'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=900&h=616&fit=crop',
        'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900&h=616&fit=crop',
        'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=900&h=616&fit=crop',
        'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=900&h=616&fit=crop',
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&h=616&fit=crop',
        'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=900&h=616&fit=crop',
    ];

    const thumbnails = [
        'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=238&h=163&fit=crop',
        'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=238&h=163&fit=crop',
        'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=238&h=163&fit=crop',
        'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=238&h=163&fit=crop',
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=238&h=163&fit=crop',
        'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=238&h=163&fit=crop',
    ];

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const isBookingEnabled = pincode.length === 6 && date !== '';

    return (
        <div className="w-full min-h-screen bg-gray-100 p-[1.25vw]">
            <div className="max-w-[83.33vw] mx-auto flex gap-[1.67vw]">
                {/* Left Side - Image Gallery */}
                <div className="w-[46.88vw] flex-shrink-0 flex flex-col gap-[1.25vw]">
                    {/* Main Image Carousel */}
                    <div className="relative w-full h-[32.14vw] rounded-[1.67vw] overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                src={images[selectedImage]}
                                alt="Product"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Previous Button */}
                        <button
                            onClick={prevImage}
                            className="absolute left-0 top-[13.44vw] w-[2.08vw] h-[5vw] bg-zinc-500 flex items-center justify-center hover:bg-zinc-600 transition-colors"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-[1.25vw] h-[1.25vw] text-white" strokeWidth={2} />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={nextImage}
                            className="absolute right-0 top-[13.44vw] w-[2.08vw] h-[5vw] bg-pink-900 flex items-center justify-center hover:bg-pink-950 transition-colors"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-[1.25vw] h-[1.25vw] text-white" strokeWidth={2} />
                        </button>
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-[1.25vw] overflow-x-auto">
                        {thumbnails.map((thumb, index) => (
                            <img
                                key={index}
                                src={thumb}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-[12.5vw] h-[8.33vw] rounded-[0.63vw] cursor-pointer flex-shrink-0 ${selectedImage === index ? 'border-[0.42vw] border-pink-900' : ''
                                    }`}
                                onClick={() => setSelectedImage(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side - Product Details and Booking */}
                <div className="flex-1 flex flex-col gap-[1.25vw]">
                    {/* Product Details Card */}
                    <div className="bg-neutral-50 rounded-[1.67vw] shadow-[2px_2px_80px_0px_rgba(0,0,0,0.15)] border border-pink-500/10 p-[2.5vw]">
                        {/* Location */}
                        <div className="flex items-center gap-[0.42vw] mb-[0.83vw]">
                            <MapPin className="w-[0.83vw] h-[0.83vw] text-gray-600" />
                            <span className="text-gray-600 text-[0.83vw]">New Delhi</span>
                        </div>

                        {/* Product Title */}
                        <h1 className="text-gray-800 text-[1.56vw] font-bold mb-[0.83vw]">
                            Blue-Themed Welcome Baby Room Decor
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-[0.63vw] mb-[1.25vw]">
                            <div className="flex gap-[0.42vw]">
                                {[1, 2, 3, 4].map((star) => (
                                    <Star key={star} className="w-[1.04vw] h-[1.04vw] fill-amber-300 text-amber-300" />
                                ))}
                            </div>
                            <span className="text-black text-[0.83vw] font-semibold">4.5</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-[0.83vw] mb-0">
                            <span className="text-black text-[1.56vw] font-semibold">₹2499/-</span>
                            <span className="text-zinc-400 text-[1.04vw] line-through">₹9999</span>
                            <div className="bg-gradient-to-r from-lime-500/0 to-lime-500/30 rounded-tr-[2.6vw] rounded-br-[2.6vw] px-[1.25vw] py-[0.21vw]">
                                <span className="text-lime-700 text-[1.04vw] font-semibold">24%OFF</span>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form Card */}
                    <div className="bg-neutral-50 rounded-[1.67vw] shadow-[2px_2px_80px_0px_rgba(0,0,0,0.15)] border border-pink-500/10 p-[2.5vw]">
                        <div className="flex flex-col gap-[2.5vw]">
                            {/* Warning Banner & Action Buttons */}
                            <div className="flex gap-[0.83vw]">
                                {/* Warning Box */}
                                <div className="flex-1 bg-white rounded-lg border-[0.08vw] border-gray-200 p-[1.25vw]">
                                    <div className="flex gap-[0.83vw] mb-[1.25vw]">
                                        <div className="w-[2.08vw] h-[2.08vw] bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-[1.25vw] font-bold">!</span>
                                        </div>
                                        <span className="text-yellow-800 text-[0.83vw] font-medium">
                                            Complete these steps to book:
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-[0.63vw] ml-[2.92vw]">
                                        <div className="flex items-center gap-[0.63vw]">
                                            <div className="w-[0.63vw] h-[0.63vw] bg-yellow-400 rounded-full flex-shrink-0" />
                                            <span className="text-yellow-800 text-[0.83vw] font-medium">
                                                Enter a valid 6-digit pincode
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-[0.63vw]">
                                            <div className="w-[0.63vw] h-[0.63vw] bg-yellow-400 rounded-full flex-shrink-0" />
                                            <span className="text-yellow-800 text-[0.83vw] font-medium">
                                                Select a booking date
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-[0.83vw]">
                                    <button className="w-[4.17vw] h-[4.17vw] bg-white rounded-[0.63vw] flex items-center justify-center hover:bg-gray-50 transition-colors">
                                        <Heart className="w-[1.67vw] h-[1.67vw] text-pink-900" />
                                    </button>
                                    <button className="w-[4.17vw] h-[4.17vw] bg-white rounded-[0.63vw] flex items-center justify-center hover:bg-gray-50 transition-colors">
                                        <ShoppingCart className="w-[1.67vw] h-[1.67vw] text-pink-900" />
                                    </button>
                                </div>
                            </div>

                            {/* Form Inputs */}
                            <div className="flex gap-[1.25vw]">
                                {/* Pincode Input */}
                                <div className="flex-1 flex flex-col gap-[0.83vw]">
                                    <label className="text-pink-900 text-[1.04vw] font-bold">
                                        Enter Pincode *
                                    </label>
                                    <input
                                        type="text"
                                        value={pincode}
                                        onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                        placeholder="Enter your area pincode"
                                        className="h-[3.33vw] px-[1.25vw] py-[0.52vw] bg-white rounded-[2.6vw] border-[0.08vw] border-gray-300 text-pink-900 text-[1.04vw] placeholder:text-pink-900/50 focus:outline-none focus:border-pink-900"
                                    />
                                </div>

                                {/* Date Input */}
                                <div className="flex-1 flex flex-col gap-[0.83vw]">
                                    <label className="text-pink-900 text-[1.04vw] font-bold">
                                        Select Date
                                    </label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        placeholder="dd/mm/yyyy"
                                        className="h-[3.33vw] px-[1.25vw] py-[0.52vw] bg-white rounded-[2.6vw] border-[0.08vw] border-gray-300 text-pink-900 text-[1.04vw] placeholder:text-pink-900/50 focus:outline-none focus:border-pink-900"
                                    />
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-[0.63vw]">
                                {/* Book Now Button */}
                                <button
                                    disabled={!isBookingEnabled}
                                    className={`flex-1 h-[3.33vw] px-[1.67vw] py-[0.63vw] rounded-[5.21vw] flex items-center justify-center gap-[0.13vw] uppercase font-semibold text-[0.83vw] transition-colors ${isBookingEnabled
                                        ? 'bg-pink-900 text-white hover:bg-pink-950'
                                        : 'bg-stone-300 text-white cursor-not-allowed'
                                        }`}
                                >
                                    {isBookingEnabled ? (
                                        <>
                                            <span>Book Now</span>
                                            <ChevronRight className="w-[1.67vw] h-[1.67vw] rotate-90" />
                                        </>
                                    ) : (
                                        <>
                                            <span>Please enter pincode & select date to book</span>
                                            <ChevronRight className="w-[1.67vw] h-[1.67vw] rotate-90" />
                                        </>
                                    )}
                                </button>

                                {/* See Details Button */}
                                <div className="inline-block rounded-[5.21vw] bg-gradient-to-l from-purple-500 to-pink-500 p-[0.1vw]">
                                    <button className="h-[3.33vw] px-[1.67vw] py-[0.63vw] rounded-[5.21vw] bg-white font-semibold text-[0.83vw] uppercase">
                                        <span className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                            See Details
                                        </span>
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBookingPage;