import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Offer } from '@/types';

export default function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={offer.image}
          alt={offer.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {offer.badge}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">{offer.title}</h3>
        <p className="text-sm text-forest-600 leading-relaxed mb-4 line-clamp-3">{offer.description}</p>
        <Link
          to="/offers"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-gold-600 transition-colors group-hover:gap-3"
        >
          {offer.ctaText}
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
