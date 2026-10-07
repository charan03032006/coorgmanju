import { Utensils, BedDouble, Car, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import HotelSearch from './HotelSearch';

const servicePillars = [
  { label: 'Food', sublabel: 'Mysuru Dine', icon: Utensils },
  { label: 'Rooms', sublabel: 'Comfortable Stays', icon: BedDouble },
  { label: 'Vehicle', sublabel: 'Local & Airport', icon: Car },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-forest-950">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/33046721/pexels-photo-33046721.png?auto=compress&cs=tinysrgb&h=1400&w=2200"
          alt="Misty Coorg hills surrounding a welcoming hotel stay"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/75 via-forest-950/35 to-forest-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-transparent to-forest-950/30" />
      </div>

      <div className="relative section-container flex min-h-[100svh] flex-col justify-between pt-28 pb-6 sm:pt-32 sm:pb-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-300/40 bg-forest-950/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 backdrop-blur-md animate-fade-in">
            <Sparkles size={14} />
            Mysuru ↔ Coorg • Karnataka
          </div>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-bold leading-[0.98] tracking-tight text-white text-shadow-lg sm:text-6xl lg:text-8xl animate-fade-up">
            Coorg Manju
            <span className="mt-2 block text-gold-300">Group of Hotels</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-xl animate-fade-up" style={{ animationDelay: '0.12s' }}>
            Stay, dine and explore with a local hospitality group built around the Mysuru–Coorg journey. Find comfortable stays, local food, experiences and vehicle support in one place.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400 text-forest-950 font-serif text-lg font-bold">M</div>
            <div>
              <p className="font-serif text-lg font-bold text-white">Mysuru Dine</p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/65">Hotel & Restaurant • Mysuru</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-3 gap-2 rounded-3xl border border-gold-300/25 bg-forest-950/75 p-2 shadow-premium-lg backdrop-blur-xl sm:max-w-3xl sm:gap-3 sm:p-3">
            {servicePillars.map(({ label, sublabel, icon: Icon }) => (
              <div key={label} className="flex items-center justify-center gap-2 rounded-2xl px-2 py-3 text-center sm:gap-3 sm:px-4">
                <Icon size={20} className="shrink-0 text-gold-300 sm:h-6 sm:w-6" />
                <div>
                  <p className="text-sm font-bold text-white sm:text-base">{label}</p>
                  <p className="hidden text-[10px] uppercase tracking-wider text-white/55 sm:block">{sublabel}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 max-w-5xl">
            <HotelSearch />
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-white/75">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck size={14} className="text-gold-300" /> Local booking support</span>
              <span className="inline-flex items-center gap-1.5"><ArrowRight size={14} className="text-gold-300" /> Mysuru to Coorg stays</span>
              <span className="inline-flex items-center gap-1.5"><Car size={14} className="text-gold-300" /> Vehicle & sightseeing support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
