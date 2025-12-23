
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070" 
          alt="Café Ambience" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-brand-gold uppercase tracking-[0.3em] font-semibold mb-4 text-sm sm:text-base animate-fade-in">
          ESTABLISHED 2011
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
          Where Good Food Meets <br/> <span className="text-brand-primary">Great Moments.</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Delivering warm, comfort-driven casual dining with a vibrant spirit. Your neighborhood café, elevated.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#menu" className="px-10 py-4 bg-brand-primary text-white rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl">
            Explore Menu
          </a>
          <a href="#outlets" className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold hover:bg-white/20 transition-all">
            Find an Outlet
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
