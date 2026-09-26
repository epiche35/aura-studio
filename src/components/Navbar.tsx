import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Booking', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/92 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
          >
            <span className="text-2xl sm:text-3xl font-serif tracking-[0.25em] font-semibold text-zinc-100 group-hover:text-[#c5a880] transition-colors">
              AURA
            </span>
          </a>

          {/* Zone 2: 4-7 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-wider uppercase font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-zinc-300 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a880] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-zinc-950 bg-[#c5a880] hover:bg-[#d8c29d] active:scale-[0.98] transition-all duration-200 rounded-sm shadow-md shadow-[#c5a880]/10 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-[#c5a880]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#0f0f12] border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80">
                <span className="text-xl font-serif tracking-[0.25em] font-semibold text-zinc-100">
                  AURA
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-md transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="pt-2 pb-4 text-[11px] uppercase tracking-wider text-[#c5a880] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Demo Salon Project · Birgunj</span>
              </div>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 text-sm font-medium tracking-wide text-zinc-200 hover:text-[#c5a880] hover:bg-zinc-800/40 rounded transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-zinc-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 text-xs font-semibold tracking-wider uppercase text-zinc-950 bg-[#c5a880] hover:bg-[#d8c29d] rounded-sm text-center transition-colors cursor-pointer"
              >
                Book Appointment (Demo)
              </button>
              <p className="text-[11px] text-zinc-500 text-center leading-relaxed">
                Demo concept by Zyro Web Studio
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
