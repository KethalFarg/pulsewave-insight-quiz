
import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SubtitleSection from '../components/SubtitleSection';
import GenderSelection from '../components/GenderSelection';
import InstructionsSection from '../components/InstructionsSection';

const Index = () => {
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setSelectedGender(gender);
    console.log('Gender selected:', gender);
    // Here we'll add navigation to next quiz step
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
