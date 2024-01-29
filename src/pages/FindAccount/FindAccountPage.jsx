import React, { useState } from 'react';
import TranslateButton from '../../components/Button/TranslateButton';
import FindId from './FindId';
import FindPassword from './FindPassword';

export default function FindAccountPage() {
  const [tabState, setTabState] = useState('id');
  const selectedStyle =
    'w-full bg-[rgba(255,116,61,0.75)] rounded-t-[14px] border-b-[3px] border-orange-1 text-white text-[18px] font-semibold leading py-[18px]';
  const defaultStyle =
    'w-full bg-gray-scale-8 rounded-t-[14px] border-b border-gray-scale-5 text-gray-scale-4 text-[18px] font-semibold leading py-[18px] shadow-[0px_5px_30px_-15px_rgba(0,0,0,0.20)]';

  return (
    <section className='w-[460px] mt-[120px] m-auto'>
      <div className='mb-3'>
        <TranslateButton />
      </div>
      <div>
        <div className='w-full flex'>
          <button
            className={`${tabState === 'id' ? selectedStyle : defaultStyle}`}
            onClick={() => setTabState('id')}
            type='button'
          >
            아이디 찾기
          </button>
          <button
            className={`${tabState === 'pw' ? selectedStyle : defaultStyle}`}
            onClick={() => setTabState('pw')}
            type='button'
          >
            비밀번호 찾기
          </button>
        </div>
        {tabState === 'id' && <FindId />}
        {tabState === 'pw' && <FindPassword />}
      </div>
    </section>
  );
}
