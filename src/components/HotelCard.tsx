import { Link } from 'react-router-dom';
import { Heart, Star, MapPin, ArrowRight } from 'lucide-react';
import type { Hotel } from '@/types';

function formatAmenity(id: string) {
  return id.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  const topAmenities = hotel.amenities.slice(0, 3).map(formatAmenity);
  const hasRating = hotel.reviewCount > 0 && hotel.rating > 0;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-500 hover:shadow-card-hover">
      <div className="relative overflow-hidden">
        <Link to={`/hotels/${hotel.slug}`}><img src={hotel.image} alt={hotel.name} className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" /></Link>
        <button aria-label="Add to wishlist" className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-forest-600 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-red-500"><Heart size={18} /></button>
        {hasRating && <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 shadow-sm backdrop-blur-sm"><Star size={14} className="fill-gold-500 text-gold-500" /><span className="text-xs font-bold text-forest-800">{hotel.rating.toFixed(1)}</span></div>}
        {hotel.originalPrice && hotel.originalPrice > hotel.pricePerNight && <div className="absolute bottom-3 left-3 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-white shadow-md">{Math.round((1 - hotel.pricePerNight / hotel.originalPrice) * 100)}% OFF</div>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Link to={`/hotels/${hotel.slug}`}><h3 className="font-serif text-lg font-bold leading-tight text-forest-900 transition-colors hover:text-forest-700">{hotel.name}</h3></Link>
        <div className="mb-2 flex items-center gap-1 text-sm text-forest-500"><MapPin size={14} className="text-gold-500" />{hotel.location}</div>
        <p className="mb-3 line-clamp-2 text-sm text-forest-600">{hotel.description}</p>
        <div className="mb-4 flex flex-wrap gap-1.5">{topAmenities.map((amenity) => <span key={amenity} className="rounded-full bg-cream-100 px-2.5 py-1 text-xs font-medium text-forest-600">{amenity}</span>)}</div>
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-cream-100 pt-3">
          <div>
            {hotel.originalPrice && hotel.originalPrice > hotel.pricePerNight && <p className="text-xs text-forest-400 line-through">₹{hotel.originalPrice.toLocaleString('en-IN')}</p>}
            <div className="flex items-baseline gap-1"><span className="font-serif text-2xl font-bold text-forest-900">₹{hotel.pricePerNight.toLocaleString('en-IN')}</span><span className="text-xs text-forest-500">/ night*</span></div>
            {hasRating && <p className="mt-0.5 text-xs text-forest-400">{hotel.reviewCount} verified review{hotel.reviewCount === 1 ? '' : 's'}</p>}
          </div>
          <Link to={`/hotels/${hotel.slug}`} className="inline-flex items-center gap-1.5 rounded-full bg-forest-700 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-forest-800 active:scale-95">Check availability <ArrowRight size={14} /></Link>
        </div>
      </div>
    </div>
  );
}
