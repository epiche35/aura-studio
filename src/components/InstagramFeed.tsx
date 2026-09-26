import React from 'react';
import { Instagram, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { INSTAGRAM_POSTS, BUSINESS_INFO } from '../data/salonData';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 bg-[#0c0c10] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#c5a880] mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>Social Journal</span>
              <span aria-hidden="true">·</span>
              <span className="text-zinc-500 font-normal">Demo Account</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
              Follow Our Aesthetic Journey
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-mono text-[#e8d7be]">
              {BUSINESS_INFO.instagram}
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 border border-zinc-800 px-2 py-1 rounded">
              Demo Placeholder
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-lg overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-lg"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-[#c5a880]" />
                </div>

                <div>
                  <p className="text-[11px] text-zinc-300 line-clamp-3 leading-relaxed mb-3">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#e8d7be]">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-500">
            Instagram feed layout prototype. For genuine client projects, this feed connects to live Instagram Graph APIs or curated media grids.
          </p>
        </div>
      </div>
    </section>
  );
};
