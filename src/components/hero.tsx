import { Link } from 'react-router';
import Button from './button';

function Hero() {
  return (
    <div className="min-h-4/5 bg-Background/Bottom bg-[url('backgroundeffect.png')] bg-no-repeat bg-center bg-cover text-center w-full mt-0 p-2 relative border-Primary/Dark border-solid box-border border-2 rounded-b-3xl">
      <div className="mt-20 lg:mt-0 grid md:grid-cols-2 place-items-center p-0 bg-[url('assets/particle.svg')] bg-no-repeat bg-center bg-cover">
        <div className='flex flex-col text-white md:pb-20'>
          <div className='font-mono flex items-center justify-center py-2 text-8xl lg:text-9xl'>
            Co
            <span className='text-Accent/Light'>Dash</span>
          </div>
          <p className='text-xl justify-center '>/*your personal shorcut to</p>
          <div className='flex items-center justify-center text-xl'>
            <span className='text-Primary/Light'>sharing code</span>
            <span>*/</span>
          </div>
          <div className='flex items-center justify-center '>
            <Link to='/signin'>
              <button className='w-24 h-8 rounded-xl bg-white text-xl text-Primary/Dark m-3 hover:bg-Primary/Dark hover:text-white'>
                Sign in
              </button>
            </Link>
            <Link to='/signup'>
              <button className='w-24 h-8 rounded-xl bg-Accent/Target text-xl text-white m-3 hover:bg-white hover:text-Accent/Target'>
                Sign up
              </button>
            </Link>
          </div>
        </div>
        <img src='preview.png' alt='App Preview' className='w-3/5 md:w-4/5 h-auto flex' />
      </div>
    </div>
  );
}
export default Hero;
