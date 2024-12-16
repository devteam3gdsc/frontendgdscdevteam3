import { useState } from 'react';

function TagList() {
  const [buttonStyles, setButtonStyles] = useState<{ bgColor: string; textColor: string }[]>([
    { bgColor: 'bg-Primary/Light', textColor: 'text-Primary/Dark' },
    { bgColor: 'bg-Primary/Light', textColor: 'text-Primary/Dark' },
    { bgColor: 'bg-Primary/Light', textColor: 'text-Primary/Dark' },
    { bgColor: 'bg-Primary/Light', textColor: 'text-Primary/Dark' },
    { bgColor: 'bg-Primary/Light', textColor: 'text-Primary/Dark' },
    { bgColor: 'bg-Primary/Light', textColor: 'text-Primary/Dark' },
  ]);

  const handleButtonClick = (index: number) => {
    setButtonStyles((prevStyles) =>
      prevStyles.map((style, i) =>
        i === index
          ? {
              bgColor:
                style.bgColor === 'bg-Primary/Light' ? 'bg-Primary/Dark' : 'bg-Primary/Light',
              textColor:
                style.textColor === 'text-Primary/Dark'
                  ? 'text-Primary/Light'
                  : 'text-Primary/Dark',
            }
          : style,
      ),
    );
  };

  return (
    <div className='bg-Background/Bottom text-center w-1/6 h-3/4 pl-8 pt-2 mt-8 fixed right-0 border-Primary/Dark border-solid box-border border-2 rounded-l-3xl'>
      <p className='text-left text-white text-xl'>Filter by tags:</p>
      <div>
        {buttonStyles.map((style, index) => (
          <button key={index} className='w-24' onClick={() => handleButtonClick(index)}>
            <div className='flex flex-col m-2'>
              <div className={`${style.bgColor} rounded-3xl`}>
                <p className={`${style.textColor}`}>Tag</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TagList;

