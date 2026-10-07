import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'HotelChain',
      name: 'Coorg Manju Group of Hotels',
      description: 'Premium hospitality group in Coorg, Karnataka offering comfortable stays across Madikeri, Kushalnagar, Virajpet, and Somwarpet.',
      url: 'https://www.coorgmanjuhotels.com',
      areaServed: 'Coorg, Karnataka, India',
      priceRange: '₹2,200 - ₹5,500',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '2800',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
