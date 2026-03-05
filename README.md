# Elara Voss Online Gallery

A sophisticated online art gallery and e-commerce platform showcasing the work of contemporary artist Elara Voss. Built with modern web technologies to deliver an elegant, immersive browsing experience.

## Features

- **Curated Art Collection** - Browse paintings, prints, digital art, and sculptures
- **Detailed Artwork Pages** - High-quality images with descriptions, dimensions, and pricing
- **Shopping Cart** - Add items to cart with persistent state management
- **Checkout Flow** - Multi-step checkout process with shipping and payment forms
- **Responsive Design** - Optimized for all devices with Tailwind CSS
- **Smooth Animations** - Polished interactions using Framer Motion
- **Artist Information** - Dedicated about and contact pages

## Tech Stack

- **React 19** - UI library with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/milk-in-a-bag/online-gallery.git

# Navigate to project directory
cd online-gallery

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `https://online-gallery-mbls.vercel.app/`

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ArtworkCard.tsx
│   ├── Button.tsx
│   ├── CartDrawer.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
├── context/         # React context providers
│   └── CartContext.tsx
├── data/            # Static data and content
│   └── artworks.tsx
├── pages/           # Route pages
│   ├── AboutPage.tsx
│   ├── ArtworkDetailPage.tsx
│   ├── CheckoutPage.tsx
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   └── ShopPage.tsx
├── App.tsx          # Main app component with routing
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## Design System

The project uses a carefully crafted design system with:

- **Typography**: Playfair Display (serif) and Inter (sans-serif)
- **Color Palette**: Cream, charcoal, taupe, blush, and gold accents
- **Spacing**: Consistent spacing scale
- **Components**: Reusable button variants and card layouts

## Author

Built by [milk-in-a-bag](https://github.com/milk-in-a-bag)
