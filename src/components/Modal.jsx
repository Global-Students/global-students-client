import React from 'react';
import { CONSENTS } from '../constants';
import OrangeButton from './Button/OrangeButton';
import Checkbox from './Input/Checkbox';

export default function Modal({ id, signUpInfo, onChange, onClick }) {
  const { tag, label, script } = CONSENTS.find((consent) => consent.id === id);

  return (
    <section className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-scale-1 bg-opacity-25'>
      <div className='flex flex-col rounded border border-gray-scale-7-main bg-gray-scale-9 p-[36px]'>
        <Checkbox
          id={id}
          isChecked={signUpInfo[id]}
          onChange={onChange}
          tag={tag}
          label={label}
        />
        <pre className='max-h-[671px] w-[821px] overflow-auto whitespace-pre-wrap font-["Pretendard_Variable"] text-gray-scale-3 text-[16px] font-light leading-[27.2px] mt-[35px] mb-[15px]'>
          {script}
        </pre>
        <div className='flex justify-end'>
          <div className='w-[148px] h-[48px] text-[18px]'>
            <OrangeButton text='확인' onClick={onClick} />
          </div>
        </div>
      </div>
    </section>
  );
}
