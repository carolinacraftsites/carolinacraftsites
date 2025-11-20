# Deployment Guide for Vercel

This site is now configured as a static React application ready for Vercel deployment.

## Quick Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   Follow the prompts to link your project to Vercel.

3. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## Alternative: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Vercel will automatically detect the configuration from `vercel.json`
5. Click "Deploy"

## Configuration

The site is configured with:
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Framework**: Static (Vite + React)

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- Static React SPA with Vite
- Contact form uses `mailto:` links (no backend required)
- Navigation links support Cmd/Ctrl+Click to open in new tabs
- Theme toggle (dark/light mode)
- Responsive design with Tailwind CSS

## Note on Contact Form

The contact form now uses a `mailto:` link, which opens the user's default email client with pre-filled information. This eliminates the need for a backend API and database.

If you want to add form submission tracking or automation in the future, consider using:
- Vercel Forms
- Formspree
- EmailJS
- Netlify Forms (if switching platforms)
