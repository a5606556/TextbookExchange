import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DepartmentList from './components/DepartmentList';
import BookList from './components/BookList';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import BuyPage from './components/BuyPage';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'buy'>('home');

  const navigateTo = (page: string) => {
    if (page === 'buy' || page === 'home') {
      setCurrentView(page as 'home' | 'buy');
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Navbar onNavigate={navigateTo} />
      <div className="layout-container mx-auto flex w-full grow flex-col max-w-[960px] px-4 sm:px-10 py-5">
        {currentView === 'home' ? (
          <>
            <Hero />
            <DepartmentList />
            <BookList />
            <HowItWorks />
            <CallToAction />
          </>
        ) : (
          <BuyPage />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;