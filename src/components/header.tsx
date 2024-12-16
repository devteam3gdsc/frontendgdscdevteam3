import { Link } from 'react-router';
import { useLocation } from 'react-router-dom';
import Logo from '../assets/logo.svg';

function Header() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <header className='sticky top-0 flex justify-center py-2 z-20'>
      <Link to='/' className='absolute'>
        <img src={Logo} alt='CoDash Logo' className='w-10 h-auto' />
      </Link>

      <div className='hidden lg:flex items-center justify-center space-x-0 ml-auto mr-20'>
        {isLandingPage && (
          <>
            <Link to='/signin'>
              <button className='w-20 h-7 rounded-xl bg-white text-l text-Primary/Dark m-2 hover:bg-Primary/Dark hover:text-white'>
                Sign in
              </button>
            </Link>
            <Link to='/signup'>
              <button className='w-20 h-7 rounded-xl bg-Accent/Target text-l text-white m-2 hover:bg-white hover:text-Accent/Target'>
                Sign up
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
