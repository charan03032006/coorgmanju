import { MessageCircle, Phone, CalendarCheck } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CONTACT, whatsappUrl } from '@/lib/contact';

export default function StickyBookingBar() {
  const location = useLocation();
  const navigate = useNavigate();
  if (location.pathname === '/booking' || location.pathname.startsWith('/booking/')) return null;

  const message = 'Hi Coorg Manju, I would like to check room availability.';
  const whatsapp = whatsappUrl(message);

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] border-t border-cream-200 bg-white/95 p-2 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a href={whatsapp || '#'} onClick={(e) => { if (!whatsapp) { e.preventDefault(); navigate('/booking'); } }} className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-2 text-xs font-bold text-white">
          <MessageCircle size={17} /> WhatsApp
        </a>
        <a href={CONTACT.phone ? `tel:${CONTACT.phone}` : '#'} onClick={(e) => { if (!CONTACT.phone) { e.preventDefault(); navigate('/booking'); } }} className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl border border-forest-200 bg-white px-2 text-xs font-bold text-forest-800">
          <Phone size={17} /> Call
        </a>
        <button onClick={() => navigate('/booking')} className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-forest-800 px-2 text-xs font-bold text-white">
          <CalendarCheck size={17} /> Enquire
        </button>
      </div>
    </div>
  );
}
