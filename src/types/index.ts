export interface Destination {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  hotelCount: number;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
}

export interface Hotel {
  id: string;
  name: string;
  slug: string;
  location: string;
  destinationId: string;
  image: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  starRating: number;
  description: string;
  amenities: string[];
  pricePerNight: number;
  originalPrice?: number;
  featured: boolean;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  ctaText: string;
}

export interface Experience {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Review {
  id: string;
  guestName: string;
  avatar: string;
  rating: number;
  text: string;
  stayType: string;
  hotelName: string;
}

export interface TravelGuide {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
