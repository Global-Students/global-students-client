import React, { useState } from 'react';
import { submitSignUpInfo } from '../../apis/signUp';
import { ReactComponent as EmailIcon } from '../../assets/outgoingMail.svg';
import { ReactComponent as FileIcon } from '../../assets/uploadFile.svg';
import AutnButton from '../../components/Button/AuthButton';
import OrangeButton from '../../components/Button/OrangeButton';
import WhiteButton from '../../components/Button/WhiteButton';
import { useSignUpContext } from '../../contexts/SignUpContext';
import EmailApproval from './EmailApproval';
import FileApproval from './FileApproval';

export default function UniversityApproval({ moveStep }) {
  const { signUpInfo } = useSignUpContext();
  const [file, setFile] = useState();
  const [isSelected, setIsSleceted] = useState('');
  const changeMenu = (event) => setIsSleceted(event.currentTarget.name);
  const isPassed = true;

  return (
    <section className='flex flex-col items-center mt-[93px]'>
      <div className='w-[458px] flex flex-col'>
        <h2 className='text-center text-gray-scale-1 text-[24px] font-semibold leading mb-[30px]'>
          인증수단을 선택하세요
        </h2>
        <div className='rounded border border-gray-scale-7-main px-[24px] py-[26px] mb-[15px]'>
          <div className=' mb-[60px]'>
            <div className='flex justify-between'>
              <AutnButton
                name='email'
                text='학교 이메일로 인증하기'
                icon={EmailIcon}
                isSelected={isSelected === 'email'}
                onClick={changeMenu}
              />
              <AutnButton
                name='file'
                text='서류로 인증하기'
                subText='재학증명서, 학생증'
                icon={FileIcon}
                isSelected={isSelected === 'file'}
                onClick={changeMenu}
              />
            </div>
            {isSelected === 'file' && (
              <p className='text-orange-1 text-[15px] text-center font-normal leading mt-[15px]'>
                서류로 인증할 경우 인증 완료까지 2~3일이 소요될 수 있습니다.
              </p>
            )}
          </div>
          {isSelected === 'email' && <EmailApproval />}
          {isSelected === 'file' && (
            <FileApproval file={file} changeFile={setFile} />
          )}
        </div>
      </div>
      <div className='w-full flex justify-between my-[56px] text'>
        <WhiteButton text='이전' onClick={() => moveStep('signUpInfo')} />
        <div className='flex justify-end'>
          <div className='w-[148px] h-[51px] text-[18px]'>
            <OrangeButton
              text='다음'
              onClick={() => submitSignUpInfo(file, signUpInfo, moveStep)}
              disabled={!isPassed}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
