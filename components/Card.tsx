import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'premium' | 'soft' | 'glass';
  animated?: boolean;
}

export default function Card({
  children,
  className = '',
  onClick,
  variant = 'premium',
  animated = true,
}: CardProps) {
  const baseStyles = 'rounded-3xl overflow-hidden transition-all duration-300';

  const variantStyles = {
    premium: 'bg-white shadow-soft-lg hover:shadow-soft-xl',
    soft: 'bg-gradient-to-br from-gray-50 to-gray-100 shadow-soft-md',
    glass: 'glassmorphism',
  };

  const content = (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onClick={onClick}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
