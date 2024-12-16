function Feature() {
  return (
    <>
      <div className="h-[410px] bg-Background/Bottom my-20 bg-[url('assets/particle.svg')] bg-no-repeat bg-center px-5 md:px-10 grid grid-cols-2">
        <img
          src='f1.jpeg'
          alt='Illustration1'
          className='w-full h-full object-cover overflow-hidden border-l-2 border-Primary/Dark'
        />
        <div className='flex flex-col text-white justify-self-start self-center space-y-1 pl-10 text-xl md:text-2xl'>
          <p>
            {' '}
            Join in a community for <span className='text-Primary/Light'>coders</span> to{' '}
            <span className='text-Accent/Target'>share</span>, explore and get involved in{' '}
            <span className='text-Primary/Light'>your favorite topics</span>.
          </p>
        </div>
      </div>

      <div className="h-[410px] bg-Background/Bottom my-20 bg-[url('assets/particle.svg')] bg-no-repeat bg-center px-5 md:px-10 grid grid-cols-2">
        <div className='flex flex-col text-white justify-self-end self-center space-y-1 pr-10 text-xl md:text-2xl'>
          <p className='text-right'>
            Surfing <span className='text-Accent/Target'>social media</span> is now ideally
            integrated with <span className='text-Primary/Light'>code learning</span> and{' '}
            <span className='text-Primary/Light'>sharing</span>.
          </p>
        </div>
        <img
          src='f2.jpg'
          alt='Illustration2'
          className='w-full h-full object-cover overflow-hidden border-r-2 border-Primary/Dark'
        />
      </div>
    </>
  );
}
export default Feature;
