import { ArrowDownTrayIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function FinalResultCard({ resultImage, isGenerating, onGenerate }) {
  
  // Download Function
  const handleDownload = () => {
    if (resultImage) {
      const link = document.createElement('a');
      link.href = resultImage;
      link.download = 'lookcheck-generated-look.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-[#1a1a1a] h-[500px] rounded-3xl p-6 flex flex-col relative overflow-hidden">
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-bold text-xl">Final Look</h3>
        
        {/* Download Button (Sirf jab result ho tab dikhe) */}
        {resultImage && (
          <button 
            onClick={handleDownload}
            className="flex items-center gap-1 text-gray-400 hover:text-white text-sm font-medium transition-colors"
          >
            <ArrowDownTrayIcon className="w-4 h-4" />
            <span>Download</span>
          </button>
        )}
      </div>

      {/* IMAGE AREA */}
      <div className="flex-1 bg-gray-900/50 rounded-2xl relative flex items-center justify-center overflow-hidden border border-gray-800">
        {resultImage ? (
          // RESULT IMAGE
          <Image 
            src={resultImage} 
            alt="Generated Look" 
            fill 
            className="object-cover" 
          />
        ) : (
          // PLACEHOLDER
          <SparklesIcon className={`w-16 h-16 text-gray-700 ${isGenerating ? 'animate-pulse' : ''}`} />
        )}
      </div>

      {/* GENERATE BUTTON */}
      <button
        onClick={onGenerate}
        disabled={isGenerating || resultImage} // Disable agar ban raha hai ya ban chuka hai
        className={`w-full mt-6 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all
          ${isGenerating 
            ? 'bg-gray-700 cursor-not-allowed' 
            : 'bg-linear-to-r from-purple-600 to-pink-500 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-95'
          }
        `}
      >
        {isGenerating ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          <>
            <span>Generate Look</span>
            <SparklesIcon className="w-5 h-5" />
          </>
        )}
      </button>

    </div>
  );
}