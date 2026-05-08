'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-light to-white flex flex-col items-center justify-center px-6 pb-20">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-maygo-green-100 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-32 h-32 bg-maygo-green-200 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Logo Container */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative mb-8"
      >
        <motion.div
          className="w-32 h-32 bg-gradient-to-br from-maygo-green-400 to-maygo-green-600 rounded-3xl flex items-center justify-center shadow-soft-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="text-5xl font-bold text-white">M</div>
        </motion.div>
      </motion.div>

      {/* Title Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-5xl font-black text-dark-primary mb-4 leading-tight">
          Welcome to
          <br />
          <span className="gradient-text">Maygo</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-sm">
          Your personal health ecosystem, securely connected.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="grid grid-cols-2 gap-4 mb-12 w-full max-w-xs relative z-10"
      >
        {[
          { emoji: '💊', label: 'Find Medicines' },
          { emoji: '🏥', label: 'Book Appointments' },
          { emoji: '🤖', label: 'AI Assistant' },
          { emoji: '📋', label: 'Health Records' },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="premium-card text-center"
          >
            <div className="text-4xl mb-2">{feature.emoji}</div>
            <p className="text-sm font-semibold text-dark-primary">{feature.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="w-full max-w-xs space-y-3 relative z-10"
      >
        <Link href="/auth/login">
          <Button size="lg" icon={<ArrowRight size={20} />}>
            Enter Ecosystem
          </Button>
        </Link>
        <Link href="/onboarding">
          <Button size="lg" variant="secondary">
            New to Maygo? Sign Up
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
