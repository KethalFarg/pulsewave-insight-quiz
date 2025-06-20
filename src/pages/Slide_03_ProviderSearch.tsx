
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Slide_03_ProviderSearch = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [loadingText, setLoadingText] = useState("Checking to see if there is a provider near you");

  useEffect(() => {
    // Simulate the loading sequence with different text updates
    const textSequence = [
      "Checking to see if there is a provider near you",
      "Analyzing your location...",
      "Searching qualified providers...",
      "Found providers in your area!"
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < textSequence.length) {
        setLoadingText(textSequence[currentIndex]);
      } else {
        clearInterval(interval);
        // After loading completes, navigate to next step or hide overlay
        setTimeout(() => {
          setShowOverlay(false);
        }, 2000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-[#323743] to-[#0d9c95] min-h-screen flex flex-col items-center justify-start pt-12 px-4 relative">
      
      {/* Background Logo */}
      <div className="flex flex-col items-center justify-center mb-8">
        <img 
          src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/0b98e6b6-e3f9-4251-b9e3-e82eb5f47600/public" 
          alt="SoftWave Logo" 
          className="h-16 w-auto mb-2"
        />
      </div>

      {/* Dark Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
      )}

      {/* Main Container */}
      <div className="bg-[#0D9488] bg-opacity-95 rounded-2xl shadow-lg w-full max-w-md p-8 mb-8 relative z-20">
        {/* Icon Circle */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        {/* Heading */}
        <h2 className="text-white text-2xl font-bold text-center mb-8">
          {loadingText}
        </h2>
        
        {/* Enhanced Loading Spinner */}
        <div className="flex justify-center items-center relative">
          <div className="pulse-ring"></div>
          <div className="loading-spinner"></div>
        </div>
      </div>
      
      {/* Additional Information */}
      <div className="text-white text-center text-sm opacity-70 px-6 max-w-md relative z-20">
        <p>Please wait while we search for qualified Pulsewave providers in your area.</p>
      </div>

      {/* Navigation after loading completes */}
      {!showOverlay && (
        <div className="mt-8 relative z-20">
          <Link 
            to="/slide_04_results"
            className="bg-[#0d9c95] hover:bg-[#0d9c95]/90 text-white px-8 py-3 rounded-xl font-medium transition-colors"
          >
            View Results
          </Link>
        </div>
      )}
    </div>
  );
};

export default Slide_03_ProviderSearch;
