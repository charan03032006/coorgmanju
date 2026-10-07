import { Star, Quote } from 'lucide-react';
import type { Review } from '@/types';

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={review.avatar}
          alt={review.guestName}
          className="h-12 w-12 rounded-full object-cover bg-cream-200"
          loading="lazy"
        />
        <div className="min-w-0">
          <p className="font-semibold text-forest-900 text-sm truncate">{review.guestName}</p>
          <p className="text-xs text-forest-500">{review.stayType}</p>
        </div>
        <div className="ml-auto">
          <Quote size={28} className="text-cream-300" />
        </div>
      </div>

      <div className="flex items-center gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < review.rating ? 'text-gold-500 fill-gold-500' : 'text-cream-300'}
          />
        ))}
      </div>

      <p className="text-sm text-forest-600 leading-relaxed flex-1 mb-4">
        "{review.text}"
      </p>

      <div className="pt-3 border-t border-cream-100">
        <p className="text-xs text-forest-500">
          Stayed at <span className="font-medium text-forest-700">{review.hotelName}</span>
        </p>
      </div>
    </div>
  );
}
