import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Scissors, MessageSquare, Check, Sparkles, Copy, X, AlertCircle } from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/salonData';
import { ServiceItem } from '../types/salon';

interface BookingProps {
  selectedService: ServiceItem | null;
  voucherCode: string;
  onClearSelectedService: () => void;
}

export const Booking: React.FC<BookingProps> = ({
  selectedService,
  voucherCode,
  onClearSelectedService,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceId, setServiceId] = useState(SERVICES_DATA[0].id);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [stylist, setStylist] = useState('Any Master Stylist');
  const [notes, setNotes] = useState('');
  const [currentVoucher, setCurrentVoucher] = useState(voucherCode);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    id: string;
    fullName: string;
    phoneNumber: string;
    serviceName: string;
    priceNpr: number;
    discountedPrice: number;
    hasVoucher: boolean;
    date: string;
    time: string;
    stylist: string;
    notes: string;
  } | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Sync selected service if changed from external cards
  useEffect(() => {
    if (selectedService) {
      setServiceId(selectedService.id);
    }
  }, [selectedService]);

  // Sync voucher code
  useEffect(() => {
    if (voucherCode) {
      setCurrentVoucher(voucherCode);
    }
  }, [voucherCode]);

  // Set default date to tomorrow in YYYY-MM-DD
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setPreferredDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
  ];

  const stylistOptions = [
    'Any Available Master Stylist',
    'Senior Hair Stylist',
    'Beard & Shave Specialist',
    'Color & Balayage Artist',
    'Skin & Spa Aesthetician',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const activeService = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
    const isVoucherValid = currentVoucher.trim().toUpperCase() === 'AURA10-DEMO';
    const discountedPrice = isVoucherValid
      ? Math.round(activeService.priceNpr * 0.9)
      : activeService.priceNpr;

    setTimeout(() => {
      setIsSubmitting(false);
      const randomDemoId = `AUR-DEMO-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedBooking({
        id: randomDemoId,
        fullName: fullName || 'Demo Client',
        phoneNumber: phoneNumber || '+977 980-0000000',
        serviceName: activeService.title,
        priceNpr: activeService.priceNpr,
        discountedPrice,
        hasVoucher: isVoucherValid,
        date: preferredDate,
        time: preferredTime,
        stylist,
        notes: notes || 'Standard styling consultation',
      });
    }, 600);
  };

  const copyDemoTicket = () => {
    if (!confirmedBooking) return;
    const text = `AURA STUDIO DEMO BOOKING RECEIPT\nReference: ${confirmedBooking.id}\nName: ${confirmedBooking.fullName}\nService: ${confirmedBooking.serviceName}\nDate: ${confirmedBooking.date} at ${confirmedBooking.time}\nDemo Price: NPR ${confirmedBooking.discountedPrice}\nLocation: Birgunj, Nepal (Demo Concept)`;
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-[#0b0b0e] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#c5a880] mb-3">
            <span>Online Scheduling</span>
            <span aria-hidden="true">·</span>
            <span className="text-zinc-500 font-normal">Interactive Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
            Reserve your <span className="italic text-[#e8d7be]">studio experience</span>.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Fill in your preferred date and requirements. As this is a portfolio demonstration, your submission will produce a simulated booking summary without any charges.
          </p>
        </div>

        {/* Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Form */}
          <div className="lg:col-span-8 bg-[#101015] border border-zinc-800 rounded-xl p-6 sm:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-2">
                    Full Name <span className="text-[#c5a880]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Samir Shrestha"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#16161c] border border-zinc-700/80 rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-2">
                    Phone Number <span className="text-[#c5a880]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. +977 980-0000000"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-[#16161c] border border-zinc-700/80 rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-2">
                  Select Desired Service <span className="text-[#c5a880]">*</span>
                </label>
                <div className="relative">
                  <Scissors className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    id="service"
                    value={serviceId}
                    onChange={(e) => {
                      setServiceId(e.target.value);
                      onClearSelectedService();
                    }}
                    className="w-full bg-[#16161c] border border-zinc-700/80 rounded-sm pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors appearance-none cursor-pointer"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.id} className="bg-zinc-900 text-white">
                        {s.title} — NPR {s.priceNpr.toLocaleString()}{s.isStartingPrice ? '+' : ''} ({s.duration})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-2">
                    Preferred Date <span className="text-[#c5a880]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="date"
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#16161c] border border-zinc-700/80 rounded-sm pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors scheme-dark"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="time" className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-2">
                    Preferred Time Slot <span className="text-[#c5a880]">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="time"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-[#16161c] border border-zinc-700/80 rounded-sm pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors appearance-none cursor-pointer"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-zinc-900 text-white">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Stylist & Voucher */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="stylist" className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-2">
                    Stylist Preference
                  </label>
                  <select
                    id="stylist"
                    value={stylist}
                    onChange={(e) => setStylist(e.target.value)}
                    className="w-full bg-[#16161c] border border-zinc-700/80 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors cursor-pointer"
                  >
                    {stylistOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-zinc-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="voucher" className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-2">
                    Promo Voucher Code (Optional)
                  </label>
                  <input
                    id="voucher"
                    type="text"
                    placeholder="e.g. AURA10-DEMO"
                    value={currentVoucher}
                    onChange={(e) => setCurrentVoucher(e.target.value)}
                    className="w-full bg-[#16161c] border border-zinc-700/80 rounded-sm px-4 py-3 text-sm text-[#e8d7be] font-mono placeholder-zinc-500 uppercase focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors"
                  />
                  {currentVoucher.toUpperCase() === 'AURA10-DEMO' && (
                    <span className="text-[11px] text-emerald-400 mt-1 block">
                      ✓ 10% First Visit Special demo discount active
                    </span>
                  )}
                </div>
              </div>

              {/* Message / Notes */}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-zinc-300 font-medium mb-2">
                  Special Message or Hair Requirements
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Mention skin sensitivities, event timing, hair reference style, or special requests..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#16161c] border border-zinc-700/80 rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-3.5 rounded bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400 flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>
                  Demo Mode: Submitting will generate a simulated booking voucher for preview.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 text-xs font-semibold tracking-[0.2em] uppercase text-zinc-950 bg-[#c5a880] hover:bg-[#d8c29d] active:scale-[0.99] transition-all rounded-sm cursor-pointer shadow-xl shadow-[#c5a880]/15 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Generating Demo Confirmation...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Request Appointment</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Info Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#101015] border border-zinc-800 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-serif text-white mb-4">
                Booking Policy & Experience
              </h3>
              <ul className="space-y-3 text-xs text-zinc-400 leading-relaxed">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span><strong>15-Minute Grace Period:</strong> Relax in our lounge with complimentary tea, coffee or mineral water.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span><strong>No Cancellation Penalty:</strong> Reschedule anytime with a simple demo WhatsApp message.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span><strong>Unisex Private Wash Stations:</strong> Ergonomic reclining wash basins with scalp massage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <span><strong>Cash & Digital Pay (NPR):</strong> Demo pricing in Nepalese Rupees.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/80">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#c5a880] block mb-2">
                Birgunj Studio Direct Line
              </span>
              <div className="text-base text-zinc-200 font-medium mb-1">
                {BUSINESS_INFO.phoneDisplay}
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                For urgent inquiries or bridal group bookings. (Placeholder demo contact)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal (Friendly demo confirmation message) */}
      {confirmedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setConfirmedBooking(null)}
          />

          {/* Receipt Modal Card */}
          <div className="relative z-10 max-w-lg w-full bg-[#121217] border border-[#c5a880]/50 rounded-xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Demo Booking Confirmed</span>
              </div>
              <button
                onClick={() => setConfirmedBooking(null)}
                className="p-1 text-zinc-400 hover:text-white rounded transition-colors cursor-pointer"
                aria-label="Close confirmation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Friendly Greeting */}
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/40 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-[#c5a880]" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-1">
                Thank you, {confirmedBooking.fullName}!
              </h3>
              <p className="text-xs text-zinc-400">
                Your demo appointment request has been simulated successfully.
              </p>
            </div>

            {/* Ticket Details */}
            <div className="bg-[#09090c] border border-zinc-800 rounded-lg p-4 sm:p-5 space-y-3 text-xs mb-6">
              <div className="flex justify-between items-center pb-2 border-b border-zinc-800/80">
                <span className="text-zinc-500 font-mono">Reference Code:</span>
                <span className="font-mono text-[#e8d7be] font-semibold">{confirmedBooking.id}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Client:</span>
                <span className="text-zinc-200 font-medium">{confirmedBooking.fullName}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Contact:</span>
                <span className="text-zinc-200 font-mono">{confirmedBooking.phoneNumber}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Selected Service:</span>
                <span className="text-zinc-200 font-medium">{confirmedBooking.serviceName}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Scheduled:</span>
                <span className="text-zinc-200 font-medium">{confirmedBooking.date} at {confirmedBooking.time}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Stylist:</span>
                <span className="text-zinc-200">{confirmedBooking.stylist}</span>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-zinc-800/80">
                <span className="text-zinc-400">Demo Price:</span>
                <span className="text-sm font-serif text-[#e8d7be] font-medium tabular-nums">
                  NPR {confirmedBooking.discountedPrice.toLocaleString()}
                  {confirmedBooking.hasVoucher && (
                    <span className="text-[10px] text-emerald-400 ml-1.5 font-sans">(10% voucher applied)</span>
                  )}
                </span>
              </div>
            </div>

            {/* Explicit Demo Reminder */}
            <div className="p-3 rounded bg-amber-950/20 border border-amber-800/40 text-[11px] text-amber-300/90 leading-relaxed mb-6">
              <strong>Demo Portfolio Reminder:</strong> No real appointment has been recorded on any server, and no payment is required. This simulated receipt demonstrates the client user-journey for web development portfolio review.
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={copyDemoTicket}
                className="flex-1 py-2.5 px-4 text-xs font-medium uppercase tracking-wider text-zinc-200 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSummary ? 'Copied Receipt' : 'Copy Summary'}</span>
              </button>
              <button
                onClick={() => setConfirmedBooking(null)}
                className="flex-1 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-[#c5a880] hover:bg-[#d8c29d] rounded-sm transition-colors cursor-pointer"
              >
                Close Demo Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
