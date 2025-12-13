import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#183424] to-[#102217] border border-border-dark p-8 sm:p-12 mb-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex flex-col items-start gap-4 max-w-lg">
          <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase">
            <span className="material-symbols-outlined text-lg">payments</span>
            <span>Quick Cash</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black leading-tight">
            Got dusty books? <br />
            Turn them into cash.
          </h2>
          <p className="text-gray-300 text-lg mb-2">
            Most students make over $150 per semester selling old textbooks.
          </p>
          <button className="flex items-center justify-center h-12 rounded-full bg-primary px-8 text-[#102318] text-base font-bold hover:bg-[#0be062] transition-all transform hover:scale-105 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined mr-2">qr_code_scanner</span>
            Sell Books Now
          </button>
        </div>
        {/* Abstract Illustration placeholder */}
        <div className="relative w-full max-w-xs md:max-w-sm aspect-square md:aspect-[4/3] flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwnU4ew-GTFQ5nbsb1oi9Hb6syrRX-1IfWJL3aBGypSUg7_J2i_a2OAV3YV4ENok9PD_XEmYS-QUCcqQ44xYFd0toRIm36c1_GGsLxWoW_5U1vgrPetC-zcmxd-0QEuRBKLPPTcsGsW4bHaVq4ADeSoKIq0MKxRcwpwZJqLl6pZiO_clFfbx4ZulT49yuoZdROUZA_Cg3En2Mbbrd2gqS1TWDe039gfrUcWixS3nrjynOFI14UaAbrbN8dTGwa4f4KweL5CgIr63U"
            alt="Student holding smartphone scanning a textbook ISBN code"
            className="relative z-10 rounded-2xl shadow-2xl border border-border-dark/50 rotate-3 hover:rotate-0 transition-transform duration-500"
            style={{
              clipPath:
                'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
