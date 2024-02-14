import React, { useState } from 'react';
import TranslateButton from '../../components/Button/TranslateButton';
import RightPoint from '../../components/RightPoint';
import { SignUpContextProvider } from '../../contexts/SignUpContext';
import SignUpInfo from './SignUpInfo';
import TermsAndPrivacy from './TermsAndPrivacy';
import UniversityApproval from './UniversityApproval';
import Welcome from './Welcome';

export default function SignUp() {
  const [step, setStep] = useState('terms');
  const moveStep = (nextStep) => setStep(nextStep);

  return (
    <SignUpContextProvider>
      <section className='flex flex-col items-center mt-[25px]'>
        <div className='self-start mb-[25px]'>
          <TranslateButton />
        </div>
        <div className='flex justify-between gap-[25px]'>
          <RightPoint
            name='terms'
            step={step}
            text='이용약관 및 정보처리방침'
          />
          <RightPoint name='signUpInfo' step={step} text='기본정보 기입' />
          <RightPoint
            name='universityApproval'
            step={step}
            text='학교 인증하기'
          />
          <RightPoint name='welcome' step={step} text='회원가입 완료' />
        </div>
        <div className='w-[850px]'>
          {step === 'terms' && <TermsAndPrivacy moveStep={moveStep} />}
          {step === 'signUpInfo' && <SignUpInfo moveStep={moveStep} />}
          {step === 'universityApproval' && (
            <UniversityApproval moveStep={moveStep} />
          )}
          {step === 'welcome' && <Welcome />}
        </div>
      </section>
    </SignUpContextProvider>
  );
}
