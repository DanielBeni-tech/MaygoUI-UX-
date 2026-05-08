'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from 'next/link';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated signup
    router.push('/home');
  };

  const updateForm = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-light to-white flex flex-col items-center justify-center px-6 py-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full flex mb-8"
      >
        <Link href="/onboarding">
          <button className="w-12 h-12 rounded-full bg-white shadow-soft-md flex items-center justify-center hover:shadow-soft-lg transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </Link>
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring' }}
        className="mb-8"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-maygo-green-400 to-maygo-green-600 rounded-3xl flex items-center justify-center shadow-soft-lg">
          <div className="text-4xl font-bold text-white">M</div>
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-black text-dark-primary mb-2">
          Create Your ID
        </h1>
        <p className="text-gray-600">Join the Maygo health ecosystem</p>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-sm premium-card mb-6"
      >
        <form onSubmit={handleSignup} className="space-y-4">
          <Input
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => updateForm('fullName', e.target.value)}
            icon={<User size={20} />}
          />

          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => updateForm('email', e.target.value)}
            icon={<Mail size={20} />}
          />

          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => updateForm('phone', e.target.value)}
            icon={<Phone size={20} />}
          />

          <Input
            type="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={(e) => updateForm('password', e.target.value)}
            icon={<Lock size={20} />}
          />

          <div className="flex items-start gap-2 pt-2">
            <input type="checkbox" className="mt-1" required />
            <p className="text-sm text-gray-600">
              I agree to the <a href="#" className="text-maygo-green-600 font-semibold hover:underline">Terms & Conditions</a> and <a href="#" className="text-maygo-green-600 font-semibold hover:underline">Privacy Policy</a>
            </p>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Create Account
          </Button>
        </form>
      </motion.div>

      {/* Login Link */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-600"
      >
        Already have an account?{' '}
        <Link href="/auth/login" className="text-maygo-green-600 font-bold hover:underline">
          Login
        </Link>
      </motion.p>
    </div>
  );
}
