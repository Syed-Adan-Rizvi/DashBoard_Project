"use client";
import { useState } from 'react';
import { KeyIcon, EyeIcon, EyeSlashIcon, ClipboardDocumentIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function APIKeyCard() {
  const [showKey, setShowKey] = useState(false);
  const apiKey = "lc_live_sk_782349823749823423";

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    alert("API Key copied!");
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
      
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
          <KeyIcon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">API Key</h3>
          <p className="text-sm text-gray-500">Manage your API access key</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        
        {/* Input Container */}
        <div className="relative flex-1 w-full">
          <input 
            type={showKey ? "text" : "password"} 
            value={apiKey} 
            readOnly 
            className="w-full p-3 pr-12 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 font-mono text-sm focus:outline-none"
          />
          <button 
            onClick={() => setShowKey(!showKey)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showKey ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 font-bold text-sm rounded-xl hover:bg-gray-200 transition-colors flex-1 md:flex-none"
          >
            <ClipboardDocumentIcon className="w-4 h-4" />
            Copy
          </button>

          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-red-500 text-white font-bold text-sm rounded-xl hover:bg-red-600 shadow-lg shadow-red-500/20 transition-colors flex-1 md:flex-none">
            <ArrowPathIcon className="w-4 h-4" />
            Regenerate
          </button>
        </div>

      </div>
      
      <p className="text-xs text-gray-400 mt-3">Keep your API key secure. Do not share it in publicly accessible areas.</p>

    </div>
  );
}