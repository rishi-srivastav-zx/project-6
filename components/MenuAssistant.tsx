
import React, { useState } from 'react';
import { getMenuRecommendation } from '../services/gemini';

const MenuAssistant: React.FC = () => {
  const [pref, setPref] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSuggest = async () => {
    if (!pref) return;
    setLoading(true);
    const result = await getMenuRecommendation(pref);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="bg-brand-accent rounded-[3rem] p-8 md:p-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-brand-secondary mb-4">AI Menu Concierge</h2>
        <p className="text-gray-600 mb-8">Not sure what to order? Tell us what you're craving, and our AI will suggest the perfect CDH signature dishes for you.</p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="text" 
            placeholder="e.g. I'm in the mood for something spicy and indulgent..."
            className="flex-1 px-6 py-4 rounded-2xl border-2 border-brand-primary/20 focus:border-brand-primary outline-none text-brand-secondary"
            value={pref}
            onChange={(e) => setPref(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSuggest()}
          />
          <button 
            onClick={handleSuggest}
            disabled={loading}
            className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Get Suggestion'}
          </button>
        </div>

        {recommendation && (
          <div className="mt-10 p-6 bg-white rounded-3xl text-left border border-brand-primary/10 shadow-lg animate-fade-in">
            <h4 className="font-bold text-brand-primary mb-2 flex items-center gap-2">
              <span className="text-xl">✨</span> Our Recommendations:
            </h4>
            <div className="text-brand-secondary whitespace-pre-wrap leading-relaxed">
              {recommendation}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuAssistant;
