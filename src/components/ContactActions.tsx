import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT, whatsappUrl } from '@/lib/contact';

export default function ContactActions({ hotelName }: { hotelName?: string }) {
  const message = hotelName
    ? `Hi Coorg Manju, I would like to check availability at ${hotelName}.`
    : 'Hi Coorg Manju, I would like to check room availability.';
  const whatsapp = whatsappUrl(message);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a href={whatsapp || '#'} onClick={(e) => { if (!whatsapp) e.preventDefault(); }} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:brightness-95">
        <MessageCircle size={18} /> WhatsApp Availability
      </a>
      <a href={CONTACT.phone ? `tel:${CONTACT.phone}` : '#'} onClick={(e) => { if (!CONTACT.phone) e.preventDefault(); }} className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-300 bg-white px-6 py-3.5 text-sm font-bold text-forest-800 transition hover:bg-forest-50">
        <Phone size={18} /> Call to Enquire
      </a>
    </div>
  );
}
