# GRUHA BUILDERS — Building Your Trust
### Award-Winning Premium Luxury Website for Construction & Real-Estate in India

A bespoke, mobile-first digital experience crafted for **GRUHA BUILDERS** (Tagline: *"Building Your Trust"*). Designed to convey generational permanence, uncompromised civil engineering, and architectural luxury.

---

## 🌟 Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + Custom Gold Metallics & Architectural Glassmorphism
- **Scroll & Micro-Interactions**: GSAP 3 + ScrollTrigger + Lenis Smooth Scrolling
- **3D Interactive Scene**: Three.js via `@react-three/fiber` & `@react-three/drei`
- **Transitions**: Framer Motion & Tailwind Keyframe Motion
- **Icons**: Lucide Icons
- **Typography**: Cormorant Garamond (Headings) & Manrope (Body/UI) via `next/font`

---

## 📱 Mobile-First Architectural Design (360px - 430px)

- **Mobile Viewports Tested**: 360px, 390px, 414px, 768px, 1024px, 1440px, 1920px.
- **Strict Touch Targets**: Minimum 48px touch targets for all interactive controls.
- **Sticky Mobile Bottom Action Bar**: Quick access to direct phone call (`tel:+919845012345`), WhatsApp concierge chat, and rapid inquiry drawer.
- **Performance Safeguards**:
  - `dpr` capped at `[1, 1.5]` on mobile for optimal GPU rendering and battery preservation.
  - Automatic low-power device detection (`navigator.hardwareConcurrency <= 4`, `deviceMemory <= 4`, or `prefers-reduced-motion`) with static fallback to ensure continuous 60fps performance on mid-range Android devices.
  - Three.js frameloop paused via `IntersectionObserver` when not in viewport.
  - `IntersectionObserver` video lazy-play/pause prevents background decoding overhead.

---

## 📁 Project Structure

```
gruhabuilders/
├── app/
│   ├── layout.tsx         # Fonts, SEO metadata, JSON-LD Schema, SmoothScroll, Preloader, CustomCursor, MobileBottomBar
│   ├── page.tsx           # All 13 sections in sequence
│   ├── globals.css        # Luxury dark theme, gold gradient utilities, film grain overlay
│   ├── sitemap.ts         # Automated XML sitemap
│   └── robots.ts          # Search engine crawler directives
├── components/
│   ├── ui/
│   │   ├── TextReveal.tsx     # Custom line & word split masked reveal with GSAP
│   │   ├── MagneticButton.tsx # Magnetic attraction on desktop hover, normal on mobile
│   │   ├── VideoCard.tsx      # IntersectionObserver lazy load/pause, modal lightbox
│   │   ├── Counter.tsx        # Scroll-triggered animated numbers
│   │   ├── CustomCursor.tsx   # Gold circle desktop cursor, hidden on touch devices
│   │   ├── SmoothScroll.tsx   # Lenis with ScrollTrigger ticker integration
│   │   ├── Preloader.tsx      # Gold logo reveal + 0-100 counter + curtain wipe
│   │   └── MobileBottomBar.tsx # Sticky Call | WhatsApp | Enquire bottom bar
│   ├── three/
│   │   ├── GoldHouseCanvas.tsx # Dynamic R3F Canvas with low-end fallback
│   │   └── GoldHouseModel.tsx  # Procedural stylized metallic gold villa with glowing interior lamp
│   └── sections/
│       ├── Navbar.tsx         # Glassmorphism, mobile drawer, quote CTA
│       ├── Hero.tsx           # Full-screen video, gold headlines, parallax, CTAs
│       ├── TrustStrip.tsx     # Marquee keywords + 4 animated quantitative proof stats
│       ├── AboutUs.tsx        # 3D Gold House + foundation site video + philosophy
│       ├── Services.tsx       # 5 interactive luxury service cards with deliverables
│       ├── OurWork.tsx        # 2 cinematic videos with fullscreen lightbox
│       ├── OurProcess.tsx     # Pinned scroll 6-stage construction timeline
│       ├── FeaturedProjects.tsx # Horizontal scroll / touch swipe gallery
│       ├── WhyChooseUs.tsx    # 6 pillars of trust with gold accents
│       ├── Testimonials.tsx   # Touch-friendly patron review slider
│       ├── CtaSection.tsx     # Bold architectural statement CTA
│       ├── ContactSection.tsx # Validated form + direct phone/WhatsApp details
│       └── Footer.tsx         # Logo, navigation links, credentials, Google map embed
├── data/
│   └── content.ts             # Central config for all copy, contacts, services, projects, process
├── hooks/
│   ├── useMediaQuery.ts
│   └── useLowPowerDevice.ts
├── lib/
│   ├── gsap.ts                # Central GSAP & ScrollTrigger registration
│   └── utils.ts
└── public/
    └── assets/                # logo.png, videos, and generated video posters
```

---

## 🎬 Video Asset Optimization Guide

For high-performance loading and bandwidth efficiency on mobile networks, run the following `ffmpeg` commands to generate compressed 720p H.264 and WebM variants:

### 1. Generate 720p Mobile H.264 (`.mp4`):
```bash
ffmpeg -i public/assets/hero.mp4 -vf "scale=-2:720" -c:v libx264 -crf 24 -preset slow -an -movflags +faststart public/assets/hero-mobile.mp4
ffmpeg -i public/assets/our-work-1.mp4 -vf "scale=-2:720" -c:v libx264 -crf 24 -preset slow -an -movflags +faststart public/assets/our-work-1-mobile.mp4
ffmpeg -i public/assets/our-work-2.mp4 -vf "scale=-2:720" -c:v libx264 -crf 24 -preset slow -an -movflags +faststart public/assets/our-work-2-mobile.mp4
ffmpeg -i public/assets/process-construction.mp4 -vf "scale=-2:720" -c:v libx264 -crf 24 -preset slow -an -movflags +faststart public/assets/process-construction-mobile.mp4
ffmpeg -i public/assets/about-foundation.mp4 -vf "scale=-2:720" -c:v libx264 -crf 24 -preset slow -an -movflags +faststart public/assets/about-foundation-mobile.mp4
```

### 2. Generate Next-Gen WebM (`.webm`):
```bash
ffmpeg -i public/assets/hero.mp4 -c:v libvpx-vp9 -b:v 1M -crf 30 -an public/assets/hero.webm
```

### 3. Extract High-Res Poster Frame:
```bash
ffmpeg -y -ss 00:00:01 -i public/assets/hero.mp4 -vframes 1 -q:v 2 public/assets/hero-poster.jpg
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or Node.js 20+
- npm or pnpm

### Installation
```bash
npm install --legacy-peer-deps
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 🚢 Vercel Deployment

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel](https://vercel.com) and click **New Project**.
3. Import the `gruhabuilders` repository.
4. Framework Preset: **Next.js**.
5. Click **Deploy**. Vercel will build and distribute the site globally on edge CDN.

---

## 🏆 Quality Assurance Checklist

- [x] **Mobile First**: Tested at 360px, 390px, and 414px widths with zero horizontal scroll.
- [x] **Touch Ergonomics**: All interactive elements >= 48px height.
- [x] **Smooth 60fps**: Lenis smooth scroll and GSAP tickers tuned for low CPU overhead.
- [x] **3D Safeguards**: R3F canvas falls back gracefully on battery saver / low-memory devices.
- [x] **SEO Ready**: Semantic HTML5, Schema.org `GeneralContractor` JSON-LD markup, OpenGraph cards, Twitter cards, dynamic sitemap, and robots.txt.
- [x] **Accessibility**: High-contrast text on dark theme, keyboard navigability, visible focus rings, and `prefers-reduced-motion` compliance.
