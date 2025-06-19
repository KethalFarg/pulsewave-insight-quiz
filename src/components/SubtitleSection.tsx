
import { useEffect, useState } from 'react';

const SubtitleSection = () => {
  const [animateUnderline, setAnimateUnderline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateUnderline(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gray-200 px-6 py-6 text-center">
      <p className="text-gray-700 text-lg leading-relaxed">
        Discover your{' '}
        <span className="relative inline-block">
          <span className="relative z-10">personalized results</span>
          <span 
            className={`absolute bottom-0 left-0 w-full h-1 bg-teal transform origin-left ${
              animateUnderline ? 'animate-underline' : 'scale-x-0'
            }`}
          />
        </span>
        <br />
        in just 1 minute
      </p>
    </section>
  );
};

export default SubtitleSection;
