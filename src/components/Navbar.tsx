import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Calendar, ChevronDown, Utensils, Car } from 'lucide-react';

const navLinks = [
  { label: 'Hotels', href: '/hotels' },
  { label: 'Mysuru & Coorg', href: '/destinations' },
  { label: 'Offers', href: '/offers' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-forest-950/95 backdrop-blur-md shadow-premium py-2' : 'bg-forest-950/20 backdrop-blur-[2px] py-3'}`}>
        <nav className="section-container flex items-center justify-between">
          <div className="flex items-center gap-3 lg:hidden">
            <button onClick={() => setMobileOpen(true)} aria-label="Open menu" className="p-2 rounded-lg text-white hover:bg-white/10"><Menu size={22} /></button>
          </div>

          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold-300 bg-gold-400 shadow-lg">
              <span className="font-serif text-xl font-bold text-forest-950">M</span>
            </div>
            <div className="leading-tight">
              <p className="font-serif text-base font-bold tracking-tight text-white sm:text-lg">Coorg Manju</p>
              <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-gold-300 sm:text-[10px]">Group of Hotels</p>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}><Link to={link.href} className="px-4 py-2 rounded-full text-sm font-medium text-white/90 hover:bg-white/10 hover:text-gold-200 transition-colors">{link.label}</Link></li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <Link to="/about" className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white/80 hover:text-gold-200"><Utensils size={14} /> Mysuru Dine</Link>
            <Link to="/my-bookings" className="px-4 py-2 rounded-full text-sm font-medium text-white/90 hover:bg-white/10">My Bookings</Link>
            <Link to="/login" className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-white/90 hover:bg-white/10"><User size={16} /> Login</Link>
            <Link to="/hotels" className="btn-primary"><Calendar size={16} /> Book Now</Link>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button aria-label="Search" onClick={() => document.getElementById('search-widget')?.scrollIntoView({ behavior: 'smooth' })} className="p-2 rounded-lg text-white hover:bg-white/10"><Search size={20} /></button>
            <Link to="/login" aria-label="Profile" className="p-2 rounded-lg text-white hover:bg-white/10"><User size={20} /></Link>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-forest-950/70 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[300px] max-w-[80vw] bg-forest-950 shadow-2xl animate-slide-down flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <div><p className="font-serif text-lg font-bold text-white">Coorg Manju</p><p className="text-[10px] uppercase tracking-widest text-gold-300">Group of Hotels</p></div>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 rounded-lg text-white hover:bg-white/10"><X size={22} /></button>
            </div>
            <ul className="flex-1 overflow-y-auto py-2">
              {navLinks.map((link) => (
                <li key={link.label}><Link to={link.href} onClick={() => setMobileOpen(false)} className="flex items-center justify-between px-5 py-3.5 text-white/85 hover:bg-white/10 font-medium">{link.label}<ChevronDown size={16} className="rotate-[-90deg] text-gold-300" /></Link></li>
              ))}
              <li><Link to="/about" onClick={() => setMobileOpen(false)} className="flex items-center justify-between px-5 py-3.5 text-white/85 hover:bg-white/10 font-medium"><span className="flex items-center gap-2"><Utensils size={16} /> Mysuru Dine</span><ChevronDown size={16} className="rotate-[-90deg] text-gold-300" /></Link></li>
              <li><Link to="/my-bookings" onClick={() => setMobileOpen(false)} className="flex items-center justify-between px-5 py-3.5 text-white/85 hover:bg-white/10 font-medium">My Bookings<ChevronDown size={16} className="rotate-[-90deg] text-gold-300" /></Link></li>
              <li><Link to="/login" onClick={() => setMobileOpen(false)} className="flex items-center justify-between px-5 py-3.5 text-white/85 hover:bg-white/10 font-medium">Login / Sign Up<ChevronDown size={16} className="rotate-[-90deg] text-gold-300" /></Link></li>
            </ul>
            <div className="p-5 border-t border-white/10"><Link to="/hotels" onClick={() => setMobileOpen(false)} className="btn-primary w-full"><Calendar size={16} /> Book Now</Link></div>
          </div>
        </div>
      )}
    </>
  );
}
