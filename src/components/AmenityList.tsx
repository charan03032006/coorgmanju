import {
  Wifi,
  Car,
  UtensilsCrossed,
  BellRing,
  Users,
  Clock,
  Sparkles,
  Coffee,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import type { Amenity } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  Wifi,
  Car,
  UtensilsCrossed,
  BellRing,
  Users,
  Clock,
  Sparkles,
  Coffee,
  MapPin,
};

export default function AmenityList({ amenities }: { amenities: Amenity[] }) {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Comfort & Convenience
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 text-balance">
            Hotel Amenities
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {amenities.map((amenity, idx) => {
            const Icon = iconMap[amenity.icon] || Wifi;
            return (
              <div
                key={amenity.id}
                className="reveal group flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-cream-200 bg-cream-50 hover:bg-white hover:shadow-card-hover hover:border-gold-200 transition-all duration-300"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center mb-3 group-hover:bg-gold-100 group-hover:text-gold-600 transition-colors">
                  <Icon size={22} className="text-forest-600 group-hover:text-gold-600" />
                </div>
                <span className="text-sm font-medium text-forest-700">{amenity.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
