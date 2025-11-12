# Carolina Craft Sites - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from B2B service platforms like Stripe, Shopify, and Webflow that balance professionalism with approachability. The design should convey competence and trustworthiness while remaining accessible to busy tradespeople who value straightforward communication.

## Core Design Principles
- **Professional Clarity**: Clean, no-nonsense layouts that respect the user's time
- **Visual Proof**: Portfolio examples demonstrate quality immediately
- **Trust Through Transparency**: Clear pricing, obvious contact options, genuine testimonials
- **Craftsmanship Aesthetic**: Design quality that reflects the service being sold

## Typography System
**Primary Font**: Inter or Poppins (Google Fonts CDN)
- Hero Headline: 4xl to 6xl, font-semibold or bold
- Section Headlines: 3xl to 4xl, font-semibold
- Subsection Headers: xl to 2xl, font-medium
- Body Text: base to lg, font-normal
- Small Print/Captions: sm, font-normal

**Secondary Font** (Optional accent): DM Sans or Work Sans for UI elements

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, and 24
- Section padding: py-16 to py-24 (mobile: py-12 to py-16)
- Component spacing: space-y-8 to space-y-12
- Container: max-w-6xl to max-w-7xl with px-4 to px-8

**Grid Strategy**:
- Portfolio showcase: 2-3 columns (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Services/Features: 3 columns on desktop (grid-cols-1 md:grid-cols-3)
- Testimonials: 2 columns (grid-cols-1 md:grid-cols-2)
- Pricing: 3 pricing tiers side-by-side on desktop

## Component Library

### Hero Section
- Full-width layout with large hero image showing tradesperson website examples on various devices
- Compelling headline emphasizing "Website in Days, Not Weeks" or similar value proposition
- Subheadline explaining who it's for (plumbers, electricians, contractors, etc.)
- Primary CTA button with blurred background overlay
- Secondary supporting text mentioning key benefit (e.g., "Starting at $X")

### Services Section
- Three-column grid explaining the process: Consultation → Design → Launch
- Each column with icon (use Heroicons), headline, and 2-3 sentence description
- Clear, benefit-focused language

### Portfolio Showcase
- Masonry or card grid displaying 6-9 example websites
- Each card shows website screenshot, trade category badge, and brief description
- Hover state reveals "View Case Study" or similar interaction
- Mix of trades: plumber, electrician, HVAC, landscaper, carpenter, etc.

### Pricing Section
- Three-tier pricing cards: Basic, Professional, Premium
- Clear feature lists with checkmarks
- Highlighted "Most Popular" tier
- All prices visible (no "Contact Us" pricing games)
- Single CTA button per tier

### Testimonials Section
- Two-column layout with customer photos
- Include customer name, trade, and business location
- Quote highlighting specific value (time saved, leads generated, ease of process)
- Star ratings or trust indicators

### Contact Form
- Two-column layout: Form on left, contact info/availability on right
- Fields: Name, Business Type, Phone, Email, Message
- Clear response time expectation ("We'll respond within 24 hours")
- Alternative contact methods (phone number, email visible)

### Footer
- Multi-column layout: About/Services, Quick Links, Contact Info, Social
- Newsletter signup with context ("Tips for tradesperson marketing")
- Trust indicators (years in business, number of sites built)

## Icons
Use **Heroicons** (outline style) via CDN for consistency throughout

## Images

### Large Hero Image
**Yes** - Full-width hero background image showing mockups of tradesperson websites displayed on laptop/tablet/phone, suggesting the responsive nature of the service. Overlay with semi-transparent dark gradient for text readability.

### Additional Images
- **Portfolio Section**: 6-9 screenshot images of actual or mockup tradesperson websites
- **Testimonials**: Headshots of satisfied tradesperson clients (3-4 photos)
- **Services/Process Section**: Optional small illustrations or icons representing consultation, design, and launch phases

## Animations
Minimal and purposeful only:
- Smooth scroll behavior for navigation links
- Subtle fade-in on scroll for portfolio items
- Hover scale effect (scale-105) on portfolio cards and pricing tiers