import { FormEvent, useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CalendarDays, CheckCircle2, MapPin, Users } from 'lucide-react';
import SEO from '@/components/SEO';
import { getHotel, createBookingEnquiry } from '@/services/contentService';
import type { Hotel } from '@/types';

export default function Booking() {
  const [params] = useSearchParams();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', checkIn: '', checkOut: '', guests: '2', rooms: '1', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const slug = params.get('hotel');
    if (slug) getHotel(slug).then(setHotel).catch(() => setHotel(null));
  }, [params]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.phone.trim() || !form.checkIn || !form.checkOut) { setError('Please enter your name, phone number and stay dates.'); return; }
    if (new Date(form.checkOut) <= new Date(form.checkIn)) { setError('Check-out must be after check-in.'); return; }
    try {
      await createBookingEnquiry({ ...form, hotelId: hotel?.id, hotelName: hotel?.name });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send enquiry. Please try again.');
    }
  };

  if (submitted) return <><SEO title="Enquiry received — Coorg Manju" /><main className="min-h-screen bg-cream-50 px-6 pb-24 pt-32"><div className="mx-auto max-w-xl rounded-[2rem] bg-white p-8 text-center shadow-card-hover sm:p-12"><CheckCircle2 className="mx-auto text-forest-700" size={52} /><h1 className="mt-5 font-serif text-4xl font-bold text-forest-950">Enquiry received</h1><p className="mt-4 leading-7 text-forest-600">Thank you, {form.name}. The Coorg Manju team can confirm availability, final pricing and inclusions with you.</p><Link to="/hotels" className="mt-7 inline-flex rounded-full bg-forest-800 px-6 py-3 text-sm font-bold text-white">Browse more stays</Link></div></main></>;

  return (
    <>
      <SEO title={hotel ? `Check availability — ${hotel.name}` : 'Check availability — Coorg Manju'} />
      <main className="min-h-screen bg-cream-50 pb-24 pt-28">
        <div className="section-container grid gap-8 lg:grid-cols-[1fr_400px]">
          <section className="rounded-[2rem] bg-white p-6 shadow-card-hover sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Direct enquiry</p>
            <h1 className="mt-2 font-serif text-4xl font-bold text-forest-950 sm:text-5xl">{hotel ? `Check availability at ${hotel.name}` : 'Tell us about your stay'}</h1>
            <p className="mt-4 max-w-2xl text-forest-600">Send your dates and group details. We will confirm availability and the final rate before you commit.</p>
            <form onSubmit={submit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-forest-800">Name<input required value={form.name} onChange={e => setForm({...form,name:e.target.value})} className="mt-2 w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-forest-300" /></label>
              <label className="text-sm font-semibold text-forest-800">Phone<input required type="tel" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} className="mt-2 w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-forest-300" /></label>
              <label className="text-sm font-semibold text-forest-800">Email (optional)<input type="email" value={form.email} onChange={e => setForm({...form,email:e.target.value})} className="mt-2 w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-forest-300" /></label>
              <label className="text-sm font-semibold text-forest-800">Guests<input required type="number" min="1" max="30" value={form.guests} onChange={e => setForm({...form,guests:e.target.value})} className="mt-2 w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-forest-300" /></label>
              <label className="text-sm font-semibold text-forest-800">Check-in<input required type="date" min={new Date().toISOString().slice(0,10)} value={form.checkIn} onChange={e => setForm({...form,checkIn:e.target.value})} className="mt-2 w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-forest-300" /></label>
              <label className="text-sm font-semibold text-forest-800">Check-out<input required type="date" min={form.checkIn || new Date().toISOString().slice(0,10)} value={form.checkOut} onChange={e => setForm({...form,checkOut:e.target.value})} className="mt-2 w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-forest-300" /></label>
              <label className="text-sm font-semibold text-forest-800">Rooms<input required type="number" min="1" max="10" value={form.rooms} onChange={e => setForm({...form,rooms:e.target.value})} className="mt-2 w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-forest-300" /></label>
              <label className="text-sm font-semibold text-forest-800 sm:col-span-2">Special request (optional)<textarea rows={4} value={form.message} onChange={e => setForm({...form,message:e.target.value})} placeholder="Breakfast, family room, arrival time, sightseeing, transfer..." className="mt-2 w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-forest-300" /></label>
              {error && <p className="sm:col-span-2 rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
              <button className="sm:col-span-2 rounded-full bg-forest-800 px-6 py-4 text-sm font-bold text-white hover:bg-forest-900">Send availability enquiry</button>
            </form>
          </section>

          <aside className="h-fit rounded-[2rem] bg-forest-950 p-7 text-white lg:sticky lg:top-28">
            {hotel?.image && <img src={hotel.image} alt={hotel.name} className="h-52 w-full rounded-2xl object-cover" />}
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-gold-400">What happens next</p>
            <div className="mt-4 space-y-4 text-sm text-white/80">
              <p className="flex gap-3"><CalendarDays className="shrink-0 text-gold-400" size={18} />We confirm dates and room availability.</p>
              <p className="flex gap-3"><Users className="shrink-0 text-gold-400" size={18} />We confirm the best fit for your group.</p>
              <p className="flex gap-3"><MapPin className="shrink-0 text-gold-400" size={18} />We can also help with local travel questions.</p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
