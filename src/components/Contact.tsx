import React, { useState } from 'react';
import { Phone, MessageCircle, Instagram, Clock, MapPin, Copy, Check, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const Contact: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard?.writeText(BUSINESS_INFO.address).catch(() => {});
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(BUSINESS_INFO.phone).catch(() => {});
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#c5a880] mb-3">
            <span>Connect & Visit</span>
            <span aria-hidden="true">·</span>
            <span className="text-zinc-500 font-normal">Demo Information</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
            Studio Location & <span className="italic text-[#e8d7be]">Contact Details</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            All contact channels, address details, and business hours below are demonstration placeholders prepared for prospective salon clients.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Phone */}
          <div className="p-6 rounded-lg bg-[#0e0e13] border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c5a880] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mb-1">
                Studio Phone (Demo)
              </div>
              <div className="text-base font-medium text-white mb-2 font-mono">
                {BUSINESS_INFO.phone}
              </div>
              <p className="text-xs text-zinc-400 font-light">
                Clearly marked demo phone placeholder.
              </p>
            </div>
            <button
              onClick={handleCopyPhone}
              className="mt-4 pt-4 border-t border-zinc-800/80 text-xs text-[#c5a880] hover:text-[#e8d7be] flex items-center gap-1.5 cursor-pointer font-medium"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPhone ? 'Copied' : 'Copy Demo Number'}</span>
            </button>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="p-6 rounded-lg bg-[#0e0e13] border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c5a880] mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mb-1">
                WhatsApp (Demo)
              </div>
              <div className="text-base font-medium text-white mb-2 font-mono">
                {BUSINESS_INFO.whatsapp}
              </div>
              <p className="text-xs text-zinc-400 font-light">
                Direct messaging simulation for consultations.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800/80 text-xs text-zinc-500 flex items-center gap-1">
              <span>Placeholder link · Demo</span>
            </div>
          </div>

          {/* Card 3: Instagram */}
          <div className="p-6 rounded-lg bg-[#0e0e13] border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c5a880] mb-4">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mb-1">
                Instagram (Demo)
              </div>
              <div className="text-base font-medium text-white mb-2">
                {BUSINESS_INFO.instagram}
              </div>
              <p className="text-xs text-zinc-400 font-light">
                Curated portfolio feed placeholder.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800/80 text-xs text-zinc-500 flex items-center gap-1">
              <span>Demo handle · Not active</span>
            </div>
          </div>

          {/* Card 4: Hours */}
          <div className="p-6 rounded-lg bg-[#0e0e13] border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c5a880] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                Opening Hours (Demo)
              </div>
              <div className="space-y-1.5 text-xs text-zinc-300">
                {BUSINESS_INFO.openingHours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-zinc-400">{h.days}:</span>
                    <span className="font-mono text-zinc-200">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800/80 text-xs text-zinc-500">
              Sample schedule data
            </div>
          </div>
        </div>

        {/* Address & Google Maps Placeholder */}
        <div className="rounded-xl border border-zinc-800 bg-[#0e0e13] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Location Info */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800">
              <div>
                <div className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#c5a880] font-semibold mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Studio Address · Demo</span>
                </div>

                <h3 className="text-2xl font-serif text-white mb-3">
                  Adarshnagar, Birgunj
                </h3>

                <p className="text-sm text-zinc-300 font-light leading-relaxed mb-4">
                  {BUSINESS_INFO.address}
                </p>

                <p className="text-xs text-zinc-400 mb-6">
                  Reference: {BUSINESS_INFO.landmark}
                </p>

                <div className="p-4 rounded bg-zinc-900/80 border border-zinc-800/80 text-xs text-zinc-400 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-200 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                    <span>Demo Location Confirmation</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    This location is a fictional address placed in the central commercial district of Birgunj, Nepal, to showcase geographic local SEO and map presentation.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800 flex flex-wrap gap-3">
                <button
                  onClick={handleCopyAddress}
                  className="px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAddress ? 'Address Copied' : 'Copy Demo Address'}</span>
                </button>
              </div>
            </div>

            {/* Right Map Placeholder */}
            <div className="lg:col-span-7 bg-[#14141a] relative min-h-[360px] flex items-center justify-center p-6 overflow-hidden">
              {/* Stylized Dark Grid Map Graphic */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                </svg>
              </div>

              {/* Simulated Map Arteries / Roads */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-zinc-600/60 transform -rotate-6" />
                <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-zinc-600/60 transform rotate-12" />
                <div className="absolute top-0 bottom-0 right-1/4 w-1 bg-zinc-700/60 transform -rotate-3" />
              </div>

              {/* Center Map Pin Card */}
              <div className="relative z-10 p-6 rounded-lg bg-[#09090c]/90 border border-[#c5a880]/60 backdrop-blur-md max-w-sm text-center shadow-2xl">
                <div className="w-12 h-12 rounded-full bg-[#c5a880]/20 border border-[#c5a880] flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#c5a880]/20 animate-pulse">
                  <MapPin className="w-6 h-6 text-[#c5a880]" />
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#c5a880] mb-1">
                  Google Maps Placeholder
                </div>
                <h4 className="text-base font-serif text-white font-medium mb-1">
                  Aura Studio · Birgunj
                </h4>
                <p className="text-xs text-zinc-400 font-mono mb-4">
                  27.0135° N, 84.8773° E (Adarshnagar)
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  <Navigation className="w-3 h-3 text-[#c5a880]" />
                  <span>Simulated Map View for Client Review</span>
                </div>
              </div>

              {/* Watermark in corner */}
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-zinc-600">
                Google Maps API Prototype Frame
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
