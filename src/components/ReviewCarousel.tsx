import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ReviewCard from './ReviewCard';
import type { Review } from '@/types';

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -el.clientWidth * 0.8 : el.clientWidth * 0.8, behavior: 'smooth' });
  };

  if (!reviews.length) return null;
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="relative overflow-hidden bg-forest-950 py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-forest opacity-90" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-gold-500/5 to-transparent" />
      <div className="relative section-container">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-400">Guest Stories</p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">What Our Guests Say</h2>
            <p className="text-lg text-white/70">Published guest feedback from Coorg Manju stays.</p>
          </div>
          <div className="flex shrink-0 items-center gap-4 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm">
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-gold-400">{avgRating}</p>
              <div className="mt-1 flex justify-center gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} className="fill-gold-400 text-gold-400" />)}</div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div><p className="text-sm font-semibold text-white">Guest rating</p><p className="text-xs text-white/60">Based on {reviews.length} published review{reviews.length === 1 ? '' : 's'}</p></div>
          </div>
        </div>
        <div className="mb-6 flex items-center gap-2 lg:hidden">
          <button onClick={() => scroll('left')} aria-label="Previous reviews" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"><ChevronLeft size={20} /></button>
          <button onClick={() => scroll('right')} aria-label="Next reviews" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"><ChevronRight size={20} /></button>
        </div>
        <div ref={scrollRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible">
          {reviews.map((review) => <div key={review.id} className="w-[300px] shrink-0 snap-start sm:w-[340px] lg:w-auto"><ReviewCard review={review} /></div>)}
        </div>
      </div>
    </section>
  );
}
