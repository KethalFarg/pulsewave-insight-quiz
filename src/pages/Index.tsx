
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SubtitleSection from '../components/SubtitleSection';
import GenderSelection from '../components/GenderSelection';
import InstructionsSection from '../components/InstructionsSection';

const Index = () => {
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  const navigate = useNavigate();

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setSelectedGender(gender);
    // Store gender selection in localStorage for later use
    localStorage.setItem('selectedGender', gender);
    console.log('Gender selected:', gender);
    // Navigate to joint selection after gender is selected
    setTimeout(() => {
      navigate('/slide_02_jointselect');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Header />
      <HeroSection />
      <SubtitleSection />
      <GenderSelection onGenderSelect={handleGenderSelect} selectedGender={selectedGender} />
      <InstructionsSection />
      <div className="bg-gray-200 h-20" />
    </div>
  );
};

export default Index;
