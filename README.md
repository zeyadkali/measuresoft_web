# Measuresoft - Petroleum Systems & Instrumentation Platform

Official web application and digital equipment catalog for Measuresoft Egypt, specializing in petroleum engineering instrumentation, mud logging gas detection systems, and industrial oilfield safety solutions.

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Icons & Motion:** Lucide React, Motion
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js >= 20.x
- npm >= 10.x

### Installation

```bash
npm install
```

### Development Server

Run the local development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### Production Build

Compile TypeScript and build optimized assets for production:

```bash
npm run build
```

## Security & Architecture

- Client-side input validation and sanitization for RFQs and inquiries.
- Protected administration routing with session-based authorization and rate limiting.
- HTTP security headers pre-configured for modern production hosting.
