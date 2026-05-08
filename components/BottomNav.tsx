'use client';

import { motion } from 'framer-motion';
import { Home, Search, FileText, Bot } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Search, label: 'Search', href: '/search' },
    { icon: FileText, label: 'Records', href: '/records' },
    { icon: Bot, label: 'Assistant', href: '/assistant' },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-40 max-w-md mx-auto"
    >
      <div className="flex justify-around items-center h-20 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href} className="flex-1 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center w-full py-3 rounded-2xl transition-all ${
                  isActive
                    ? 'bg-maygo-green-100 text-maygo-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon size={24} />
                <span className="text-xs mt-1">{item.label}</span>
              </motion.button>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
