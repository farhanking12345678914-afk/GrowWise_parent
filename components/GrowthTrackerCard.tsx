import React from 'react';
import { ShieldIcon, CheckCircleIcon } from './icons';

const GrowthTrackerCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-gray-800 text-lg">Growth Tracker</h3>
        <ShieldIcon className="w-6 h-6 text-green-500" />
      </div>
      <div className="mt-2 flex items-end justify-between">
        <div>
            <p className="text-4xl font-bold text-gray-800">1.0.5 <span className="text-2xl font-semibold">kg</span></p>
            <p className="text-gray-500">(55ᵗʰ percentile)</p>
        </div>
        <button className="bg-[#4DB697] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition">
          View Growth Chart
        </button>
      </div>
      <div className="text-xs text-gray-400 mt-3 flex items-center space-x-1">
        <CheckCircleIcon className="w-3 h-3 text-green-500" />
        <span>Next milestone check</span>
      </div>
    </div>
  );
};

export default GrowthTrackerCard;