<div align="center">

# 🐾 VinEco — Static React Website

**Modern B2B showcase website for natural pet products, OEM / ODM & private-label manufacturing**

<img src="https://img.shields.io/badge/React-19.2.8-03326b?logo=react&logoColor=ffa412" alt="React 19.2.8">
<img src="https://img.shields.io/badge/Vite-8.2.1-03326b?logo=vite&logoColor=ffa412" alt="Vite 8.2.1">
<img src="https://img.shields.io/badge/Tailwind_CSS-4.3.3-03326b?logo=tailwindcss&logoColor=ffa412" alt="Tailwind CSS 4.3.3">
<img src="https://img.shields.io/badge/React_Router-8.3.0-03326b?logo=reactrouter&logoColor=ffa412" alt="React Router 8.3.0">
<img src="https://img.shields.io/badge/license-Private-03326b" alt="License">

</div>

<br>

<div align="center">
<table>
<tr>
<td align="center" width="120">
<img src="https://singlecolorimage.com/get/03326b/120x40" alt="Navy"><br>
<sub><b>Navy</b> #03326b</sub>
</td>
<td align="center" width="120">
<img src="https://singlecolorimage.com/get/ffa412/120x40" alt="Orange"><br>
<sub><b>Orange</b> #ffa412</sub>
</td>
<td align="center" width="120">
<img src="https://singlecolorimage.com/get/fffaf3/120x40" alt="Cream"><br>
<sub><b>Cream</b> #fffaf3</sub>
</td>
</tr>
</table>
</div>

---

## 📖 Overview

**VinEco Static React Website** is a responsive B2B presentation website built with **React 19**, **Vite 8**, and **Tailwind CSS v4**.

It presents VinEco as a Vietnam-based natural pet-product manufacturer, showcasing:

| | |
|---|---|
| 🐕 | Natural pet products |
| ☕ | Coffee wood dog chews |
| 🏭 | OEM manufacturing |
| 🎨 | ODM product development |
| 🏷️ | Private label |
| 📦 | Packaging & branding support |
| 🧪 | Sampling |
| 🌍 | Export-ready B2B projects |

> Built as a **fully static front-end**, so it deploys effortlessly to any static hosting platform.

---

## 🧱 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.2.8 | UI framework |
| **React DOM** | 19.2.8 | Browser rendering |
| **React Router** | ^8.3.0 | Client-side routing |
| **Vite** | 8.2.1 | Dev server & production build |
| **Tailwind CSS** | 4.3.3 | Styling system |
| **@tailwindcss/vite** | 4.3.3 | Tailwind + Vite integration |
| **Lexend Variable** | ^5.3.0 | Main project font |

> Icons are implemented as **local SVG / UI components** — no heavy external icon package required.

---

## ✨ Main Features

<table>
<tr>
<td valign="top" width="50%">

### 🎨 UI / UX
- Responsive desktop, tablet & mobile layouts
- VinEco navy / orange visual system
- Sticky responsive navigation
- Mobile full-screen navigation
- Product dropdown navigation
- Scroll reveal animations
- Reduced-motion accessibility support
- Reusable image fallback system
- Floating contact actions
- Reusable modal system
- Responsive product-detail experience

</td>
<td valign="top" width="50%">

### 💼 Business Features
- OEM / ODM presentation
- Private-label positioning
- Product catalog
- Product detail pages
- Sample request modal
- Contact information
- Google Map embed support
- FAQ sections
- Export / manufacturing content

</td>
</tr>
</table>

### 📄 Pages

`Home` · `About Us` · `Products` · `Product Detail` · `Service` · `OEM / ODM` · `FAQ` · `Contact`

---

## 🚀 Getting Started

### Requirements

- **Node.js 20+** (recommended)
- **npm**

```bash
node -v
npm -v
```

### Installation

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Expose the dev server to your local network:

```bash
npm run dev -- --host
```

Vite will normally provide:

```
Local:   http://localhost:5173/
Network: http://YOUR-LAN-IP:5173/
```

### Clean reinstall

Use this when dependencies become inconsistent, or after replacing the project with a newer version.

**PowerShell**

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

npm install
npm run build
npm run dev
```

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run dev -- --host` | Start dev server, exposed on local network |
| `npm run build` | Production build → outputs to `dist/` |
| `npm run preview` | Preview the production build |

---

## 🧭 Routing

The app uses **React Router** with `HashRouter`, so routes work on simple static hosting without server rewrite rules.

| Route | Page |
|---|---|
| `#/` | Home |
| `#/about` | About Us |
| `#/products` | Products |
| `#/products/coffee-wood` | Product Detail |
| `#/service` | Service |
| `#/oem-odm` | OEM / ODM |
| `#/faq` | FAQ |
| `#/contact` | Contact |

- **Main router:** `src/app/App.jsx`
- **Product detail routes:** `/products/:slug`
- **Product slugs defined in:** `src/data/productCatalog.js`

---

## 📁 Project Structure

```
vineco-static-react/
│
├── public/
│   ├── images/
│   │   ├── pinterest-preview/
│   │   ├── service/
│   │   ├── service-mobile/
│   │   ├── service-real/
│   │   └── ...
│   └── video/
│
├── src/
│   ├── app/
│   │   └── App.jsx
│   │
│   ├── components/
│   │   ├── about/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── oem/
│   │   ├── sections/
│   │   ├── service/
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── aboutContent.js
│   │   ├── aboutEditorial.js
│   │   ├── aboutExperience.js
│   │   ├── aboutV4.js
│   │   ├── mapEmbed.js
│   │   ├── oemOdmContent.js
│   │   ├── productCatalog.js
│   │   ├── projectData.js
│   │   └── serviceContent.js
│   │   └── siteContent.js
│   │
│   ├── features/
│   │   └── sample/
│   │
│   ├── hooks/
│   │   └── useScrollSpy.js
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
│   │   └── globals.css
│   │
│   └── main.jsx
│
├── tools/
│   └── apply-product-detail.mjs
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ✏️ Where to Edit Website Content

> The project no longer stores everything in a single data file. Edit the file that matches the section you want to change.

| Area | File |
|---|---|
| Shared / Home / Contact data | `src/data/projectData.js` |
| Product catalog & routes | `src/data/productCatalog.js` |
| About page (current) | `src/data/aboutV4.js` |
| About page (legacy/alt versions) | `aboutContent.js`, `aboutEditorial.js`, `aboutExperience.js` |
| Service page | `src/data/serviceContent.js` |
| OEM / ODM page | `src/data/oemOdmContent.js` |
| Legacy / shared section content | `src/data/siteContent.js` |

### Shared / Home / Contact Data — `src/data/projectData.js`
Contains: brand information, hero copy, metrics, home product cards, advantages, OEM models used by some sections, FAQ, contact information.

### Product Catalog — `src/data/productCatalog.js`
Controls product navigation and product-detail routes.

```js
{
  slug: "coffee-wood",
  name: "Coffee Wood",
  image: "/images/product-classic.webp",
  description: "..."
}
```

The `slug` becomes part of the URL: `#/products/coffee-wood`

### Service Page — `src/data/serviceContent.js`
Update: service chapters, titles, descriptions, feature points, service images, overview information.

### OEM / ODM Page — `src/data/oemOdmContent.js`
Update: OEM model, ODM model, private-label model, process, capabilities.

> ⚠️ `siteContent.js` still exists but is **not guaranteed** to be used by every page. Always check which data file the target page imports before editing.

---

## 🖼️ Images & Media

| Type | Location |
|---|---|
| Images | `public/images/` |
| Videos | `public/video/` |

A file at `public/images/example.png` is referenced in React as:

```jsx
<img src="/images/example.png" alt="" />
```

### Image Fallback — `src/components/ui/SmartImage.jsx`

Automatically displays a neutral placeholder when:
- `src` is empty
- the image does not exist
- the browser cannot load the image

If you see **"Add image / images/example.webp"**, the referenced file is missing or failed to load.

### Product Images

Image paths are expected in `src/data/productCatalog.js` and `src/data/projectData.js`. When adding/replacing images:

1. Put the image inside `public/images/`
2. Update the corresponding data object
3. Keep image names simple and URL-safe
4. Run `npm run build`
5. Test both desktop and mobile

> 💡 For transparent PNG product images, `object-contain` is usually better than `object-cover` since it avoids cropping the product.

---

## 🗺️ Google Map

Configured in `src/data/mapEmbed.js`. Paste either a complete Google Maps `<iframe>` or a valid map URL.

```js
export const mapEmbedHtml = `
  <iframe
    src="YOUR_GOOGLE_MAP_EMBED_URL"
    loading="lazy"
  ></iframe>
`;
```

Renderer: `src/components/ui/GoogleMapEmbed.jsx`
If no map is configured, the site shows a fallback card instead of breaking the page.

---

## ✉️ Contact Form

The Contact page is currently **static** — on submit it generates a pre-filled email via `mailto:` and opens the visitor's email client.

- **File:** `src/pages/ContactPage.jsx`
- **Data source:** `src/data/projectData.js`

> For production use requiring direct form submission, connect the form to your own API, serverless function, or hosted form provider.

---

## 🧪 Sample Request Modal

Global modal managed by:

- `src/features/sample/SampleModal.jsx`
- `src/features/sample/SampleModalContext.jsx`

Can be opened from multiple sections without duplicating modal state. Provider is mounted in `src/app/App.jsx`.

---

## 🎨 Styling

Global styles: `src/styles/globals.css` — built with **Tailwind CSS v4** + Vite integration.

<div align="center">
<table>
<tr>
<th>Role</th><th>Color</th><th>Hex</th>
</tr>
<tr>
<td>Primary</td>
<td><img src="https://singlecolorimage.com/get/03326b/60x20"></td>
<td><code>#03326b</code> VinEco Navy</td>
</tr>
<tr>
<td>Accent</td>
<td><img src="https://singlecolorimage.com/get/ffa412/60x20"></td>
<td><code>#ffa412</code> VinEco Orange</td>
</tr>
<tr>
<td>Background</td>
<td><img src="https://singlecolorimage.com/get/fffaf3/60x20"></td>
<td><code>#fffaf3</code> Cream</td>
</tr>
<tr>
<td>Base</td>
<td><img src="https://singlecolorimage.com/get/ffffff/60x20"></td>
<td><code>#ffffff</code> White</td>
</tr>
</table>
</div>

**Primary font:** Lexend Variable

---

## 📱 Responsive Design

Dedicated responsive behavior for: header, mobile navigation, service page, product detail page, about page, OEM/ODM page, cards & grids, contact layout, floating contact controls.

**Minimum test breakpoints:**

`320px` · `375px` · `390px` · `430px` · `768px` · `900px` · `1024px` · `1280px` · `1440px`

Also test **real iOS Safari** when changing: `position: fixed`, sticky navigation, `100vh` / `100dvh`, scroll locking, backdrop filters.

---

## ♿ Accessibility

- Keyboard-focus states
- Semantic navigation
- Reduced-motion preferences
- Image `alt` values
- Responsive touch targets
- Native `<details>` FAQ interactions
- Scroll-reveal fallback when reduced motion is enabled

> Avoid removing `@media (prefers-reduced-motion: reduce)` unless the animation system is replaced with an equivalent accessible solution.

---

## 🔍 SEO

Basic metadata is configured in `index.html`, including: page title, meta description, Open Graph title & description, theme color.

> Review all SEO text before production and replace temporary content with final brand-approved copy.

---

## 🧩 Product Detail Patcher

`tools/apply-product-detail.mjs` — rebuilds / patches the Product Detail implementation and **creates a backup** before changing source files. Run from the project root only when needed.

```bash
node .\tools\apply-product-detail.mjs
```

Then verify:

```bash
npm run build
npm run dev -- --host
```

Backups are stored inside `.vineco-backups/`.

---

## ✅ Build Verification

Always run a production build after editing routes, JSX, or major CSS:

```bash
npm run build
```

A successful build completes without JSX parse errors or unresolved imports. Then test locally:

```bash
npm run dev -- --host
```

---

## 🐛 Common Issues

<details>
<summary><b>Vite reports a JSX parse error</b></summary>
<br>

```
[PARSE_ERROR] Unexpected token
```

Check the file and line reported by Vite. Common causes:
- Extra `/>`
- Extra `}`
- Missing closing JSX tag
- Broken route
- Invalid nested JSX

After fixing, run `npm run build`.
</details>

<details>
<summary><b>Image shows "Add image"</b></summary>
<br>

Verify the file exists:

```powershell
Test-Path ".\public\images\YOUR-IMAGE.png"
```

Make sure React references a **public URL**:

✅ `/images/YOUR-IMAGE.png`
❌ `/public/images/YOUR-IMAGE.png`
</details>

<details>
<summary><b>Mobile UI looks correct at the top but breaks after scrolling</b></summary>
<br>

Check the mobile navigation code and avoid combining complicated scroll-lock logic with unnecessary fixed-body positioning. Always test navigation on a real mobile browser after changing sticky/fixed elements.
</details>

<details>
<summary><b>Changes do not appear in the browser</b></summary>
<br>

Hard refresh: `Ctrl + F5`, or restart Vite:

```bash
npm run dev -- --host
```
</details>

---

## 📋 Production Checklist

- [ ] `npm install`
- [ ] `npm run build`
- [ ] Verify every route
- [ ] Test desktop navigation
- [ ] Test mobile navigation
- [ ] Test product dropdown
- [ ] Test all product-detail URLs
- [ ] Replace temporary / placeholder images
- [ ] Check SmartImage fallbacks
- [ ] Verify contact email and phone number
- [ ] Configure Google Map
- [ ] Review OEM / ODM content
- [ ] Review product descriptions
- [ ] Verify social links
- [ ] Check SEO metadata
- [ ] Compress large images
- [ ] Optimize video assets
- [ ] Test Safari on iPhone
- [ ] Test Android Chrome
- [ ] Check keyboard navigation
- [ ] Test reduced-motion mode
- [ ] Confirm there are no console errors

---

## 🚢 Deployment

Because the app uses `HashRouter`, it works well on most static hosting services **without special SPA rewrite rules**.

**Typical targets:** Vercel · Netlify · Cloudflare Pages · GitHub Pages · Shared static hosting · Traditional hosting serving `dist/`

```bash
npm run build
```

Deploy the generated `dist/` directory.

### Recommended workflow

```
1. Edit content / UI
        ↓
2. Test with npm run dev
        ↓
3. Test responsive layouts
        ↓
4. Run npm run build
        ↓
5. Fix warnings / errors
        ↓
6. Preview production build
        ↓
7. Deploy dist/
```

---

## 🧑‍💻 Notes for Developers

- Keep business content in `src/data/` whenever possible
- Keep reusable components inside `src/components/`
- Avoid hardcoding the same product data in multiple pages
- Prefer local assets for production instead of third-party hotlinks
- Always make a backup before large automated replacements
- Do **not** edit files inside `.vineco-backups/` as active source code
- Keep mobile behavior isolated and test it on real devices
- Run `npm run build` before committing major changes

---

<div align="center">

## 🌿 Brand Direction

**VinEco**

`Primary #03326b` · `Accent #ffa412` · `Font: Lexend Variable`

Natural Pet Products · OEM / ODM · Private Label · Vietnam

<br>

**VinEco — Crafted by Nature, Perfected by Us.**

</div>