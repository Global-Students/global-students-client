import React, { useState } from 'react';
import TranslateButton from '../../components/Button/TranslateButton';
import RightPoint from '../../components/RightPoint';
import SignUpInfo from './SignUpInfo';
import TermsAndPrivacy from './TermsAndPrivacy';
import Welcome from './Welcome';

export default function SignUp() {
  const [step, setStep] = useState('terms');
  const moveStep = (nextStep) => setStep(nextStep);
  const [signUpInfo, setSignUpInfo] = useState({
    terms: false,
    privacy: false,
    marketing: false,
    userId: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    birthYear: '',
    birthMonth: '',
    birthDate: '',
    nickname: '',
    nationality: '',
    hostCountry: '',
    homeUniversity: '',
    hostUniversity: '',
  });
  const updateSignUpInfo = (event) => {
    const { id, value, checked } = event.target;
    if (id === 'all') {
      setSignUpInfo((prev) => ({
        ...prev,
        terms: checked,
        privacy: checked,
        marketing: checked,
      }));
      return;
    }

    if (id === 'terms' || id === 'privacy' || id === 'marketing') {
      setSignUpInfo((prev) => ({ ...prev, [id]: checked }));
      return;
    }

    setSignUpInfo((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section className='flex flex-col items-center mt-[25px]'>
      <div className='self-start mb-[25px]'>
        <TranslateButton />
      </div>
      <div className='w-[850px]'>
        <div className='flex justify-between'>
          <RightPoint
            name='terms'
            step={step}
            text='이용약관 및 정보처리방침'
          />
          <RightPoint name='signUpInfo' step={step} text='기본정보 기입' />
          <RightPoint name='welcome' step={step} text='회원가입 완료' />
        </div>
        {step === 'terms' && (
          <TermsAndPrivacy
            moveStep={moveStep}
            signUpInfo={signUpInfo}
            updateSignUpInfo={updateSignUpInfo}
          />
        )}
        {step === 'signUpInfo' && (
          <SignUpInfo
            moveStep={moveStep}
            signUpInfo={signUpInfo}
            updateSignUpInfo={updateSignUpInfo}
            setSignUpInfo={setSignUpInfo}
          />
        )}
        {step === 'welcome' && <Welcome />}
      </div>
    </section>
  );
}
