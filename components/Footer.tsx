import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-border-dark pt-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="font-bold text-sm">TextbookExchange © 2023</span>
        </div>
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Safety</a>
          <a href="#" className="hover:text-primary transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
