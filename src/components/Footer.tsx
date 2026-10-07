import { Link } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  MapPin,
  ChevronRight,
} from 'lucide-react';

const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Hotels', href: '/hotels' },
      { label: 'Careers', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Hotels',
    links: [
      { label: 'Madikeri', href: '/destinations/madikeri' },
      { label: 'Kushalnagar', href: '/destinations/kushalnagar' },
      { label: 'Virajpet', href: '/destinations/virajpet' },
      { label: 'Somwarpet', href: '/destinations/somwarpet' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQs', href: '/contact' },
      { label: 'My Bookings', href: '/my-bookings' },
      { label: 'Cancellation Policy', href: '/contact' },
      { label: 'Privacy Policy', href: '/contact' },
      { label: 'Terms & Conditions', href: '/contact' },
    ],
  },
  {
    title: 'Discover Coorg',
    links: [
      { label: 'Places to Visit', href: '/experiences' },
      { label: 'Things to Do', href: '/experiences' },
      { label: 'Travel Guide', href: '/experiences' },
      { label: 'Experiences', href: '/experiences' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white/70">
      {/* Main */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-800">
                <span className="font-serif text-lg font-bold text-gold-400">M</span>
              </div>
              <div className="leading-tight">
                <p className="font-serif text-base font-bold text-white">Coorg Manju</p>
                <p className="text-[10px] font-medium tracking-widest uppercase text-white/50">
                  Group of Hotels
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Local hospitality across the Mysuru–Coorg corridor, bringing stays, dining, experiences and travel support together.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" />
                <span>Mysuru & Coorg, Karnataka, India</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-gold-400 mt-0.5 shrink-0" />
                <span>Booking and enquiry support available through the website.</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wide mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="inline-flex items-center gap-1 text-sm hover:text-gold-400 transition-colors group"
                    >
                      <ChevronRight size={12} className="text-gold-500/60 group-hover:text-gold-400 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm">
            Follow us for Coorg travel inspiration and exclusive offers
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Youtube, label: 'YouTube' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gold-500 hover:text-white transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Coorg Manju Group of Hotels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
