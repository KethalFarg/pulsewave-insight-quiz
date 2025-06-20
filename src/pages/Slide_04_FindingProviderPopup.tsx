
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Slide_04_FindingProviderPopup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-advance after 3 seconds (simulating provider search)
    const timer = setTimeout(() => {
      console.log('Provider search complete');
      navigate('/slide_05_providerloadingpopup');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <style>{`
        .loading-spinner {
          width: 80px;
          height: 80px;
          border: 6px solid transparent;
          border-top: 6px solid #14b8a6;
          border-right: 6px solid #FFD54F;
          border-radius: 50%;
          animation: spin 1.2s linear infinite;
          position: relative;
        }
        .loading-spinner::before {
          content: '';
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          border: 3px solid transparent;
          border-top: 3px solid #5eead4;
          border-bottom: 3px solid #FFF176;
          border-radius: 50%;
          animation: spin 2s linear infinite reverse;
        }
        .loading-spinner::after {
          content: '';
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          bottom: 10px;
          border: 2px solid transparent;
          border-top: 2px solid #2dd4bf;
          border-left: 2px solid #FFEB3B;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .pulse-ring {
          width: 120px;
          height: 120px;
          border: 2px solid #FFD54F;
          border-radius: 50%;
          position: absolute;
          animation: pulse 2s infinite;
          opacity: 0.4;
        }
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 0.1; }
          100% { transform: scale(0.8); opacity: 0.4; }
        }
      `}</style>
      <div className="font-montserrat bg-gradient-to-b from-[#323743] to-[#0d9c95] min-h-screen flex flex-col items-center justify-start pt-12 px-4 relative">
        {/* Background Logo */}
        <div className="flex flex-col items-center justify-center mb-8">
          <img 
            src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/0b98e6b6-e3f9-4251-b9e3-e82eb5f47600/public" 
            alt="SoftWave Logo" 
            className="h-16 w-auto mb-2"
          />
        </div>

        {/* Dark Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
        
        {/* Main Container */}
        <div className="bg-[#0D9488] bg-opacity-95 rounded-2xl shadow-lg w-full max-w-md p-8 mb-8 relative z-20">
          {/* Icon Circle */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center shadow-lg">
              <div className="text-white text-2xl">🔍</div>
            </div>
          </div>
          
          {/* Heading */}
          <h2 className="text-white text-2xl font-bold text-center mb-8">
            Checking to see if there is a provider near you
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
      </div>
    </>
  );
};

export default Slide_04_FindingProviderPopup;
