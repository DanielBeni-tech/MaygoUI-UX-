'use client';

import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import BottomNav from '@/components/BottomNav';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-surface-light pb-32 px-6 pt-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maygo-green-400 to-maygo-green-600 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <p className="text-sm text-gray-600">Hello,</p>
            <h2 className="text-xl font-bold text-dark-primary">Anna!</h2>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-white shadow-soft-md flex items-center justify-center hover:shadow-soft-lg transition-all"
        >
          <Bell size={20} className="text-dark-primary" />
        </motion.button>
      </motion.div>

      {/* AI Assistant Card */}
      <motion.div variants={itemVariants} className="mb-8">
        <Card variant="premium" className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-maygo-green-300 to-maygo-green-500 flex items-center justify-center">
              <span className="text-4xl">🫧</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-dark-primary">How can I help</h3>
              <p className="text-sm text-gray-600">you today?</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
        <Card variant="soft" className="p-6 text-center cursor-pointer hover:shadow-soft-lg">
          <div className="text-4xl mb-3">💊</div>
          <h4 className="font-bold text-dark-primary mb-1">Find Medicine</h4>
          <p className="text-xs text-gray-600">Search local stock</p>
        </Card>
        <Card variant="soft" className="p-6 text-center cursor-pointer hover:shadow-soft-lg">
          <div className="text-4xl mb-3">📋</div>
          <h4 className="font-bold text-dark-primary mb-1">Scan Rx</h4>
          <p className="text-xs text-gray-600">Upload prescription</p>
        </Card>
      </motion.div>

      {/* CTA Button */}
      <motion.div variants={itemVariants} className="mb-8">
        <Button size="lg" className="w-full">
          Get Started
        </Button>
      </motion.div>

      {/* Nearby Stock Section */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-dark-primary">Nearby Stock</h3>
          <button className="text-maygo-green-600 font-semibold text-sm hover:underline">
            View all
          </button>
        </div>

        <div className="space-y-3">
          {[
            { name: 'GreenLeaf Pharmacy', distance: '0.8 miles away', status: 'IN STOCK' },
            { name: 'CityHealth Meds', distance: '1.2 miles away', status: 'Low Stock' },
          ].map((pharmacy, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="premium-card p-4 flex items-center justify-between cursor-pointer"
            >
              <div>
                <h4 className="font-bold text-dark-primary">{pharmacy.name}</h4>
                <p className="text-sm text-gray-600">📍 {pharmacy.distance}</p>
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  pharmacy.status === 'IN STOCK'
                    ? 'bg-maygo-green-100 text-maygo-green-700'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {pharmacy.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <BottomNav />
    </motion.div>
  );
}
