import React from 'react';
import { Link } from 'react-router';
import Header from '../components/header';

function NotFound() {
  return (
    <div className="bg-Background/Bottom bg-[url('assets/particle.svg')] bg-no-repeat bg-center bg-cover relative min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Body */}
      <main className='flex-grow flex justify-center items-center text-center text-white  text-2xl'>
        <div>
          <p>Oops! Did you get lost?</p>
          <Link to='/' className='text-Accent/Light hover:text-Accent/Target'>
            Go back to Landing page
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
