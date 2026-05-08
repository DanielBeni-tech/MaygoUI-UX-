'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/Button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    title: 'Find medicines instantly nearby.',
    description: 'Locate pharmacies and healthcare essentials with ease and speed.',
    icon: '💊',
  },
  {
    title: 'Your health, your control.',
    description: 'Access all your medical records in one secure place.',
    icon: '📋',
  },
  {
    title: 'AI-powered health guidance.',
    description: 'Get personalized advice from your health assistant anytime.',
    icon: '🤖',
  },
];

export default function OnboardingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-light to-white flex flex-col items-center justify-center px-6 py-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full flex mb-8 justify-start"
      >
        <Link href="/">
          <button className="w-12 h-12 rounded-full bg-white shadow-soft-md flex items-center justify-center hover:shadow-soft-lg transition-all">
            <ArrowLeft size={20} />
          </button>
        </Link>
      </motion.div>

      {/* Progress Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex gap-2 mb-12"
      >
        {slides.map((_, idx) => (
          <motion.div
            key={idx}
            className={`h-2 rounded-full transition-all ${
              idx === currentSlide ? 'w-8 bg-maygo-green-500' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </motion.div>

      {/* Slide Content */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 flex-1 flex flex-col items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-7xl mb-8"
        >
          {slides[currentSlide].icon}
        </motion.div>

        <h2 className="text-4xl font-black text-dark-primary mb-4 leading-tight">
          {slides[currentSlide].title}
        </h2>
        <p className="text-lg text-gray-600 max-w-sm">
          {slides[currentSlide].description}
        </p>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full space-y-4 max-w-xs"
      >
        <div className="flex gap-3">
          {currentSlide > 0 && (
            <Button
              onClick={prevSlide}
              variant="secondary"
              size="md"
              icon={<ArrowLeft size={20} />}
              className="flex-1"
            >
              Back
            </Button>
          )}
          {currentSlide < slides.length - 1 && (
            <Button
              onClick={nextSlide}
              size="md"
              icon={<ArrowRight size={20} />}
              className="flex-1"
            >
              Next
            </Button>
          )}
        </div>

        {currentSlide === slides.length - 1 && (
          <Link href="/auth/signup" className="w-full block">
            <Button size="lg">Create Account</Button>
          </Link>
        )}
      </motion.div>
    </div>
  );
}
