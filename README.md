<div align="center">

# VINECO

### Modern React Website Platform

**A responsive, performance-focused web experience built for VINECO**

<br>

![React](https://img.shields.io/badge/React-19.2.8-03326b?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-8.2.1-03326b?logo=vite&logoColor=ffa412)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-03326b?logo=tailwindcss&logoColor=ffa412)
![React Router](https://img.shields.io/badge/React_Router-8.3.0-03326b?logo=reactrouter&logoColor=ffa412)
![Status](https://img.shields.io/badge/Status-Active-ffa412)
![License](https://img.shields.io/badge/License-Private-03326b)

<br>

**Primary Orange `#ffa412` · Navy `#03326b` · Cream `#fffaf3` · Lexend Variable**

</div>

---

## About VINECO

This website project was developed for **VINECO**.

According to the company information provided for this project, **VinEco**, now known as **WinEco**, is a high-tech agricultural brand originally established by Vingroup and later transferred to Masan.

The brand focuses on the production of clean agricultural products and applies recognized farming and quality standards such as **VietGAP** and **GlobalGAP**.

Official reference:

**WinEco / WinMart:**  
https://wineco.winmart.vn/

> Company and brand information in this repository should be reviewed against the latest official VINECO / WinEco materials before public production deployment.

---

# Project Overview

This repository contains the modern front-end implementation of the **VINECO website**, developed with:

- React 19
- Vite 8
- Tailwind CSS v4
- React Router
- Modular CSS architecture
- Route-level code splitting
- Responsive desktop, tablet and mobile layouts
- Custom loading experience
- Reusable UI components
- Static-hosting-friendly routing

The project is designed with a strong focus on:

**Performance · Maintainability · Responsive UX · Brand consistency · Accessibility**

---

# Design System

VINECO uses a clean visual identity centered around orange, navy and neutral backgrounds.

| Role | Color | Hex |
|---|---|---|
| Primary Brand | Orange | `#ffa412` |
| Secondary / Ink | Navy | `#03326b` |
| Dark Navy | Navy Dark | `#022752` |
| Soft Background | Cream | `#fffaf3` |
| Base | White | `#ffffff` |

### Typography

Primary font:

```text
Lexend Variable
```

Fallback stack:

```css
"Lexend Variable",
"Lexend",
ui-sans-serif,
system-ui,
sans-serif
```

---

# Technology Stack

| Technology | Version | Purpose |
|---|---:|---|
| React | 19.2.8 | Component-based UI |
| React DOM | 19.2.8 | Browser rendering |
| React Router | 8.3.x | Client-side routing |
| Vite | 8.2.1 | Development and production build |
| Tailwind CSS | 4.3.3 | Utility-first styling |
| `@tailwindcss/vite` | 4.3.3 | Tailwind integration with Vite |
| Lexend Variable | 5.x | Brand typography |

The project intentionally avoids unnecessary UI dependencies where native React, CSS and local SVG solutions are sufficient.

---

# Main Features

## User Experience

- Responsive desktop layout
- Tablet optimization
- Mobile-first responsive behavior
- Sticky navigation
- Full-screen mobile navigation
- Product dropdown navigation
- Mobile product accordion
- Scroll reveal animations
- Smooth route transitions
- Custom VINECO loading screen
- Responsive image handling
- Floating contact actions
- Sample request modal
- Google Maps integration
- FAQ interactions
- Touch-friendly mobile controls
- Reduced-motion accessibility support

## Architecture

- React functional components
- Route-level code splitting
- `React.lazy()`
- `Suspense`
- Modular CSS architecture
- Centralized content data
- Reusable layout components
- Reusable SmartImage fallback
- Hash-based client routing
- Static deployment support

---

# Pages

The current application contains the following main pages:

| Route | Page |
|---|---|
| `#/` | Home |
| `#/about` | About |
| `#/products` | Products |
| `#/products/:slug` | Product Detail |
| `#/service` | Service |
| `#/oem-odm` | OEM / ODM |
| `#/faq` | FAQ |
| `#/contact` | Contact |

Example product route:

```text
#/products/coffee-wood
```

Product slugs are managed in:

```text
src/data/productCatalog.js
```

---

# Routing Architecture

The application uses:

```jsx
HashRouter
```

instead of `BrowserRouter`.

This means production routes work on most static hosting providers without requiring custom SPA rewrite rules.

Main router:

```text
src/app/App.jsx
```

The application also uses route-level lazy loading.

Example:

```jsx
const AboutPage = lazy(
  () => import("../pages/AboutPage"),
);

const ServicePage = lazy(
  () => import("../pages/ServicePage"),
);
```

Routes are rendered inside:

```jsx
<Suspense fallback={<PageLoader />}>
  <Routes>
    ...
  </Routes>
</Suspense>
```

---

# Route Code Splitting

Major pages are compiled into independent JavaScript chunks.

A production build may generate output similar to:

```text
HomePage-*.js
AboutPage-*.js
ProductsPage-*.js
ProductDetailPage-*.js
ServicePage-*.js
OemOdmPage-*.js
FaqPage-*.js
ContactPage-*.js
```

This means visitors do not need to download the complete code for every page during the initial load.

Benefits include:

- Smaller initial JavaScript bundle
- Faster first-page load
- Better cache utilization
- Less unnecessary JavaScript execution
- Better performance on mobile devices

---

# VINECO Page Loader

Lazy routes use a custom branded loading experience.

Component:

```text
src/components/ui/PageLoader.jsx
```

Styles:

```text
src/styles/components/page-loader.css
```

The loader contains:

- VINECO brand colors
- Animated navy/orange emblem
- Dual orbit animation
- Animated progress indicator
- Dynamic route label
- Reduced-motion support

Examples:

```text
LOADING · PRODUCTS

LOADING · OUR STORY

LOADING · OEM / ODM
```

No artificial loading delay is added.

The loader only appears while a route chunk is actually being loaded.

---

# Project Structure

```text
vineco-static-react/
│
├── public/
│   │
│   ├── images/
│   │   ├── pinterest-preview/
│   │   ├── service/
│   │   ├── service-mobile/
│   │   ├── social/
│   │   └── ...
│   │
│   └── video/
│
├── src/
│   │
│   ├── app/
│   │   └── App.jsx
│   │
│   ├── components/
│   │   │
│   │   ├── about/
│   │   │   └── EditorialHighlight.jsx
│   │   │
│   │   ├── home/
│   │   │   ├── InsideVinEcoExtras.jsx
│   │   │   └── WhyVinEcoSection.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── FloatingContactDock.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── PageHero.jsx
│   │   │
│   │   ├── oem/
│   │   │   ├── OemCapabilities.jsx
│   │   │   ├── OemModels.jsx
│   │   │   └── OemProcess.jsx
│   │   │
│   │   ├── service/
│   │   │   ├── ServiceChapter.jsx
│   │   │   └── ServiceIndex.jsx
│   │   │
│   │   └── ui/
│   │       ├── GoogleMapEmbed.jsx
│   │       ├── PageLoader.jsx
│   │       ├── Reveal.jsx
│   │       ├── SiteIcon.jsx
│   │       └── SmartImage.jsx
│   │
│   ├── data/
│   │   ├── aboutV4.js
│   │   ├── mapEmbed.js
│   │   ├── oemOdmContent.js
│   │   ├── productCatalog.js
│   │   ├── projectData.js
│   │   └── serviceContent.js
│   │
│   ├── features/
│   │   └── sample/
│   │       ├── SampleModal.jsx
│   │       └── SampleModalContext.jsx
│   │
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── FaqPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── OemOdmPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── ProductsPage.jsx
│   │   └── ServicePage.jsx
│   │
│   ├── styles/
│   │   │
│   │   ├── globals.css
│   │   ├── tokens.css
│   │   ├── core.css
│   │   │
│   │   ├── components/
│   │   │   ├── page-loader.css
│   │   │   └── sample-modal.css
│   │   │
│   │   ├── home/
│   │   │   └── inside-extras.css
│   │   │
│   │   ├── layout/
│   │   │   ├── ios-nav-fix.css
│   │   │   ├── navigation.css
│   │   │   └── navigation-typography.css
│   │   │
│   │   └── pages/
│   │       ├── about-v4.css
│   │       ├── product-detail.css
│   │       ├── service-mobile-compat.css
│   │       ├── service-mobile.css
│   │       └── service-v2.css
│   │
│   └── main.jsx
│
├── tools/
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# CSS Architecture

The project uses **Tailwind CSS v4 together with modular custom CSS**.

Previously, most custom CSS existed inside a very large `globals.css`.

The stylesheet architecture has now been refactored so that:

```text
globals.css
```

acts only as the CSS entrypoint.

Current structure:

```text
styles/
│
├── globals.css
├── tokens.css
├── core.css
│
├── components/
├── home/
├── layout/
└── pages/
```

---

## `globals.css`

The file should remain small.

Its responsibility is mainly importing the project's CSS modules.

Example:

```css
@import "tailwindcss";

@import "./tokens.css";
@import "./core.css";

@import "./components/sample-modal.css";
@import "./components/page-loader.css";

@import "./pages/about-v4.css";
@import "./home/inside-extras.css";

@import "./pages/service-v2.css";

@import "./layout/navigation.css";

@import "./pages/service-mobile-compat.css";
@import "./pages/service-mobile.css";

@import "./layout/navigation-typography.css";

@import "./pages/product-detail.css";

@import "./layout/ios-nav-fix.css";
```

### Important

Do not add large page-specific style blocks directly into:

```text
globals.css
```

Instead, place styles in the correct module.

---

# CSS Development Rules

When adding or modifying styles:

### Global tokens

Use:

```text
src/styles/tokens.css
```

for:

- colors
- typography tokens
- theme variables
- shared design tokens

### Global browser rules

Use:

```text
src/styles/core.css
```

for:

- document defaults
- global media rules
- reset behavior
- shared reveal animation
- accessibility behavior

### Components

Use:

```text
src/styles/components/
```

for reusable component-specific styles.

### Layout

Use:

```text
src/styles/layout/
```

for:

- Header
- Navigation
- Mobile navigation
- Global layout behavior
- Browser-specific navigation fixes

### Pages

Use:

```text
src/styles/pages/
```

for page-specific visual systems.

### Development guideline

Avoid introducing layers such as:

```text
V2
V3
V4
V5
```

only to override previous CSS.

Prefer refactoring the existing stylesheet into one source of truth.

Avoid excessive use of:

```css
!important
```

unless it solves a documented cross-browser or cascade requirement.

---

# Content Management

Most editable business content is stored inside:

```text
src/data/
```

This allows business copy to be updated without rewriting component logic.

---

## Shared Project Data

```text
src/data/projectData.js
```

Contains shared information such as:

```text
brand
hero
metrics
products
faq
contact
socials
```

---

## Products

```text
src/data/productCatalog.js
```

Controls:

- Product names
- Product slugs
- Product descriptions
- Product images
- Product details
- Product navigation

Example:

```js
{
  slug: "coffee-wood",
  name: "Coffee Wood",
  image: "/images/product-coffee-wood.webp",
  description: "..."
}
```

The slug is used to generate routes such as:

```text
#/products/coffee-wood
```

---

## About Page

Content:

```text
src/data/aboutV4.js
```

Page:

```text
src/pages/AboutPage.jsx
```

Styles:

```text
src/styles/pages/about-v4.css
```

---

## Service Page

Content:

```text
src/data/serviceContent.js
```

Components:

```text
src/components/service/
```

Styles:

```text
src/styles/pages/service-v2.css
src/styles/pages/service-mobile.css
```

---

## OEM / ODM

Content:

```text
src/data/oemOdmContent.js
```

Components:

```text
src/components/oem/
```

Page:

```text
src/pages/OemOdmPage.jsx
```

---

# Images and Media

Static files are stored inside:

```text
public/
```

Images:

```text
public/images/
```

Videos:

```text
public/video/
```

A file stored as:

```text
public/images/example.webp
```

is referenced from React using:

```jsx
<img
  src="/images/example.webp"
  alt="Description"
/>
```

Do not write:

```jsx
src="/public/images/example.webp"
```

---

# SmartImage

Reusable image fallback:

```text
src/components/ui/SmartImage.jsx
```

`SmartImage` protects the layout when:

- an image URL is missing
- an image cannot be loaded
- an asset path is incorrect
- a production asset has not yet been supplied

This prevents missing images from breaking surrounding layouts.

---

# Image Recommendations

For production:

- Prefer WebP or AVIF where practical
- Compress large photographs
- Use correct intrinsic image dimensions
- Avoid loading unnecessarily large assets on mobile
- Prefer local production assets over third-party hotlinks
- Use descriptive `alt` text
- Use `object-fit: contain` for isolated transparent product imagery
- Use `object-fit: cover` for editorial photography where cropping is acceptable

---

# Sample Request Modal

The project contains a reusable global sample-request system.

Files:

```text
src/features/sample/SampleModal.jsx
src/features/sample/SampleModalContext.jsx
```

Styles:

```text
src/styles/components/sample-modal.css
```

The provider is mounted globally so buttons from different pages can open the same modal without duplicating state.

---

# Google Maps

Map configuration:

```text
src/data/mapEmbed.js
```

Renderer:

```text
src/components/ui/GoogleMapEmbed.jsx
```

Example configuration:

```js
export const mapEmbedHtml = `
  <iframe
    src="YOUR_GOOGLE_MAP_EMBED_URL"
    loading="lazy"
  ></iframe>
`;
```

If the map is unavailable, the component can display a fallback instead of breaking the layout.

---

# Contact Form

The current contact page is a static front-end implementation.

File:

```text
src/pages/ContactPage.jsx
```

Contact information:

```text
src/data/projectData.js
```

The current form can generate an email using:

```text
mailto:
```

and open the visitor's configured email client.

For server-side production submission, integrate a backend endpoint, serverless function or approved form service.

---

# Responsive Design

The website is designed for:

- Desktop
- Laptop
- Tablet
- Mobile
- Small mobile devices

Recommended test widths:

```text
320px
360px
375px
390px
430px
768px
900px
1024px
1280px
1440px
```

Always test responsive layouts after modifying:

- navigation
- grids
- collage layouts
- product images
- fixed elements
- forms
- modals
- service sections

---

# iOS Safari

Special care is taken around iOS Safari behavior.

Relevant stylesheet:

```text
src/styles/layout/ios-nav-fix.css
```

When modifying mobile navigation, test:

- menu opening after page scrolling
- scroll lock
- fixed overlays
- sticky header
- `100dvh`
- safe-area inset behavior
- background blur
- touch scrolling

Avoid forcing:

```css
body {
  position: fixed;
}
```

for scroll locking unless thoroughly tested on iOS.

---

# Accessibility

The project includes support for:

- Semantic navigation
- Native interactive elements
- Touch-friendly targets
- Image alternative text
- Native `<details>` FAQ controls
- Keyboard interaction
- Reduced-motion preferences
- Accessible route loader
- Motion fallbacks

Reduced-motion CSS should be preserved:

```css
@media (prefers-reduced-motion: reduce) {
  ...
}
```

Animations must never be required to understand or access content.

---

# Performance

The project includes multiple performance optimizations.

## Route-level code splitting

Pages use:

```text
React.lazy()
Suspense
```

to reduce the initial JavaScript bundle.

## Image handling

Images are loaded from optimized static paths and supported by reusable fallback components.

## CSS cleanup

Unused legacy CSS has been removed and the stylesheet system has been modularized.

## Content visibility

Some large page sections may use:

```css
content-visibility: auto;
```

to reduce rendering work for below-the-fold content.

## Reduced unnecessary dependencies

The project avoids introducing large UI libraries for simple interface requirements.

---

# SEO

Base SEO metadata is configured in:

```text
index.html
```

The document can include:

- Page title
- Meta description
- Open Graph title
- Open Graph description
- Open Graph image
- Theme color
- Social preview information

Because the application currently uses `HashRouter`, crawlers generally see the root HTML document rather than unique server-rendered HTML for every hash route.

For advanced SEO requirements, server rendering, prerendering or route-specific static generation can be evaluated in a future architecture.

---

# Getting Started

## Requirements

Recommended:

```text
Node.js 20+
npm
```

Check versions:

```bash
node -v
npm -v
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Vite normally starts at:

```text
http://localhost:5173/
```

---

## Expose to Local Network

```bash
npm run dev -- --host
```

Useful for testing the website from:

- iPhone
- Android devices
- tablets
- other computers on the same network

---

# Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run dev -- --host` | Expose development server to LAN |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |

---

# Production Build

Always verify the project before deployment:

```bash
npm run build
```

Successful output should contain:

```text
✓ built
```

Production files are generated inside:

```text
dist/
```

---

# Preview Production Build

After building:

```bash
npm run preview
```

This allows the production bundle to be tested locally before deployment.

---

# Recommended Development Workflow

```text
Edit content / UI
        ↓
npm run dev
        ↓
Desktop testing
        ↓
Mobile testing
        ↓
npm run build
        ↓
Check build output
        ↓
npm run preview
        ↓
Final browser test
        ↓
Git commit
        ↓
Deploy
```

---

# Clean Dependency Reinstall

If dependencies become inconsistent:

### PowerShell

```powershell
Remove-Item `
  -Recurse `
  -Force `
  node_modules `
  -ErrorAction SilentlyContinue

Remove-Item `
  package-lock.json `
  -ErrorAction SilentlyContinue

npm install
npm run build
```

Only remove `package-lock.json` when a dependency reset is intentionally required.

For normal development, preserve the lockfile.

---

# Git Workflow

Before committing major changes:

```bash
npm run build
git status
```

Stage appropriate changes:

```bash
git add -u
```

Then add new source files explicitly.

Example:

```bash
git add src
git add README.md
```

Review:

```bash
git diff --cached --stat
git status
```

Commit:

```bash
git commit -m "feat: update VINECO website"
```

Synchronize:

```bash
git pull --rebase origin main
```

Push:

```bash
git push origin main
```

---

# Files That Should Not Be Committed

Local generated or backup files should normally be excluded.

Recommended `.gitignore` entries:

```gitignore
node_modules/
dist/
output/
.vineco-backups/
```

Do not treat backup files as active source code.

---

# Deployment

Because the application uses `HashRouter`, it is suitable for static hosting.

Supported deployment targets include:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- Traditional static hosting
- Shared hosting capable of serving `dist/`

Build:

```bash
npm run build
```

Deploy:

```text
dist/
```

---

# Production Checklist

Before releasing the website:

- [ ] Run `npm install`
- [ ] Run `npm run build`
- [ ] Verify Home page
- [ ] Verify About page
- [ ] Verify Products page
- [ ] Verify every Product Detail route
- [ ] Verify Service page
- [ ] Verify OEM / ODM page
- [ ] Verify FAQ page
- [ ] Verify Contact page
- [ ] Test desktop navigation
- [ ] Test product dropdown
- [ ] Test mobile navigation
- [ ] Test mobile menu after scrolling
- [ ] Test PageLoader
- [ ] Test Sample Request modal
- [ ] Test floating contact actions
- [ ] Verify all images
- [ ] Verify all videos
- [ ] Verify Google Map
- [ ] Verify email addresses
- [ ] Verify phone numbers
- [ ] Verify social links
- [ ] Verify product descriptions
- [ ] Verify company information
- [ ] Review SEO metadata
- [ ] Review Open Graph image
- [ ] Compress large images
- [ ] Optimize videos
- [ ] Check mobile horizontal overflow
- [ ] Test iPhone Safari
- [ ] Test Android Chrome
- [ ] Test keyboard navigation
- [ ] Test reduced-motion mode
- [ ] Check browser console
- [ ] Confirm no missing assets
- [ ] Confirm production build succeeds

---

# Developer Guidelines

## Components

Reusable interface logic belongs in:

```text
src/components/
```

Avoid duplicating the same UI in multiple pages.

---

## Business Content

Whenever practical, editable business copy belongs in:

```text
src/data/
```

rather than directly inside large JSX components.

---

## Page Logic

Pages belong in:

```text
src/pages/
```

Pages should compose smaller reusable components instead of becoming oversized single files.

---

## CSS

Keep CSS modular.

Do not turn:

```text
src/styles/globals.css
```

back into a large monolithic stylesheet.

Before adding a new CSS rule, determine whether it belongs to:

```text
tokens
core
components
home
layout
pages
```

---

## Legacy Code

Do not keep old implementations only because a newer implementation replaced them.

Before deleting anything:

1. Search runtime imports
2. Check static references
3. Run `npm run build`
4. Test affected routes
5. Remove only verified unused code

---

## Automated Refactors

Before running scripts that modify many source files:

- Create a backup
- Use UTF-8 without BOM
- Run the script from project root
- Build immediately afterward
- Review `git diff`
- Do not commit until the UI is tested

---

# Common Issues

## Vite JSX Parse Error

Example:

```text
Unexpected token
```

Check the reported file and line.

Common causes:

```text
Missing JSX closing tag
Extra }
Extra />
Invalid component nesting
Broken import
```

Then run:

```bash
npm run build
```

---

## Missing Image

Check that the file exists:

```powershell
Test-Path ".\public\images\YOUR-IMAGE.webp"
```

Correct:

```text
/images/YOUR-IMAGE.webp
```

Incorrect:

```text
/public/images/YOUR-IMAGE.webp
```

---

## Changes Are Not Visible

Restart Vite:

```bash
npm run dev -- --host
```

Then perform a hard refresh.

Windows:

```text
Ctrl + F5
```

---

## Mobile Page Has Horizontal Overflow

Inspect:

- absolute elements
- large fixed widths
- grid children
- flex children
- transforms
- overflowing media
- `min-width`

Grid and flex children often require:

```css
min-width: 0;
```

---

## Mobile Menu Behaves Incorrectly on iPhone

Review:

```text
src/styles/layout/ios-nav-fix.css
```

and:

```text
src/components/layout/Header.jsx
```

Test using real Safari whenever possible.

---

# Maintenance Priorities

Future improvements should prioritize:

1. Remove remaining legacy CSS compatibility layers
2. Consolidate Service responsive CSS
3. Reduce unnecessary `!important`
4. Optimize large images
5. Optimize video assets
6. Move remaining remote image dependencies to local assets
7. Continue improving route-level loading
8. Validate all production content
9. Improve route-specific SEO if required
10. Maintain accessibility across new UI features

---

# Repository Philosophy

The project should remain:

```text
Fast
Modular
Predictable
Responsive
Maintainable
Accessible
Production-safe
```

When choosing between adding another override and refactoring existing code:

> Prefer refactoring.

When choosing between duplicating a component and reusing an existing one:

> Prefer reuse.

When choosing between adding another dependency and implementing a simple native solution:

> Prefer the smallest maintainable solution.

---

# Ownership

This repository was created as a web development project for:

## VINECO

Company / brand information should be maintained using the latest approved official materials.

Official reference supplied for the project:

https://wineco.winmart.vn/

---

# License

```text
Private Project
```

This source code is intended for the VINECO project and is not licensed for unrestricted redistribution unless explicitly authorized by the project owner.

---

<div align="center">

## VINECO

**Modern Web Experience · React · Tailwind CSS · Responsive Design**

`#ffa412` Orange · `#03326b` Navy · `Lexend Variable`

<br>

**Built with performance, maintainability and user experience in mind.**

</div>#   k h a n g - p o r t f o l i o  
 