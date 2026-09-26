import React, { useState } from 'react';
import { Tag, Sparkles, Check, ArrowRight } from 'lucide-react';

interface SpecialOfferProps {
  onApplyVoucher: (code: string) => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ onApplyVoucher }) => {
  const [copied, setCopied] = useState(false);
  const promoCode = 'AURA10-DEMO';

  const handleCopyAndApply = () => {
    navigator.clipboard?.writeText(promoCode).catch(() => {});
    setCopied(true);
    onApplyVoucher(promoCode);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-12 bg-[#0d0d10] border-y border-zinc-800/80 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-[#c5a880]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-xl border border-[#c5a880]/30 bg-gradient-to-r from-zinc-950 via-[#141419] to-zinc-950 p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#c5a880] font-semibold">
              <Tag className="w-3.5 h-3.5" />
              <span>First Visit Special</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
              Enjoy a sample 10% introductory offer.
            </h3>
            
            <p className="text-sm text-zinc-400 font-light">
              Experience the craftsmanship of our master stylists and therapists with a promotional welcome discount applied to your demo appointment.
            </p>

            <div className="pt-1">
              <span className="inline-block text-[11px] font-mono tracking-wider uppercase text-amber-300/80 bg-amber-950/40 border border-amber-800/50 px-2.5 py-0.5 rounded">
                Demo promotion — not a real offer.
              </span>
            </div>
          </div>

          {/* Interactive Claim Voucher Action */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <div className="flex items-center justify-between bg-zinc-900 border border-zinc-700/80 px-4 py-2.5 rounded-sm font-mono text-sm tracking-wider text-[#e8d7be] w-full sm:w-auto">
              <span>{promoCode}</span>
            </div>

            <button
              onClick={handleCopyAndApply}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-zinc-950 bg-[#c5a880] hover:bg-[#d8c29d] active:scale-[0.98] transition-all rounded-sm cursor-pointer whitespace-nowrap shadow-lg shadow-[#c5a880]/10"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-950" />
                  <span>Voucher Applied!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Apply to Demo Booking</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
