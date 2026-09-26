import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SpecialOffer } from './components/SpecialOffer';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Booking } from './components/Booking';
import { Contact } from './components/Contact';
import { InstagramFeed } from './components/InstagramFeed';
import { Footer } from './components/Footer';
import { ServiceItem } from './types/salon';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [voucherCode, setVoucherCode] = useState<string>('');

  const handleOpenBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    handleOpenBooking();
  };

  const handleApplyVoucher = (code: string) => {
    setVoucherCode(code);
    handleOpenBooking();
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#c5a880]/30 selection:text-[#f3e8d7]">
      {/* Top Floating Demo Indicator Banner */}
      <div className="bg-zinc-950/90 border-b border-zinc-800 text-[11px] text-zinc-400 py-1.5 px-4 text-center">
        <span className="font-mono text-[#c5a880] mr-2">DEMO PORTFOLIO CONCEPT:</span>
        <span>Aura Studio is a fictional salon prototype designed by Zyro Web Studio for client evaluation.</span>
      </div>

      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <About />
        <SpecialOffer onApplyVoucher={handleApplyVoucher} />
        <Services onSelectService={handleSelectService} />
        <Gallery />
        <Reviews />
        <Booking
          selectedService={selectedService}
          voucherCode={voucherCode}
          onClearSelectedService={() => setSelectedService(null)}
        />
        <Contact />
        <InstagramFeed />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
