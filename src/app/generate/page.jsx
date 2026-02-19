"use client";
import { useState } from 'react';
import UploadCard from '@/components/generatecomponent/UploadCard';
import FinalResultCard from '@/components/generatecomponent/FinalResultCard';
import RecentTryOns from '@/components/generatecomponent/RecentTryOns';
// Icons
import { ScissorsIcon, UserIcon } from '@heroicons/react/24/outline';

export default function GeneratePage() {
  // === STATE MANAGEMENT ===
  const [clothImage, setClothImage] = useState(null);
  const [modelImage, setModelImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // === FAKE GENERATE FUNCTION ===
  // (Ye backend connect hone tak temporary hai)
  const handleGenerate = () => {
    if (!clothImage || !modelImage) {
      alert("Please upload both cloth and model images first!");
      return;
    }

    setIsGenerating(true);

    // 3 second ka fake delay taaki loading dikhe
    setTimeout(() => {
      // Fake result image (koi bhi placeholder URL daal do)
      setResultImage("https://i.pinimg.com/736x/b2/a3/67/b2a367791464201544706417137c1264.jpg");
      setIsGenerating(false);
    }, 3000);
  };


  return (
    <div className="min-h-screen pb-10">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
          Generate Look
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Select a garment and upload your photo to see how it looks on you
        </p>
      </div>

      {/* MAIN 3 CARDS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Card 1: Cloth Upload */}
        <UploadCard 
          title="Choose Cloth"
          icon={ScissorsIcon} // Ya koi bhi cloth jaisa icon
          onImageSelected={setClothImage}
        />

        {/* Card 2: Model Upload */}
        <UploadCard 
          title="Choose Model"
          icon={UserIcon}
          instructions="Kindly upload a high-resolution photograph (*.jpg or *.png) that presents your entire body in a well-defined pose."
          onImageSelected={setModelImage}
        />

        {/* Card 3: Final Result */}
        <FinalResultCard 
          resultImage={resultImage}
          isGenerating={isGenerating}
          onGenerate={handleGenerate}
        />

      </div>
      
      
      {/* RECENT TRY-ONS SECTION (New) */}
      <RecentTryOns />

    </div>
  );
}