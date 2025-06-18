import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CalendlyButton from './CalendlyButton';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-lg' : 'bg-white/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/HVoutsourcingfavicon.webp"
              alt="HV Outsourcing - Premier BPO and Call Center Services Logo"
              className="h-10 w-auto object-contain scale-[1.875] md:scale-[2.35]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-[15px] font-medium tracking-tight transition-colors duration-200 group ${
                  location.pathname === item.href
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
                <span className="block absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#E70051] to-[#B8003F] transition-all duration-300 group-hover:w-full ${location.pathname === item.href ? 'w-full' : ''}"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <CalendlyButton 
              text="Partner With Us"
              variant="desktop"
              trackingLabel="Header CTA - Partner With Us"
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/90 backdrop-blur-md">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-gray-900 bg-[#E70051]/10'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <CalendlyButton 
                text="Partner With Us"
                variant="mobile"
                trackingLabel="Mobile Menu - Partner With Us"
                className="font-medium"
              />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;