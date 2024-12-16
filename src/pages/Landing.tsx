import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import Feature from '../components/feature';

function Landing() {
  return (
    <div className='bg-Background/Middle relative min-h-screen flex flex-col'>
      {/* Header */}
      <Header />

      {/* Body */}
      <main className='flex-grow relative'>
        {/* Negative Margin to Overlap with Header */}
        <div className='px-5 md:px-10 pt-0 mt-[-4rem] flex justify-center'>
          <Hero />
        </div>
        <Feature />
      </main>

      {/*Footer */}
      <Footer />
    </div>
  );
}

export default Landing;
