create table if not exists public.booking_enquiries (
  id uuid primary key default gen_random_uuid(),
  hotel_id uuid references public.hotels(id) on delete set null,
  hotel_name text not null default '',
  guest_name text not null,
  phone text not null,
  email text not null default '',
  check_in date not null,
  check_out date not null,
  guests integer not null default 1 check (guests between 1 and 30),
  rooms integer not null default 1 check (rooms between 1 and 10),
  message text not null default '',
  status text not null default 'new' check (status in ('new','contacted','confirmed','cancelled')),
  created_at timestamptz not null default now()
);

alter table public.booking_enquiries enable row level security;

drop policy if exists "public can create booking enquiries" on public.booking_enquiries;
create policy "public can create booking enquiries"
on public.booking_enquiries
for insert
to anon, authenticated
with check (true);
