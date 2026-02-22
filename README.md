# Next.js Frontend

This is the frontend application for the Drupal Headless CMS POC.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Drupal backend running with JSON:API enabled

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Update .env.local with your Drupal URL
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

## Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── loading.tsx        # Loading state
│   ├── error.tsx          # Error boundary
│   ├── not-found.tsx      # 404 page
│   ├── products/          # Products pages
│   │   ├── page.tsx       # Listing
│   │   └── [slug]/        # Detail
│   └── page/              # Dynamic pages
│       └── [slug]/        # Page detail
├── components/
│   ├── common/            # Shared UI components
│   ├── layout/            # Header, Footer
│   ├── products/          # Product components
│   └── home/              # Homepage sections
├── lib/
│   ├── axios.ts           # HTTP client
│   ├── fetchDrupal.ts     # API helpers
│   └── transform.ts       # Data transformers
├── types/
│   ├── jsonapi.ts         # JSON:API types
│   ├── drupal.ts          # Drupal content types
│   └── index.ts           # Frontend types
└── hooks/
    └── useProducts.ts     # Client-side hooks
```

## Features

### Server Components

All pages use React Server Components for optimal performance.

### ISR (Incremental Static Regeneration)

Pages are statically generated and revalidated every 60 seconds (configurable).

### SEO

Metadata is fetched from Drupal and applied using `generateMetadata`.

### Image Optimization

Images from Drupal are optimized using `next/image`.

## Available Scripts

| Command              | Description              |
| -------------------- | ------------------------ |
| `npm run dev`        | Start development server |
| `npm run build`      | Build for production     |
| `npm run start`      | Start production server  |
| `npm run lint`       | Run ESLint               |
| `npm run type-check` | Run TypeScript check     |

## Environment Variables

See `.env.example` for all available options.

## Customization

### Adding New Components

Place components in the appropriate folder under `components/`.

### Adding New API Functions

Add functions to `lib/fetchDrupal.ts` following existing patterns.

### Adding New Types

Add TypeScript types to `types/drupal.ts` for Drupal types or `types/index.ts` for frontend types.
