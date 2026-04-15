# Midmar

A modern single-page landing site built with React and Vite. The project includes animated scrolling, responsive layout, and a clean service/portfolio showcase for an agency, product, or creative brand.

## Features

- Responsive React SPA using Vite
- Tailwind CSS utility styling
- Smooth animations with GSAP and Lenis
- Modular components for Hero, Services, Portfolio, Why Us, Client Logos, and Call To Action
- Simple, easy-to-extend project structure

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- GSAP (`@gsap/react`)
- Lenis
- Lucide React icons
- Split-Type for text effects
- ESLint for linting

## Project Structure

- `src/main.jsx` — app entry point
- `src/App.jsx` — root application layout
- `src/components/` — reusable page sections
- `src/index.css` / `src/App.css` — global and app styling
- `public/` — static assets

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the displayed localhost URL in your browser to preview the site.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## Notes

- The app is configured as a Vite project with React plugin support.
- Tailwind CSS is used for styling, so utility classes are the main styling method.
- Animation logic is handled in components using `gsap` and `lenis`.

## Customization

To update the content, edit the component files under `src/components/` and the layout in `src/App.jsx`.
