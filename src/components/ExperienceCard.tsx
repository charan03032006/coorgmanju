import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Experience } from '@/types';

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Link
      to="/experiences"
      className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 block"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={experience.image}
          alt={experience.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">{experience.name}</h3>
        <p className="text-sm text-white/75 line-clamp-2 mb-2">{experience.description}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-400 group-hover:gap-3 transition-all">
          Explore
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
