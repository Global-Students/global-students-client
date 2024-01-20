import React, { useState } from 'react';
import RightPoint from '../components/RightPoint';
import SignUpInfo from './SignUpInfo';
import TermsAndPrivacy from './TermsAndPrivacy';
import Welcome from './Welcome';

export default function Join() {
  const [step, setStep] = useState('terms');
  const moveStep = (nextStep) => setStep(nextStep);
  return (
    <>
      <div className='w-[850px] flex justify-between m-auto'>
        <RightPoint name='terms' step={step} text='이용약관 및 정보처리방침' />
        <RightPoint name='signUpInfo' step={step} text='기본정보 기입' />
        <RightPoint name='welcome' step={step} text='회원가입 완료' />
      </div>
      {step === 'terms' && <TermsAndPrivacy moveStep={moveStep} />}
      {step === 'signUpInfo' && <SignUpInfo moveStep={moveStep} />}
      {step === 'welcome' && <Welcome />}
    </>
  );
}
