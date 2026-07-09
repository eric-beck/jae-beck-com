# JaeBeck.com

Public website for **Jae Beck**, REALTOR® with HomeSmart Evergreen Realty (DRE #02006349), specializing in Orange County, California residential real estate.

Live site: **[jaebeck.com](https://jaebeck.com)**

## Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript) with **static export** (`output: "export"`)
- Deployed to **GitHub Pages** on every push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- No server, database, or API keys — the whole site is static files

## Project layout

| Path | Purpose |
|---|---|
| `src/app/` | Routes: `/`, `/about`, `/cities`, `/cities/[slug]`, `/blogs`, `/blogs/[slug]`, `/contact` |
| `src/lib/data.ts` | City/community guide data (drives the Communities section) |
| `src/lib/blogData.ts` | Blog post data (drives the Insights section) |
| `src/components/` | Shared UI (Navbar, Footer) |
| `public/images/` | Site imagery (see `docs/IMAGE_CREDITS.md` for city photo attributions) |
| `docs/SITE_SPEC.md` | Site specification and growth plan — **read this first** |
| `_old_website/` | Retired pre-2026 static site, kept for reference |

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

## Content workflow

GitHub issues are the content backlog: one issue per planned city guide or blog post, closed with the live URL when published. See [docs/SITE_SPEC.md](docs/SITE_SPEC.md) for the editorial cadence, market-report automation plan, and IDX roadmap.
