import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  { label: 'Home', id: 'home', path: '/' },
  { label: 'Services', id: 'services', path: '/' },
  { label: 'Projects', id: 'projects', path: '/projects' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string, path: string) => {
    if (path === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 px-6 md:px-20 pt-4 transition-colors duration-300 ${isScrolled ? 'bg-transparent' : 'bg-[#fff7f7]'}`}>
      <div className="flex justify-between items-center bg-white rounded-xl shadow-lg py-4 px-6">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-orange-500 transition-colors duration-200">
          <img src="/portfolio.svg" alt="Portfolio Logo" className="w-8 h-8" />
          <span>Md Aakib Ansari</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => scrollToSection(item.id, item.path)}
              className="hover:text-orange-500 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          <a 
            href="mailto:aakiba6619@gmail.com"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <div className="bg-white rounded-xl shadow-lg py-4 px-6 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => scrollToSection(item.id, item.path)}
                className="hover:text-orange-500 transition-colors duration-200 text-left"
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="mailto:aakiba6619@gmail.com"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-all duration-200 w-full text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
