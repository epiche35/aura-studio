import React from 'react';
import { Sparkles, Check, Scissors, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';
import { SALON_IMAGES } from '../data/salonData';

export const About: React.FC = () => {
  const principles = [
    {
      icon: Scissors,
      title: 'Personalized Consultation',
      description: 'Every appointment begins with understanding your natural hair texture, lifestyle routine, and aesthetic preference.',
    },
    {
      icon: ShieldCheck,
      title: 'Meticulous Hygiene Standards',
      description: 'Medical-grade UV sanitization of shears and razors, fresh single-use towels, and pristine styling stations.',
    },
    {
      icon: HeartHandshake,
      title: 'Comfortable Unisex Space',
      description: 'A quiet, contemporary studio environment designed equally for men and women seeking refined grooming.',
    },
    {
      icon: Eye,
      title: 'Transparent Demo Experience',
      description: 'Clear pricing guidelines, genuine attention to craft, and honest portfolio presentation for prospective salon clients.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#09090b] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#c5a880] mb-3">
            <span>About The Concept</span>
            <span aria-hidden="true">·</span>
            <span className="text-zinc-500 font-normal">Fictional Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
            Crafting confidence through <span className="italic text-[#e8d7be]">mindful grooming</span>.
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lg sm:text-xl text-zinc-200 font-light leading-relaxed">
              Aura Studio is a modern unisex salon concept focused on personal style, grooming and a comfortable client experience.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Rooted in the vibrant urban rhythm of Birgunj, this studio prototype demonstrates how elevated aesthetics, clean minimalist architecture, and unhurried craftsmanship can transform everyday haircut and beauty routines into rejuvenating rituals.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Whether it is a sharp scissor fade, classic straight-razor hot towel shave, multi-dimensional hair coloring, or a soothing botanical facial, every service is planned with attention to individual client care.
            </p>

            {/* Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-800/80">
              {principles.map((item) => (
                <div key={item.title} className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-100 text-sm font-medium">
                    <item.icon className="w-4 h-4 text-[#c5a880] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
              <p>
                <strong className="text-zinc-200">Portfolio Note:</strong> This presentation illustrates how modern salons in Birgunj and throughout Nepal can present their brand identity, services, and online bookings to clientele with high-end credibility.
              </p>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative border */}
              <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
                <img
                  src={SALON_IMAGES.styling}
                  alt="Stylist precision cutting textured hair at Aura Studio"
                  className="w-full aspect-[4/3] object-cover object-center filter grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/60 border-t border-zinc-800/80">
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                    <span className="font-serif italic text-base text-[#e8d7be]">Editorial Focus</span>
                    <span className="text-zinc-500">Unisex Grooming Concept</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    Designed without generic templates or artificial clutter — emphasizing photography, readable typography, and effortless booking.
                  </p>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-[#121216] border border-zinc-700/80 p-4 sm:p-5 rounded-md shadow-2xl max-w-[240px] hidden sm:block">
                <div className="text-2xl font-serif font-light text-[#e8d7be] mb-1">
                  100%
                </div>
                <div className="text-xs font-medium text-zinc-200 uppercase tracking-wider mb-1">
                  Unisex Studio
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  Tailored styling chairs for all clients in a cohesive, luxury setting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
