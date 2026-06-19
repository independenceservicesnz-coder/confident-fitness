# Confident Fitness Co — Website

Personal training website for 50+ New Zealanders. Built with Next.js, Supabase, and Stripe.

---

## What this site does

- Full website with hero, services, pricing, FAQ, and contact sections
- **Contact form** → submissions saved to Supabase (you can view them in your Supabase dashboard)
- **Online payments** → Stripe Checkout for 3 pricing tiers (Single $90, Monthly $320, Online $70)
- **Photos** → professional 50+ fitness imagery from Unsplash
- Fully mobile-responsive, large text, designed for the 50+ audience

---

## Step 1 — Set up Supabase

1. Go to [supabase.com](https://supabase.com) and open your project
2. Click **SQL Editor** in the left sidebar
3. Copy and paste the contents of `supabase/schema.sql` into the editor
4. Click **Run** — this creates your contacts table
5. Go to **Settings → API** and copy:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **anon / public** key

---

## Step 2 — Set up Stripe products

1. Go to [dashboard.stripe.com](https://dashboard.stripe.com) → **Products**
2. Create 3 products:
   | Product Name | Price | Currency |
   |---|---|---|
   | Single Session | $90.00 | NZD |
   | Monthly Pack | $320.00 | NZD |
   | Online Session | $70.00 | NZD |
3. After creating each product, click into it and copy the **Price ID** (starts with `price_`)
4. Open `components/Pricing.tsx` and replace the 3 placeholder price IDs:
   ```
   REPLACE_WITH_STRIPE_PRICE_ID_SINGLE   → your price_xxx for Single Session
   REPLACE_WITH_STRIPE_PRICE_ID_MONTHLY  → your price_xxx for Monthly Pack
   REPLACE_WITH_STRIPE_PRICE_ID_ONLINE   → your price_xxx for Online Session
   ```
5. Go to **Developers → API Keys** and copy your **Secret key** (starts with `sk_live_`)

---

## Step 3 — Configure environment variables

1. Rename `.env.local.example` to `.env.local`
2. Fill in your real values:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   STRIPE_SECRET_KEY=sk_live_your-secret-key
   ```

---

## Step 4 — Push to GitHub

1. Open GitHub and create a new repository called `confident-fitness-co`
2. In your terminal (or ask a developer to help):
   ```bash
   cd confident-fitness-co
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/confident-fitness-co.git
   git push -u origin main
   ```

---

## Step 5 — Deploy to Vercel (free hosting)

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click **Add New → Project**
3. Select your `confident-fitness-co` repository
4. Before clicking Deploy, click **Environment Variables** and add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `STRIPE_SECRET_KEY`
5. Click **Deploy** — Vercel builds and publishes your site automatically
6. You'll get a free URL like `confident-fitness-co.vercel.app`

---

## Step 6 — Connect your domain

1. In Vercel, go to your project → **Settings → Domains**
2. Add your domain (e.g. `confidentfitnessco.co.nz`)
3. Follow Vercel's instructions to update your domain DNS settings
4. Update `NEXT_PUBLIC_SITE_URL` in Vercel environment variables to your real domain

---

## Step 7 — Before going live checklist

- [ ] Replace the photo in `components/About.tsx` with a real photo of yourself
- [ ] Replace placeholder testimonials in `components/Testimonials.tsx` with real client quotes
- [ ] Confirm pricing is correct in `components/Pricing.tsx`
- [ ] Test the contact form (submit a test message and check Supabase)
- [ ] Test a Stripe payment using a test card number `4242 4242 4242 4242`
- [ ] Check the site looks good on your phone

---

## Viewing contact form submissions

Log in to [supabase.com](https://supabase.com) → your project → **Table Editor** → **contacts** table. Every form submission appears here with the client's name, phone, email, location, and goal.

---

## Tech stack

- [Next.js 14](https://nextjs.org) — React framework
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [Supabase](https://supabase.com) — Database for contact form
- [Stripe](https://stripe.com) — Online payments
- [Vercel](https://vercel.com) — Hosting
- [Unsplash](https://unsplash.com) — Photography
