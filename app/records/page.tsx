'use client';

import { motion } from 'framer-motion';
import { Plus, Calendar, FileText } from 'lucide-react';
import Card from '@/components/Card';
import BottomNav from '@/components/BottomNav';

export default function RecordsPage() {
  const records = [
    {
      type: 'Lab Report',
      date: 'May 5, 2026',
      icon: '🧪',
      details: 'Blood Test Results',
    },
    {
      type: 'Prescription',
      date: 'May 1, 2026',
      icon: '💊',
      details: 'Antibiotics Course',
    },
    {
      type: 'Doctor Visit',
      date: 'April 28, 2026',
      icon: '🏥',
      details: 'Annual Checkup',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-surface-light pb-32 px-6 pt-8"
    >
      {/* Header */}
      <motion.div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-dark-primary">Health Records</h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-maygo-green-500 text-white flex items-center justify-center shadow-soft-md hover:shadow-glow"
        >
          <Plus size={24} />
        </motion.button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="grid grid-cols-3 gap-3 mb-8"
      >
        {[
          { label: 'Total', value: '12' },
          { label: 'This Month', value: '3' },
          { label: 'Shared', value: '1' },
        ].map((stat, idx) => (
          <Card key={idx} variant="soft" className="p-4 text-center">
            <p className="text-2xl font-bold text-maygo-green-600">{stat.value}</p>
            <p className="text-xs text-gray-600">{stat.label}</p>
          </Card>
        ))}
      </motion.div>

      {/* Records List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="space-y-3"
      >
        {records.map((record, idx) => (
          <motion.div key={idx} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <Card variant="premium" className="p-4 cursor-pointer hover:shadow-soft-lg">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{record.icon}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-dark-primary">{record.type}</h4>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <Calendar size={14} />
                    {record.date}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{record.details}</p>
                </div>
                <FileText size={20} className="text-gray-400" />
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <BottomNav />
    </motion.div>
  );
}
