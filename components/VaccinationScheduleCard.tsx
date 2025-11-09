import React from 'react';
import { ShieldIcon, CheckCircleIcon } from './icons';

const VaccinationScheduleCard: React.FC = () => {
  return (
    <div className="bg-[#E0F2F1] rounded-2xl shadow p-4">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-teal-800 text-lg">Vaccination Schedule</h3>
        <ShieldIcon className="w-6 h-6 text-teal-600" />
      </div>
      <div className="mt-2">
        <p className="text-teal-700 font-semibold">
          Next Vaccine: MMR <span className="font-normal text-sm">(Due: 18 months)</span>
        </p>
        <div className="text-xs text-teal-600 mt-2 flex items-center space-x-1">
            <CheckCircleIcon className="w-3 h-3"/>
            <span>Completed: DTAP, Polio, HepB</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center text-sm text-teal-700 mb-1">
          <span>Progress</span>
          <span>80%</span>
        </div>
        <div className="w-full bg-teal-200 rounded-full h-2">
          <div
            className="bg-teal-500 h-2 rounded-full"
            style={{ width: '80%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default VaccinationScheduleCard;