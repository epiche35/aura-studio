import React, { useState } from 'react';
import {
  Clock,
  Check,
  Calendar,
  Info,
  ArrowUpRight,
  Scissors,
  Wind,
  Crown,
  Palette,
  Flower2,
  Droplets,
  Hand,
  Footprints,
  Sparkles,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/salonData';
import { ServiceCategory, ServiceItem } from '../types/salon';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

// Map service ID to an elegant minimalist vector icon and category tag
const getServiceIcon = (id: string, category: ServiceCategory) => {
  switch (id) {
    case 'haircut':
      return {
        icon: Scissors,
        tag: 'Precision Cut',
      };
    case 'hair-styling':
      return {
        icon: Wind,
        tag: 'Blowout & Thermal',
      };
    case 'beard-grooming':
      return {
        icon: Scissors,
        tag: 'Blade & Towel',
      };
    case 'hair-coloring':
      return {
        icon: Palette,
        tag: 'Balayage & Tone',
      };
    case 'facial':
      return {
        icon: Flower2,
        tag: 'Botanical Therapy',
      };
    case 'hair-treatment':
      return {
        icon: Droplets,
        tag: 'Keratin & Steam',
      };
    case 'manicure':
      return {
        icon: Hand,
        tag: 'Hand & Cuticle',
      };
    case 'pedicure':
      return {
        icon: Footprints,
        tag: 'Foot Reflex Care',
      };
    case 'royal-grooming':
      return {
        icon: Crown,
        tag: 'Signature Package',
      };
    default:
      return {
        icon: Sparkles,
        tag: category.toUpperCase(),
      };
  }
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');

  const categories: { key: ServiceCategory; label: string }[] = [
    { key: 'all', label: 'All Services' },
    { key: 'hair', label: 'Hair & Cuts' },
    { key: 'grooming', label: 'Beard & Shave' },
    { key: 'color', label: 'Color & Spa' },
    { key: 'beauty', label: 'Skin & Nails' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#c5a880] mb-3">
              <span>Service Menu</span>
              <span aria-hidden="true">·</span>
              <span className="text-zinc-500 font-normal">Demo Pricing in NPR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              Curated rituals for hair, <span className="italic text-[#e8d7be]">skin & grooming</span>.
            </h2>
          </div>

          {/* Prominent Demo Pricing Notice as requested */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-sm bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-400 shrink-0">
            <Info className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
            <span>Prices shown are sample/demo prices.</span>
          </div>
        </div>

        {/* Category Tabs (Functional Segmented Control) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#121216] border border-zinc-800/80 rounded-lg max-w-xl mb-12 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase rounded-md transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-[#c5a880] text-zinc-950 shadow-md font-semibold'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const { icon: ServiceIcon, tag: categoryTag } = getServiceIcon(service.id, service.category);

            return (
              <div
                key={service.id}
                className="group rounded-lg border border-zinc-800 bg-[#0f0f13] hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black/60"
              >
                <div>
                  {/* Service Image Container with subtle zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border-b border-zinc-800">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter grayscale-[10%]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-transparent to-transparent opacity-80" />
                    
                    {/* Top Vector Categorization Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded border border-zinc-800/80">
                      <ServiceIcon className="w-3.5 h-3.5 text-[#c5a880]" />
                      <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-300">
                        {categoryTag}
                      </span>
                    </div>

                    {/* Clean unboxed duration & tag */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-200">
                      <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-zinc-300">
                        <Clock className="w-3 h-3 text-[#c5a880]" />
                        <span>{service.duration}</span>
                      </span>

                      {service.popular && (
                        <span className="bg-[#c5a880]/90 text-zinc-950 font-semibold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
                          Client Favorite
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Header with Title and Minimalist Vector Icon */}
                    <div className="flex items-start gap-3.5 mb-2.5">
                      <div className="w-9 h-9 rounded-md bg-[#16161c] border border-zinc-800 group-hover:border-[#c5a880]/50 group-hover:bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880] shrink-0 transition-all duration-300 shadow-sm">
                        <ServiceIcon className="w-4 h-4 stroke-[1.75]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-serif font-medium text-white group-hover:text-[#e8d7be] transition-colors leading-snug">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-3 pl-12.5">
                      <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Demo Price</span>
                      <div className="text-2xl font-serif text-[#e8d7be] tabular-nums font-normal">
                        NPR {service.priceNpr.toLocaleString()}
                        {service.isStartingPrice && <span className="text-sm font-sans font-light text-zinc-400 ml-1">+</span>}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Included features */}
                    <div className="space-y-1.5 pt-4 border-t border-zinc-800/80 mb-6">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-wider uppercase text-zinc-200 hover:text-zinc-950 bg-zinc-800/80 hover:bg-[#c5a880] active:scale-[0.98] transition-all duration-200 rounded-sm cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book This Service (Demo)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-500">
            * All services include consultation and complimentary hot or cold beverage in our Birgunj studio lounge. Prices are demonstration figures.
          </p>
        </div>
      </div>
    </section>
  );
};
