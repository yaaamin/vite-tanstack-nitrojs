# Vite + React + TanStack Router + Nitro + Cloudflare Workers

A full-stack starter template for building React applications with Vite, TanStack Router, Nitro/H3 API routes, Tailwind CSS, shadcn/ui, and Cloudflare Workers.

The frontend is built as a Vite-powered React SPA, while backend routes are handled by Nitro and deployed to Cloudflare Workers. Static frontend assets are served through the Worker using Cloudflare assets binding, making this a compact setup for building and deploying full-stack edge applications.

## Tech Stack

- **React 19** – UI library for building interactive interfaces
- **Vite 6** – fast development server and production bundler
- **TanStack Router** – type-safe file-based routing for React
- **Nitro / H3** – server runtime and API route handling
- **Cloudflare Workers** – edge runtime for deployment
- **Wrangler** – Cloudflare development and deployment CLI
- **Tailwind CSS 4** – utility-first styling
- **shadcn/ui** – accessible, customizable UI components
- **TypeScript** – typed application code
- **Bun** – package manager and script runner

## Features

- React + TypeScript frontend
- File-based routing with TanStack Router
- API routes under `/api/*` powered by Nitro/H3
- Cloudflare Worker deployment setup
- Local development with Vite, Nitro, or Wrangler
- Tailwind CSS 4 configuration
- shadcn/ui component setup
- SPA fallback for frontend routes
- Example health and users API endpoints

## Project Structure

```txt
.
├── public/                  # Static public assets
├── src/
│   ├── react-app/           # React frontend application
│   │   ├── components/      # UI components
│   │   ├── hooks/           # React hooks
│   │   ├── lib/             # Utilities
│   │   ├── routes/          # TanStack Router routes
│   │   ├── index.css        # Tailwind/global styles
│   │   └── main.tsx         # React entry point
│   ├── worker/              # Nitro/Cloudflare Worker backend
│   │   ├── routes/          # Nitro server routes
│   │   │   ├── api/         # API endpoints
│   │   │   └── [...].ts     # SPA fallback route
│   │   └── index.ts         # Worker entry point
│   └── routeTree.gen.ts     # Generated TanStack route tree
├── nitro.config.ts          # Nitro server configuration
├── vite.config.ts           # Vite frontend/build configuration
├── wrangler.jsonc           # Production Cloudflare Worker config
├── wrangler.dev.jsonc       # Local Wrangler config
└── package.json
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/)
- [Cloudflare account](https://dash.cloudflare.com/) for deployment
- Wrangler authentication if you plan to deploy:

```bash
bunx wrangler login
```

### Install dependencies

```bash
bun install
```

### Start the frontend dev server

```bash
bun dev
```

The frontend will be available at:

```txt
http://localhost:5173
```

By default, Vite proxies `/api` requests to Nitro running on port `3000`.

### Start frontend and Nitro API together

```bash
bun run dev:full
```

This runs:

- Nitro on `http://localhost:3000`
- Vite on `http://localhost:5173`

### Start with Wrangler locally

```bash
bun run dev:local
```

Use this when you want to test closer to the Cloudflare Workers environment.

## Available Scripts

```bash
bun dev
```

Start the Vite development server.

```bash
bun run dev:nitro
```

Run Vite and Nitro together, with Nitro on port `3000`.

```bash
bun run dev:full
```

Run Nitro and Vite concurrently.

```bash
bun run dev:local
```

Run Wrangler dev and Vite concurrently.

```bash
bun run build
```

Build the Nitro backend and Vite frontend.

```bash
bun run preview
```

Build and preview the production app locally with Vite preview.

```bash
bun run deploy
```

Build and deploy to Cloudflare Workers using Wrangler.

```bash
bun run types
```

Generate Cloudflare Worker types using Wrangler.

## API Routes

API routes live in:

```txt
src/worker/routes/api
```

Included routes:

| Route | File | Description |
| --- | --- | --- |
| `GET /api/health` | `health.get.ts` | Returns a health status and timestamp |
| `GET /api/users` | `users.get.ts` | Returns example user data |

Example:

```bash
curl http://localhost:3000/api/health
```

Response:

```json
{
  "status": "ok",
  "timestamp": "2026-01-01T00:00:00.000Z"
}
```

## Frontend Routing

Frontend routes live in:

```txt
src/react-app/routes
```

Included routes:

| Route | File | Description |
| --- | --- | --- |
| `/` | `index.tsx` | Home page; loads `/api/health` |
| `/about` | `about.tsx` | Example about page |

TanStack Router generates the route tree at:

```txt
src/routeTree.gen.ts
```

## Styling and UI

Tailwind CSS is configured through the Vite Tailwind plugin. shadcn/ui is configured in `components.json` with aliases pointing to the React app directory:

```txt
@/components
@/components/ui
@/lib
@/hooks
```

## Build Output

The build is split into two outputs:

```txt
dist/client   # Frontend assets
dist/server   # Nitro/Worker server output
```

Wrangler serves `dist/client` through the `ASSETS` binding and uses the server entry from `dist/server`.

## Deployment

Deploy to Cloudflare Workers:

```bash
bun run deploy
```

This runs the production build and deploys using `wrangler.jsonc`.

You can also deploy manually:

```bash
bun run build
bunx wrangler deploy --config wrangler.jsonc
```

## Creating a New Project From This Template

```bash
bun create cloudflare --template https://github.com/yaaamin/vite-tanstack-nitrojs
```

## Notes

- The Vite dev server proxies `/api` requests to `http://localhost:3000`.
- Nitro is configured with `srcDir: "./src/worker"`.
- The Cloudflare assets binding is named `ASSETS`.
- Non-API routes fall back to the frontend SPA.
- The included API routes are examples and can be replaced with your own application logic.

## License

No license file is currently included. Add a license before publishing or distributing this template.
