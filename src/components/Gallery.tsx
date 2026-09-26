import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_DATA } from '../data/salonData';
import { GalleryCategory, GalleryItem } from '../types/salon';
import { ImageModal } from './ImageModal';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filterTabs: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: 'All Showcase' },
    { key: 'haircuts', label: 'Haircuts' },
    { key: 'styling', label: 'Hair Styling' },
    { key: 'grooming', label: 'Beard Grooming' },
    { key: 'interior', label: 'Salon Interior' },
    { key: 'color', label: 'Hair Coloring' },
    { key: 'beauty', label: 'Beauty Services' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0c0c0f] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#c5a880] mb-3">
            <span>Visual Showcase</span>
            <span aria-hidden="true">·</span>
            <span className="text-zinc-500 font-normal">Aesthetic Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
            The studio craft in <span className="italic text-[#e8d7be]">still moments</span>.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            A glimpse into haircuts, grooming rituals, precision colorwork, and the tranquil studio ambiance of our Birgunj concept.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 pb-4 mb-10 overflow-x-auto scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase rounded-sm transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === tab.key
                  ? 'bg-[#c5a880] text-zinc-950 font-semibold shadow-md'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-lg overflow-hidden border border-zinc-800/80 bg-zinc-950 aspect-[4/3] cursor-pointer shadow-lg hover:border-zinc-600 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center filter grayscale-[12%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-black/60 backdrop-blur-sm text-zinc-300 group-hover:text-[#c5a880] group-hover:scale-110 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-[#c5a880] block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-lg font-serif font-medium text-white group-hover:text-[#e8d7be] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-zinc-500">
            Click any frame to view high-resolution editorial photography. All visual assets curated for portfolio demonstration.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
    </section>
  );
};
