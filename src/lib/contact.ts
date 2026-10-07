export const CONTACT = {
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '') || '',
  phone: import.meta.env.VITE_BOOKING_PHONE || '',
  email: import.meta.env.VITE_BOOKING_EMAIL || '',
};

export function whatsappUrl(message: string) {
  if (!CONTACT.whatsapp) return '';
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
