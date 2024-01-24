import React from 'react';

export default function RightPoint({ name, step, text }) {
  return (
    <div className='relative w-[261px]'>
      <img
        className='w-full'
        src={`/assets/right_point_${step === name ? 'select' : 'default'}.svg`}
        alt='SVG'
      />
      <p
        className={`absolute ${
          step === name ? 'text-orange-main' : 'text-gray-scale-3'
        } text-center font-medium break-keep left-1/2 top-1/2 translate-x-[-60%] translate-y-[-50%]`}
      >
        {text}
      </p>
    </div>
  );
}
