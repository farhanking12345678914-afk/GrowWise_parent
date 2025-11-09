import React from 'react';
import { TrendingUpIcon } from './icons';

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          src="https://picsum.photos/seed/baby/64/64"
          alt="Baby Aisha"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-bold text-gray-800 text-lg">Baby Aisha</h3>
          <p className="text-gray-500 text-sm">15 months</p>
        </div>
      </div>
      <div className="text-green-500">
        <TrendingUpIcon className="w-10 h-10" />
      </div>
    </div>
  );
};

export default ProfileCard;