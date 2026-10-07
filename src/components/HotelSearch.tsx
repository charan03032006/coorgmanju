import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Users,
  Search,
  ChevronDown,
} from 'lucide-react';
import { destinations } from '@/data';

export default function HotelSearch() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Adults, 1 Room');
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const destRef = useRef<HTMLDivElement>(null);
  const guestRef = useRef<HTMLDivElement>(null);

  const today = new Date().toISOString().split('T')[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set('destination', destination);
    if (checkIn) params.set('checkIn', checkIn);
    if (checkOut) params.set('checkOut', checkOut);
    params.set('guests', `${adults}-${children}-${rooms}`);
    navigate(`/hotels?${params.toString()}`);
  };

  return (
    <form
      id="search-widget"
      onSubmit={handleSearch}
      className="bg-white rounded-2xl shadow-card-hover p-4 sm:p-6 max-w-5xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row lg:items-end gap-4">
        {/* Destination */}
        <div className="flex-1 relative" ref={destRef}>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-forest-600 mb-1.5 uppercase tracking-wide">
            <MapPin size={14} className="text-gold-500" />
            Destination
          </label>
          <button
            type="button"
            onClick={() => {
              setShowDestDropdown(!showDestDropdown);
              setShowGuestDropdown(false);
            }}
            className="w-full flex items-center justify-between rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-left transition-colors hover:border-forest-300 focus:outline-none focus:ring-2 focus:ring-forest-400"
          >
            <span className={destination ? 'text-forest-800 font-medium' : 'text-forest-400'}>
              {destination || 'Search hotels or destinations'}
            </span>
            <ChevronDown size={18} className="text-forest-400" />
          </button>
          {showDestDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-card-hover border border-cream-200 z-20 overflow-hidden animate-scale-in">
              {destinations.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => {
                    setDestination(d.name);
                    setShowDestDropdown(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-forest-50 transition-colors border-b border-cream-100 last:border-0"
                >
                  <MapPin size={16} className="text-forest-400 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-forest-800">{d.name}</p>
                    <p className="text-xs text-forest-500 truncate">{d.hotelCount} hotels available</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Check-in */}
        <div className="flex-1">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-forest-600 mb-1.5 uppercase tracking-wide">
            <Calendar size={14} className="text-gold-500" />
            Check-in
          </label>
          <input
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-forest-800 font-medium transition-colors hover:border-forest-300 focus:outline-none focus:ring-2 focus:ring-forest-400 [color-scheme:light]"
          />
        </div>

        {/* Check-out */}
        <div className="flex-1">
          <label className="flex items-center gap-1.5 text-xs font-semibold text-forest-600 mb-1.5 uppercase tracking-wide">
            <Calendar size={14} className="text-gold-500" />
            Check-out
          </label>
          <input
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-forest-800 font-medium transition-colors hover:border-forest-300 focus:outline-none focus:ring-2 focus:ring-forest-400 [color-scheme:light]"
          />
        </div>

        {/* Guests & Rooms */}
        <div className="flex-1 relative" ref={guestRef}>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-forest-600 mb-1.5 uppercase tracking-wide">
            <Users size={14} className="text-gold-500" />
            Guests & Rooms
          </label>
          <button
            type="button"
            onClick={() => {
              setShowGuestDropdown(!showGuestDropdown);
              setShowDestDropdown(false);
            }}
            className="w-full flex items-center justify-between rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-left transition-colors hover:border-forest-300 focus:outline-none focus:ring-2 focus:ring-forest-400"
          >
            <span className="text-forest-800 font-medium text-sm truncate">{guests}</span>
            <ChevronDown size={18} className="text-forest-400 shrink-0" />
          </button>
          {showGuestDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-card-hover border border-cream-200 z-20 p-4 animate-scale-in">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-forest-700">Adults</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="h-8 w-8 rounded-full border border-forest-200 text-forest-600 hover:bg-forest-50 font-bold"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-semibold text-forest-800">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(Math.min(10, adults + 1))}
                    className="h-8 w-8 rounded-full border border-forest-200 text-forest-600 hover:bg-forest-50 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-forest-700">Children</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="h-8 w-8 rounded-full border border-forest-200 text-forest-600 hover:bg-forest-50 font-bold"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-semibold text-forest-800">{children}</span>
                  <button
                    type="button"
                    onClick={() => setChildren(Math.min(6, children + 1))}
                    className="h-8 w-8 rounded-full border border-forest-200 text-forest-600 hover:bg-forest-50 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-forest-700">Rooms</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setRooms(Math.max(1, rooms - 1))}
                    className="h-8 w-8 rounded-full border border-forest-200 text-forest-600 hover:bg-forest-50 font-bold"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-semibold text-forest-800">{rooms}</span>
                  <button
                    type="button"
                    onClick={() => setRooms(Math.min(5, rooms + 1))}
                    className="h-8 w-8 rounded-full border border-forest-200 text-forest-600 hover:bg-forest-50 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setGuests(`${adults} Adults${children > 0 ? `, ${children} Children` : ''}, ${rooms} Room${rooms > 1 ? 's' : ''}`);
                  setShowGuestDropdown(false);
                }}
                className="w-full mt-2 py-2 rounded-lg bg-forest-700 text-white text-sm font-medium hover:bg-forest-800"
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Search button */}
        <button
          type="submit"
          className="btn-primary w-full lg:w-auto lg:px-8 py-3.5 text-base shrink-0"
        >
          <Search size={18} />
          Search Hotels
        </button>
      </div>
    </form>
  );
}
