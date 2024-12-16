import { Link } from 'react-router';
import Logo from '../assets/logo.svg';

function Footer() {
  return (
    <footer className="bg-Background/Bottom bg-[url('assets/particle.svg')] bg-no-repeat bg-center bg-cover text-white px-10 py-2 mt-auto z-20 border-Primary/Dark border-solid box-border border-t-2 divide-y-2 divide-Primary/Dark">
      {/* Main Footer Section */}
      <div className='flex justify-between items-center mb-5'>
        {/* Logo and Name */}
        <div className='flex flex-col'>
          <div className='font-mono flex items-center py-4 text-3xl'>
            <img src={Logo} alt='CoDash Logo' className='logo w-10 h-auto pr-2' />
            Co
            <span className='text-Accent/Light'>Dash</span>
          </div>
          <p className='text-l'>Contact with us:</p>
          <a href='mailto:xxxxxxxxx@gmail.com' className='text-blue-400 '>
            xxxxxxxxx@gmail.com
          </a>
        </div>

        {/* Links Section */}
        <div className='text-lg space-y-2 flex flex-col text-right'>
          <Link to='/'>
            <h4 className='text-2xl text-Accent/Target'>About us</h4>{' '}
          </Link>
          <ul>
            <li>
              <p>Privacy policy</p>
            </li>
            <li>
              <p>Terms of use</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className='mt-5'>
        <p className='text-md mt-2'>©2024 CoDash. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
