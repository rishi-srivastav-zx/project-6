
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoreCard from './components/StoreCard';
import MenuAssistant from './components/MenuAssistant';
import ChatBot from './components/ChatBot';
import { OUTLETS, BRAND_INFO, SAMPLE_MENU } from './data';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Story Section */}
        <section id="story" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-rows-2 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-brand-secondary mb-6 leading-tight">
                From a Neighborhood Café <br/> to an Indian Icon.
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Started in 2011, Café Delhi Heights was born out of a desire to create a space where food is a celebration of life. Founded by Vikrant and Sharad Batra, we've grown from one outlet in Delhi/Gurgaon to dozens across India.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is simple: warm hospitality, vibrant ambiance, and comfort food that hits the spot every single time.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-serif text-brand-primary mb-1">12+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">Years of Craft</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-brand-primary mb-1">30+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">Outlets Pan-India</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2070" 
                  alt="Food and Moments" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-primary text-white p-8 rounded-[2rem] shadow-xl hidden lg:block">
                <p className="font-serif text-2xl mb-1">"Good food brings people together."</p>
                <p className="text-sm opacity-80">— Vikrant Batra, Founder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Highlights Section */}
        <section id="menu" className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-brand-secondary mb-4">Culinary Highlights</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Explore our signature offerings that blend global influences with local heart.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {SAMPLE_MENU.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:scale-[1.02] transition-transform">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-tighter bg-red-50 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    {item.isSignature && (
                      <span className="text-xs font-bold text-brand-gold uppercase tracking-tighter bg-yellow-50 px-2 py-1 rounded">
                        Signature
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-serif text-brand-secondary mb-2">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>

            <MenuAssistant />
          </div>
        </section>

        {/* Store Locator Section */}
        <section id="outlets" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-secondary mb-4">Visit Our Outlets</h2>
                <p className="text-gray-600">Find the nearest CDH and join us for a meal to remember.</p>
              </div>
              <div className="flex gap-4">
                <select className="px-6 py-3 rounded-full border border-gray-200 bg-white text-brand-secondary focus:outline-none focus:ring-2 ring-brand-primary">
                  <option>All Cities</option>
                  <option>New Delhi</option>
                  <option>Noida</option>
                  <option>Faridabad</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {OUTLETS.map((outlet, idx) => (
                <StoreCard key={idx} outlet={outlet} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-secondary text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <h2 className="text-3xl font-serif mb-6">Café Delhi Heights</h2>
                <p className="text-gray-400 max-w-md mb-8">
                  {BRAND_INFO.mission}
                </p>
                <div className="flex gap-4">
                  {['Facebook', 'Instagram', 'Twitter'].map(social => (
                    <a key={social} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
                      <span className="sr-only">{social}</span>
                      <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-brand-gold uppercase tracking-widest text-sm">Quick Links</h4>
                <ul className="space-y-4 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Franchise</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-brand-gold uppercase tracking-widest text-sm">Legal Entity</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {BRAND_INFO.legal}<br/>
                  Registered in 2011.<br/>
                  All rights reserved.
                </p>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Café Delhi Heights. Designed for Excellence.
            </div>
          </div>
        </footer>
      </main>

      <ChatBot />
    </div>
  );
};

export default App;
