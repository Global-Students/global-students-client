import React from 'react';

export default function CheckForm({ children }) {
  return (
    <article className='font-light'>
      <div className='flex justify-between mb-[10px]'>
        {children[0]}
        <a className='text-[18px] text-gray-scale-4' href='/'>
          {'전체>'}
        </a>
      </div>
      <div className='border border-gray-scale-6 rounded-[8px] p-[26px]'>
        <pre className='font-["Pretendard_Variable"] text-gray-scale-3 line-clamp-6'>
          {children[1]}
        </pre>
      </div>
    </article>
  );
}
