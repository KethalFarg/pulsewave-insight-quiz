
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Slide_09_DiagnosedJointCondition = () => {
  const [selectedCondition, setSelectedCondition] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const conditionOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'not_sure', label: 'Not sure' }
  ];

  const handleConditionSelect = (condition: string) => {
    setSelectedCondition(condition);
    localStorage.setItem('diagnosedCondition', condition);
    console.log('Selected condition:', condition);
    
    // Auto-advance to next page after a short delay for visual feedback
    setTimeout(() => {
      // Navigate to next slide or complete the quiz
      console.log('Quiz completed or navigate to next slide');
    }, 300);
  };

  const handleBack = () => {
    navigate('/slide_08_info_eliteinstitutions');
    console.log('Navigating back to elite institutions screen');
  };

  const selectedJoint = localStorage.getItem('selectedJoint') || 'knee';

  return (
    <div className={`w-full max-w-sm mx-auto bg-gradient-to-b from-[#323743] to-[#0d9c95] min-h-screen transition-all duration-700 ease-out ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`}>
      {/* Header Section */}
      <div className="w-full px-4 py-6 bg-transparent">
        {/* Top row with back button, section title, and progress */}
        <div className="flex items-center justify-between mb-6">
          {/* Back button */}
          <button 
            onClick={handleBack}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="text-white text-sm" size={16} />
          </button>
          
          {/* Section title */}
          <h1 className="text-white text-lg font-semibold">History</h1>
          
          {/* Progress indicator */}
          <span className="text-white/80 text-sm font-medium">4 of 6</span>
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
        <h2 className="text-white text-2xl font-medium leading-8 mb-2">
          Have you been diagnosed with a specific {selectedJoint} condition?
        </h2>
        <p className="text-white/80 text-base">
          (select one)
        </p>
      </div>

      {/* Answer Options */}
      <div className="px-6 flex relative" style={{ marginTop: '10%' }}>
        {/* Image positioned directly to the left of buttons */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <img 
            src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/496ec39e-7fce-426e-dc5b-1c5ab93b0b00/public" 
            alt="Medical illustration" 
            className="w-38 h-auto object-contain"
          />
        </div>
        
        {/* Right side - Buttons */}
        <div className="w-1/2 flex flex-col items-end space-y-4 ml-auto">
          {conditionOptions.map((condition) => (
            <button
              key={condition.value}
              onClick={() => handleConditionSelect(condition.value)}
              className={`w-full h-14 backdrop-blur-md border rounded-xl text-white text-lg font-medium transition-all duration-200 active:scale-98 ${
                selectedCondition === condition.value
                  ? 'bg-white/30 border-white/40'
                  : 'bg-white/10 border-white/20 hover:bg-white/20'
              }`}
            >
              {condition.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide_09_DiagnosedJointCondition;
