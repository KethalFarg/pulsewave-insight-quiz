
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Slide_07_AgeRange_female = () => {
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
      image: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/400f268e-3273-4700-d0bd-36e55c226300/public'
    },
    {
      range: '30–39',
      image: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/e3710356-dde8-45f9-6f81-d1159c868200/public'
    },
    {
      range: '40–49',
      image: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/03b2665b-176a-4f7a-5f99-ebe6bdc35500/public'
    },
    {
      range: '50+',
      image: 'https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/c5513f03-194d-4a1b-8936-abdf377cde00/public'
    }
  ];

  return (
    <div className="w-full max-w-sm lg:max-w-4xl mx-auto bg-gradient-to-b from-[#323743] to-[#0d9c95] min-h-screen">
      {/* Header Section - Extended for desktop */}
      <div className="w-full px-4 lg:px-8 py-6 bg-transparent">
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
      <div className="px-6 lg:px-8 py-8 text-center">
        <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl font-medium leading-8 mb-3">
          What is your age range?
        </h2>
        <p className="text-white/80 text-base lg:text-lg leading-6 max-w-2xl mx-auto">
          Your age helps us estimate your treatment time and recovery success
        </p>
      </div>

      {/* Age Options Grid - Responsive grid for desktop */}
      <div className="px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
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
  );
};

export default Slide_07_AgeRange_female;
