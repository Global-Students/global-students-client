import React, { useState } from 'react';
import { submitSignUpInfo } from '../../apis/signUp';
import { ReactComponent as EmailIcon } from '../../assets/outgoingMail.svg';
import { ReactComponent as FileIcon } from '../../assets/uploadFile.svg';
import AutnButton from '../../components/Button/AuthButton';
import OrangeButton from '../../components/Button/OrangeButton';

export default function UniversityApproval({ moveStep, signUpInfo }) {
  const [isSelected, setIsSleceted] = useState('');
  const changeMenu = (event) => setIsSleceted(event.currentTarget.id);
  const isPassed = true;

  return (
    <section className='flex flex-col items-center mt-[93px]'>
      <div className='w-[458px] h-[500px] flex flex-col'>
        <h2 className='text-center text-gray-scale-1 text-[24px] font-semibold leading mb-[30px]'>
          인증수단을 선택하세요
        </h2>
        <div className='rounded border border-gray-scale-7-main px-[24px] py-[26px] mb-[15px]'>
          <div className='flex justify-between'>
            <AutnButton
              id='email'
              text='학교 이메일로 인증하기'
              icon={EmailIcon}
              isSelected={isSelected === 'email'}
              onClick={changeMenu}
            />
            <AutnButton
              id='file'
              text='서류로 인증하기'
              subText='재학증명서, 학생증'
              icon={FileIcon}
              isSelected={isSelected === 'file'}
              onClick={changeMenu}
            />
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between my-[56px] text'>
        <button
          className='rounded border border-gray-scale-5 py-[14px] w-[148px] shadow-prev-btn text-[18px] text-gray-scale-4 font-semibold leading hover:bg-gray-scale-8'
          type='button'
          onClick={() => moveStep('signUpInfo')}
        >
          이전
        </button>
        <div className='flex justify-end'>
          <div className='w-[148px] h-[51px] text-[18px]'>
            <OrangeButton
              text='다음'
              onClick={() => {
                submitSignUpInfo(signUpInfo, moveStep);
              }}
              disabled={!isPassed}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
