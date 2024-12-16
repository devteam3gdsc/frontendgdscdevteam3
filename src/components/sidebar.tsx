import { useState } from 'react';
import Logo from '../assets/logo.svg';
import Home from '../assets/home.svg';
import HomeClicked from '../assets/homeClicked.svg';
import Codemunity from '../assets/codemunity.svg';
import CodemunityClicked from '../assets/codemunityClicked.svg';

function Sidebar() {
  // Initialize activeButton to 'home' so Home is clicked by default
  const [activeButton, setActiveButton] = useState<'home' | 'codemunity' | null>('home');

  return (
    <div className='bg-Background/Bottom text-center h-full ml-0 p-2 fixed flex flex-col border-Primary/Dark border-solid box-border border-2 mb-28'>
      {/* Logo Section */}
      <div className='mt-2 flex justify-center'>
        <img src={Logo} alt='CoDash Logo' className='w-10 h-auto absolute' />
      </div>

      {/* Profile Section */}
      <div className='flex flex-col justify-center mx-12 mt-32'>
        <img src='profileicon.png' alt='Profile Icon' className='w-24 h-auto ml-8' />
        <p className='text-white text-xl'>Your Display Name</p>
      </div>

      {/* Navigation Buttons */}
      <div className='flex flex-col mt-24'>
        {/* Home Button */}
        <button
          className='m-2'
          onClick={() => setActiveButton('home')} // Set activeButton to 'home'
        >
          <img
            src={activeButton === 'home' ? HomeClicked : Home} // Dynamically switch image
            alt='Home Button'
            className='w-30 h-auto'
          />
        </button>

        {/* Codemunity Button */}
        <button
          className='m-2'
          onClick={() => setActiveButton('codemunity')} // Set activeButton to 'codemunity'
        >
          <img
            src={activeButton === 'codemunity' ? CodemunityClicked : Codemunity} // Dynamically switch image
            alt='Codemunity Button'
            className='w-30 h-auto'
          />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

