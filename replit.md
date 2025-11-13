# Carolina Craft Sites - Marketing Website

## Overview
A professional marketing website for Carolina Craft Sites, a service business that provides custom websites for small businesses and professionals. The site features a modern design with full functionality for collecting customer leads through contact forms and newsletter subscriptions.

## Current State
The application is **production-ready** with the following features fully implemented:
- ✅ Complete responsive frontend design (Hero, Services, Portfolio, Pricing, Contact, Footer)
- ✅ Working contact form with database persistence
- ✅ Newsletter subscription with duplicate prevention
- ✅ PostgreSQL database for reliable data storage
- ✅ Dark mode support with theme toggle
- ✅ Smooth scroll navigation
- ✅ End-to-end tested and verified

## Architecture

### Frontend
- **Framework**: React with TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS + Shadcn UI components
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation

### Backend
- **Server**: Express.js
- **Database**: PostgreSQL via Neon
- **ORM**: Drizzle ORM
- **Storage**: DatabaseStorage implementation with full persistence

### Key Files
- `client/src/pages/Home.tsx` - Main landing page with all sections
- `client/src/components/` - Reusable UI components (Header, Hero, Services, Portfolio, Pricing, ContactForm, Footer)
- `server/routes.ts` - API endpoints for contact and newsletter
- `server/storage.ts` - Database storage layer
- `shared/schema.ts` - Database schema and types
- `server/db.ts` - Database connection setup

## Database Schema

### contact_inquiries
- id (varchar, primary key)
- name (text)
- phone (text)
- email (text)
- message (text)
- created_at (timestamp)

### newsletter_subscriptions
- id (varchar, primary key)
- email (text, unique)
- created_at (timestamp)

## API Endpoints

### POST /api/contact
Submit a contact inquiry
- **Request**: `{ name, phone, email, message }`
- **Response**: `{ success: boolean, message: string }`

### POST /api/newsletter
Subscribe to newsletter
- **Request**: `{ email }`
- **Response**: `{ success: boolean, message: string }`
- **Note**: Prevents duplicate subscriptions

### GET /api/inquiries
Get all contact inquiries (sorted by date)

### GET /api/subscribers
Get all newsletter subscriptions (sorted by date)

## Features

### Contact Form
- Full validation with required fields (name, phone, email, message)
- Loading states during submission
- Success/error toast notifications
- Form clears on successful submission
- All data persists to PostgreSQL database

### Newsletter Signup
- Email validation
- Duplicate prevention (shows friendly message if already subscribed)
- Loading states during submission
- Success/error toast notifications
- Form clears on successful submission
- All data persists to PostgreSQL database

### Portfolio Section
- 6 example website mockups for different business types
- Generic categories (Service Business, Professional Services, Creative Business, etc.)
- Hover effects on portfolio cards
- Responsive grid layout

### Pricing Section
- 3 pricing tiers (Starter, Professional, Premium)
- Clear feature lists with checkmarks
- "Most Popular" badge on Professional tier
- All prices visible (transparent pricing)

### Design System
- Primary color: Orange (#D97706 - represents craftsmanship and warmth)
- Font: Inter (professional and readable)
- Dark mode support with seamless theme switching
- Consistent spacing and component styling
- Accessible color contrast in both light and dark modes

## Recent Changes (Nov 13, 2024)
- Made website more generic and industry-agnostic per user request
- Removed industry dropdown from contact form
- Updated all trade-specific language to be more generic
- Removed business_type field from database schema
- Removed testimonials section per user request
- Added PostgreSQL database for persistent storage
- Replaced in-memory storage with DatabaseStorage
- All contact inquiries and newsletter subscriptions now persist across server restarts
- End-to-end tested and verified working

## Development

### Running the Application
```bash
npm run dev
```
Starts Express server and Vite dev server on port 5000

### Database Commands
```bash
npm run db:push        # Push schema changes to database
npm run db:push --force # Force push schema changes
```

## User Preferences
- Generic website copy suitable for any business type (not trade-specific)
- No industry dropdown in contact form - keep it simple
- Removed testimonials section
- Clean, professional design focused on lead generation
- Straightforward navigation without unnecessary sections

## Next Steps (Optional Enhancements)
- Add admin dashboard to view contact inquiries and subscribers
- Implement email notifications when new inquiries are submitted
- Add analytics tracking for form conversions
- Implement rate limiting on API endpoints
- Add CAPTCHA to prevent spam submissions
