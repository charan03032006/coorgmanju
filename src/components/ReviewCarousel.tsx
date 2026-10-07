import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ReviewCard from './ReviewCard';
import type { Review } from '@/types';

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="py-20 sm:py-28 bg-forest-950 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-forest opacity-90" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-500/5 to-transparent" />

      <div className="relative section-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 reveal">
          <div className="max-w-xl">
            <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Guest Stories
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              What Our Guests Say
            </h2>
            <p className="text-white/70 text-lg">
              Real reviews from real guests who chose Coorg Manju for their Coorg getaway.
            </p>
          </div>

          {/* Rating summary */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 shrink-0">
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-gold-400">{avgRating}</p>
              <div className="flex items-center gap-0.5 justify-center mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="text-gold-400 fill-gold-400" />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <p className="text-white font-semibold text-sm">Excellent</p>
              <p className="text-white/60 text-xs">Based on {reviews.length * 470}+ reviews</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 mb-6 lg:hidden">
          <button
            onClick={() => scroll('left')}
            aria-label="Previous reviews"
            className="h-10 w-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next reviews"
            className="h-10 w-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Track */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] lg:w-auto"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
