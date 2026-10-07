import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { TravelGuide as TravelGuideType } from '@/types';

export default function TravelGuideCard({ guide }: { guide: TravelGuideType }) {
  return (
    <Link
      to="/experiences"
      className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 block"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="text-xs font-semibold text-gold-400 bg-gold-500/20 backdrop-blur-sm px-2.5 py-1 rounded-full mb-2 inline-block">
          {guide.category}
        </span>
        <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1 leading-tight">
          {guide.title}
        </h3>
        <p className="text-sm text-white/70 line-clamp-2 mb-2">{guide.description}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-400 group-hover:gap-3 transition-all">
          Read More
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
