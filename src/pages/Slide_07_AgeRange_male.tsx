
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
    localStorage.setItem('selectedAge', ageRange);
    console.log('Age range selected:', ageRange);
    // Navigate to next slide after selection
    setTimeout(() => {
      navigate('/slide_08_info_eliteinstitutions');
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
    <div className="font-montserrat bg-gradient-to-b from-[#323743] to-[#0d9c95] min-h-screen">
      <div className="max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto px-4 lg:px-8 py-6 relative min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="w-full py-6 bg-transparent">
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
            <h1 className="text-white text-lg lg:text-xl font-semibold">History</h1>
            
            {/* Progress indicator */}
            <span className="text-white/80 text-sm lg:text-base font-medium">3 of 6</span>
          </div>
          
          {/* Progress bar with 4 sections */}
          <div className="flex space-x-2 mb-2 mt-2 max-w-md lg:max-w-lg mx-auto">
            <div className="flex-1 bg-[#FECA35] rounded-full h-2"></div>
            <div className="flex-1 bg-[#FECA35] rounded-full h-2"></div>
            <div className="flex-1 bg-[#FECA35] rounded-full h-2"></div>
            <div className="flex-1 bg-white/20 rounded-full h-2"></div>
          </div>
        </div>

        {/* Question Section */}
        <div className="py-8 text-center">
          <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-medium leading-8 mb-3">
            What is your age range?
          </h2>
          <p className="text-white/80 text-base lg:text-lg leading-6 max-w-2xl mx-auto">
            Your age helps us estimate your treatment time and recovery success
          </p>
        </div>

        {/* Age Options Grid */}
        <div className="flex-grow flex items-center justify-center pb-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full max-w-6xl">
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
                <div className="w-full h-32 lg:h-40 bg-gradient-to-b from-gray-100 to-gray-200">
                  <img 
                    src={option.image} 
                    alt={`${option.range} age range`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 lg:p-4 bg-white">
                  <span className="text-gray-800 text-lg lg:text-xl font-semibold">{option.range}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide_07_AgeRange_male;
