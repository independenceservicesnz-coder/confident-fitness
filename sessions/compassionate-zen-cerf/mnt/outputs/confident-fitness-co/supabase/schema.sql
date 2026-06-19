-- Run this in your Supabase SQL Editor (supabase.com → your project → SQL Editor)

-- Contact form submissions table
create table if not exists contacts (
  id          uuid default gen_random_uuid() primary key,
  name        text not null,
  age         text,
  phone       text not null,
  email       text not null,
  location    text,
  goal        text,
  created_at  timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table contacts enable row level security;

-- Allow anonymous users to insert (so the contact form works without login)
create policy "Allow public inserts" on contacts
  for insert with check (true);

-- Only authenticated users (you!) can read the data
create policy "Allow authenticated reads" on contacts
  for select using (auth.role() = 'authenticated');
