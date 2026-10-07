import { getSupabase } from '@/lib/supabase';
import type { Destination, Hotel, Offer, Experience, Review, TravelGuide, Feature, Amenity } from '@/types';

function assertNoError(error: { message: string } | null, resource: string) {
  if (error) throw new Error(`Unable to load ${resource}: ${error.message}`);
}

const mapDestination = (r: any): Destination => ({ id: r.id, name: r.name, slug: r.slug, description: r.description, image: r.image, hotelCount: r.hotel_count });
const mapHotel = (r: any): Hotel => ({
  id: r.id, name: r.name, slug: r.slug, location: r.location, destinationId: r.destination_id,
  image: r.image, gallery: r.gallery ?? [], rating: Number(r.rating), reviewCount: r.review_count,
  starRating: r.star_rating, description: r.description, amenities: r.amenities ?? [],
  pricePerNight: Number(r.price_per_night), originalPrice: r.original_price == null ? undefined : Number(r.original_price),
  featured: r.featured,
});
const mapOffer = (r: any): Offer => ({ id: r.id, title: r.title, description: r.description, badge: r.badge, image: r.image, ctaText: r.cta_text });
const mapExperience = (r: any): Experience => ({ id: r.id, name: r.name, description: r.description, image: r.image });
const mapFeature = (r: any): Feature => ({ id: r.id, title: r.title, description: r.description, icon: r.icon });
const mapReview = (r: any): Review => ({ id: r.id, guestName: r.guest_name, avatar: r.avatar, rating: r.rating, text: r.text, stayType: r.stay_type, hotelName: r.hotel_name });
const mapTravelGuide = (r: any): TravelGuide => ({ id: r.id, title: r.title, description: r.description, image: r.image, category: r.category });
const mapAmenity = (r: any): Amenity => ({ id: r.id, name: r.name, icon: r.icon });

export async function getDestinations() {
  const { data, error } = await getSupabase().from('destinations').select('*').order('name');
  assertNoError(error, 'destinations'); return (data ?? []).map(mapDestination);
}
export async function getHotels(options?: { featured?: boolean; destinationId?: string }) {
  let query = getSupabase().from('hotels').select('*').eq('is_active', true).order('name');
  if (options?.featured !== undefined) query = query.eq('featured', options.featured);
  if (options?.destinationId) query = query.eq('destination_id', options.destinationId);
  const { data, error } = await query; assertNoError(error, 'hotels'); return (data ?? []).map(mapHotel);
}
export async function getOffers() {
  const { data, error } = await getSupabase().from('offers').select('*').eq('is_active', true).order('sort_order');
  assertNoError(error, 'offers'); return (data ?? []).map(mapOffer);
}
export async function getExperiences() {
  const { data, error } = await getSupabase().from('experiences').select('*').eq('is_active', true).order('sort_order');
  assertNoError(error, 'experiences'); return (data ?? []).map(mapExperience);
}
export async function getFeatures() {
  const { data, error } = await getSupabase().from('features').select('*').eq('is_active', true).order('sort_order');
  assertNoError(error, 'features'); return (data ?? []).map(mapFeature);
}
export async function getAmenities() {
  const { data, error } = await getSupabase().from('amenities').select('*').eq('is_active', true).order('sort_order');
  assertNoError(error, 'amenities'); return (data ?? []).map(mapAmenity);
}
export async function getReviews() {
  const { data, error } = await getSupabase().from('reviews').select('*').eq('is_published', true).order('created_at', { ascending: false });
  assertNoError(error, 'reviews'); return (data ?? []).map(mapReview);
}
export async function getTravelGuides() {
  const { data, error } = await getSupabase().from('travel_guides').select('*').eq('is_published', true).order('sort_order');
  assertNoError(error, 'travel guides'); return (data ?? []).map(mapTravelGuide);
}
export async function getHomeContent() {
  const [destinations, featuredHotels, offers, experiences, features, amenities, reviews, travelGuides] =
    await Promise.all([getDestinations(), getHotels({ featured: true }), getOffers(), getExperiences(), getFeatures(), getAmenities(), getReviews(), getTravelGuides()]);
  return { destinations, featuredHotels, offers, experiences, features, amenities, reviews, travelGuides };
}
