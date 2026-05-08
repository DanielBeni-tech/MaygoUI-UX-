'use client';

import { motion } from 'framer-motion';
import { Send, Settings } from 'lucide-react';
import Card from '@/components/Card';
import BottomNav from '@/components/BottomNav';
import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "I'm sorry to hear you're feeling anxious, Anna. It's completely normal to have those days. For a gentle wind-down, I suggest trying our 5-minute guided breathing exercise or brewing a cup of chamomile tea. Would you like me to guide you through the breathing now?",
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { role: 'user', content: input },
        {
          role: 'assistant',
          content: 'I understand. Let me help you with that. How are you feeling right now?',
        },
      ]);
      setInput('');
    }
  };

  const languages = ['EN', 'FR', 'PG'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-surface-light pb-32 px-6 pt-8"
    >
      {/* Header */}
      <motion.div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maygo-green-400 to-maygo-green-600 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <h2 className="text-lg font-bold text-dark-primary">Hello, Anna!</h2>
            <p className="text-xs text-gray-600">How can I help you today?</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 rounded-full bg-white shadow-soft-md flex items-center justify-center"
        >
          <Settings size={20} className="text-dark-primary" />
        </motion.button>
      </motion.div>

      {/* Language Toggle */}
      <motion.div className="flex gap-2 mb-6">
        {languages.map((lang) => (
          <button
            key={lang}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
              lang === 'EN'
                ? 'bg-gray-300 text-dark-primary'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {lang}
          </button>
        ))}
      </motion.div>

      {/* AI Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring' }}
        className="flex justify-center mb-8"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-maygo-green-300 to-maygo-green-500 flex items-center justify-center shadow-soft-lg">
          <span className="text-6xl">🫧</span>
        </div>
      </motion.div>

      {/* Messages */}
      <motion.div className="space-y-4 mb-6">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-2xl ${
                msg.role === 'user'
                  ? 'bg-gray-200 text-dark-primary rounded-br-none'
                  : 'bg-maygo-green-100 text-dark-primary rounded-bl-none'
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.content}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 gap-3 mb-6"
      >
        {[
          { icon: '🧘', label: 'Breathing Exercise' },
          { icon: '🌙', label: 'Sleep Sounds' },
        ].map((action, idx) => (
          <Card key={idx} variant="soft" className="p-4 text-center cursor-pointer hover:shadow-soft-lg">
            <div className="text-3xl mb-2">{action.icon}</div>
            <p className="text-xs font-semibold text-dark-primary">{action.label}</p>
          </Card>
        ))}
      </motion.div>

      {/* Input Area */}
      <motion.div className="fixed bottom-24 left-6 right-6 flex gap-2 bg-white p-4 rounded-2xl shadow-soft-lg">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 outline-none text-dark-primary placeholder-gray-400"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSend}
          className="w-10 h-10 rounded-full bg-maygo-green-500 text-white flex items-center justify-center hover:shadow-glow"
        >
          <Send size={18} />
        </motion.button>
      </motion.div>

      <BottomNav />
    </motion.div>
  );
}
