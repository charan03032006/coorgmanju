import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarCheck, Check, MapPin, Star, Users, Wifi, Car, Utensils, ShieldCheck } from 'lucide-react';
import SEO from '@/components/SEO';
import ContactActions from '@/components/ContactActions';
import { getHotel, getReviewsForHotel } from '@/services/contentService';
import type { Hotel, Review } from '@/types';

export default function HotelDetails() {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!hotelId) return;
    getHotel(hotelId).then(async (property) => {
      setHotel(property);
      if (property) setReviews(await getReviewsForHotel(property.name));
    }).finally(() => setLoading(false));
  }, [hotelId]);

  const gallery = useMemo(() => hotel ? Array.from(new Set([hotel.image, ...hotel.gallery].filter(Boolean))) : [], [hotel]);

  if (loading) return <div className="min-h-screen bg-cream-50 pt-32 text-center text-forest-600">Loading property...</div>;
  if (!hotel) return <div className="min-h-screen bg-cream-50 px-6 pt-32 text-center"><h1 className="font-serif text-3xl font-bold text-forest-900">Property not found</h1><Link to="/hotels" className="mt-5 inline-flex text-sm font-semibold text-forest-700">← Back to stays</Link></div>;

  const hasVerifiedRating = hotel.reviewCount > 0 && hotel.rating > 0;
  const displayReviewCount = reviews.length || hotel.reviewCount;
  const average = reviews.length ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : hotel.rating.toFixed(1);

  return (
    <>
      <SEO title={`${hotel.name} — Coorg Manju`} description={hotel.description} image={hotel.image} />
      <main className="bg-cream-50 pb-28 pt-24 lg:pb-20">
        <div className="section-container">
          <Link to="/hotels" className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-700"><ArrowLeft size={16} /> All stays</Link>

          <div className="grid gap-2 overflow-hidden rounded-[2rem] sm:grid-cols-4 sm:grid-rows-2 sm:h-[520px]">
            {gallery.length ? gallery.slice(0, 5).map((image, index) => (
              <img key={image} src={image} alt={`${hotel.name} property photo ${index + 1}`} className={index === 0 ? 'h-72 w-full object-cover sm:col-span-2 sm:row-span-2 sm:h-full' : 'h-40 w-full object-cover sm:h-full'} loading={index === 0 ? 'eager' : 'lazy'} />
            )) : <div className="flex h-72 items-center justify-center bg-forest-100 text-forest-500 sm:col-span-4">Property photos coming soon</div>}
          </div>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_380px]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                {hasVerifiedRating && <span className="inline-flex items-center gap-1 rounded-full bg-gold-100 px-3 py-1.5 text-sm font-bold text-forest-800"><Star size={15} className="fill-gold-500 text-gold-500" /> {average}</span>}
                {displayReviewCount > 0 && <span className="text-sm text-forest-500">{displayReviewCount} guest reviews</span>}
              </div>
              <h1 className="mt-3 font-serif text-4xl font-bold text-forest-950 sm:text-5xl">{hotel.name}</h1>
              <p className="mt-3 flex items-center gap-2 text-forest-600"><MapPin size={17} className="text-gold-600" /> {hotel.location}</p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-forest-700">{hotel.description}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-cream-200 bg-white p-4"><Users size={20} className="text-gold-600" /><p className="mt-2 text-sm font-bold text-forest-900">Guest-friendly stay</p><p className="text-xs text-forest-500">Ask the team about room fit.</p></div>
                <div className="rounded-2xl border border-cream-200 bg-white p-4"><Wifi size={20} className="text-gold-600" /><p className="mt-2 text-sm font-bold text-forest-900">Stay amenities</p><p className="text-xs text-forest-500">See the property facilities below.</p></div>
                <div className="rounded-2xl border border-cream-200 bg-white p-4"><ShieldCheck size={20} className="text-gold-600" /><p className="mt-2 text-sm font-bold text-forest-900">Direct support</p><p className="text-xs text-forest-500">Enquire with the local team.</p></div>
              </div>

              <section className="mt-12">
                <h2 className="font-serif text-3xl font-bold text-forest-900">Amenities</h2>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {hotel.amenities.map((amenity) => <div key={amenity} className="flex items-center gap-2 rounded-xl bg-white p-3 text-sm text-forest-700"><Check size={16} className="text-gold-600" />{amenity.split('-').map(p => p[0]?.toUpperCase() + p.slice(1)).join(' ')}</div>)}
                </div>
              </section>

              {reviews.length > 0 && (
                <section className="mt-12">
                  <h2 className="font-serif text-3xl font-bold text-forest-900">Guest reviews</h2>
                  <div className="mt-5 space-y-4">
                    {reviews.slice(0, 5).map(review => <article key={review.id} className="rounded-2xl border border-cream-200 bg-white p-5"><div className="flex items-center justify-between gap-4"><div><p className="font-semibold text-forest-900">{review.guestName}</p><p className="text-xs text-forest-500">{review.stayType}</p></div><span className="inline-flex items-center gap-1 text-sm font-bold text-forest-800"><Star size={14} className="fill-gold-500 text-gold-500" />{review.rating}</span></div><p className="mt-3 text-sm leading-6 text-forest-700">{review.text}</p></article>)}
                  </div>
                </section>
              )}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[1.75rem] border border-cream-200 bg-white p-6 shadow-card-hover">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Check availability</p>
                <div className="mt-3 flex items-end gap-1"><span className="font-serif text-4xl font-bold text-forest-950">₹{hotel.pricePerNight.toLocaleString('en-IN')}</span><span className="pb-1 text-sm text-forest-500">/ night*</span></div>
                <p className="mt-1 text-xs text-forest-500">Displayed rate. Final availability and inclusions are confirmed by the property.</p>
                <Link to={`/booking?hotel=${encodeURIComponent(hotel.slug)}`} className="mt-6 flex items-center justify-center gap-2 rounded-full bg-forest-800 px-6 py-3.5 text-sm font-bold text-white hover:bg-forest-900"><CalendarCheck size={18} /> Check availability</Link>
                <div className="my-5 border-t border-cream-200" />
                <ContactActions hotelName={hotel.name} />
              </div>
              <div className="mt-4 rounded-2xl bg-forest-950 p-5 text-white">
                <div className="flex items-center gap-2"><Car size={18} className="text-gold-400" /><span className="font-semibold">Need travel help?</span></div>
                <p className="mt-2 text-sm leading-6 text-white/70">Ask about local sightseeing, transfers and vehicle support while you enquire.</p>
                <div className="mt-3 flex items-center gap-2 text-sm"><Utensils size={15} className="text-gold-400" /> Ask about dining options</div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
