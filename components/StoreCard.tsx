
import React from 'react';
import { Outlet } from '../types';

interface StoreCardProps {
  outlet: Outlet;
}

const StoreCard: React.FC<StoreCardProps> = ({ outlet }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
      <div className="mb-4 overflow-hidden rounded-2xl h-48 relative">
        <img 
          src={`https://picsum.photos/seed/${outlet.name}/600/400`} 
          alt={outlet.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          {outlet.city}
        </div>
      </div>
      <h3 className="text-2xl font-serif text-brand-secondary mb-2">{outlet.name}</h3>
      <p className="text-gray-500 text-sm mb-4 min-h-[40px]">{outlet.address}</p>
      
      <div className="space-y-2 mb-6">
        <div className="flex items-center text-xs text-gray-600 gap-2">
          <span className="font-bold">HOURS:</span> {outlet.hours}
        </div>
        <div className="flex items-center text-xs text-gray-600 gap-2">
          <span className="font-bold">CONTACT:</span> {outlet.phone}
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 py-3 bg-brand-secondary text-white rounded-xl text-sm font-semibold hover:bg-brand-secondary/90 transition-colors">
          Dine-in
        </button>
        <button className="flex-1 py-3 bg-gray-50 text-brand-secondary border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors">
          Deliver
        </button>
      </div>
    </div>
  );
};

export default StoreCard;
