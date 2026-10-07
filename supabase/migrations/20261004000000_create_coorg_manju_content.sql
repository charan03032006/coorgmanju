create extension if not exists pgcrypto;

create table if not exists public.destinations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text not null default '',
  image text not null default '',
  hotel_count integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.hotels (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  location text not null,
  destination_id uuid references public.destinations(id) on delete set null,
  image text not null default '',
  gallery text[] not null default '{}',
  rating numeric(2,1) not null default 0,
  review_count integer not null default 0,
  star_rating integer not null default 0 check (star_rating between 0 and 5),
  description text not null default '',
  amenities text[] not null default '{}',
  price_per_night numeric(12,2) not null default 0,
  original_price numeric(12,2),
  featured boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.amenities (
  id text primary key,
  name text not null,
  icon text not null,
  sort_order integer not null default 0,
  is_active boolean not null default true
);

create table if not exists public.offers (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  badge text not null default '',
  image text not null default '',
  cta_text text not null default 'View Offer',
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.experiences (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null default '',
  image text not null default '',
  sort_order integer not null default 0,
  is_active boolean not null default true
);

create table if not exists public.features (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  icon text not null,
  sort_order integer not null default 0,
  is_active boolean not null default true
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  guest_name text not null,
  avatar text not null default '',
  rating integer not null default 5 check (rating between 1 and 5),
  text text not null,
  stay_type text not null default '',
  hotel_name text not null default '',
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.travel_guides (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  image text not null default '',
  category text not null default '',
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists hotels_destination_id_idx on public.hotels(destination_id);
create index if not exists hotels_featured_idx on public.hotels(featured) where is_active = true;
create index if not exists offers_sort_order_idx on public.offers(sort_order) where is_active = true;
create index if not exists experiences_sort_order_idx on public.experiences(sort_order) where is_active = true;
create index if not exists features_sort_order_idx on public.features(sort_order) where is_active = true;
create index if not exists travel_guides_sort_order_idx on public.travel_guides(sort_order) where is_published = true;

alter table public.destinations enable row level security;
alter table public.hotels enable row level security;
alter table public.amenities enable row level security;
alter table public.offers enable row level security;
alter table public.experiences enable row level security;
alter table public.features enable row level security;
alter table public.reviews enable row level security;
alter table public.travel_guides enable row level security;

drop policy if exists "public can read destinations" on public.destinations;
create policy "public can read destinations" on public.destinations for select to anon, authenticated using (true);

drop policy if exists "public can read active hotels" on public.hotels;
create policy "public can read active hotels" on public.hotels for select to anon, authenticated using (is_active = true);

drop policy if exists "public can read active amenities" on public.amenities;
create policy "public can read active amenities" on public.amenities for select to anon, authenticated using (is_active = true);

drop policy if exists "public can read active offers" on public.offers;
create policy "public can read active offers" on public.offers for select to anon, authenticated using (is_active = true);

drop policy if exists "public can read active experiences" on public.experiences;
create policy "public can read active experiences" on public.experiences for select to anon, authenticated using (is_active = true);

drop policy if exists "public can read active features" on public.features;
create policy "public can read active features" on public.features for select to anon, authenticated using (is_active = true);

drop policy if exists "public can read published reviews" on public.reviews;
create policy "public can read published reviews" on public.reviews for select to anon, authenticated using (is_published = true);

drop policy if exists "public can read published guides" on public.travel_guides;
create policy "public can read published guides" on public.travel_guides for select to anon, authenticated using (is_published = true);
