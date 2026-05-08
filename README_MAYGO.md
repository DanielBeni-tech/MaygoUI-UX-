# Maygo - Premium Health Ecosystem UI/UX

## Overview

Maygo is a premium mobile health ecosystem application featuring ultra-modern UI/UX design inspired by leading fintech and health apps. The application showcases cutting-edge design patterns including glassmorphism, neumorphism, smooth animations, and premium visual elements.

## 🎨 Design System

### Color Palette
- **Primary Green**: #22c55e (Maygo Green)
- **Dark Primary**: #0f172a (Deep Dark)
- **Dark Secondary**: #1e293b (Charcoal)
- **Surface Light**: #f8fafc (Off-white)
- **White**: #ffffff

### Typography
- **Headlines**: Bold, high-contrast dark colors
- **Body**: Clean, readable sans-serif with 1.4-1.6 line height
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI)

### Visual Elements
- Glassmorphism effects with backdrop blur
- Neumorphism soft shadows
- Rounded cards (border-radius: 24px-32px)
- Floating animations
- Gradient backgrounds (subtle, muted)
- Premium shadows with layered depth

## 📱 Screens Implemented

### 1. **Splash/Welcome Screen** (`/`)
- Hero section with animated Maygo logo
- Feature grid showcasing app capabilities
- Two CTA buttons (Login & Sign Up)
- Floating background animations

### 2. **Authentication**

#### Login Page (`/auth/login`)
- Medical ID / Email input
- Access Key password field
- Biometric quick access (Fingerprint icon)
- "Recover" password option
- "Enter Ecosystem" CTA button
- Link to Sign Up

#### Sign Up Page (`/auth/signup`)
- Full Name input
- Email input
- Phone Number input
- Password creation
- Terms & Conditions acceptance
- Account creation CTA

### 3. **Onboarding** (`/onboarding`)
- Three-slide carousel
  - Slide 1: Medicine discovery
  - Slide 2: Health records management
  - Slide 3: AI-powered guidance
- Progress indicators
- Back/Next navigation
- Create Account CTA on final slide

### 4. **Home Page** (`/home`)
- Personalized greeting with user avatar
- Notification bell
- AI Assistant card
- Quick action cards (Find Medicine, Scan Rx)
- "Get Started" CTA
- "Nearby Stock" section
- Bottom navigation bar

### 5. **Medicine Search** (`/search`)
- Medicine search bar with filters
- Category tabs (All Results, Nearby Pharmacies, Cheap)
- Medicine listing with prices
- Distance to pharmacy
- Reserve button

### 6. **Health Records** (`/records`)
- Total records statistics
- Recent records list
- Lab reports, prescriptions, doctor visits
- Add new record button
- Date and type indicators

### 7. **AI Health Assistant** (`/assistant`)
- Personalized greeting
- Language toggle (EN, FR, PG)
- Large AI avatar
- Chat message display
- Quick action cards (Breathing Exercise, Sleep Sounds)
- Message input with send button

### 8. **Bottom Navigation**
- Home icon
- Search icon
- Records/Documents icon
- AI Assistant icon
- Active state highlighting

## 🎬 Animations & Interactions

### Implemented Animations
- **Page Transitions**: Smooth fade-in animations
- **Button Interactions**: Scale on hover and tap
- **Floating Elements**: Continuous up-down motion
- **Card Animations**: Staggered entrance with Framer Motion
- **Scroll Effects**: Parallax and fade-on-scroll
- **Loading States**: Smooth skeleton animations
- **Micro-interactions**: Hover glow effects on CTAs

### Animation Library
- **Framer Motion** for complex animations
- **CSS keyframes** for simple floating effects
- **Tailwind transitions** for smooth state changes

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16** - React framework with App Router
- **React 19.2** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3.4** - Utility-first styling

### Animation
- **Framer Motion 11.5** - Advanced animations and gestures

### Icons
- **Lucide React** - Modern icon library

### Styling
- **CSS Custom Properties** for semantic theming
- **Tailwind Custom Theme** for design system consistency
- **Backdrop filters** for glassmorphism effects

## 📁 Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Splash/Welcome screen
│   ├── globals.css             # Global styles
│   ├── auth/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── home/page.tsx
│   ├── search/page.tsx
│   ├── records/page.tsx
│   ├── assistant/page.tsx
│   └── onboarding/page.tsx
├── components/
│   ├── Button.tsx              # Reusable button component
│   ├── Card.tsx                # Premium card component
│   ├── Input.tsx               # Form input component
│   └── BottomNav.tsx           # Navigation bar
├── public/
│   └── favicon.ico
├── tailwind.config.js          # Design system configuration
├── next.config.js
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server
The app runs on `http://localhost:3000`

## 🎯 Key Features

### 1. **Premium UI/UX**
- Modern glassmorphism effects
- Soft neumorphism shadows
- Sophisticated color palette
- Premium typography hierarchy
- Polished micro-interactions

### 2. **Mobile-First Design**
- Responsive layout optimized for mobile
- Touch-friendly button sizes (min 44x44px)
- Bottom navigation for easy thumb access
- Full-screen immersive design

### 3. **Smooth Animations**
- Page transitions
- Button interactions
- Floating elements
- Message animations
- Loading states

### 4. **Health Ecosystem Features**
- Medicine/pharmacy discovery
- Health records management
- AI-powered health assistant
- Location-based services
- Prescription scanning

### 5. **Accessibility**
- Semantic HTML
- ARIA labels on interactive elements
- Sufficient color contrast
- Keyboard navigation support
- Focus indicators

## 🎨 Design Inspirations

This design draws inspiration from:
- **Apple Human Interface Design** - Clean, minimal aesthetics
- **Stripe** - Premium fintech UI patterns
- **Linear** - Modern workspace design
- **Notion** - Soft, approachable interface
- **Uber/Yango** - Modern mobility apps

## 📊 Design Tokens

### Spacing Scale
- `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`

### Border Radius
- `8px` - Small elements
- `16px` - Cards, buttons
- `24px` - Large cards
- `32px` - Hero sections
- `9999px` - Fully rounded

### Shadows
- **Soft**: `0 1px 2px rgba(0,0,0,0.05)`
- **Soft-MD**: `0 4px 6px rgba(0,0,0,0.1)`
- **Soft-LG**: `0 10px 30px rgba(0,0,0,0.08)`
- **Glow**: `0 0 20px rgba(34, 197, 94, 0.3)`

## 🔄 State Management

Currently uses:
- **React Hooks** (useState, useContext)
- **Next.js Navigation** (useRouter, usePathname)
- **Local component state**

For production scaling, consider:
- React Context API
- Zustand
- Redux Toolkit

## 🔐 Security Considerations

- Input validation on forms
- Secure password fields
- HTTPS recommended
- CORS configuration
- Environment variables for sensitive data

## 📈 Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting with dynamic imports
- CSS purging with Tailwind
- Lazy loading of animations
- Optimized bundle size

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Future Enhancements

- [ ] Backend API integration
- [ ] Real authentication system
- [ ] Database integration (Supabase/Neon)
- [ ] Push notifications
- [ ] Offline support (PWA)
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] User profile management
- [ ] Payment integration

## 📄 License

This project is part of the Maygo Health Ecosystem. All rights reserved.

## 🤝 Contributing

For contributions, please follow:
1. Code style guidelines in tailwind.config.js
2. Component structure in /components
3. Page structure in /app
4. Animation patterns with Framer Motion

## 📞 Support

For support or questions, please refer to the design specifications in `Cahier-charges.pdf` and `Prompt.txt`.

---

**Built with ❤️ for modern health experiences**
