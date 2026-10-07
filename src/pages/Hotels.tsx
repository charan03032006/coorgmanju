import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, MapPin, Star, X } from 'lucide-react';
import SEO from '@/components/SEO';
import HotelCard from '@/components/HotelCard';
import { getDestinations, getHotels } from '@/services/contentService';
import type { Destination, Hotel } from '@/types';

export default function Hotels() {
  const { destinationId: routeDestination } = useParams();
  const [params, setParams] = useSearchParams();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [mobileFilters, setMobileFilters] = useState(false);
  const [rating, setRating] = useState(Number(params.get('rating') || 0));
  const [maxPrice, setMaxPrice] = useState(Number(params.get('maxPrice') || 0));
  const [sort, setSort] = useState(params.get('sort') || 'recommended');

  const destination = routeDestination || params.get('destination') || '';

  useEffect(() => {
    Promise.all([getHotels(), getDestinations()])
      .then(([h, d]) => { setHotels(h); setDestinations(d); })
      .finally(() => setLoading(false));
  }, []);

  const selectedDestination = destinations.find(d => d.slug === destination || d.name.toLowerCase() === destination.toLowerCase());

  const filtered = useMemo(() => {
    let result = hotels;
    if (selectedDestination) result = result.filter(h => h.destinationId === selectedDestination.id);
    if (rating) result = result.filter(h => h.rating >= rating);
    if (maxPrice) result = result.filter(h => h.pricePerNight <= maxPrice);
    const q = params.get('q')?.toLowerCase().trim();
    if (q) result = result.filter(h => [h.name, h.location, h.description].join(' ').toLowerCase().includes(q));
    return [...result].sort((a, b) => sort === 'price-low' ? a.pricePerNight - b.pricePerNight : sort === 'rating' ? b.rating - a.rating : b.rating - a.rating);
  }, [hotels, selectedDestination, rating, maxPrice, sort, params]);

  const updateFilter = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value); else next.delete(key);
    setParams(next);
  };

  return (
    <>
      <SEO title={selectedDestination ? `${selectedDestination.name} Stays — Coorg Manju` : 'Hotels & Homestays — Coorg Manju'} description="Discover stays across Mysuru and Coorg with clear property details, local support and easy enquiry." />
      <div className="min-h-screen bg-cream-50 pt-28 pb-20">
        <div className="section-container">
          <div className="rounded-[2rem] bg-forest-950 p-7 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Stay your way</p>
            <h1 className="mt-2 max-w-3xl font-serif text-3xl font-bold sm:text-5xl">{selectedDestination ? `Stays in ${selectedDestination.name}` : 'Hotels, homestays & stays across Mysuru and Coorg'}</h1>
            <p className="mt-4 max-w-2xl text-white/70">Compare properties by location, rating and budget. Then book or enquire with the local team.</p>
          </div>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row">
            <aside className={`${mobileFilters ? 'block' : 'hidden'} fixed inset-0 z-[70] bg-black/40 lg:static lg:block lg:w-72 lg:bg-transparent`}>
              <div className="h-full w-[320px] bg-white p-6 shadow-xl lg:h-auto lg:w-auto lg:rounded-3xl lg:border lg:border-cream-200 lg:shadow-none">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-xl font-bold text-forest-900">Filter stays</h2>
                  <button className="lg:hidden" onClick={() => setMobileFilters(false)}><X /></button>
                </div>
                <div className="mt-6 space-y-6">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-forest-500">Destination</label>
                    <select value={destination} onChange={e => updateFilter('destination', e.target.value)} className="mt-2 w-full rounded-xl border border-cream-200 bg-cream-50 px-3 py-3 text-sm">
                      <option value="">All destinations</option>
                      {destinations.map(d => <option key={d.id} value={d.slug}>{d.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-forest-500">Guest rating</label>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {[4, 4.5].map(v => <button key={v} onClick={() => { setRating(rating === v ? 0 : v); updateFilter('rating', rating === v ? '' : String(v)); }} className={`rounded-xl border px-3 py-2 text-sm ${rating === v ? 'border-forest-600 bg-forest-50 text-forest-800' : 'border-cream-200'}`}><Star size={13} className="mr-1 inline fill-gold-400 text-gold-400" />{v}+</button>)}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-forest-500">Max price / night</label>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {[3000, 5000, 10000, 15000].map(v => <button key={v} onClick={() => { setMaxPrice(maxPrice === v ? 0 : v); updateFilter('maxPrice', maxPrice === v ? '' : String(v)); }} className={`rounded-xl border px-2 py-2 text-xs ${maxPrice === v ? 'border-forest-600 bg-forest-50 text-forest-800' : 'border-cream-200'}`}>₹{v.toLocaleString('en-IN')}</button>)}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <main className="min-w-0 flex-1">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div><p className="text-sm text-forest-500">{loading ? 'Finding stays…' : `${filtered.length} stay${filtered.length === 1 ? '' : 's'} found`}</p>{selectedDestination && <p className="mt-1 flex items-center gap-1 text-xs text-forest-400"><MapPin size={12} /> {selectedDestination.name}</p>}</div>
                <div className="flex gap-2">
                  <button onClick={() => setMobileFilters(true)} className="inline-flex items-center gap-2 rounded-full border border-cream-200 bg-white px-4 py-2 text-sm font-semibold lg:hidden"><Filter size={15} /> Filters</button>
                  <label className="inline-flex items-center gap-2 rounded-full border border-cream-200 bg-white px-4 py-2 text-sm"><SlidersHorizontal size={15} /><select value={sort} onChange={e => { setSort(e.target.value); updateFilter('sort', e.target.value); }} className="bg-transparent font-medium outline-none"><option value="recommended">Recommended</option><option value="rating">Top rated</option><option value="price-low">Price: low to high</option></select></label>
                </div>
              </div>
              {loading ? <div className="grid gap-5 sm:grid-cols-2"><div className="h-96 animate-pulse rounded-3xl bg-white" /><div className="h-96 animate-pulse rounded-3xl bg-white" /></div> :
                filtered.length ? <div className="grid gap-5 sm:grid-cols-2">{filtered.map(h => <HotelCard key={h.id} hotel={h} />)}</div> :
                <div className="rounded-3xl border border-cream-200 bg-white p-12 text-center"><h2 className="font-serif text-2xl font-bold text-forest-900">No matching stays</h2><p className="mt-2 text-forest-600">Try another destination or widen your filters.</p><Link to="/hotels" className="btn-primary mt-6">Clear filters</Link></div>}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
