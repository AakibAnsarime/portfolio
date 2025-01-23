import React from 'react';

const Footer = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-l font-bold text-gray-800">
          Md Aakib Ansari
        </div>
        
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#about"
                onClick={scrollToTop}
                className="text-gray-700 hover:text-gray-900"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#myservices"
                onClick={() => handleScroll('myservices')}
                className="text-gray-700 hover:text-gray-900"
              >
                Services
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
