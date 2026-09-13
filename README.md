# Academify Marketing Website

The public marketing/landing site for Academify — a separate, statically
generated Next.js app used to generate inbound interest from institutional
clients (schools, coaching institutes, Olympiad-conducting organizations).

This project does **not** include the Assessment Platform (the CBT/testing
product itself). It is a standalone deployable site that shares Academify's
visual brand.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS, themed via CSS custom properties in `app/globals.css`
- Framer Motion for scroll-reveal/micro-interactions
- lucide-react for icons
- next-mdx-remote for the blog (MDX content, no CMS)
- zod for form validation

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Where things live

| What | Where |
| --- | --- |
| Page copy (placeholder → real content) | `/content/*.ts` (typed data files, one per page/section) |
| Blog posts | `/content/blog/*.mdx` (frontmatter: `title`, `description`, `date`, `author`) |
| Site-wide config (name, contact info, nav, analytics ID) | `/content/site.ts` |
| Design tokens (colors, shadows, radii) | `app/globals.css` (`:root` custom properties), mapped into Tailwind in `tailwind.config.ts` |
| Logo (wordmark + mark) | `/components/Logo.tsx` — inline SVG, no image asset needed |
| UI primitives | `/components/ui` |
| Page sections (hero, CTA banner, feature grids, etc.) | `/components/sections` |
| Header / Footer | `/components/layout` |
| JSON-LD helpers (Organization, SoftwareApplication, BreadcrumbList, Article) | `/lib/schema.tsx` |
| Contact form validation (client + server share the same zod schema) | `/lib/validation.ts` |
| Sitemap / robots.txt | `app/sitemap.ts`, `app/robots.ts` (generated from routes + blog slugs automatically) |
| AI-search summary | `public/llms.txt` |

### Swapping in real copy

Every page's content lives in a typed object in `/content`, imported by the
page/section components — layout code never contains literal copy. To
replace placeholder text (marked `[Placeholder]`, `[SCREENSHOT: ...]`,
`[LOGO: ...]`, etc.) with real copy, edit the relevant file in `/content`;
you don't need to touch any component.

### Contact form → real email/CRM

The "Request a Demo" form (`/contact`) posts to `app/api/contact/route.ts`.
Right now that route only validates the payload and does:

```ts
console.log("[contact-form] New demo request:", parsed.data);
```

To wire it up for real, replace that `TODO` block with either:

- **An email service** (e.g. [Resend](https://resend.com/docs)) — send a
  notification email to your sales inbox with `parsed.data`.
- **A CRM webhook** (HubSpot, Salesforce, etc.) — `fetch()` POST
  `parsed.data` to the CRM's lead-capture endpoint.

Add the necessary API key / webhook URL as an environment variable — see
`.env.example` for the expected shape — and read it via
`process.env.YOUR_VAR` inside the route handler. Never commit real
credentials; `.env.local` is gitignored.

### Analytics

`content/site.ts` exports `analyticsId` (currently empty). `app/layout.tsx`
checks that value and, when set, loads the Google tag script. To use GA4,
set `analyticsId` to your measurement ID (e.g. `G-XXXXXXX`) and add the
`gtag()` init snippet next to the existing `<Script>` tag in
`app/layout.tsx`. To use Plausible or another provider instead, swap the
`<Script src=...>` block for that provider's snippet in the same spot.

## SEO implementation notes

- Per-page metadata (title, description, canonical, OpenGraph/Twitter) via
  the Next.js Metadata API in every `page.tsx`.
- `app/sitemap.ts` and `app/robots.ts` use Next.js file conventions and stay
  in sync with the blog automatically (new `.mdx` files under
  `content/blog` are picked up without further changes).
- JSON-LD: `Organization` schema is emitted site-wide from the root layout;
  `SoftwareApplication` on `/platform`; `BreadcrumbList` on every interior
  page; `Article` on each blog post.
- One `<h1>` per page, semantic `<nav>` / `<main>` / `<footer>` landmarks,
  and a "Skip to content" link.
- All images go through `next/image` where real images exist; placeholder
  visual blocks use descriptive `aria-label`/`role="img"` text instead of
  empty alt text, standing in for real screenshots.
- `public/llms.txt` summarizes what Academify does for AI-search
  discoverability.

## Accessibility

- Keyboard-navigable header (including the Solutions dropdown) and mobile
  menu; visible focus rings via a shared `.focus-ring` utility.
- Form fields use associated `<label>`s, `aria-invalid`, and
  `aria-describedby` wired to inline error messages.
- Icon-only buttons (mobile menu toggle, social links) carry `aria-label`.
- Color contrast: `--c-primary` (#0b68b0) on white exceeds 4.5:1 for normal
  text and is used at large sizes/weights for headings; body copy uses
  `--c-text` (#1e2d3d) on light backgrounds for AA-safe contrast.
- Reduced-motion: Framer Motion reveals only translate/fade a small amount,
  and `prefers-reduced-motion` disables transitions/animations globally in
  `globals.css`.

## Lighthouse

Not run in this environment (no headless Chrome / Lighthouse CI configured
here). The build is optimized for strong scores by construction:
- Fonts loaded via `next/font/google` (self-hosted, no render-blocking
  request, no layout shift).
- All routes are statically generated (`○`/`●` in the build output) — no
  server rendering cost per request.
- No client JavaScript on pages beyond small, targeted client islands
  (header nav state, the contact form, Framer Motion reveals).
- Semantic HTML and one `h1` per page for the Accessibility/SEO categories.

Before launch, run `npm run build && npm run start` and audit each route
with Lighthouse (Chrome DevTools or `npx lighthouse`) against real content
and real images — placeholder blocks and Google Fonts network conditions
in a sandboxed dev environment can understate real-world scores.

## Deploying to Vercel

This project has zero Vercel-specific configuration — it's a standard
Next.js App Router project:

1. Push this repository to GitHub (or your VCS of choice).
2. In Vercel, "Add New Project" → import the repo. Framework preset
   `Next.js` is auto-detected.
3. Set any environment variables from `.env.example` you've started using
   (email/CRM keys, analytics ID) in the Vercel project settings.
4. Deploy. No build command overrides are needed (`next build` / `next start`
   are the defaults).
5. Update `content/site.ts` → `url` to your production domain before launch,
   since it feeds canonical URLs, the sitemap, and JSON-LD.
