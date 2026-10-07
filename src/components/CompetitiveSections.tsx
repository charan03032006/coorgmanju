import { Link } from 'react-router-dom';
import {
  BadgeCheck,
  BedDouble,
  Car,
  ChefHat,
  CircleCheck,
  Coffee,
  ConciergeBell,
  Heart,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Utensils,
} from 'lucide-react';

const quickTrust = [
  { icon: CircleCheck, title: 'Direct local support', text: 'Talk to the team' },
  { icon: BedDouble, title: 'Rooms & stays', text: 'Mysuru + Coorg' },
  { icon: Utensils, title: 'Food & dining', text: 'Mysuru Dine' },
  { icon: Car, title: 'Travel support', text: 'Transfers & trips' },
];

const collections = [
  { title: 'Mysuru City Stays', text: 'Stay close to palaces, temples, gardens, food and city attractions.', href: '/destinations/mysuru', icon: MapPin },
  { title: 'Coorg Escapes', text: 'Comfortable bases for coffee estates, waterfalls, wildlife and hill experiences.', href: '/destinations/madikeri', icon: Coffee },
  { title: 'Family Getaways', text: 'Easy stays and sightseeing support for families travelling together.', href: '/experiences', icon: Heart },
  { title: 'Road Trip Stays', text: 'Plan a Mysuru–Coorg journey with rooms, food and vehicle support together.', href: '/experiences', icon: Car },
];

const standards = [
  { icon: BadgeCheck, title: 'Locally managed', text: 'A hospitality group focused on the Mysuru–Coorg corridor.' },
  { icon: ShieldCheck, title: 'Clear booking information', text: 'Know the property, location and stay details before you enquire.' },
  { icon: ChefHat, title: 'Food when you need it', text: 'Discover dining options through Mysuru Dine and local hospitality.' },
  { icon: ConciergeBell, title: 'Trip assistance', text: 'Ask about rooms, sightseeing, transfers and vehicle requirements.' },
];

const steps = [
  { n: '01', title: 'Tell us your trip', text: 'Choose Mysuru, Coorg or both, then share your dates and group size.' },
  { n: '02', title: 'Choose your stay', text: 'Compare suitable properties, experiences and nearby places.' },
  { n: '03', title: 'Arrive with a plan', text: 'Coordinate food, rooms and vehicle support with one local team.' },
];

const faqs = [
  ['Can I plan a Mysuru and Coorg trip together?', 'Yes. Coorg Manju is positioned around the Mysuru–Coorg travel corridor, so you can use the site to discover stays, attractions and travel support across both destinations.'],
  ['Can I book a room directly?', 'Use the property booking or enquiry flow on the site. For special requests, group stays or vehicle requirements, contact the team directly.'],
  ['Can you help with sightseeing?', 'Yes. The website is designed to connect your stay with nearby attractions and local travel requirements across Mysuru and Coorg.'],
  ['Is food available?', 'Mysuru Dine is part of the group offering. Property-specific meal availability should be confirmed during booking or enquiry.'],
];

export default function CompetitiveSections() {
  return (
    <>
      <section className="border-y border-cream-200 bg-white">
        <div className="section-container grid grid-cols-2 lg:grid-cols-4 divide-x divide-cream-200">
          {quickTrust.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3 px-4 py-5 sm:px-6">
              <Icon size={22} className="shrink-0 text-gold-600" />
              <div><p className="text-sm font-bold text-forest-900">{title}</p><p className="text-xs text-forest-500">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-50 py-20 sm:py-28">
        <div className="section-container">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Browse by trip</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-forest-900 sm:text-5xl">Find the stay that fits your journey</h2>
              <p className="mt-4 text-forest-600">A simpler way to discover stays around Mysuru and Coorg without treating every traveller the same.</p>
            </div>
            <Link to="/hotels" className="btn-secondary shrink-0">Explore all stays</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map(({ title, text, href, icon: Icon }) => (
              <Link key={title} to={href} className="group rounded-3xl border border-cream-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-700 group-hover:bg-gold-100 group-hover:text-gold-700 transition-colors"><Icon size={22} /></div>
                <h3 className="mt-5 font-serif text-xl font-bold text-forest-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-600">{text}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-forest-700">Explore collection →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">The Coorg Manju standard</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-forest-900 sm:text-5xl">More than a room for the night</h2>
            <p className="mt-4 text-forest-600">Compete on the things guests actually care about: clarity, local support, comfort and a complete trip.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-cream-200 bg-cream-50 p-6">
                <Icon size={24} className="text-gold-600" />
                <h3 className="mt-5 font-serif text-xl font-bold text-forest-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-950 py-20 sm:py-28">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">One local contact</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-5xl">Book the stay. Plan the trip. Keep it simple.</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-white/70">Unlike a generic accommodation catalogue, Coorg Manju can present the complete journey: where to stay, where to eat, what to see and how to get there.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/hotels" className="btn-primary">Browse stays</Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"><MessageCircle size={17} /> Talk to us</Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map((step) => (
                <div key={step.n} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="text-sm font-bold text-gold-400">{step.n}</span>
                  <h3 className="mt-8 font-serif text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-20 sm:py-28">
        <div className="section-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Good to know</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-forest-900 sm:text-5xl">Questions before you book?</h2>
            <p className="mt-4 text-forest-600">Make the important information easy to find instead of sending guests hunting through the site.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-forest-800 hover:text-gold-700">Contact the team <Sparkles size={16} /></Link>
          </div>
          <div className="divide-y divide-cream-200 rounded-3xl border border-cream-200 bg-white px-6">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-forest-900">
                  {q}<span className="text-gold-600 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-forest-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
