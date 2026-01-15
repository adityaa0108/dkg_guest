import React, { useState } from 'react';
import { ArrowRight, Linkedin, Facebook, Dribbble } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const footerSections: FooterSection[] = [
    {
      title: 'QUICK LINKS',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Features', href: '/features' },
      ],
    },
    {
      title: 'EXPLORE',
      links: [
        { label: 'Our Story', href: '/story' },
        { label: 'Meet the Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press & Media', href: '/press' },
      ],
    },
    {
      title: 'SUPPORT',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Report an Issue', href: '/report' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Live Chat Support', href: '/chat' },
      ],
    },
    {
      title: 'LEGAL',
      links: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookies Policy', href: '/cookies' },
        { label: 'Data Processing', href: '/data-processing' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
  ];

  const handleNewsletterSubmit = () => {
    if (email && email.includes('@')) {
      console.log('Newsletter signup:', email);
      setEmail('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNewsletterSubmit();
    }
  };

  return (
    <footer className="w-full bg-[#001A38] px-6 md:px-12 lg:px-24 py-12 md:py-16">
      <div className="max-w-[1600px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-start items-start gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h3 className="text-white text-xs md:text-sm font-semibold font-['Inter'] uppercase tracking-wider">
                  {section.title}
                </h3>
                <nav className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-white/60 text-sm md:text-base font-normal font-['Inter'] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="px-6 py-6 bg-white rounded-xl flex flex-col gap-4 w-full lg:w-auto lg:min-w-[400px] xl:min-w-[500px]">
            <div className="flex flex-col gap-4">
              <h3 className="text-pink-900 text-lg md:text-xl font-bold font-['Inter']">
                Signup to our Newsletter
              </h3>
              <div className="w-full">
                <div className="h-12 bg-pink-50 rounded-lg flex items-center overflow-hidden">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter Email address"
                    className="flex-1 h-full px-4 bg-transparent text-pink-900 text-sm md:text-base font-normal font-['Inter'] placeholder:text-pink-900/60 outline-none"
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="h-full px-6 bg-gradient-to-r from-pink-500 to-purple-500 flex justify-center items-center gap-2 hover:from-pink-600 hover:to-purple-600 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-white text-sm md:text-base font-medium font-['Inter'] whitespace-nowrap">
                      Submit
                    </span>
                    <ArrowRight className="w-4 h-4 text-white" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <div className="flex items-center">
              <span className="text-white text-2xl md:text-3xl font-bold font-['Inter']">
                DKG<span className="font-light">Pro</span>
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex-1 text-center text-white/60 text-sm md:text-base font-normal font-['Inter']">
            © 2025 Company Name. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex-1 flex justify-end items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;