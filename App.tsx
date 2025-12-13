import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DepartmentList from './components/DepartmentList';
import BookList from './components/BookList';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Navbar />
      <div className="layout-container mx-auto flex w-full grow flex-col max-w-[960px] px-4 sm:px-10 py-5">
        <Hero />
        <DepartmentList />
        <BookList />
        <HowItWorks />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}

export default App;
