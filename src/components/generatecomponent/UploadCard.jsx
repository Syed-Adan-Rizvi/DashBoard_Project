"use client";
import { useState, useRef } from 'react';
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'; // Next.js ka optimized image component

export default function UploadCard({ title, icon: Icon, instructions, onImageSelected }) {
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  // File select hone par ye chalega
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 1. File ka URL banao preview ke liye
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      // 2. Parent component ko file bhejo
      onImageSelected(file);
    }
  };

  // Card par click karne se file input trigger hoga
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Image remove karne ke liye
  const clearImage = (e) => {
    e.stopPropagation(); // Card click trigger na ho
    setPreviewUrl(null);
    onImageSelected(null);
    fileInputRef.current.value = ""; // Input reset karo
  };

  return (
    <div 
      onClick={triggerFileInput}
      className="bg-[#1a1a1a] h-[500px] rounded-3xl p-6 flex flex-col items-center justify-center text-center cursor-pointer border-2 border-dashed border-gray-700 hover:border-purple-500 transition-colors group relative overflow-hidden"
    >
      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/png, image/jpeg" 
        className="hidden" 
      />

      <h3 className="text-white font-bold text-xl absolute top-6">{title}</h3>

      {previewUrl ? (
        // ============ PREVIEW MODE ============
        <div className="relative w-full h-full mt-12">
          <Image 
            src={previewUrl} 
            alt="Preview" 
            fill 
            className="object-cover rounded-2xl" 
          />
          {/* Close Button */}
          <button 
            onClick={clearImage}
            className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-red-500 transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      ) : (
        // ============ UPLOAD MODE (Placeholder) ============
        <div className="flex flex-col items-center mt-12 group-hover:scale-105 transition-transform">
          <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-4">
            <Icon className="w-10 h-10 text-gray-400" />
          </div>
          <p className="text-white font-bold text-lg mb-2">
            Click to Upload {title.split(' ')[1]}
          </p>
          <p className="text-gray-400 text-sm">
            Supported formats: PNG, JPG
          </p>
          
          {/* Model Card ke liye special instructions */}
          {instructions && (
            <p className="text-gray-500 text-xs mt-6 max-w-[250px] leading-relaxed">
              {instructions}
            </p>
          )}
        </div>
      )}
    </div>
  );
}