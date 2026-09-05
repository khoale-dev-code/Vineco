<div align="center">

# VINECO

### Natural Pet Products · OEM / ODM · Global B2B

A modern, responsive website built for **VinEco**, focused on natural pet products, custom manufacturing, packaging and global B2B services.

<br />

![React](https://img.shields.io/badge/React-19.2-03326b?logo=react\&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-8.2-03326b?logo=vite\&logoColor=ffa412)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-03326b?logo=tailwindcss\&logoColor=38BDF8)
![Status](https://img.shields.io/badge/Status-Active-ffa412)
![License](https://img.shields.io/badge/License-Private-03326b)

<br />

**Orange `#ffa412` · Navy `#03326b` · Lexend Variable**

</div>

---

## Overview

This repository contains the front-end implementation of the **VinEco website**, developed with a strong focus on:

* Responsive UI
* Mobile usability
* Performance
* Reusable components
* Maintainable CSS
* Product presentation
* OEM / ODM services
* B2B contact experience

---

## Tech Stack

| Technology      | Version |
| --------------- | ------: |
| React           |  19.2.8 |
| React DOM       |  19.2.8 |
| React Router    |   8.3.x |
| Vite            |   8.2.1 |
| Tailwind CSS    |   4.3.3 |
| Lexend Variable |     5.x |

---

## Main Features

* Responsive desktop, tablet and mobile layouts
* Product catalog and product detail pages
* Service presentation
* OEM / ODM sections
* About page
* FAQ
* Contact page
* Google Maps integration
* Sample request modal
* Floating contact actions
* Sticky responsive navigation
* Mobile fullscreen navigation
* Route-level code splitting
* Custom branded page loader
* Scroll reveal animations
* Smart image fallback
* Reduced-motion accessibility support

---

## Pages

| Route              | Page           |
| ------------------ | -------------- |
| `#/`               | Home           |
| `#/about`          | About Us       |
| `#/products`       | Products       |
| `#/products/:slug` | Product Detail |
| `#/service`        | Services       |
| `#/oem-odm`        | OEM / ODM      |
| `#/faq`            | FAQ            |
| `#/contact`        | Contact Us     |

The project uses **HashRouter**, making it suitable for static hosting without additional SPA rewrite configuration.

---

## Project Structure

```text
vineco-static-react/
├── public/
│   ├── images/
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
│   │   ├── service/
│   │   └── ui/
│   │
│   ├── data/
│   ├── features/
│   ├── pages/
│   ├── styles/
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Content Management

Most editable website content is separated from component logic.

```text
src/data/
├── aboutV4.js
├── mapEmbed.js
├── oemOdmContent.js
├── productCatalog.js
├── projectData.js
└── serviceContent.js
```

### Products

```text
src/data/productCatalog.js
```

### Services

```text
src/data/serviceContent.js
```

### OEM / ODM

```text
src/data/oemOdmContent.js
```

This structure makes business content easier to update without modifying the main UI components.

---

## Styling

The project uses **Tailwind CSS v4 + modular custom CSS**.

```text
src/styles/
├── globals.css
├── tokens.css
├── core.css
│
├── components/
├── home/
├── layout/
└── pages/
```

`globals.css` acts mainly as the stylesheet entry point.

Page-specific styles should remain inside their respective modules rather than being added directly to `globals.css`.

---

## Images

Static assets are stored in:

```text
public/images/
```

Use public assets like:

```jsx
<img
  src="/images/example.webp"
  alt="Description"
/>
```

For product images, prefer:

```css
object-fit: contain;
```

For editorial or lifestyle images where cropping is acceptable:

```css
object-fit: cover;
```

---

## Getting Started

### Requirements

```text
Node.js 20+
npm
```

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Local Network

Useful for testing on phones and tablets:

```bash
npm run dev -- --host
```

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

Production files are generated inside:

```text
dist/
```

---

## Available Scripts

| Command                 | Description                    |
| ----------------------- | ------------------------------ |
| `npm run dev`           | Start development server       |
| `npm run dev -- --host` | Expose server to local network |
| `npm run build`         | Create production build        |
| `npm run preview`       | Preview production build       |

---

## Deployment

The project can be deployed to most static hosting platforms, including:

* Vercel
* Netlify
* Cloudflare Pages
* GitHub Pages
* Traditional static hosting

Build before deployment:

```bash
npm run build
```

Deploy the generated:

```text
dist/
```

directory.

---

## Development Guidelines

Keep the project:

* Modular
* Responsive
* Accessible
* Performance-focused
* Easy to maintain

Prefer reusable components over duplicated UI.

Keep editable business content inside:

```text
src/data/
```

Keep page-specific styles inside:

```text
src/styles/pages/
```

Before pushing major changes:

```bash
npm run build
```

---

## Production Checklist

Before release:

* [ ] Production build succeeds
* [ ] Desktop navigation works
* [ ] Mobile navigation works
* [ ] Product pages display correctly
* [ ] Service images display correctly
* [ ] No mobile horizontal overflow
* [ ] Contact actions work
* [ ] Google Map works
* [ ] All images load correctly
* [ ] No console errors
* [ ] iOS Safari tested
* [ ] Android Chrome tested

---

## License

```text
Private Project
```

This repository is intended for the **VinEco website project** and is not licensed for unrestricted redistribution without authorization.

---

<div align="center">

### VINECO

**Crafted by Nature · Perfected by Us**

React · Tailwind CSS · Responsive Web Experience

</div>
