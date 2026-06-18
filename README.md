# Rustic Glow — rusticglow.business

Premium woodstoves imported, installed and maintained across Kenya.

**Stack:** Next.js 15 (static export) · Cloudflare Pages · GitHub

---

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Adding a product to the catalogue

Create a new `.json` file in `/content/products/`:

```json
{
  "name": "Your Stove Name",
  "slug": "your-stove-slug",
  "tagline": "Short catchy line",
  "price": "KES 75,000",
  "category": "Cast Iron",
  "output": "8 kW",
  "efficiency": "75%",
  "roomSize": "Up to 65m²",
  "fuelType": "Wood",
  "origin": "Norway",
  "description": "Full product description paragraph.",
  "features": [
    "Feature one",
    "Feature two",
    "Feature three"
  ],
  "images": ["/images/products/your-image.jpg"]
}
```

- The `slug` must match the filename (e.g. `my-stove.json` → slug `my-stove`)
- Add product images to `/public/images/products/`
- Commit and push → Cloudflare Pages rebuilds automatically (~60 seconds)

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com) → Create a project
3. Connect your GitHub repo
4. Build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
5. Deploy

## Connect your domain (rusticglow.business)

1. In Cloudflare Pages → Custom domains → Add `rusticglow.business`
2. In Hostinger DNS, point your domain's nameservers to Cloudflare, OR add a CNAME:
   - Name: `@` (or `www`)
   - Target: `your-project.pages.dev`
3. Cloudflare handles SSL automatically — no extra cost

## WhatsApp number

The number is set in `/lib/whatsapp.ts`:

```ts
const WA_NUMBER = '254115265517'
```

Change it there if your number ever changes — all buttons update automatically.

---

Built by Rustic Glow · Kenya 🔥
