import React from 'react';

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="bg-gray-50 px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* In-Progress Card */}
          <div className="bg-linear-to-br from-purple-600 to-purple-800 rounded-2xl p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center text-center min-h-[250px] sm:min-h-[300px]">
            <h2 className="text-white text-xl sm:text-2xl font-medium mb-4 sm:mb-6">
              In-Progress
            </h2>
            <p className="text-white text-6xl sm:text-7xl lg:text-8xl font-bold">
              {inProgressCount}
            </p>
          </div>

          {/* Resolved Card */}
          <div className="bg-linear-to-br from-green-400 to-green-600 rounded-2xl p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center text-center min-h-[250px] sm:min-h-[300px]">
            <h2 className="text-white text-xl sm:text-2xl font-medium mb-4 sm:mb-6">
              Resolved
            </h2>
            <p className="text-white text-6xl sm:text-7xl lg:text-8xl font-bold">
              {resolvedCount}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
