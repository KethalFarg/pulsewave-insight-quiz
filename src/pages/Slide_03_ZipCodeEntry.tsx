
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Slide_03_ZipCodeEntry = () => {
  const [zipCode, setZipCode] = useState<string>('');
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 5) {
      setZipCode(value);
    }
  };

  const handleCheckAvailability = async () => {
    if (zipCode.length !== 5) {
      alert('Please enter a valid 5-digit ZIP code');
      return;
    }

    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsChecking(false);
      console.log(`Checking providers near ZIP code: ${zipCode}`);
      // Navigate to next step - you can replace this with the actual next route
      // navigate('/slide_04_next');
      alert(`Checking providers near ZIP code: ${zipCode}\nThe app would now show available providers or continue with the qualification process.`);
    }, 1500);
  };

  return (
    <div className="font-montserrat bg-gradient-to-b from-[#323743] to-[#0d9c95] min-h-screen flex flex-col items-center justify-start pt-12 px-4">
      {/* Logo Block */}
      <div className="flex flex-col items-center justify-center mb-8">
        <img 
          src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/0b98e6b6-e3f9-4251-b9e3-e82eb5f47600/public" 
          alt="SoftWave Logo" 
          className="h-16 w-auto mb-2"
        />
      </div>

      {/* Main Container */}
      <div className="bg-white bg-opacity-95 rounded-2xl shadow-lg w-full max-w-md p-6 mb-8">
        {/* Heading */}
        <h2 className="text-teal-600 text-2xl font-bold text-center mb-4">
          Before we move forward...
        </h2>
        
        {/* Subtext */}
        <p className="text-gray-700 text-center mb-6">
          Let's see if we can find a qualified Pulsewave provider near you.
        </p>
        
        {/* Zip Code Input */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500">
              <MapPin size={20} />
            </div>
            <input 
              type="text" 
              value={zipCode}
              onChange={handleZipCodeChange}
              className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-[#0B3B6B] focus:border-[#0B3B6B] block w-full pl-12 p-4" 
              placeholder="Enter ZIP code" 
              maxLength={5}
            />
          </div>
        </div>
        
        {/* Submit Button */}
        <button 
          onClick={handleCheckAvailability}
          disabled={isChecking}
          className="w-full bg-[#FFD54F] hover:bg-yellow-400 text-black font-bold py-4 px-4 rounded-full transition duration-300 flex items-center justify-center disabled:opacity-50"
        >
          {isChecking ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
              Checking...
            </>
          ) : (
            'Check Availability'
          )}
        </button>
      </div>
      
      {/* Optional: Additional Information */}
      <div className="text-white text-center text-sm opacity-70 px-6 max-w-md">
        <p>Your ZIP code helps us find Pulsewave providers in your area who can address your specific needs.</p>
      </div>
    </div>
  );
};

export default Slide_03_ZipCodeEntry;
