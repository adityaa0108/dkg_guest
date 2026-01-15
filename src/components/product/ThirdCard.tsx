'use client';

import { useState } from 'react';
import { Clock, Users, Calendar } from 'lucide-react';

type TabType = 'includes' | 'overview' | 'cancellation';

export default function EventDecorationTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <div className="w-full min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation with Diagonal Edges */}
        <div className="relative flex items-center h-20">
          {/* Includes Tab */}
          <button
            onClick={() => setActiveTab('includes')}
            className={`relative h-full px-12 text-base font-bold uppercase tracking-tight transition-all z-10 ${
              activeTab === 'includes'
                ? 'text-[#5E213E]'
                : 'text-[#5E213E]'
            }`}
            style={{
              clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 100%, 0 100%)',
              width: '350px'
            }}
          >
            <div className={`absolute inset-0 ${
              activeTab === 'includes' ? 'bg-[#FFF9FC]' : 'bg-[#E8D5DF]'
            }`} 
            style={{
              clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 100%, 0 100%)'
            }}></div>
            <span className="relative z-10">Includes</span>
          </button>

          {/* Overview Tab */}
          <button
            onClick={() => setActiveTab('overview')}
            className={`relative h-full px-12 text-base font-bold uppercase tracking-tight transition-all z-20 -ml-12 ${
              activeTab === 'overview'
                ? 'text-white'
                : 'text-white'
            }`}
            style={{
              clipPath: 'polygon(50px 0, calc(100% - 50px) 0, 100% 100%, 0 100%)',
              width: '370px'
            }}
          >
            <div className={`absolute inset-0 ${
              activeTab === 'overview' ? 'bg-[#5E213E]' : 'bg-[#5E213E]'
            }`}
            style={{
              clipPath: 'polygon(50px 0, calc(100% - 50px) 0, 100% 100%, 0 100%)'
            }}></div>
            <span className="relative z-10">Overview</span>
          </button>

          {/* Cancellation Policy Tab */}
          <button
            onClick={() => setActiveTab('cancellation')}
            className={`relative h-full px-12 text-base font-bold uppercase tracking-tight transition-all z-10 -ml-12 ${
              activeTab === 'cancellation'
                ? 'text-[#5E213E]'
                : 'text-gray-500'
            }`}
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% 100%, 0 100%)',
              width: '400px'
            }}
          >
            <div className={`absolute inset-0 ${
              activeTab === 'cancellation' ? 'bg-[#FFF9FC]' : 'bg-[#C9C9C9]'
            }`}
            style={{
              clipPath: 'polygon(50px 0, 100% 0, 100% 100%, 0 100%)'
            }}></div>
            <span className="relative z-10">Cancellation Policy</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-3xl shadow-lg p-12 border border-gray-200">
          {activeTab === 'includes' && (
            <div className="space-y-4">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#5E213E] mr-3 mt-1.5 text-xl">•</span>
                  <span className="text-lg leading-relaxed">Personalized decoration theme setup (as per event type)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5E213E] mr-3 mt-1.5 text-xl">•</span>
                  <span className="text-lg leading-relaxed">Floral arrangements (artificial or fresh flowers)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5E213E] mr-3 mt-1.5 text-xl">•</span>
                  <span className="text-lg leading-relaxed">Balloon décor and lighting setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5E213E] mr-3 mt-1.5 text-xl">•</span>
                  <span className="text-lg leading-relaxed">Entry arch and backdrop decoration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5E213E] mr-3 mt-1.5 text-xl">•</span>
                  <span className="text-lg leading-relaxed">Table centerpieces and stage décor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5E213E] mr-3 mt-1.5 text-xl">•</span>
                  <span className="text-lg leading-relaxed">On-site coordination and installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5E213E] mr-3 mt-1.5 text-xl">•</span>
                  <span className="text-lg leading-relaxed">Clean-up service after the event</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="relative rounded-3xl border-b-4 border-purple-500 overflow-hidden -mx-12 -my-12">
              {/* Background Layers */}
              <div className="absolute inset-0 bg-pink-900" />
              <div className="absolute right-0 top-0 w-4/5 h-full bg-gradient-to-l from-purple-500 to-pink-500 opacity-60" />
              
              {/* Content */}
              <div className="relative z-10 p-12">
                <h2 className="text-white text-2xl font-bold uppercase tracking-tight mb-12 text-center">
                  Overview
                </h2>
                
                <p className="text-pink-900/70 text-2xl leading-9 mb-16 max-w-5xl">
                  Elevate your environment into an unforgettable experience with our expert decoration services. No matter the occasion—be it a birthday party, wedding, corporate gathering, or festive celebration—our dedicated team specializes in crafting distinctive designs that harmonize creativity, color, and visual appeal.
                  <br /><br />
                  We pride ourselves on our meticulous attention to detail, ensuring that every aspect—from the lighting to the layout—aligns seamlessly with your event's theme and atmosphere. Our goal is to create a cohesive and immersive experience that leaves a lasting impression on your guests.
                </p>

                {/* Info Cards */}
                <div className="flex gap-16">
                  {/* Setup Duration */}
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-l from-purple-500 to-pink-500 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="text-gray-800 text-lg font-semibold">Setup Duration</div>
                      <div className="text-gray-600 text-sm font-medium">2-3 Hour</div>
                    </div>
                  </div>

                  {/* Team Size */}
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-l from-purple-500 to-pink-500 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="text-gray-800 text-lg font-semibold">Team Size</div>
                      <div className="text-gray-600 text-sm font-medium">4-6 People</div>
                    </div>
                  </div>

                  {/* Advance Booking */}
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-l from-purple-500 to-pink-500 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="text-gray-800 text-lg font-semibold">Advance Booking</div>
                      <div className="text-gray-600 text-sm font-medium">48 Hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cancellation' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cancellation Policy</h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  We understand that plans can change. Please review our cancellation policy below:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#5E213E] mr-3 mt-1.5 text-xl">•</span>
                    <span className="text-lg leading-relaxed">Cancellations made 7+ days before the event: Full refund</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5E213E] mr-3 mt-1.5 text-xl">•</span>
                    <span className="text-lg leading-relaxed">Cancellations made 3-7 days before: 50% refund</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5E213E] mr-3 mt-1.5 text-xl">•</span>
                    <span className="text-lg leading-relaxed">Cancellations made within 48 hours: No refund</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5E213E] mr-3 mt-1.5 text-xl">•</span>
                    <span className="text-lg leading-relaxed">Rescheduling is allowed up to 72 hours before the event</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}