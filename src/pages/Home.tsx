import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, BedDouble, Car } from 'lucide-react';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import Hero from '@/components/Hero';
import DestinationCard from '@/components/DestinationCard';
import HotelCard from '@/components/HotelCard';
import HotelCarousel from '@/components/HotelCarousel';
import OfferCard from '@/components/OfferCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import ExperienceCard from '@/components/ExperienceCard';
import AmenityList from '@/components/AmenityList';
import ReviewCarousel from '@/components/ReviewCarousel';
import TravelGuideCard from '@/components/TravelGuideCard';
import FinalCTA from '@/components/FinalCTA';
import CompetitiveSections from '@/components/CompetitiveSections';
import { RevealSection } from '@/hooks/useReveal';
import { useHomeContent } from '@/hooks/useHomeContent';

function HomeLoading() {
  return <div className="min-h-[50vh] flex items-center justify-center bg-cream-50"><div className="text-center"><div className="mx-auto h-10 w-10 rounded-full border-4 border-forest-200 border-t-forest-700 animate-spin" /><p className="mt-4 text-sm text-forest-600">Loading Coorg Manju...</p></div></div>;
}

function HomeError({ message }: { message: string }) {
  return <div className="min-h-[50vh] flex items-center justify-center bg-cream-50 px-6"><div className="max-w-lg rounded-2xl border border-red-200 bg-white p-8 text-center shadow-card"><h2 className="font-serif text-2xl font-bold text-forest-900">Unable to load hotel content</h2><p className="mt-3 text-sm text-forest-600">{message}</p><p className="mt-4 text-xs text-forest-400">Check the Supabase environment variables and run the included database migration.</p></div></div>;
}

export default function Home() {
  const { content, loading, error } = useHomeContent();

  if (loading) return <><SEO /><HomeLoading /></>;
  if (error || !content) return <><SEO /><HomeError message={error ?? 'No content was returned from Supabase.'} /></>;

  const { destinations, featuredHotels, offers, experiences, features, amenities, reviews, travelGuides } = content;

  return (
    <>
      <SEO />
      <StructuredData />
      <Hero />
      <CompetitiveSections />

      <section className="border-b border-cream-200 bg-white">
        <div className="section-container grid grid-cols-1 divide-y divide-cream-200 py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-3">
          <div className="flex items-center justify-center gap-3 px-4 py-4 sm:py-3">
            <Utensils className="text-gold-600" size={22} />
            <div><p className="font-semibold text-forest-900">Food</p><p className="text-xs text-forest-500">Mysuru Dine Hotel & Restaurant</p></div>
          </div>
          <div className="flex items-center justify-center gap-3 px-4 py-4 sm:py-3">
            <BedDouble className="text-gold-600" size={22} />
            <div><p className="font-semibold text-forest-900">Rooms</p><p className="text-xs text-forest-500">Comfortable stays across Coorg</p></div>
          </div>
          <div className="flex items-center justify-center gap-3 px-4 py-4 sm:py-3">
            <Car className="text-gold-600" size={22} />
            <div><p className="font-semibold text-forest-900">Vehicle</p><p className="text-xs text-forest-500">Local, sightseeing & transfers</p></div>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-16 sm:py-20">
        <div className="section-container">
          <RevealSection className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">One group. Three experiences.</p>
              <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-5xl">Everything you need for a memorable Mysuru & Coorg journey.</h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-forest-600 lg:justify-self-end">
              From a comfortable room to a good meal and dependable transport, Coorg Manju brings stays, dining, local experiences and travel support together under one local brand.
            </p>
          </RevealSection>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="section-container">
          <RevealSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">Destinations</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-4 text-balance">Where will your Mysuru & Coorg journey begin?</h2>
            <p className="text-forest-600 text-lg">From royal Mysuru heritage to misty Coorg hills, discover stays and experiences across the complete travel corridor.</p>
          </RevealSection>
          <RevealSection className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {destinations.map((d, idx) => (
              <div key={d.id} className={`reveal ${idx === 0 ? 'col-span-2 sm:col-span-1' : ''}`} style={{ transitionDelay: `${idx * 50}ms` }}>
                <DestinationCard destination={d} />
              </div>
            ))}
          </RevealSection>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-cream-50">
        <div className="section-container">
          <RevealSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="max-w-xl">
              <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">Featured Properties</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 text-balance">Featured Hotels</h2>
            </div>
            <Link to="/hotels" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-gold-600 transition-colors group shrink-0">View All Hotels<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></Link>
          </RevealSection>
          <RevealSection>
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {featuredHotels.map((hotel, idx) => <div key={hotel.id} className="reveal" style={{ transitionDelay: `${idx * 80}ms` }}><HotelCard hotel={hotel} /></div>)}
            </div>
            <div className="lg:hidden"><HotelCarousel hotels={featuredHotels} /></div>
          </RevealSection>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="section-container">
          <RevealSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">Limited Time</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-4 text-balance">Exclusive Offers</h2>
            <p className="text-forest-600 text-lg">Discover stay deals and trip packages across Mysuru and Coorg.</p>
          </RevealSection>
          <RevealSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer, idx) => <div key={offer.id} className="reveal" style={{ transitionDelay: `${idx * 70}ms` }}><OfferCard offer={offer} /></div>)}
          </RevealSection>
        </div>
      </section>

      <WhyChooseUs features={features} />

      <section className="py-20 sm:py-28 bg-forest-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950" />
        <div className="relative section-container">
          <RevealSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">Coorg Experiences</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">Experience Mysuru & Coorg</h2>
            <p className="text-white/70 text-lg">From palaces and gardens in Mysuru to waterfalls, wildlife and coffee estates in Coorg, there is something for every traveller.</p>
          </RevealSection>
          <RevealSection className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {experiences.map((exp, idx) => <div key={exp.id} className={`reveal ${idx === 0 ? 'col-span-2 sm:col-span-1' : ''}`} style={{ transitionDelay: `${idx * 50}ms` }}><ExperienceCard experience={exp} /></div>)}
          </RevealSection>
        </div>
      </section>

      <AmenityList amenities={amenities} />
      <ReviewCarousel reviews={reviews} />

      <section className="py-20 sm:py-28 bg-cream-50">
        <div className="section-container">
          <RevealSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">Travel Resources</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-4 text-balance">Plan Your Mysuru & Coorg Trip</h2>
            <p className="text-forest-600 text-lg">Plan a smarter Mysuru–Coorg trip with guides covering stays, attractions, food and local travel.</p>
          </RevealSection>
          <RevealSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelGuides.map((guide, idx) => <div key={guide.id} className="reveal" style={{ transitionDelay: `${idx * 60}ms` }}><TravelGuideCard guide={guide} /></div>)}
          </RevealSection>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
