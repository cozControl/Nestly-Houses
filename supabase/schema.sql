-- Run this once in the Supabase SQL Editor for the Nestly project.

create table if not exists properties (
  slug text primary key,
  name text not null,
  location text not null,
  city text not null,
  beds int not null,
  baths int not null,
  size text not null,
  price bigint not null,
  price_label text not null,
  amenities text[] not null default '{}',
  description text not null default '',
  image text,
  created_at timestamptz not null default now()
);

-- Lock the table down: anyone can read, nobody can write via the public (anon) key.
-- You'll add/edit listings from the Supabase Table Editor itself, signed in as you.
alter table properties enable row level security;

create policy "Public read access"
  on properties for select
  using (true);

-- Seed the existing listings.
insert into properties (slug, name, location, city, beds, baths, size, price, price_label, amenities, description, image)
values
  ('modern-apartment-masaki', 'Modern Apartment in Masaki', 'Masaki, Dar es Salaam', 'dar es salaam', 3, 2, '120m²', 1200000, 'TZS 1,200,000 / mo', array['WiFi','Parking','Security'], 'A modern three-bedroom apartment in Masaki, one of Dar es Salaam''s leafier residential neighborhoods. Two bathrooms and 120m² of living space, with on-site parking, security, and WiFi included.', 'property1.jpg'),
  ('cozy-studio-mikocheni', 'Cozy Studio in Mikocheni', 'Mikocheni, Dar es Salaam', 'dar es salaam', 1, 1, '45m²', 450000, 'TZS 450,000 / mo', array['WiFi','Water'], 'A compact 45m² studio in Mikocheni, well suited to a single tenant or couple. Water and WiFi are included in the listed rent.', 'property2.jpg'),
  ('spacious-villa-mbezi-beach', 'Spacious Villa in Mbezi Beach', 'Mbezi Beach, Dar es Salaam', 'dar es salaam', 4, 3, '250m²', 3500000, 'TZS 3,500,000 / mo', array['Pool','Parking','Generator'], 'A four-bedroom, three-bathroom villa near Mbezi Beach, with 250m² of space, a private pool, on-site parking, and a backup generator.', 'property3.jpg'),
  ('modern-flat-arusha-cbd', 'Modern Flat in Arusha CBD', 'CBD, Arusha', 'arusha', 2, 1, '80m²', 800000, 'TZS 800,000 / mo', array['WiFi','Security'], 'A two-bedroom flat in the heart of Arusha''s CBD, 80m² with one bathroom, WiFi, and on-site security — close to shops and services.', null),
  ('beachfront-apartment-zanzibar', 'Beachfront Apartment in Zanzibar', 'Nungwi, Zanzibar', 'zanzibar', 2, 2, '95m²', 1500000, 'TZS 1,500,000 / mo', array['Beach Access','WiFi'], 'A two-bedroom, two-bathroom apartment in Nungwi, Zanzibar, with direct beach access. 95m² of living space with WiFi included.', null),
  ('lake-view-home-mwanza', 'Lake View Home in Mwanza', 'Capri Point, Mwanza', 'mwanza', 3, 2, '140m²', 900000, 'TZS 900,000 / mo', array['Lake View','Parking','Garden'], 'A three-bedroom home on Capri Point, Mwanza, with views of Lake Victoria. 140m² of space, two bathrooms, a garden, and on-site parking.', null)
on conflict (slug) do nothing;
