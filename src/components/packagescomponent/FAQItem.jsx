"use client";
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function FAQItem({ question, answer, isDark = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-100'} last:border-0`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
      >
        <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'} text-sm`}>
          {question}
        </span>
        {isOpen ? (
          <ChevronUpIcon className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
        ) : (
          <ChevronDownIcon className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
        )}
      </button>
      
      {/* Answer with smooth transition logic */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} leading-relaxed`}>
          {answer}
        </p>
      </div>
    </div>
  );
}