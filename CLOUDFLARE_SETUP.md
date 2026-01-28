# Cloudflare Pages Setup Guide

## 1. Push to GitHub
First, use the `deploy.bat` script I created to push your code to a new GitHub repository.

## 2. Connect Cloudflare
1.  Log in to the **Cloudflare Dashboard**.
2.  Go to **Workers & Pages** > **Create Application**.
3.  Tabs: Select **Pages** > **Connect to Git**.
4.  Choose your GitHub account and select the `lolypop-website` (or whatever you named it) repository.
5.  Click **Begin setup**.

## 3. Configuration (Critical)
Cloudflare settings must match your Next.js setup:

*   **Framework Preset**: Select `Next.js`
*   **Build command**: `npx @cloudflare/next-on-pages@1` (Recommended) or `npm run build`
*   **Build output directory**: `.vercel/output/static` or `.next` (Standard Next.js)
    *   *Note: For maximum compatibility, selecting the "Next.js" preset usually autofills this correctly (`.vercel/output/static` for static exports or standard output).*

## 4. Deploy
Click **Save and Deploy**. Cloudflare will build your site.

## 5. Automatic Updates
From now on, whenever you run `deploy.bat` and say "Yes", Cloudflare will detect the change and update your live site automatically within seconds!
