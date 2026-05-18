# CEBAR Group - Corporate Consultancy & Training Website 🚀

Welcome to the official repository for **CEBAR Group's** corporate website. This project is a visually stunning, meticulously crafted digital experience built to showcase our professional training programmes, comprehensive HR services, and multi-sector consultancy at an Awwwards-competition level of design, performance, and interaction.

## 🌟 Key Features

- **Immersive Framer Motion Animations**: Smooth, high-performance scroll-driven transformations, kinetic typography, dynamic sector expansions, and beautiful hover animations.
- **Awwwards-Level Interactive Events Hub**: A flagship upcoming events system featuring a real-time countdown timer to the *Abuja Educators Conference 2026*, detailed session listings, active registration integrations, and sleek cursor-following image previews.
- **Customized Multi-Sector Layouts**: Beautifully structured pages dedicated to **Education**, **Corporate**, and **Government** sectors, tailored with specific training objectives and comprehensive pillars.
- **Sophisticated High-Contrast Visual System**: Deep obsidian black overlays paired with pure clean styling, and accented by CEBAR Group's signature crimson red branding.
- **Elegant Hybrid Typography**: A professional blend of the modern, ultra-legible Inter sans-serif typeface combined with highly customized, large serif accents for an editorial feel.

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

To run the development server locally:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
src/
├── app/                  # Next.js App Router (routes, pages, and layouts)
│   ├── about/            # About CEBAR Group, mission statement, values, and team
│   ├── contact/          # Interactive contact forms and communication hubs
│   ├── services/         # Structured corporate, education, and government consultancy services
│   ├── work/             # Portfolio case studies and detail subpages
│   ├── globals.css       # Core Tailwind CSS v4 variables and custom custom utility base layers
│   └── layout.tsx        # Root HTML layout and SEO metadata configuration
├── components/
│   ├── sections/         # Beautifully modular layout sections (Navbar, Hero, Events, Services, etc.)
│   └── ui/               # Granular reusable UI components
├── lib/
│   ├── project-data.ts   # Detailed project case studies and success histories
│   └── utils.ts          # Tailwind merge and styling utilities
```

## 🎨 Design Philosophy & Color System

CEBAR Group's digital presence represents **structure, credibility, and impact**. The website utilizes:
- **Primary Base**: A bold, modern mix of deep obsidian dark-mode canvases (`#000000`, `#050505`) and rich off-white tones (`#f0ebe3`, `#f5f5f5`) to cleanly divide corporate sections.
- **Accent Identity**: High-end crimson red (`#D1000A`), applied precisely across glow states, custom borders, counts, key interactive highlights, and call-to-actions to convey authority and educational passion.
- **Glassmorphism & Parallax**: Subtle, blurred transparent panels and delicate parallax cards floating over deep vignette overlays to maintain layout depth.
