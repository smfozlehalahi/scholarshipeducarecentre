-- Scholarship Educare Centre: International Scholarship Database
-- Supabase > SQL Editor > New query > paste everything > Run

create extension if not exists pgcrypto;

create table if not exists admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

create or replace function is_admin() returns boolean
language sql stable security definer set search_path = public
as $$ select exists (select 1 from admins where user_id = auth.uid()) $$;

create table if not exists countries (
  code text primary key,
  flag text,
  name jsonb not null,
  sort_order int default 0,
  active boolean default true
);

create table if not exists universities (
  id uuid primary key default gen_random_uuid(),
  country_code text not null references countries(code) on delete cascade,
  name jsonb not null,
  website text,
  logo_url text,
  active boolean default true,
  created_at timestamptz default now()
);

create table if not exists scholarships (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  country_code text not null references countries(code),
  university_id uuid references universities(id) on delete set null,
  degree_level text check (degree_level in ('bachelor','master','phd','other')),
  subject text,
  funding_type text check (funding_type in ('full','partial','tuition_waiver','research','other')),
  age_limit int,
  ielts text default 'unknown' check (ielts in ('required','not_required','unknown')),
  toefl text default 'unknown' check (toefl in ('required','not_required','unknown')),
  without_ielts text default 'unknown' check (without_ielts in ('available','not_available','unknown')),
  open_date date,
  deadline date,
  next_period text,
  status text default 'verification_required' check (status in ('verification_required','awaiting_announcement','closed','upcoming','open_now','closing_soon')),
  bd_eligible text default 'unknown' check (bd_eligible in ('yes','no','unknown')),
  source_url text,
  info_url text,
  apply_url text,
  admin_notes text,
  info jsonb default '{}'::jsonb,
  verified boolean default false,
  verified_at date,
  published boolean default false,
  created_at timestamptz default now(),
  constraint published_needs_verified check (not published or verified)
);

-- Row Level Security: public sees only published + verified; admins see and manage everything
alter table admins enable row level security;
create policy "admin reads own row" on admins for select using (user_id = auth.uid());

alter table countries enable row level security;
create policy "countries public read" on countries for select using (active or is_admin());
create policy "countries admin write" on countries for all using (is_admin()) with check (is_admin());

alter table universities enable row level security;
create policy "universities public read" on universities for select using (active or is_admin());
create policy "universities admin write" on universities for all using (is_admin()) with check (is_admin());

alter table scholarships enable row level security;
create policy "scholarships public read" on scholarships for select using (published and verified);
create policy "scholarships admin all" on scholarships for all using (is_admin()) with check (is_admin());

-- Starter countries
insert into countries (code, flag, name, sort_order) values
('sa','🇸🇦','{"bn":"সৌদি আরব","en":"Saudi Arabia","ar":"السعودية"}',1),
('qa','🇶🇦','{"bn":"কাতার","en":"Qatar","ar":"قطر"}',2),
('ae','🇦🇪','{"bn":"সংযুক্ত আরব আমিরাত (দুবাই ও শারজাহ)","en":"United Arab Emirates (Dubai & Sharjah)","ar":"الإمارات العربية المتحدة (دبي والشارقة)"}',3),
('tr','🇹🇷','{"bn":"তুরস্ক","en":"Turkey","ar":"تركيا"}',4),
('iq','🇮🇶','{"bn":"ইরাক","en":"Iraq","ar":"العراق"}',5),
('kw','🇰🇼','{"bn":"কুয়েত","en":"Kuwait","ar":"الكويت"}',6),
('brn','🇧🇳','{"bn":"ব্রুনাই","en":"Brunei","ar":"بروناي"}',7),
('pk','🇵🇰','{"bn":"পাকিস্তান","en":"Pakistan","ar":"باكستان"}',8),
('in','🇮🇳','{"bn":"ভারত","en":"India","ar":"الهند"}',9),
('kz','🇰🇿','{"bn":"কাজাখস্তান","en":"Kazakhstan","ar":"كازاخستان"}',10),
('id','🇮🇩','{"bn":"ইন্দোনেশিয়া","en":"Indonesia","ar":"إندونيسيا"}',11)
on conflict (code) do nothing;

-- Initial university directory (directory only, NOT scholarship confirmation)
insert into universities (country_code, name) values
('sa','{"en":"Islamic University of Madinah"}'),('sa','{"en":"Umm Al-Qura University"}'),('sa','{"en":"Qassim University"}'),('sa','{"en":"Imam University"}'),('sa','{"en":"King Abdulaziz University"}'),('sa','{"en":"King Saud University"}'),('sa','{"en":"Taibah University"}'),
('qa','{"en":"Qatar University"}'),('qa','{"en":"Hamad Bin Khalifa University"}'),('qa','{"en":"Doha Institute"}'),
('ae','{"en":"Al Qasimia University"}'),('ae','{"en":"University of Sharjah"}'),('ae','{"en":"MBZ University for Humanities"}'),('ae','{"en":"UAE University"}'),
('tr','{"en":"Istanbul University"}'),('tr','{"en":"Marmara University"}'),('tr','{"en":"Ankara University"}'),('tr','{"en":"Necmettin Erbakan University"}'),('tr','{"en":"Sakarya University"}'),
('iq','{"en":"University of Baghdad"}'),('iq','{"en":"University of Kufa"}'),('iq','{"en":"University of Babylon"}'),('iq','{"en":"University of Mosul"}'),('iq','{"en":"Al-Mustansiriya University"}'),
('kw','{"en":"Kuwait University"}'),('kw','{"en":"Abdullah Al Salem University"}'),
('brn','{"en":"UNISSA"}'),('brn','{"en":"UBD"}'),('brn','{"en":"KUPU SB"}'),
('pk','{"en":"IIUI"}'),('pk','{"en":"University of Punjab"}'),('pk','{"en":"University of Karachi"}'),('pk','{"en":"University of Peshawar"}'),('pk','{"en":"BZU"}'),('pk','{"en":"AIOU"}'),
('in','{"en":"AMU"}'),('in','{"en":"Jamia Millia Islamia"}'),('in','{"en":"Jamia Hamdard"}'),('in','{"en":"University of Delhi"}'),('in','{"en":"MANUU"}'),
('kz','{"en":"Al-Farabi Kazakh National University"}'),('kz','{"en":"Nur-Mubarak University"}'),('kz','{"en":"L.N. Gumilyov Eurasian National University"}'),
('id','{"en":"UIN Malang"}'),('id','{"en":"UIN Jakarta"}'),('id','{"en":"UIN Sunan Kalijaga"}'),('id','{"en":"UIN Sunan Ampel"}'),('id','{"en":"Universitas Islam Indonesia"}'),('id','{"en":"Universitas Muhammadiyah Yogyakarta"}');

-- After you create your admin login (Authentication > Users > Add user), run this with your email:
-- insert into admins (user_id) select id from auth.users where email = 'YOUR-ADMIN-EMAIL@example.com';
