import React from 'react';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <div className="flex flex-col mb-16 rounded-2xl bg-surface-dark border border-border-dark p-8 sm:p-10">
      <div className="text-center mb-10">
        <h2 className="text-white text-2xl font-bold mb-2">Safe &amp; Simple Trading</h2>
        <p className="text-gray-400">Verified students only. No shipping headaches.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-border-dark -z-0 w-2/3 mx-auto"></div>
        
        {STEPS.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center z-10">
            <div
              className={`w-16 h-16 rounded-full bg-[#102217] border-2 flex items-center justify-center mb-4 ${
                step.highlighted
                  ? 'border-primary text-primary shadow-[0_0_15px_rgba(13,242,108,0.2)]'
                  : 'border-border-dark text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[32px]">{step.icon}</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm px-4">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
