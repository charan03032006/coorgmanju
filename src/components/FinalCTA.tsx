import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/14844302/pexels-photo-14844302.jpeg?auto=compress&cs=tinysrgb&h=900&w=1920"
          alt="Misty Coorg mountains at sunrise"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-forest-950/70" />
      </div>

      <div className="relative section-container text-center">
        <div className="max-w-2xl mx-auto reveal">
          <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Begin Your Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 text-balance text-shadow-lg">
            Your Coorg Escape Starts Here
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Find your perfect stay with Coorg Manju Group of Hotels. Premium comfort, stunning locations, and genuine Coorgi hospitality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/hotels" className="btn-primary text-base px-8 py-4">
              <MapPin size={18} />
              Explore Hotels
            </Link>
            <Link to="/experiences" className="btn-ghost text-base px-8 py-4 border border-white/30 hover:bg-white/10">
              <Calendar size={18} />
              Plan Your Stay
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
