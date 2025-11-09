import React from 'react';
import { MoreVerticalIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-[#A8D8C8] text-gray-800 p-5 rounded-b-[2rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button>
          <MoreVerticalIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;