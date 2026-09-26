import React from 'react';
import { ArrowUp, Sparkles, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-zinc-800 text-zinc-400 text-xs">
      {/* Top Banner Notice */}
      <div className="bg-[#0d0d12] border-b border-zinc-800/80 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs text-[#e8d7be]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
            <span className="font-medium">Portfolio Showcase:</span>
            <span className="text-zinc-400">Created to demonstrate modern salon web experiences for businesses in Nepal.</span>
          </div>
          <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
            Birgunj, Nepal · DEMO CONCEPT
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block">
              <span className="text-3xl font-serif tracking-[0.25em] font-semibold text-white hover:text-[#c5a880] transition-colors">
                AURA
              </span>
            </a>
            <p className="text-xs uppercase tracking-widest text-[#c5a880]">
              Unisex Salon & Beauty Studio · Birgunj
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed font-light max-w-sm">
              A modern salon prototype focused on personal style, grooming rituals and comfortable client hospitality in Birgunj, Nepal.
            </p>
            <div className="pt-2 text-[11px] text-zinc-500 space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Studio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services & Pricing</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Visual Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Experiences</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book Appointment</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Location & Contact</a></li>
            </ul>
          </div>

          {/* Popular Demo Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Sample Rituals
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>Precision Scissor Cut (NPR 500)</li>
              <li>Hot Towel Beard Shave (NPR 300)</li>
              <li>Dimensional Balayage (NPR 2,000+)</li>
              <li>Botanical Glow Facial (NPR 1,200)</li>
              <li>Signature Royal Duo (NPR 750)</li>
              <li>Keratin Hair Spa (NPR 1,500+)</li>
            </ul>
          </div>

          {/* Demo Project Credits */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#c5a880]">
              Concept Project
            </h4>
            <div className="p-4 rounded bg-[#0f0f15] border border-zinc-800/80 space-y-2">
              {/* Mandatory requirements */}
              <p className="text-xs font-medium text-white">
                Website concept by Zyro Web Studio
              </p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#e8d7be]">
                DEMO — Not an official Aura Studio website
              </p>
              <p className="text-[11px] text-zinc-500 leading-relaxed pt-1">
                Fictional salon portfolio project for demonstration to potential salon & barbershop clients.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Aura Studio Concept · Fictional Demonstration · All prices in NPR are sample figures.
          </div>

          <div className="flex items-center gap-6">
            <span>Concept by Zyro Web Studio</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-[#c5a880] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
