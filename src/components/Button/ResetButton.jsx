import React from 'react';

export default function ResetButton({ id, onReset }) {
  return (
    <button
      className='w-[22px] h-[22px] bg-reset bg-no-repeat bg-center mr-[22px] cursor-pointer hover:scale-110 transition-all'
      type='button'
      onClick={() => {
        onReset((prev) => ({ ...prev, [id]: '' }));
      }}
    >
      {' '}
    </button>
  );
}
