import React, { useState } from 'react';
import { Menu, X, Building2, Brain, Wine, Share2 } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Consulting', icon: <Building2 className="w-5 h-5" /> },
    { name: 'AI', icon: <Brain className="w-5 h-5" /> },
    { name: 'Wines', icon: <Wine className="w-5 h-5" /> },
    { name: 'Tam Tam', icon: <Share2 className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <Logo className="h-8 w-auto" />
            <span className="text-2xl font-bold text-gray-900">Negus Group</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-[#FF4500] transition-colors"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
            <button className="bg-[#FF4500] text-white px-4 py-2 rounded-md hover:bg-[#FF5722] transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#FF4500]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-[#FF4500] px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
            <button 
              className="w-full bg-[#FF4500] text-white px-4 py-2 rounded-md hover:bg-[#FF5722] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;