'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Star,
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Check,
  Play,
} from 'lucide-react';
import { ProductCard, productsData } from '../common/ProductCard';
import CurvedBanner from './CurvedBanner';
import ReviewsSection from './ReviewsSection';
import SimilarDecorSection from './SimilarDecorSection';
import RecentlyViewedSection from './RecentlyViewedSection';
import SeoCard from '../../components/common/SeoCard'

const WHY_CHOOSE_FEATURES = [
  { title: 'Trusted Platform', description: 'More than 10,000 celebrations every month' },
  { title: 'Professional Team', description: 'Follows all Safety Measures & Sanitisation Requirements' },
  { title: 'Complete Confidence', description: 'Browse all Verified Reviews and Original Photographs' },
  { title: '100% Refund', description: 'In case of non-availability, a complete refund of total amount is initiated' },
];

const FEATURE_IMAGES = [
  { src: '/product-detail-images/Frame%202147224803.png', label: 'Premium Quality' },
  { src: '/product-detail-images/Frame%202147224804.png', label: 'On-Time Setup' },
  { src: '/product-detail-images/Frame%202147224805.png', label: 'Secured Transaction' },
  { src: '/product-detail-images/Frame%202147224807.png', label: 'Original Photos' },
  { src: '/product-detail-images/Frame%202147224808.png', label: 'Original Reviews' },
  { src: '/product-detail-images/Frame%202147224809.png', label: 'Expert Decorators' },
];

const INCLUDES_LIST = [
  'Personalized decoration theme setup (as per event type)',
  'Floral arrangements (artificial or fresh flowers)',
  'Balloon décor and lighting setup',
  'Entry arch and backdrop decoration',
  'Table centerpieces and stage décor',
  'On-site coordination and installation',
  'Clean-up service after the event',
];

type TabType = 'includes' | 'overview' | 'cancellation';

interface ProductDetailProps {
  product?: {
    title: string;
    location: string;
    rating: number;
    price: number;
    originalPrice: number;
    discountPercent: number;
    images: string[];
    category?: string;
  };
}

const DEFAULT_PRODUCT = {
  title: 'Blue-Themed Welcome Baby Room Decor',
  location: 'New Delhi',
  rating: 4.5,
  price: 2499,
  originalPrice: 9999,
  discountPercent: 24,
  images: [
    'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=900&h=616&fit=crop',
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900&h=616&fit=crop',
    'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=900&h=616&fit=crop',
    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=900&h=616&fit=crop',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&h=616&fit=crop',
  ],
  category: 'Product Category',
};

export default function ProductDetail({ product = DEFAULT_PRODUCT }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [pincode, setPincode] = useState('');
  const [date, setDate] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('includes');
  const [mainCategory, setMainCategory] = useState<'recommended' | 'engagement'>('recommended');
  const [subCategory, setSubCategory] = useState('alphabets');
  const tabsRef = useRef<HTMLDivElement>(null);

  const SUB_CATEGORIES = [
    { id: 'alphabets', label: 'ALPHABETS FOIL BALLOONS' },
    { id: 'shape', label: 'SHAPE FOIL BALLOONS' },
    { id: 'cake', label: 'CAKE TABLE' },
    { id: 'digit', label: 'DIGIT FOIL BALLOONS' },
    { id: 'entry', label: 'ENTRY GATE ARCH' },
    { id: 'lights', label: 'LIGHTS' },
    { id: 'occasions', label: 'OCCASIONS BOUNTING' },
    { id: 'led', label: 'LED DIGIT' },
    { id: 'neon', label: 'NEON LIGHT' },
    { id: 'part', label: 'PART' },
  ];

  const scrollToTabs = () => {
    tabsRef.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab('includes');
  };

  const p = product || DEFAULT_PRODUCT;
  const images = p.images || DEFAULT_PRODUCT.images;
  const thumbnails = images;

  const nextImage = () => setSelectedImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  const isBookingEnabled = pincode.length === 6 && date !== '';

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Breadcrumbs */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-28 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">&gt;</span>
            <Link href="/categories" className="text-gray-500 hover:text-purple-600 transition-colors">
              Product Category
            </Link>
            <span className="text-gray-400">&gt;</span>
            <Link href="/categories" className="text-gray-500 hover:text-purple-600 transition-colors">
              Product
            </Link>
            <span className="text-gray-400">&gt;</span>
            <span className="px-3 py-1.5 rounded-full bg-[#5E213E] text-white font-medium">
              Product Detail
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-28 py-8 lg:py-12 w-full overflow-x-hidden">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Image Gallery + Why Choose DKGPro */}
          <div className="lg:w-[48%] flex flex-col gap-8">
            {/* Image Gallery */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={images[selectedImage]}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-20 bg-gray-400/80 flex items-center justify-center hover:bg-gray-500/90 transition-colors rounded-r"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-20 bg-[#5E213E] flex items-center justify-center hover:bg-[#4a1a30] transition-colors rounded-l"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-white" strokeWidth={2} />
                </button>
                {/* Play icon - bottom right */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#5E213E] flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#4a1a30] transition-colors">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </div>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-[#5E213E]' : 'border-gray-200'
                    }`}
                  >
                    <img src={thumb} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Why Choose DKGPro */}
            <div className="bg-[#FFF8FD] rounded-2xl shadow-md border border-purple-100 p-6 lg:p-8">
              <h2 className="text-[#5E213E] text-lg font-black tracking-widest uppercase mb-6">
                WHY CHOOSE DKGPro?
              </h2>
              <ul className="space-y-4">
                {WHY_CHOOSE_FEATURES.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-gray-700 text-sm lg:text-base">
                      <span className="font-bold text-gray-900">{feature.title}</span>
                      <span> - {feature.description}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Product Info + Booking */}
          <div className="lg:w-[52%] flex flex-col gap-6">
            {/* Product Info Card + Heart/Cart */}
            <div className="flex gap-4">
              <div className="flex-1 bg-[#FFF8FD] rounded-2xl shadow-md border border-purple-100 p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600 text-sm">{p.location}</span>
                </div>
                <h1 className="text-gray-900 text-xl lg:text-2xl font-bold mb-3">{p.title}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4].map((s) => (
                      <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <Star className="w-5 h-5 fill-amber-400/50 text-amber-400" />
                  </div>
                  <span className="text-gray-800 font-semibold">{p.rating}</span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-gray-900 text-xl font-bold">₹{p.price}/-</span>
                  <span className="text-gray-400 line-through">₹{p.originalPrice}</span>
                  <span className="px-3 py-1 rounded-r-full bg-green-100 text-green-700 text-sm font-semibold">
                    {p.discountPercent}% OFF
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                  <Heart className="w-6 h-6 text-[#5E213E]" />
                </button>
                <button className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                  <ShoppingCart className="w-6 h-6 text-[#5E213E]" />
                </button>
              </div>
            </div>

            {/* Booking Form Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 lg:p-8">
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-amber-50 rounded-xl border border-amber-200 p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                    <span className="text-amber-800 font-medium">Complete these steps to book:</span>
                  </div>
                  <ul className="ml-11 space-y-1">
                    <li className="flex items-center gap-2 text-amber-800 text-sm">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      Enter a valid 6-digit pincode
                    </li>
                    <li className="flex items-center gap-2 text-amber-800 text-sm">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      Select a booking date
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#5E213E] font-bold text-sm mb-2">Enter Pincode *</label>
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="Enter your area pincode"
                      className="w-full h-12 px-4 rounded-full border border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#5E213E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#5E213E] font-bold text-sm mb-2">Select Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full h-12 px-4 rounded-full border border-gray-300 text-gray-800 focus:outline-none focus:border-[#5E213E]"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    disabled={!isBookingEnabled}
                    className={`flex-1 h-12 px-6 rounded-full flex items-center justify-center gap-2 uppercase font-semibold text-sm transition-colors ${
                      isBookingEnabled
                        ? 'bg-[#5E213E] text-white hover:bg-[#4a1a30]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isBookingEnabled ? (
                      <>Book Now <ChevronRight className="w-5 h-5" /></>
                    ) : (
                      <>Please enter pincode & select date to book <ChevronRight className="w-5 h-5" /></>
                    )}
                  </button>
                  <button
                    onClick={scrollToTabs}
                    className="h-12 px-6 rounded-full border-2 border-[#5E213E] font-semibold text-sm uppercase text-[#5E213E] hover:bg-[#FFF8FD] transition-colors"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Cards - using images from product-detail-images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {FEATURE_IMAGES.map(({ src, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col items-center gap-2 shadow-sm overflow-hidden"
                >
                  <div className="w-full aspect-square max-w-[100px] flex items-center justify-center">
                    <img
                      src={src}
                      alt={label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[#5E213E] text-xs font-semibold text-center leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Tabs - Angular interlocking design */}
        <div ref={tabsRef} className="mt-12 lg:mt-16">
          <div className="relative flex items-center h-16">
            {/* Includes - straight left, angled right */}
            <button
              onClick={() => setActiveTab('includes')}
              className={`relative h-full px-8 lg:px-12 text-sm font-bold uppercase tracking-tight transition-all ${
                activeTab === 'includes' ? 'z-30 text-white' : 'z-10 text-gray-600'
              }`}
              style={{ clipPath: 'polygon(0 0, calc(100% - 36px) 0, 100% 100%, 0 100%)', width: '260px' }}
            >
              <div
                className={`absolute inset-0 ${activeTab === 'includes' ? 'bg-[#5E213E]' : 'bg-[#E8E8E8]'}`}
                style={{ clipPath: 'polygon(0 0, calc(100% - 36px) 0, 100% 100%, 0 100%)' }}
              />
              <span className="relative z-10 flex items-center h-full">Includes</span>
            </button>
            {/* Overview - angled both sides, connects between tabs */}
            <button
              onClick={() => setActiveTab('overview')}
              className={`relative h-full px-8 lg:px-12 text-sm font-bold uppercase tracking-tight transition-all -ml-8 ${
                activeTab === 'overview' ? 'z-30 text-white' : 'z-20 text-gray-600'
              }`}
              style={{ clipPath: 'polygon(36px 0, calc(100% - 36px) 0, 100% 100%, 0 100%)', width: '280px' }}
            >
              <div
                className={`absolute inset-0 ${activeTab === 'overview' ? 'bg-[#5E213E]' : 'bg-[#E8E8E8]'}`}
                style={{ clipPath: 'polygon(36px 0, calc(100% - 36px) 0, 100% 100%, 0 100%)' }}
              />
              <span className="relative z-10 flex items-center h-full">Overview</span>
            </button>
            {/* Cancellation Policy - angled left, straight right */}
            <button
              onClick={() => setActiveTab('cancellation')}
              className={`relative h-full px-8 lg:px-12 text-sm font-bold uppercase tracking-tight transition-all -ml-8 ${
                activeTab === 'cancellation' ? 'z-30 text-white' : 'z-10 text-gray-600'
              }`}
              style={{ clipPath: 'polygon(36px 0, 100% 0, 100% 100%, 0 100%)', width: '340px' }}
            >
              <div
                className={`absolute inset-0 ${activeTab === 'cancellation' ? 'bg-[#5E213E]' : 'bg-[#E8E8E8]'}`}
                style={{ clipPath: 'polygon(36px 0, 100% 0, 100% 100%, 0 100%)' }}
              />
              <span className="relative z-10 flex items-center h-full">Cancellation Policy</span>
            </button>
          </div>

          <div className="bg-white rounded-b-3xl shadow-lg p-8 lg:p-12 border border-t-0 border-gray-200">
            {activeTab === 'includes' && (
              <ul className="space-y-4 text-gray-700">
                {INCLUDES_LIST.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#5E213E] text-xl">•</span>
                    <span className="text-base lg:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === 'overview' && (
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-pink-900 to-purple-600 p-8 lg:p-12">
                <h2 className="text-white text-xl font-bold uppercase mb-6">Overview</h2>
                <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-4xl">
                  Elevate your environment into an unforgettable experience with our expert decoration services.
                  No matter the occasion—be it a birthday party, wedding, corporate gathering, or festive
                  celebration—our dedicated team specializes in crafting distinctive designs that harmonize
                  creativity, color, and visual appeal.
                </p>
                <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-4xl mt-4">
                  We pride ourselves on our meticulous attention to detail, ensuring that every aspect—from the
                  lighting to the layout—aligns seamlessly with your event&apos;s theme and atmosphere.
                </p>
              </div>
            )}
            {activeTab === 'cancellation' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Cancellation Policy</h3>
                <p className="text-gray-600">We understand that plans can change. Please review our cancellation policy below:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#5E213E]">•</span>
                    Cancellations made 7+ days before the event: Full refund
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5E213E]">•</span>
                    Cancellations made 3-7 days before: 50% refund
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5E213E]">•</span>
                    Cancellations made within 48 hours: No refund
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5E213E]">•</span>
                    Rescheduling is allowed up to 72 hours before the event
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* CUSTOMIZE YOUR BOOKING Section */}
        <div className="mt-12 lg:mt-16 overflow-hidden">
          <div className="bg-[#FAF5F9] rounded-2xl p-6 lg:p-8 border border-purple-100/50 overflow-hidden">
            <h2 className="text-gray-900 text-xl lg:text-2xl font-bold mb-6">CUSTOMIZE YOUR BOOKING</h2>

            {/* Main Category Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setMainCategory('recommended')}
                className={`px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wide transition-colors ${
                  mainCategory === 'recommended'
                    ? 'bg-purple-400 text-white'
                    : 'bg-white text-gray-500 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                RECOMMENDED
              </button>
              <button
                onClick={() => setMainCategory('engagement')}
                className={`px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wide transition-colors ${
                  mainCategory === 'engagement'
                    ? 'bg-purple-400 text-white'
                    : 'bg-white text-gray-500 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                ENGAGEMENT ACTIVITY
              </button>
            </div>

            {/* Secondary Filter Buttons - horizontally scrollable */}
            <div
              className="customize-scroll overflow-x-auto overflow-y-hidden pb-4 mb-6 max-w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex gap-3 w-max">
                {SUB_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSubCategory(cat.id)}
                    className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wide whitespace-nowrap transition-colors ${
                      subCategory === cat.id
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                        : 'bg-white text-purple-600 border border-purple-200 hover:bg-purple-50'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Cards - horizontally scrollable */}
            <div
              className="customize-scroll overflow-x-auto pb-4 w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex gap-6">
                {productsData.slice(0, 8).map((product) => (
                  <div key={product.id} className="w-64 min-w-[256px] flex-shrink-0">
                    <ProductCard product={product} compact />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Curved Banner - Photography, Catering, Games, Special Effects */}
        <div className="mt-12 lg:mt-16">
          <CurvedBanner />
        </div>

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Similar Decor Section */}
        <SimilarDecorSection />

        {/* Recently Viewed Section */}
        <RecentlyViewedSection />

        {/* Seo Card Section */}
        <SeoCard />
      </div>

      <style jsx global>{`
        .customize-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
