import React from 'react';

export default function CheckboxPost({ id, isChecked, updateCheck, tag, text }) {
  return (
    <div className='flex items-center gap-[10px] text-gray-scale-6 border-b py-[10px] border-gray-scale-7'>

      <label className='flex items-center gap-[5px] font-medium cursor-pointer' htmlFor={id}>
        {tag && (
          <span
            className={`text-[16px] ${
              tag === '익명' && isChecked ? 'text-orange-main ' : 'text-gray-scale-4'
            }`}
          >{`[${tag}]`}</span>
        )}
        <p className={`${id === 'anonymous' && isChecked ? 'text-[22px]' : 'text-[22px] text-orange-main'}`}>
          {text}
        </p>
      </label>
      
      <input
        className='w-[30px] h-[30px] bg-check-circle bg-no-repeat bg-center checked:bg-check-true-circle transition-all cursor-pointer appearance-none'
        id={id}
        type='checkbox'
        checked={isChecked[id]}
        onChange={() => updateCheck(id)}
      />
    </div>
  );
}


