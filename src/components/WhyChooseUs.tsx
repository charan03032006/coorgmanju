import { MapPin, BedDouble, HeartHandshake, BadgePercent, Users, Headset } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Feature } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  BedDouble,
  HeartHandshake,
  BadgePercent,
  Users,
  Headset,
};

export default function WhyChooseUs({ features }: { features: Feature[] }) {
  return (
    <section className="py-20 sm:py-28 bg-cream-50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-4 text-balance">
            Why Stay With Coorg Manju?
          </h2>
          <p className="text-forest-600 text-lg">
            We combine local Coorgi warmth with modern hospitality standards across all our properties.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || MapPin;
            return (
              <div
                key={feature.id}
                className="group reveal bg-white rounded-2xl p-7 shadow-premium hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-forest flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors duration-500">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-forest-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
