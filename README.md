# nexs.tudio Website

Production Next.js website for nexs.tudio.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Resend contact emails
- Zod validation

## Run

```bash
npm run dev
npm run build
```

## Environment

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

## Video Placement

After generating Google Flow videos, add them here:

- `public/assets/video/hero-flow.mp4`
- `public/assets/video/product-morph.mp4`

The site already references those paths. Until the videos exist, poster images are shown.
