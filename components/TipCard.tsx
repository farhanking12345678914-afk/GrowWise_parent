import React from 'react';

interface TipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TipCard: React.FC<TipCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-start space-y-2 h-full">
      <div className="bg-gray-100 p-2 rounded-full">
        {icon}
      </div>
      <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  );
};

export default TipCard;