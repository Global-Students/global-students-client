import React from 'react';

export default function Checkbox({ id, isChecked, onChange, tag, label }) {
  return (
    <div className='flex items-center gap-[10px]'>
      <input
        className='w-[30px] h-[30px] bg-check-circle bg-no-repeat bg-center checked:bg-check-true-circle transition-all cursor-pointer appearance-none'
        id={id}
        type='checkbox'
        checked={isChecked}
        onChange={onChange}
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
          {label}
        </p>
      </label>
    </div>
  );
}
