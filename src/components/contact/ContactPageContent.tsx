"use client";

import { useState } from "react";
import { MapPin, Mail, MessageCircle } from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    title: "Locate Us",
    detail: "2525 Michigan Ave, Santa Monica, CA 90404, United States",
  },
  {
    icon: Mail,
    title: "Mail Us Anytime",
    detail: "Support@DKGPro.in",
  },
  {
    icon: MessageCircle,
    title: "Chat With Us",
    detail: "Nam mollis tortor a quam aliquet condimentum pharetra.",
  },
];

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    serviceType: "",
    email: "",
    otherDetails: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Support Information */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
              Support When You Need It Most
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Integer sodales auctor nibh, ultricies auctor massa rhoncus sed.
            </p>
            <div className="flex flex-col gap-6 mt-4">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-black">{item.title}</span>
                    <span className="text-gray-600 text-sm sm:text-base">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 sm:p-10 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-8">
              Say, Hello!
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="border-b border-gray-300 pb-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent text-black placeholder-gray-400 outline-none text-base"
                />
              </div>
              <div className="border-b border-gray-300 pb-2">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full bg-transparent text-black placeholder-gray-400 outline-none text-base"
                />
              </div>
              <div className="border-b border-gray-300 pb-2">
                <input
                  type="text"
                  name="serviceType"
                  placeholder="Type of service required"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full bg-transparent text-black placeholder-gray-400 outline-none text-base"
                />
              </div>
              <div className="border-b border-gray-300 pb-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent text-black placeholder-gray-400 outline-none text-base"
                />
              </div>
              <div className="border-b border-gray-300 pb-2">
                <input
                  type="text"
                  name="otherDetails"
                  placeholder="Other Details"
                  value={formData.otherDetails}
                  onChange={handleChange}
                  className="w-full bg-transparent text-black placeholder-gray-400 outline-none text-base"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-base hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
