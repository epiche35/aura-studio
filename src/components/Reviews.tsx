import React from 'react';
import { Star, MessageSquareQuote, ShieldAlert } from 'lucide-react';
import { REVIEWS_DATA } from '../data/salonData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#c5a880] mb-3">
              <span>Client Experiences — DEMO</span>
              <span aria-hidden="true">·</span>
              <span className="text-zinc-500 font-normal">Sample Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              Client Experiences — <span className="italic text-[#e8d7be]">DEMO</span>
            </h2>
          </div>

          {/* Prominent Demo Notice */}
          <div className="flex items-start gap-2.5 p-3 rounded-md bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-400 max-w-md">
            <ShieldAlert className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Notice:</strong> The reviews below are fictional sample reviews created to demonstrate website layout and client social proof. They do not represent real individuals.
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-lg bg-[#0e0e13] border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between shadow-xl relative group"
            >
              <div>
                {/* Header with Stars and Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#c5a880] text-[#c5a880]"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-500">
                    Sample review — Demo
                  </span>
                </div>

                {/* Service Tag */}
                <div className="text-xs text-[#e8d7be] font-medium mb-3">
                  Service: {rev.service}
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author / Identity Footer */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-white tracking-wide">
                    {rev.reviewerAlias}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {rev.date}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a880] border border-[#c5a880]/30 px-2 py-0.5 rounded">
                    Demo Showcase
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Context Banner */}
        <div className="mt-12 p-6 rounded-lg bg-zinc-950 border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <MessageSquareQuote className="w-5 h-5 text-[#c5a880] shrink-0" />
            <span>
              Real client websites built by Zyro Web Studio integrate authentic verified Google Reviews or custom feedback widgets.
            </span>
          </div>
          <span className="text-[11px] font-mono uppercase text-zinc-500 whitespace-nowrap">
            Zero Fake Testimonials Policy
          </span>
        </div>
      </div>
    </section>
  );
};
