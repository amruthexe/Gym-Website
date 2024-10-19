import React from 'react';
import CountUp from 'react-countup';

const GymStats = () => {
  return (
    <div className="mt-20 text-center">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mb-10 font-bold">
        Gym Achievements
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        
        {/* Members */}
        <div className="bg-neutral-900 p-6 rounded-lg shadow-lg border border-neutral-800">
          <h3 className="text-5xl font-bold text-orange-500">
            <CountUp start={0} end={50} duration={6} />+
          </h3>
          <p className="text-lg text-neutral-500 mt-2">Active Members</p>
        </div>

        {/* Equipment */}
        <div className="bg-neutral-900 p-6 rounded-lg shadow-lg border border-neutral-800">
          <h3 className="text-5xl font-bold text-orange-500">
            <CountUp start={0} end={30} duration={6} />+
          </h3>
          <p className="text-lg text-neutral-500 mt-2">Gym Equipment</p>
        </div>

        {/* Treadmills */}
        <div className="bg-neutral-900 p-6 rounded-lg shadow-lg border border-neutral-800">
          <h3 className="text-5xl font-bold text-orange-500">
            <CountUp start={0} end={10} duration={6} />+
          </h3>
          <p className="text-lg text-neutral-500 mt-2">Treadmills</p>
        </div>

      </div>
    </div>
  );
};

export default GymStats;
