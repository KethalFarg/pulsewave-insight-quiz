
import { useState } from 'react';

interface GenderSelectionProps {
  onGenderSelect: (gender: 'male' | 'female') => void;
  selectedGender: 'male' | 'female' | null;
}

const GenderSelection = ({ onGenderSelect, selectedGender }: GenderSelectionProps) => {
  const [pressedGender, setPressedGender] = useState<'male' | 'female' | null>(null);

  const handleGenderClick = (gender: 'male' | 'female') => {
    setPressedGender(gender);
    setTimeout(() => {
      setPressedGender(null);
      onGenderSelect(gender);
    }, 200);
  };

  return (
    <section className="bg-gray-200 px-6 py-8">
      <div className="flex space-x-4 max-w-sm mx-auto">
        {/* Male Option */}
        <div className="flex-1">
          <button 
            className={`w-full relative bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-2xl hover:bg-white transition-all duration-200 overflow-hidden shadow-lg mb-3 ${
              pressedGender === 'male' ? 'scale-98 opacity-75' : ''
            }`}
            onClick={() => handleGenderClick('male')}
          >
            <div className="w-full h-32 bg-gradient-to-b from-blue-50 to-blue-100">
              <img 
                src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/94c6331c-4d90-4ff2-898f-e0e5b7aa7f00/public" 
                alt="Male" 
                className="w-full h-full object-cover"
              />
            </div>
          </button>
          <button 
            className={`w-full bg-gray-800 text-white py-4 rounded-lg font-medium text-lg hover:bg-gray-700 transition-colors ${
              selectedGender === 'male' ? 'bg-gray-700 ring-2 ring-teal' : ''
            }`}
            onClick={() => handleGenderClick('male')}
          >
            Male
          </button>
        </div>

        {/* Female Option */}
        <div className="flex-1">
          <button 
            className={`w-full relative bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-2xl hover:bg-white transition-all duration-200 overflow-hidden shadow-lg mb-3 ${
              pressedGender === 'female' ? 'scale-98 opacity-75' : ''
            }`}
            onClick={() => handleGenderClick('female')}
          >
            <div className="w-full h-32 bg-gradient-to-b from-pink-50 to-pink-100">
              <img 
                src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/03b2665b-176a-4f7a-5f99-ebe6bdc35500/public" 
                alt="Female" 
                className="w-full h-full object-cover"
              />
            </div>
          </button>
          <button 
            className={`w-full bg-pink text-white py-4 rounded-lg font-medium text-lg hover:bg-pink-600 transition-colors ${
              selectedGender === 'female' ? 'bg-pink-600 ring-2 ring-teal' : ''
            }`}
            onClick={() => handleGenderClick('female')}
          >
            Female
          </button>
        </div>
      </div>
    </section>
  );
};

export default GenderSelection;
