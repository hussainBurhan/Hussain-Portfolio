# Deployment Instructions

## Option 1: Vercel (Recommended)

Vercel is the creators of Next.js and offers the easiest deployment experience.

1.  **Push your code to GitHub**.
2.  **Sign up/Login to Vercel** (https://vercel.com).
3.  **Add New Project**:
    *   Import your GitHub repository.
    *   Vercel will automatically detect Next.js.
4.  **Deploy**:
    *   Click "Deploy".
    *   Your site will be live in minutes!

## Option 2: GitHub Pages

To deploy to GitHub Pages, you need to configure Next.js for static export.

1.  **Update `next.config.ts`**:
    ```typescript
    import type { NextConfig } from "next";

    const nextConfig: NextConfig = {
      output: 'export',
      images: {
        unoptimized: true, // Required for static export
      },
    };

    export default nextConfig;
    ```

2.  **Push to GitHub**.

3.  **Configure GitHub Pages**:
    *   Go to Repository Settings > Pages.
    *   Source: GitHub Actions.
    *   Use the "Next.js" workflow template provided by GitHub.

## Updating Content

To update your portfolio content:
1.  Edit `public/data.json`.
2.  Commit and push your changes.
3.  Your site will automatically redeploy (if using Vercel or configured GitHub Actions).
