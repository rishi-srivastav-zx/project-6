
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              CDH
            </div>
            <span className="font-serif text-2xl tracking-tight text-brand-secondary">
              Café Delhi Heights
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Home</a>
            <a href="#outlets" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Outlets</a>
            <a href="#menu" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Menu</a>
            <a href="#story" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Our Story</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#home" className="block px-3 py-2 text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#outlets" className="block px-3 py-2 text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Outlets</a>
            <a href="#menu" className="block px-3 py-2 text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Menu</a>
            <a href="#story" className="block px-3 py-2 text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Our Story</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
