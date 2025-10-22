import React from 'react';

const ConnectWorldSection = () => {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
     
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 1000 500"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover opacity-10"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M500 250 m -240 0 a 240 240 0 1 0 480 0 a 240 240 0 1 0 -480 0"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="1"
          />
          <path
            fill="#8B5CF6"
            d="M499.999999,0.5 C224.21281,0.5,0.5,224.21281,0.5,499.999999 S224.21281,999.5,499.999999,999.5 S999.5,775.78719,999.5,499.999999 S775.78719,0.5,499.999999,0.5z M852.062002,393.364421 C851.050495,391.81055,849.261821,391.81055,848.250314,393.364421 L812.237254,449.610556 L771.749686,419.018991 L774.22419,396.338925 L753.868936,396.338925 L738.000001,444.038421 L694.01899,416.749686 L694.01899,393.364421 L656.749687,393.364421 L656.749687,432.250315 L606.338925,470.189451 L567.810551,432.250315 L525.474686,462.81055 L491.18945,432.250315 L432.5,477.5 L391.81055,441.5 L353.661075,462.81055 L296.5,419.018991 L315.31055,393.364421 L147.937998,606.635579 C148.949505,608.18945,150.738179,608.18945,151.749686,606.635579 L187.762746,550.389444 L228.250314,580.981009 L225.77581,603.661075 L246.131064,603.661075 L261.999999,555.961579 L305.98101,583.250314 L305.98101,606.635579 L343.250313,606.635579 L343.250313,567.749685 L393.661075,529.810549 L432.189449,567.749685 L474.525314,537.18945 L508.81055,567.749685 L567.5,522.5 L608.18945,558.5 L646.338925,537.18945 L703.5,580.981009 L684.68945,606.635579 L852.062002,393.364421z"
          />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Connect with the World
        </h2>
        <p className="text-lg sm:text-xl text-purple-300 max-w-3xl mx-auto">
          Learners and teachers are connecting from every corner of the globe.
          Join a worldwide community dedicated to sharing knowledge.
        </p>
      </div>
    </section>
  );
};

export default ConnectWorldSection;

