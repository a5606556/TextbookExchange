import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-border-dark bg-background-dark/95 backdrop-blur">
      <div className="layout-container mx-auto flex h-16 max-w-[960px] items-center justify-between px-4 sm:px-10">
        <div className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity cursor-pointer">
          <span className="material-symbols-outlined text-primary text-[32px]">menu_book</span>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">
            TextbookExchange
          </h2>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-white text-sm font-medium hover:text-primary transition-colors">Buy</a>
            <a href="#" className="text-white text-sm font-medium hover:text-primary transition-colors">Sell</a>
            <a href="#" className="text-white text-sm font-medium hover:text-primary transition-colors">Community</a>
          </nav>
          <div className="flex gap-2">
            <button className="flex h-9 items-center justify-center rounded-full bg-surface-dark border border-border-dark px-4 text-white text-sm font-bold hover:bg-border-dark transition-colors">
              <span className="truncate">NYU Campus</span>
              <span className="material-symbols-outlined ml-1 text-sm">expand_more</span>
            </button>
            <button className="flex h-9 items-center justify-center rounded-full bg-primary px-4 text-[#102318] text-sm font-bold hover:bg-opacity-90 transition-opacity">
              <span className="truncate">Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
