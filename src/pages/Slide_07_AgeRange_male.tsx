
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Slide_07_AgeRange_male = () => {
  const navigate = useNavigate();
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  const handleBack = () => {
    navigate('/slide_06_info_over1million');
  };

  const handleAgeSelect = (ageRange: string) => {
    setSelectedAge(ageRange);
    console.log('Age range selected:', ageRange);
    // Navigate to next slide after selection
    setTimeout(() => {
      // navigate('/slide_08_next'); // Replace with actual next route
      console.log('Would navigate to next slide');
    }, 500);
  };

  const ageOptions = [
    {
      range: '18–29',
      image: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/a192981a-c5b9-46f0-b63e-12accf4ec500/public'
    },
    {
      range: '30–39',
      image: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/28d5d16b-9906-4492-b9a7-1d852bdd0900/public'
    },
    {
      range: '40–49',
      image: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/94c6331c-4d90-4ff2-898f-e0e5b7aa7f00/public'
    },
    {
      range: '50+',
      image: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/c1ec5351-6735-4c36-5f3e-47083b160200/public'
    }
  ];

  return (
    <div className="w-full max-w-sm mx-auto bg-gradient-to-b from-[#323743] to-[#0d9c95] min-h-screen">
      {/* Header Section */}
      <div className="w-full px-4 py-6 bg-transparent">
        {/* Top row with back button, section title, and progress */}
        <div className="flex items-center justify-between mb-6">
          {/* Back button */}
          <button 
            onClick={handleBack}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
          >
            <ArrowLeft className="text-white text-sm" size={16} />
          </button>
          
          {/* Section title */}
          <h1 className="text-white text-lg font-semibold">History</h1>
          
          {/* Progress indicator */}
          <span className="text-white/80 text-sm font-medium">3 of 6</span>
        </div>
        
        {/* Progress bar with 4 sections */}
        <div className="flex space-x-2 mb-2 mt-2">
          <div className="flex-1 bg-[#FECA35] rounded-full h-2"></div>
          <div className="flex-1 bg-[#FECA35] rounded-full h-2"></div>
          <div className="flex-1 bg-[#FECA35] rounded-full h-2"></div>
          <div className="flex-1 bg-white/20 rounded-full h-2"></div>
        </div>
      </div>

      {/* Question Section */}
      <div className="px-6 py-8 text-center">
        <h2 className="text-white text-2xl font-medium leading-8 mb-3">
          What is your age range?
        </h2>
        <p className="text-white/80 text-base leading-6">
          Your age helps us estimate your treatment time and recovery success
        </p>
      </div>

      {/* Age Options Grid */}
      <div className="px-6 grid grid-cols-2 gap-4">
        {ageOptions.map((option) => (
          <button
            key={option.range}
            onClick={() => handleAgeSelect(option.range)}
            className={`relative backdrop-blur-md border border-gray-200/50 rounded-2xl hover:bg-white transition-all duration-200 active:scale-98 overflow-hidden shadow-lg ${
              selectedAge === option.range 
                ? 'bg-white ring-4 ring-white/50' 
                : 'bg-white/90'
            }`}
          >
            <div className="w-full h-32 bg-gradient-to-b from-gray-100 to-gray-200">
              <img 
                src={option.image} 
                alt={`${option.range} age range`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 bg-white">
              <span className="text-gray-800 text-lg font-semibold">{option.range}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slide_07_AgeRange_male;
