'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from 'next/link';
import { ArrowRight, Lock, Mail, Fingerprint } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated login
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-light to-white flex flex-col items-center justify-center px-6 py-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full flex mb-8"
      >
        <Link href="/">
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
          Welcome to Maygo
        </h1>
        <p className="text-gray-600">Your personal health ecosystem, securely connected.</p>
      </motion.div>

      {/* Form Container */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-sm premium-card mb-6"
      >
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <h2 className="text-lg font-bold text-dark-primary mb-4">Medical ID / Email</h2>
            <Input
              type="email"
              placeholder="Enter your ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail size={20} />}
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-dark-primary">Access Key</h2>
              <button type="button" className="text-maygo-green-600 text-sm font-semibold hover:underline">
                Recover
              </button>
            </div>
            <Input
              type="password"
              placeholder="Enter your key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<Lock size={20} />}
            />
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">or quick access</p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-maygo-green-100 flex items-center justify-center mx-auto hover:shadow-glow transition-all"
            >
              <Fingerprint size={24} className="text-maygo-green-600" />
            </motion.button>
          </div>

          <Button type="submit" size="lg" icon={<ArrowRight size={20} />}>
            Enter Ecosystem
          </Button>
        </form>
      </motion.div>

      {/* Signup Link */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-600"
      >
        New to the network?{' '}
        <Link href="/auth/signup" className="text-maygo-green-600 font-bold hover:underline">
          Create an ID
        </Link>
      </motion.p>
    </div>
  );
}
