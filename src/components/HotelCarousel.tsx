import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HotelCard from './HotelCard';
import type { Hotel } from '@/types';

export default function HotelCarousel({ hotels }: { hotels: Hotel[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Scroll buttons — desktop only */}
      <div className="hidden lg:flex absolute -top-16 right-0 items-center gap-2">
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="h-10 w-10 rounded-full border border-forest-200 bg-white text-forest-600 hover:bg-forest-50 hover:border-forest-300 transition-colors flex items-center justify-center"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="h-10 w-10 rounded-full border border-forest-200 bg-white text-forest-600 hover:bg-forest-50 hover:border-forest-300 transition-colors flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:overflow-visible"
      >
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-auto lg:flex-1 lg:min-w-[300px] lg:max-w-[380px]"
          >
            <HotelCard hotel={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
}
