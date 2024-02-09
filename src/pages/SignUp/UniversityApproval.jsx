import React from 'react';
import { submitSignUpInfo } from '../../apis/signUp';
import OrangeButton from '../../components/Button/OrangeButton';

export default function UniversityApproval({ moveStep, signUpInfo }) {
  const isPassed = true;

  return (
    <section>
      <div className='w-full flex justify-between my-[46px]'>
        <button
          className='rounded border border-gray-scale-5 py-[14px] w-[148px] shadow-prev-btn text-[18px] text-gray-scale-4 font-semibold leading hover:bg-gray-scale-8'
          type='button'
          onClick={() => moveStep('signUpInfo')}
        >
          이전
        </button>
        <OrangeButton
          text='다음'
          textSize={18}
          py={14}
          width={148}
          onClick={() => {
            submitSignUpInfo(signUpInfo, moveStep);
          }}
          disabled={!isPassed}
        />
      </div>
    </section>
  );
}
