# JaeBeck.com — Site Specification & Growth Plan

*Last updated: July 8, 2026*

## 1. Purpose & Positioning

JaeBeck.com is the digital storefront for **Jae Beck**, REALTOR® with HomeSmart Evergreen Realty (DRE #02006349), specializing in **Orange County residential real estate** with an emphasis on South Orange County (Laguna Hills, Laguna Niguel, Nellie Gail Ranch, and surrounding communities).

The site exists to do four things:

1. **Build local search authority** — rank for "\<city\> homes for sale / \<city\> real estate" queries via deep, useful city guides covering every Orange County city.
2. **Demonstrate market expertise** — recurring market reports and an active insights blog that prove Jae knows the OC market better than the portals do.
3. **Capture leads** — contact form today; home-valuation (CMA) requests and saved-search signups as the site matures.
4. **Serve clients** — a place to send buyers and sellers for neighborhood research, market data, and (eventually) live listing search.

**Guiding principle:** every feature should either attract a visitor (SEO/content), convert a visitor (lead capture), or serve a client (tools/data).

## 2. Current Architecture

| Concern | Implementation |
|---|---|
| Framework | Next.js 16 (App Router, React 19, TypeScript), static export (`output: "export"`) |
| Hosting | GitHub Pages via `.github/workflows/deploy.yml` (build → upload `out/` → deploy) |
| Domain | `jaebeck.com` (`public/CNAME`, `.nojekyll` present) |
| City pages | Data-driven: `src/lib/data.ts` (`CITIES` array) → `/cities` + `/cities/[slug]` |
| Blog | Data-driven: `src/lib/blogData.ts` (`BLOGS` array, inline HTML content) → `/blogs` + `/blogs/[slug]` |
| Lead capture | Formspree-backed contact form (`src/app/contact/ContactForm.tsx`) |

**Static-hosting constraints (important):** GitHub Pages serves files only — no server code, no databases, no secret API keys. Anything requiring authenticated APIs (like CRMLS) must run either (a) at *build time* inside GitHub Actions, (b) via a third-party embed, or (c) on a real backend (see §7).

**Known defects / hygiene items:**
- Homepage "Read Full Bio" links to `/about`, which doesn't exist (`src/app/page.tsx`).
- Mobile menu button is non-functional (`src/components/Navbar.tsx`).
- ~7 city images referenced in `data.ts` are missing from `public/images/`.
- Trailing-slash URLs 404 (e.g. `/cities/irvine/`) — fix with `trailingSlash: true` in `next.config.ts` so shared/bookmarked links never break.
- `README.md` is create-next-app boilerplate; `package.json` name is still `temp-next`.

## 4. Cities Section — Full Orange County Coverage

**Goal:** a city guide for all **34 incorporated Orange County cities**, plus featured unincorporated communities, using the existing `CityData` pattern in `src/lib/data.ts` (no new architecture needed).

**Covered today (14 cities):** Aliso Viejo, Dana Point, Huntington Beach, Irvine, Laguna Beach, Laguna Hills, Laguna Niguel, Laguna Woods, Lake Forest, Mission Viejo, Newport Beach, Rancho Santa Margarita, San Clemente, San Juan Capistrano.

**Also covered (unincorporated/communities, kept as featured neighborhoods):** Coto de Caza, Crystal Cove (child of Newport Beach via `parentSlug`), Ladera Ranch, Nellie Gail Ranch (child of Laguna Hills via `parentSlug`).

**Missing (20 cities)** — tracked as individual GitHub issues:

Anaheim, Brea, Buena Park, Costa Mesa, Cypress, Fountain Valley, Fullerton, Garden Grove, La Habra, La Palma, Los Alamitos, Orange, Placentia, Santa Ana, Seal Beach, Stanton, Tustin, Villa Park, Westminster, Yorba Linda.

**Per-city requirements** (match existing entries): slug, intro, history, things to do, demographics (population, median income, median home value), and a real image in `public/images/` (several existing entries reference images that don't exist — fix while adding new ones). Once market reports exist (§6), each city page links to its market report.

**Prioritization:** ship in three batches — (1) South/coastal cities nearest Jae's farm area: Costa Mesa, Tustin, Orange, Seal Beach, Los Alamitos, Fountain Valley; (2) central: Santa Ana, Anaheim, Garden Grove, Westminster, Cypress, Stanton, La Palma, Buena Park; (3) north: Fullerton, Brea, Placentia, Yorba Linda, Villa Park, La Habra.

## 5. Blog Operations Plan

**Cadence:** 2 posts/month minimum —
1. **Monthly OC Market Update** (auto-drafted by the pipeline in §6, edited and personalized by Jae before publish).
2. **One evergreen post**, alternating between "Real Estate Advice" (SEO/lead intent: buying, selling, financing, OC-specific topics like Prop 19, Mello-Roos, HOA considerations) and "Home & Lifestyle" (relationship/nurture content).

**Workflow (matches how the site is already run):**
1. **Backlog = GitHub issues.** One issue per planned post titled `Feature - <Post Title>`, labeled `blog`. Keep 2–3 months of topics queued.
2. **Draft** → add entry to `src/lib/blogData.ts` (or a markdown file after the migration below).
3. **Publish** → merge to `main`; GitHub Actions deploys automatically.
4. **Close the issue** with the live URL (the convention used for issues #1–34).

**Recommended improvements:**
- **Migrate content out of `blogData.ts` inline HTML into markdown files** (e.g. `content/blogs/<slug>.md` with frontmatter for title/date/category/image, rendered at build time). Writing markdown is far easier for a non-developer than editing HTML strings inside TypeScript, and posts get proper git history. Tracked as an issue.
- **Use ISO dates** (`2026-07-08`) in the data so posts sort correctly.
- **Seasonal calendar:** spring (selling season prep, portfolio review), summer (relocation, schools), fall (holiday/lifestyle), winter (year-in-review market recap, tax-season topics like Prop 19).

## 6. Market Report Automation (works on GitHub Pages today)

**Problem:** Jae builds monthly market reports by hand. **Solution:** a scheduled GitHub Actions pipeline that generates city-level reports automatically from free public data — no servers, no API keys, fully compatible with GitHub Pages.

**Data sources (free, no auth):**
- **Redfin Data Center** — monthly city-level TSV downloads: median sale price, homes sold, inventory, days on market, sale-to-list ratio. Updated monthly, covers all OC cities.
- **Zillow Research** — ZHVI (home value index) and ZORI (rent index) CSVs per city, as a secondary/corroborating series.

**Pipeline:**
1. New workflow `.github/workflows/market-reports.yml` on a monthly cron (e.g. the 15th, after Redfin publishes prior-month data) + manual dispatch.
2. A script (Node/TypeScript, kept in `scripts/`) downloads the source files, filters to the cities in `src/lib/data.ts`, computes month-over-month and year-over-year changes, and writes `src/lib/marketData/<slug>.json` (12–24 months of history per city).
3. Workflow commits the JSON to `main` → existing deploy workflow rebuilds and publishes.
4. New routes: `/market-reports` (county overview) and `/market-reports/[slug]` (per-city: median price, homes sold, inventory, DOM, trend charts). City pages link to their report; `data.ts`'s stale hardcoded `medianHomeValue` strings get replaced by live JSON values.
5. The workflow also **opens a draft "Monthly OC Market Update" blog issue** pre-filled with the month's headline numbers, so Jae's editing job is commentary, not data collection.

**Honest limitation:** public data is *aggregate*. **Per-listing "homes sold / homes for sale in \<community\>" lists require MLS data and are deliverable only via §7.** Don't attempt to scrape portals for listings — it violates their terms and MLS display rules.

## 7. Listings & CRMLS IDX Roadmap

**Why full IDX can't run on GitHub Pages alone:** CRMLS distributes listing data through its RESO Web API, which requires authenticated server-side access (credentials must stay secret), broker authorization, an approved vendor/direct-license agreement with fees, and compliance with display and data-refresh rules. A static file host has nowhere to keep credentials or run a sync.

**Step 1 — Interim: third-party IDX embed (static-compatible, weeks not months).**
Vendors like **IDX Broker, iHomefinder, and Showcase IDX** are CRMLS-approved and provide JavaScript widgets/hosted pages that work fine on GitHub Pages. Typical cost: roughly $50–100/month + CRMLS data fees. Delivers immediately: live search, active/sold listings on city pages, saved-search email capture — matching Kevin Hill's and Melody Smith's core feature set without building a backend. Evaluate vendors against: CRMLS coverage, embed quality on a static site, lead routing to Jae's email/CRM, and cost.

**Step 2 — Target: first-party app on Azure (.NET 10).**
When ready to own the experience end-to-end:

- **Architecture:** Azure Static Web Apps (keeps the Next.js front end; adds an API layer) or Azure App Service — with a **.NET 10 minimal API** backend, a timer-triggered **Azure Function** that syncs CRMLS RESO Web API data into **Azure SQL** (or Cosmos DB) on the required refresh cadence, and API endpoints for search, listing detail, and per-community sold/active lists.
- **What it unlocks:** first-party listing search and detail pages, *true* per-community sold/listed lists on every city page, market reports computed from actual MLS data (replacing §6's public-data pipeline), and a real CMA/valuation lead tool.
- **UI is already designed:** the `design-system/` bundle contains complete mockups for listing search, listing detail, and a 4-step CMA wizard — the Azure phase implements those designs.
- **Prerequisites:** broker (HomeSmart) authorization for CRMLS data access, direct license or approved-vendor agreement, and budget for CRMLS fees + Azure hosting (a small App Service/SWA + Azure SQL serverless tier is modest — roughly tens of dollars per month at this traffic level).
- **Migration:** DNS moves from GitHub Pages to Azure; the static content (cities, blogs) stays in the same Next.js codebase, so nothing is thrown away.

## 8. Phased Roadmap

| Phase | Scope | Effort | Cost |
|---|---|---|---|
| **1. Hygiene + full city coverage** | Fix `/about` dead link (build About page), mobile menu, `trailingSlash: true`, missing images, README/package name; add 20 missing city pages in 3 batches | Small fixes + content-heavy | $0 |
| **2. Content engine** | Blog → markdown migration; editorial calendar & issue backlog; market-report automation workflow + `/market-reports` section | Moderate (one-time build, then automated) | $0 |
| **3. IDX embed** | Evaluate IDX Broker / iHomefinder / Showcase IDX; embed search + listings on city pages; saved-search lead capture | Small integration | ~$50–100/mo + MLS fees |
| **4. Azure + CRMLS (.NET 10)** | Azure SWA/App Service, .NET 10 API, RESO Web API sync to Azure SQL; first-party search, sold/listed lists per community, MLS-powered market reports, CMA wizard | Largest build (design mockups already exist) | Azure ~$20–75/mo + CRMLS fees |

Phases 1–2 keep everything free on GitHub Pages and deliver the biggest SEO/content differentiation. Phase 3 buys feature parity with competitors quickly. Phase 4 is the long-term platform play.

## 9. Success Measures

- All 34 OC city pages live and indexed (Google Search Console).
- Market reports publishing automatically every month with zero manual data entry.
- 2+ blog posts/month sustained for 6 months.
- Lead volume: contact-form + valuation-request submissions per month (Formspree dashboard now; CRM later).
- Feature parity vs. competitors: IDX search live (Phase 3), valuation tool live (Phase 4).
