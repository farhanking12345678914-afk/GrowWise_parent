import React from 'react';
import { MessageCircleIcon } from './icons';

const AIChatCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex justify-between items-center">
      <div className="flex items-start space-x-3">
        <div className="bg-gray-100 p-2 rounded-full mt-1">
          <MessageCircleIcon className="w-6 h-6 text-purple-500" />
        </div>
        <div>
          <h4 className="font-bold text-gray-800">Chat with AI Assistant</h4>
          <p className="text-gray-500 text-sm italic">"My child has a mild fever..."</p>
        </div>
      </div>
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center space-x-0.5">
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
      </div>
    </div>
  );
};

export default AIChatCard;