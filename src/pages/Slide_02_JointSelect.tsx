
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Slide_02_JointSelect = () => {
  const [selectedJoint, setSelectedJoint] = useState<string>('');
  const navigate = useNavigate();

  const jointOptions = [
    { value: 'knee', label: 'Knee' },
    { value: 'elbow', label: 'Elbow' },
    { value: 'shoulder', label: 'Shoulder' },
    { value: 'hip', label: 'Hip' },
    { value: 'wrist', label: 'Wrist' }
  ];

  const handleJointSelect = (joint: string) => {
    setSelectedJoint(joint);
    console.log('Selected joint:', joint);
    
    // Auto-advance to next page after a short delay for visual feedback
    setTimeout(() => {
      navigate('/slide_03_zipcodeentry');
    }, 300);
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-gradient-to-b from-[#323743] to-[#0d9c95] min-h-screen">
      {/* Header Section */}
      <div className="w-full px-4 py-6 bg-transparent">
        {/* Top row with back button, section title, and progress */}
        <div className="flex items-center justify-between mb-6">
          {/* Back button */}
          <Link 
            to="/" 
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="text-white text-sm" size={16} />
          </Link>
          
          {/* Section title */}
          <h1 className="text-white text-lg font-semibold">History</h1>
          
          {/* Progress indicator */}
          <span className="text-white/80 text-sm font-medium">2 of 6</span>
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
          Which joint is causing you the most discomfort?
        </h2>
        <p className="text-white/80 text-base">
          (select one)
        </p>
      </div>

      {/* Answer Options with Image */}
      <div className="px-6 flex relative">
        {/* Left side - Image */}
        <div className="w-1/2 flex justify-start items-center">
          <img 
            src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/2447ed57-fa33-444f-c9bd-9874c5407e00/public" 
            alt="Joint anatomy" 
            className="w-full h-auto max-w-[180px] object-contain"
          />
        </div>
        
        {/* Right side - Buttons */}
        <div className="w-1/2 flex flex-col items-end space-y-4 mt-8">
          {jointOptions.map((joint) => (
            <button
              key={joint.value}
              onClick={() => handleJointSelect(joint.value)}
              className={`w-full h-14 backdrop-blur-md border rounded-xl text-white text-lg font-medium transition-all duration-200 active:scale-98 ${
                selectedJoint === joint.value
                  ? 'bg-white/30 border-white/40'
                  : 'bg-white/10 border-white/20 hover:bg-white/20'
              }`}
            >
              {joint.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide_02_JointSelect;
