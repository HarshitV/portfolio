# Portfolio | Harshit Verma

Personal portfolio site built with Next.js and TypeScript. It showcases projects, animations, and responsive layouts using `styled-components`.

## Quick Start

Prerequisites: Node.js (LTS) and npm.

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
npm run start
```

Other useful scripts:

-   `npm run lint` — run ESLint across the project
-   `npm run format` — format code with Prettier

## Project Structure

-   `src/pages` — Next.js pages and routes. See [src/pages](src/pages)
-   `src/components` — React components used across the site. See [src/components](src/components)
-   `public` — static assets and images. See [public](public)
-   `fonts` — local fonts used by the site. See [fonts](fonts)

Key files:

-   Home page: [src/pages/index.tsx](src/pages/index.tsx)
-   App wrapper: [src/pages/\_app.tsx](src/pages/_app.tsx)
-   Global styles: [src/styles/GlobalStyles.ts](src/styles/GlobalStyles.ts)

## Development Notes

-   Styling is implemented with `styled-components`.
-   Carousel functionality uses `react-responsive-carousel`.
-   TypeScript is enabled across the project.
