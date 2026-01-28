# LOLYPOP Next.js

This is the Next.js 14 version of the LOLYPOP website, migrated from Vite/React.

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `app/` - App Router pages and layouts.
  - `page.tsx` - Homepage component.
  - `layout.tsx` - Root layout with fonts and metadata.
  - `globals.css` - Global styles and Tailwind v4 configuration.
- `components/` - Reusable UI components (Hero, Navbar, etc.).
- `public/` - Static assets (images, robots.txt, favicon).

## 🛠️ Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Deployment to Vercel

1.  Push this repository to GitHub/GitLab/Bitbucket.
2.  Import the project into Vercel.
3.  Vercel will detect Next.js automatically.
4.  **Build Command**: `next build` (Default)
5.  **Output Directory**: `.next` (Default)
6.  Click **Deploy**.

No extra configuration is needed as variables are baked into the CSS or code.
