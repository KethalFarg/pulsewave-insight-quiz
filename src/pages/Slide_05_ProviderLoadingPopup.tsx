
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Slide_05_ProviderLoadingPopup = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to next step - replace with actual next route when available
    console.log('User clicked continue');
    // navigate('/slide_06_next'); // Replace with actual next route
  };

  return (
    <>
      <style>{`
        .location-marker {
          font-size: 4rem;
          color: white;
          animation: popIn 0.8s ease-out;
        }
        @keyframes popIn {
          0% { 
            transform: scale(0) translateY(20px);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) translateY(-10px);
            opacity: 0.8;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
        .bounce-gentle {
          animation: bounceGentle 2s ease-in-out infinite;
        }
        @keyframes bounceGentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        .text-animate {
          animation: fadeInUp 0.6s ease-out 0.4s both;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
        <div className="bg-teal-600 rounded-2xl shadow-lg w-full max-w-md p-8 mb-8 relative z-20">
          {/* Animated Location Marker */}
          <div className="flex justify-center mb-6">
            <div className="location-marker bounce-gentle text-white">📍</div>
          </div>
          
          {/* Heading */}
          <h2 className="text-white text-3xl font-bold text-center mb-4 text-animate">
            Congratulations!
          </h2>
          
          {/* Subtext */}
          <p className="text-white text-lg text-center font-medium text-animate mb-6">
            We found a PulseWave provider close to you!
          </p>
          
          {/* Continue Button */}
          <button 
            onClick={handleContinue}
            className="w-full bg-white text-teal-600 font-bold py-4 px-6 rounded-full text-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Continue
          </button>
        </div>
        
        {/* Additional Information */}
        <div className="text-white text-center text-sm opacity-70 px-6 max-w-md relative z-20">
          <p>You're one step closer to pain-free living with advanced Pulsewave therapy.</p>
        </div>
      </div>
    </>
  );
};

export default Slide_05_ProviderLoadingPopup;
