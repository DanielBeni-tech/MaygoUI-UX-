'use client';

import { motion } from 'framer-motion';
import { Search, Sliders, MapPin } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Input from '@/components/Input';
import BottomNav from '@/components/BottomNav';
import { useState } from 'react';

export default function SearchPage() {
  const [query, setQuery] = useState('Amoxicillin');
  const [activeTab, setActiveTab] = useState('all');

  const medicines = [
    { name: 'Amoxicillin', price: '$12.50', pharmacy: 'GreenCross', distance: '0.2 miles' },
    { name: 'Amoxicillin', price: '$14.00', pharmacy: 'HealthPlus', distance: '0.5 miles' },
    { name: 'Amoxicillin', price: '$13.20', pharmacy: 'MediCare', distance: '0.8 miles' },
  ];

  const tabs = ['All Results', 'Nearby Pharmacies', 'Cheap'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-surface-light pb-32 px-6 pt-8"
    >
      {/* Header */}
      <motion.div className="mb-8 flex gap-3">
        <div className="flex-1 relative">
          <Input
            placeholder="Search medicines..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            icon={<Search size={20} />}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-2xl bg-maygo-green-500 text-white flex items-center justify-center shadow-soft-md hover:shadow-glow transition-all"
        >
          <Sliders size={20} />
        </motion.button>
      </motion.div>

      {/* Tabs */}
      <motion.div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map((tab, idx) => (
          <motion.button
            key={idx}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.toLowerCase()
                ? 'bg-maygo-green-500 text-white shadow-soft-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </motion.div>

      {/* Medicine Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="space-y-4 mb-8"
      >
        {medicines.map((med, idx) => (
          <motion.div key={idx} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <Card variant="premium" className="p-6 cursor-pointer hover:shadow-soft-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-bold text-dark-primary text-lg">{med.name}</h4>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin size={14} />
                    {med.distance}
                  </p>
                </div>
                <span className="text-2xl font-bold text-maygo-green-600">{med.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-dark-primary">{med.pharmacy}</p>
                <Button size="sm" variant="primary">
                  Reserve
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <BottomNav />
    </motion.div>
  );
}
