import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Destination } from '@/types';

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      to={`/destinations/${destination.slug}`}
      className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 block"
    >
      <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
        <img
          src={destination.image}
          alt={`${destination.name}, Coorg`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold text-gold-400 bg-gold-500/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {destination.hotelCount} hotels
          </span>
        </div>
        <h3 className="font-serif text-xl font-bold text-white mb-1">{destination.name}</h3>
        <p className="text-sm text-white/75 line-clamp-2 mb-3">{destination.description}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-400 group-hover:gap-3 transition-all">
          Explore
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
