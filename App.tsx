import React from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import GrowthTrackerCard from './components/GrowthTrackerCard';
import VaccinationScheduleCard from './components/VaccinationScheduleCard';
import TipCard from './components/TipCard';
import AIChatCard from './components/AIChatCard';
import BottomNav from './components/BottomNav';
import { SunIcon, MoonIcon } from './components/icons';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans md:bg-gray-200 md:flex md:items-center md:justify-center md:p-4">
      <div className="relative w-full h-screen bg-slate-50 overflow-hidden md:max-w-sm md:h-[844px] md:rounded-[40px] md:shadow-2xl md:border-8 md:border-black">
        <div className="w-full h-full overflow-y-auto">
          <Header />
          <main className="p-4 space-y-5 pb-24">
            <ProfileCard />
            <GrowthTrackerCard />
            <VaccinationScheduleCard />
            
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">Daily AI Care Tips</h2>
              <div className="grid grid-cols-2 gap-4">
                <TipCard
                  icon={<SunIcon className="w-6 h-6 text-yellow-500" />}
                  title="Today's Tip"
                  description="Introduce new textures! Try soft-cooked carrots for lunch."
                />
                <TipCard
                  icon={<MoonIcon className="w-6 h-6 text-blue-400" />}
                  title="Sleep Aid"
                  description="Consistent bedtime routine helps with longer stretches."
                />
              </div>
            </div>

            <AIChatCard />
          </main>
          <BottomNav />
        </div>
        {/* Notch and Dynamic Island - Hidden on mobile */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-xl"></div>
      </div>
    </div>
  );
};

export default App;