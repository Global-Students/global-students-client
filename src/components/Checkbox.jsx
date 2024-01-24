import React from 'react';

export default function Checkbox({ id, isChecked, updateCheck, tag, text }) {
  return (
    <div className='flex items-center gap-[10px]'>
      <input
        className='w-[30px] h-[30px] bg-check-circle bg-no-repeat bg-center checked:bg-check-true-circle transition-all cursor-pointer appearance-none'
        id={id}
        type='checkbox'
        checked={isChecked[id]}
        onChange={() => updateCheck(id)}
      />
      <label className='flex items-center gap-[5px] font-medium' htmlFor={id}>
        {tag && (
          <span
            className={`text-[16px] ${
              tag === '필수' ? 'text-orange-main ' : 'text-gray-scale-4'
            }`}
          >{`[${tag}]`}</span>
        )}
        <p className={`${id === 'all' ? 'text-[22px]' : 'text-[20px]'}`}>
          {text}
        </p>
      </label>
    </div>
  );
}
