import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  icon,
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2';

  const variantStyles = {
    primary: 'bg-maygo-green-500 text-white hover:bg-maygo-green-600 shadow-soft-lg hover:shadow-glow',
    secondary: 'bg-gray-200 text-dark-primary hover:bg-gray-300',
    ghost: 'bg-transparent text-maygo-green-500 hover:bg-maygo-green-50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg w-full',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </motion.button>
  );
}
