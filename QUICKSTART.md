# Maygo - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org))
- npm, yarn, or pnpm package manager
- Git (for version control)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit **http://localhost:3000** 🎉

---

## 📁 Project Structure

```
maygo-health-ecosystem/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Welcome/Splash Screen
│   ├── layout.tsx                # Root Layout
│   ├── globals.css               # Global Styles
│   ├── auth/                     # Authentication Pages
│   │   ├── login/page.tsx        # Login Screen
│   │   └── signup/page.tsx       # Sign Up Screen
│   ├── home/page.tsx             # Home Dashboard
│   ├── search/page.tsx           # Medicine Search
│   ├── records/page.tsx          # Health Records
│   ├── assistant/page.tsx        # AI Assistant
│   ├── onboarding/page.tsx       # Onboarding Slides
│   └── api/
│       └── health/route.ts       # Health Check Endpoint
├── components/                   # Reusable Components
│   ├── Button.tsx                # Button Component
│   ├── Card.tsx                  # Card Component
│   ├── Input.tsx                 # Input Component
│   └── BottomNav.tsx             # Navigation Bar
├── public/                       # Static Assets
│   └── favicon.ico               # App Icon
├── package.json                  # Dependencies
├── tailwind.config.js            # Tailwind Config
├── next.config.js                # Next.js Config
└── tsconfig.json                 # TypeScript Config
```

---

## 🎨 Design System

### Colors
- **Primary Green**: #22c55e (Maygo Brand)
- **Dark Primary**: #0f172a (Deep Dark)
- **Light Surface**: #f8fafc (Off-white)

### Typography
- **Headlines**: Bold, high-contrast
- **Body**: Clean, readable (16px, line-height 1.5)
- **Font**: System fonts (optimized for all devices)

### Components
- **Buttons**: 3 variants (primary, secondary, ghost)
- **Cards**: 3 styles (premium, soft, glass)
- **Inputs**: Rounded with icons support
- **Navigation**: Bottom navigation for mobile

---

## 🔄 Key Features

### Pages Implemented
1. **Splash Screen** (`/`) - Welcome with features overview
2. **Login** (`/auth/login`) - Authentication entry
3. **Sign Up** (`/auth/signup`) - New user registration
4. **Onboarding** (`/onboarding`) - Feature walkthrough
5. **Home Dashboard** (`/home`) - Main interface
6. **Medicine Search** (`/search`) - Find medicines
7. **Health Records** (`/records`) - Medical documents
8. **AI Assistant** (`/assistant`) - Health chatbot

### Animations
- ✨ Smooth page transitions
- 🎬 Button hover effects
- 📍 Floating animations
- 🔄 Loading states
- ✅ Entrance animations on scroll

### Responsive Design
- 📱 Mobile-first approach
- 🖥️ Tablet optimization
- 💻 Desktop support
- 📐 Flexible layouts

---

## 🛠️ Common Tasks

### Add a New Page
```bash
# Create app/new-page/page.tsx
touch app/new-page/page.tsx
```

```tsx
'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function NewPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-6"
    >
      <h1 className="text-3xl font-bold text-dark-primary">Page Title</h1>
    </motion.div>
  );
}
```

### Add a New Component
```tsx
// components/MyComponent.tsx
import { motion } from 'framer-motion';

interface MyComponentProps {
  title: string;
}

export default function MyComponent({ title }: MyComponentProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="p-6 rounded-2xl bg-white shadow-soft-lg"
    >
      <h3 className="text-lg font-bold text-dark-primary">{title}</h3>
    </motion.div>
  );
}
```

### Modify Styles
Edit `tailwind.config.js` for theme changes:
```js
theme: {
  extend: {
    colors: {
      'custom-color': '#yourcolor',
    },
  },
}
```

---

## 🧪 Testing

### Run Type Check
```bash
npm run type-check
```

### Run Linter
```bash
npm run lint
```

### Build for Production
```bash
npm run build

# Start production build
npm start
```

---

## 📱 Navigation

### Screen Flow
```
Splash Screen (/)
    ↓
├─ Login → Home
├─ Sign Up (Onboarding)
└─ Onboarding → Sign Up

Home Dashboard (/home)
    ↓
├─ Search (/search)
├─ Records (/records)
├─ Assistant (/assistant)
└─ Back to Home
```

### Navigation Links
```tsx
// Use Next.js Link for navigation
import Link from 'next/link';

<Link href="/home">
  <Button>Go to Home</Button>
</Link>
```

---

## 🎯 Development Workflow

### 1. Start Development
```bash
npm run dev
```

### 2. Make Changes
Edit files in `app/` or `components/`

### 3. See Changes
Hot reload works automatically at http://localhost:3000

### 4. Test in Production
```bash
npm run build
npm start
```

### 5. Deploy
```bash
# To Vercel
vercel --prod

# Or commit to GitHub for auto-deploy
git add .
git commit -m "Your changes"
git push origin main
```

---

## 🐛 Debugging

### Console Logging
```tsx
console.log('[v0] Debug message:', data);
```

### Browser DevTools
- Open DevTools: F12 or Cmd+Option+I
- Check Console for errors
- Inspect elements and styles
- Use Network tab for API calls

### Check Server Logs
```bash
# Terminal where npm run dev is running
# Shows compilation errors and logs
```

---

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

### Design References
- See `Cahier-charges.pdf` for full design specs
- See `Prompt.txt` for requirements
- Check `README_MAYGO.md` for detailed overview

### Component Docs
- See `COMPONENTS.md` for component API
- See `DEPLOYMENT.md` for deployment guide

---

## ❓ Frequently Asked Questions

### Q: Port 3000 already in use?
```bash
# Use different port
npm run dev -- -p 3001
```

### Q: How to reset database?
The app currently uses client-side state. For production, connect to a database.

### Q: Styles not updating?
```bash
# Clear Tailwind cache
rm -rf .next
npm run dev
```

### Q: Build fails?
```bash
# Clean installation
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🚀 Next Steps

1. **Explore Pages**: Visit each route at http://localhost:3000
2. **Modify Styles**: Update `tailwind.config.js`
3. **Add Components**: Create new reusable components
4. **Connect Backend**: Integrate with APIs
5. **Deploy**: Push to Vercel or your server

---

## 📞 Support

### Issues?
1. Check the console for errors (F12)
2. Review `README_MAYGO.md`
3. Check `COMPONENTS.md` for component usage
4. Review `DEPLOYMENT.md` for deployment help

### Resources
- View source code in `app/` and `components/`
- Check `globals.css` for global styles
- Review `next.config.js` for configuration

---

## 🎉 You're All Set!

The Maygo Health Ecosystem is now running on your local machine. Start building! ✨

**Happy Coding!** 🚀

---

**Quick Commands Reference**
```bash
npm run dev              # Start development
npm run build            # Create production build
npm start                # Run production server
npm run lint             # Check code quality
npm run type-check       # Run TypeScript check
npm install              # Install dependencies
```

---

**Last Updated**: May 2026
