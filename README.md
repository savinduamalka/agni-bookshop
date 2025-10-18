# Agni Bookshop & Communication

Modern single-page marketing site for Agni Bookshop & Communication. The app highlights the store's services, showcases key advantages, and offers direct contact options for phone, email, Facebook, and WhatsApp.

## Tech Stack

- React 18 with TypeScript
- Vite for bundling and dev tooling
- Tailwind CSS and shadcn/ui component primitives
- Lucide React icon set

## Getting Started

```bash
# install dependencies

# start local dev server with HMR
pnpm dev

# run type-safe production build
pnpm build

# preview the production build locally
pnpm preview
```

> **Prerequisites:** Node.js 18+ and your choice of package manager (pnpm recommended).

## Project Structure

- `src/pages/Index.tsx` – main landing page layout and content
- `src/components/` – reusable UI building blocks, including shadcn/ui wrappers
- `src/assets/` – static assets such as imagery used in the hero section
- `public/` – static files served verbatim (favicons, robots, etc.)

## Customization Tips

- Update service copy, pricing, and contact details in `src/pages/Index.tsx`.
- Tailwind design tokens live in `tailwind.config.ts`; adjust colors/typography there.
- Global styles and utility classes are defined in `src/index.css` and `src/App.css`.

## Deployment

Build artifacts are emitted to `dist/`. Deploy the contents of that directory to your static host of choice (e.g., Netlify, Vercel, Cloudflare Pages, GitHub Pages).
