import React from 'react';

interface InputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: React.ReactNode;
  label?: string;
}

export default function Input({
  placeholder,
  type = 'text',
  value,
  onChange,
  className = '',
  icon,
  label,
}: InputProps) {
  return (
    <div className="w-full">
      {label && <label className="text-sm font-semibold text-dark-primary mb-2 block">{label}</label>}
      <div className="relative flex items-center">
        {icon && <div className="absolute left-4 text-gray-400">{icon}</div>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full ${icon ? 'pl-12' : 'px-4'} py-3 rounded-2xl border-2 border-gray-100 focus:border-maygo-green-500 focus:outline-none transition-colors bg-white text-dark-primary placeholder-gray-400 ${className}`}
        />
      </div>
    </div>
  );
}
