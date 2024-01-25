import React from 'react';

export default function HeaderIcon({ label }) {
  return (
    <div className='group w-[47px] h-[47px] relative'>
      <img src={`/assets/${label}.svg`} alt={`${label}`} />
      <img
        src={`/assets/${label}Hover.svg`}
        alt={`${label}Hover`}
        className='absolute top-0 left-0 hidden group-hover:block'
      />
      <img
        src={`/assets/${label}HoverPress.svg`}
        alt={`${label}HoverPress`}
        className='absolute top-0 left-0 hidden group-active:block'
      />
    </div>
  );
}
