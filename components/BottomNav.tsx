import React from 'react';
import { HomeIcon, BarChartIcon, LightbulbIcon, SyringeIcon, UserIcon } from './icons';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => {
  const activeClasses = active ? 'text-teal-500' : 'text-gray-400';
  return (
    <button className={`flex flex-col items-center justify-center space-y-1 ${activeClasses} transition-colors`}>
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  );
};

const BottomNav: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 flex justify-around items-center">
      <NavItem icon={<HomeIcon className="w-6 h-6" />} label="Dashboard" active />
      <NavItem icon={<BarChartIcon className="w-6 h-6" />} label="Growth" />
      <NavItem icon={<LightbulbIcon className="w-6 h-6" />} label="Tips" />
      <NavItem icon={<SyringeIcon className="w-6 h-6" />} label="Vaccines" />
      <NavItem icon={<UserIcon className="w-6 h-6" />} label="Profile" />
    </div>
  );
};

export default BottomNav;