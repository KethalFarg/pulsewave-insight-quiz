
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';

const Slide_08_Info_EliteInstitutions = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Navigate to next slide - placeholder for now
    console.log('Navigating to next screen');
    // navigate('/slide_09_next'); // Replace with actual next route
  };

  const handleBack = () => {
    // Check the selected gender to navigate back to correct age slide
    const selectedGender = localStorage.getItem('selectedGender') || 'male';
    
    if (selectedGender === 'male') {
      navigate('/slide_07_agerange_male');
    } else {
      navigate('/slide_07_agerange_female');
    }
    
    console.log('Navigating back to age range for gender:', selectedGender);
  };

  return (
    <div className="font-montserrat bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto px-4 lg:px-8 py-6 relative min-h-screen flex flex-col">
        {/* Top Header Banner - Extended for desktop */}
        <div className="bg-gradient-to-r from-[#323743] to-[#0D9C95] rounded-b-3xl pt-6 pb-6 px-4 lg:px-8 -mx-4 lg:-mx-8 -mt-6 relative">
          {/* Back Button */}
          <div className="absolute top-6 left-4 lg:left-8 z-10">
            <button 
              onClick={handleBack}
              className="w-8 h-8 flex items-center justify-center"
            >
              <ArrowLeft className="text-gray-300 text-xl" size={20} />
            </button>
          </div>
          
          <h1 className="text-center leading-tight pt-2">
            <span className="text-softwave-yellow font-bold block mb-2 text-4xl lg:text-5xl xl:text-6xl">Elite Institutions</span>
            <span className="text-white text-lg lg:text-xl xl:text-2xl">trust PulseWave</span>
          </h1>
        </div>
        
        {/* Main Image */}
        <div className="flex-grow flex items-start justify-center mt-12 lg:mt-16 mb-8">
          <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-2xl overflow-hidden">
            <img 
              src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/91d23c50-0e32-42d8-81b4-fa475777f400/public" 
              className="w-full h-full object-cover" 
              alt="Elite Medical Institutions"
            />
          </div>
        </div>
        
        {/* Next Button */}
        <div className="mb-8 px-8 lg:px-16 xl:px-32">
          <button 
            onClick={handleNext}
            className="bg-softwave-yellow text-black font-bold text-base lg:text-lg w-full lg:max-w-md lg:mx-auto py-3 lg:py-4 rounded-full flex items-center justify-center shadow-md hover:bg-yellow-400 transition-colors"
          >
            NEXT
            <Play className="ml-2" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide_08_Info_EliteInstitutions;
