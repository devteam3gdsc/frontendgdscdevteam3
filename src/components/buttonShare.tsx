function ButtonShare() {
  return (
    <button>
      <div className='bg-Background/Bottom text-center w-1/2 mt-0 ml-96 p-10 relative border-Primary/Dark border-solid box-border border-2 rounded-b-3xl mb-28 flex justify-between sm:p-10 md:p-14 lg:p-16 xl:p-20'>
        <div>
          <img src='profileicon.png' alt='Profile Icon'></img>
        </div>
        <div className='bg-Background/Middle rounded-3xl h-14 w-3/4 py-4 pl-4'>
          <p className='text-left text-Primary/Light text-l'>Share your code...</p>
        </div>
      </div>
    </button>
  );
}

export default ButtonShare;
