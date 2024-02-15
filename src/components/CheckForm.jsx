import React from 'react';
import Checkbox from './Input/Checkbox';

export default function CheckForm({
  id,
  isChecked,
  onChange,
  tag,
  label,
  script,
  onClick,
}) {
  return (
    <article className='font-light'>
      <div className='flex justify-between mb-[10px]'>
        <Checkbox
          id={id}
          isChecked={isChecked}
          onChange={onChange}
          tag={tag}
          label={label}
        />
        <button
          className='text-[18px] text-gray-scale-4'
          type='button'
          onClick={onClick}
        >
          {'전체>'}
        </button>
      </div>
      <div className='max-h-[219px] overflow-hidden border border-gray-scale-6 rounded-[8px] p-[26px] pb-0'>
        <pre className='whitespace-pre-wrap font-["Pretendard_Variable"] text-gray-scale-3'>
          {script}
        </pre>
      </div>
    </article>
  );
}
