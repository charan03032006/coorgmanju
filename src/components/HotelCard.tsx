import { Link } from 'react-router-dom';
import { Heart, Star, MapPin, ArrowRight } from 'lucide-react';
import type { Hotel } from '@/types';

function formatAmenity(id: string) {
  return id.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  const topAmenities = hotel.amenities.slice(0, 3).map(formatAmenity);
  return (
    <div className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden flex flex-col">
      <div className="relative overflow-hidden">
        <Link to={`/hotels/${hotel.slug}`}><img src={hotel.image} alt={hotel.name} className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" /></Link>
        <button aria-label="Add to wishlist" className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-forest-600 hover:text-red-500 hover:bg-white transition-colors shadow-sm"><Heart size={18} /></button>
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm"><Star size={14} className="text-gold-500 fill-gold-500" /><span className="text-xs font-bold text-forest-800">{hotel.rating}</span></div>
        {hotel.originalPrice && <div className="absolute bottom-3 left-3 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">{Math.round((1 - hotel.pricePerNight / hotel.originalPrice) * 100)}% OFF</div>}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <Link to={`/hotels/${hotel.slug}`}><h3 className="font-serif text-lg font-bold text-forest-900 leading-tight hover:text-forest-700 transition-colors">{hotel.name}</h3></Link>
        <div className="flex items-center gap-1 text-forest-500 text-sm mb-2"><MapPin size={14} className="text-gold-500" />{hotel.location}</div>
        <p className="text-sm text-forest-600 line-clamp-2 mb-3">{hotel.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">{topAmenities.map((amenity) => <span key={amenity} className="text-xs text-forest-600 bg-cream-100 px-2.5 py-1 rounded-full font-medium">{amenity}</span>)}</div>
        <div className="mt-auto flex items-end justify-between gap-3 pt-3 border-t border-cream-100">
          <div>{hotel.originalPrice && <p className="text-xs text-forest-400 line-through">₹{hotel.originalPrice.toLocaleString('en-IN')}</p>}<div className="flex items-baseline gap-1"><span className="font-serif text-2xl font-bold text-forest-900">₹{hotel.pricePerNight.toLocaleString('en-IN')}</span><span className="text-xs text-forest-500">/ night</span></div><p className="text-xs text-forest-400 mt-0.5">{hotel.reviewCount} reviews</p></div>
          <Link to={`/hotels/${hotel.slug}`} className="inline-flex items-center gap-1.5 rounded-full bg-forest-700 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-forest-800 active:scale-95">View Rooms <ArrowRight size={14} /></Link>
        </div>
      </div>
    </div>
  );
}
