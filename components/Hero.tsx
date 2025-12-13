import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="@container mb-12">
      <div
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 text-center relative overflow-hidden group"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16, 34, 23, 0.7) 0%, rgba(16, 34, 23, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxBf7hdQFrGzFrqUqfR0cmlQx-B_NDUocWkpf3Pf45Ura5RKMt46EAHlX-PV0mP2sZ9ZY7kcrftLOFQ6Ws1HVhFfctCnQRgAtU6S6_JwK6XJWL33yw5iIRyfZTOGtZBb3j--FY2Va0AjLcOV3l6mWXzUysVZiJ7rSMvS96gUUeUPFPRelWNGRad6SF2Bw0METl4gYKB5KZ_OxtAfJgn5krBAD2BlOQySWIXrrVPh8AQCb6QagJiVopwoWW4S5acAfcvHRXMHmKt08")',
        }}
      >
        <div className="flex flex-col gap-3 z-10 max-w-[600px]">
          <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-tight">
            Textbooks for students, <span className="text-primary">by students.</span>
          </h1>
          <h2 className="text-gray-200 text-base sm:text-lg font-normal">
            Save up to 80% on this semester's reading list. Safe campus meet-ups, no shipping fees.
          </h2>
        </div>
        <label className="flex flex-col h-14 w-full max-w-[540px] z-10 shadow-lg shadow-primary/5 mt-4 group-focus-within:shadow-primary/20 transition-shadow rounded-xl">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full bg-surface-dark border border-border-dark overflow-hidden">
            <div className="text-[#90cba9] flex items-center justify-center pl-4 bg-surface-dark">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="flex w-full min-w-0 flex-1 resize-none bg-transparent text-white focus:outline-0 h-full placeholder:text-[#90cba9]/70 px-4 text-base"
              placeholder="Search by course, ISBN, or teacher"
            />
            <div className="flex items-center justify-center pr-1 bg-surface-dark">
              <button className="flex h-10 sm:h-12 items-center justify-center rounded-lg px-6 bg-primary text-[#102318] text-base font-bold hover:bg-[#0be062] transition-colors">
                <span className="truncate">Find Books</span>
              </button>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Hero;
