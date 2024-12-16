import React from 'react';
import LayoutSignin from '../components/layoutSignin';
import Footer from '../components/footer';
import Header from '../components/header';

function Signin() {
  return (
    <div className='bg-Background/Middle relative min-h-screen flex flex-col'>
      {/* Header */}
      <Header />

      {/* Body */}
      <main className='flex-grow relative'>
        {/* Negative Margin to Overlap with Header */}
        <div className='px-5 md:px-10 pt-0 mt-[-4rem] flex justify-center'>
          <LayoutSignin />
        </div>
      </main>

      {/*Footer */}
      <Footer />
    </div>
  );
}

export default Signin;
