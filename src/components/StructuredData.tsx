import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'HotelChain',
      name: 'Coorg Manju Group of Hotels',
      description: 'Hospitality stays and travel support across Mysuru and Coorg, Karnataka.',
      url: window.location.origin,
      areaServed: ['Mysuru, Karnataka, India', 'Coorg, Karnataka, India'],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => document.head.removeChild(script);
  }, []);

  return null;
}
