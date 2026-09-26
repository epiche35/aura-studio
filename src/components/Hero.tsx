import React, { useState, useEffect } from 'react';
import { ArrowDown, Calendar, Sparkles, MapPin } from 'lucide-react';
import { SALON_IMAGES, BUSINESS_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Limit parallax computation within hero viewport height for optimal performance
          const currentY = window.scrollY;
          if (currentY <= window.innerHeight * 1.5) {
            setScrollY(currentY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle smooth parallax offset (0.35x scroll rate)
  const parallaxOffset = scrollY * 0.35;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image with Parallax & Measured Scrim for WCAG AA compliance */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-12 -bottom-12 inset-x-0 w-full will-change-transform"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.08)`,
            transition: 'transform 0.05s linear',
          }}
        >
          <img
            src={SALON_IMAGES.hero}
            alt="Aura Studio luxury salon interior at dusk with backlit mirrors and leather chairs"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Measured dark luxury gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-[#09090b]/55" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-[#09090b]/90 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* DEMO WEBSITE badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#c5a880]/40 backdrop-blur-md mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#e8d7be]">
            DEMO WEBSITE
          </span>
          <span className="text-zinc-500 text-[10px]" aria-hidden="true">·</span>
          <span className="text-[11px] tracking-wide text-zinc-400">
            Portfolio Prototype
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-white leading-[1.08] mb-6 max-w-4xl text-balance">
          Your Style. <span className="italic font-light text-[#e8d7be]">Your Confidence.</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed mb-10 tracking-wide">
          Modern hair, beauty and grooming services designed around you.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md mx-auto mb-14">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase text-zinc-950 bg-[#c5a880] hover:bg-[#d8c29d] active:scale-[0.98] transition-all duration-200 rounded-sm shadow-xl shadow-[#c5a880]/15 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-medium tracking-[0.15em] uppercase text-zinc-200 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-700/80 hover:border-zinc-500 active:scale-[0.98] transition-all duration-200 rounded-sm backdrop-blur-sm"
          >
            <span>Explore Services</span>
          </a>
        </div>

        {/* Editorial Trust Markers */}
        <div className="pt-6 border-t border-zinc-800/80 w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs tracking-wider uppercase text-zinc-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Unisex Salon & Beauty</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">·</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Birgunj, Nepal (Demo)</span>
          </div>
          <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">·</span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[#c5a880] text-xs">NPR</span>
            <span>Sample Pricing</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-zinc-500 hover:text-[#c5a880] transition-colors p-2 hidden md:block"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
