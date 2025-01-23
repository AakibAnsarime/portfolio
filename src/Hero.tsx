import { useState } from 'react';
import { Globe2, Code2 } from 'lucide-react';
import data from './data.json';

const Hero = () => {
  const [heroData] = useState(data.hero);

  const handleContactClick = () => {
    window.location.href = `mailto:${heroData.email}`;
  };

  return (
    <div className="bg-[#fff7f7] min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-[#1e1b4b] text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              <span className="block mb-2">Hy! I Am</span>
              <span className="text-[#f97316]">{heroData.name}</span>
            </h1>
            <p className="text-base sm:text-lg text-[#4b5563] mb-8 max-w-2xl mx-auto lg:mx-0">
              {heroData.description}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 sm:mb-12">
              <a
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center px-6 py-3 bg-[#f97316] text-white font-medium rounded-md hover:bg-[#ea580c] transition-transform duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Hire Me
              </a>
            </div>

            <div className="mt-8 sm:mt-12">
              <h3 className="text-lg sm:text-xl font-semibold text-[#1e1b4b] mb-4">
                Technical Expertise & Skills
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                {heroData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-2 bg-[#fff7ed] text-[#f97316] rounded-md text-sm font-medium transition-transform duration-300 transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image and Badges */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] -ml-2">
              <img
                src={heroData.profileImage}
                alt={heroData.name}
                className="rounded-lg w-full h-full object-cover pt-2"
              />
              {heroData.badges.map((badge, index) => (
                <div
                  key={index}
                  className={`absolute ${
                    index === 0 
                      ? 'top-4 -left-12 sm:top-2 sm:-left-28 lg:-left-36' 
                      : 'bottom-4 -right-12 sm:bottom-2 sm:right-15' // Adjusted for mobile
                  } bg-white rounded-lg shadow-lg p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-3 transform hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-[#f97316] w-6 h-6 sm:w-7 sm:h-7">
                    {badge.icon === 'Globe2' ? <Globe2 /> : <Code2 />}
                  </div>
                  <div>
                    <div className="font-medium text-[#1e1b4b] text-sm sm:text-base">
                      {badge.title}
                    </div>
                    <div className="text-xs sm:text-sm text-[#4b5563]">
                      {badge.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;