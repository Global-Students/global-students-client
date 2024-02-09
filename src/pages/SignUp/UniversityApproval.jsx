import React, { useState } from 'react';
import {
  submitSignUpInfo,
  verifyAuthCode,
  verifyUniversityEmail,
} from '../../apis/signUp';
import { ReactComponent as EmailIcon } from '../../assets/outgoingMail.svg';
import { ReactComponent as FileIcon } from '../../assets/uploadFile.svg';
import AutnButton from '../../components/Button/AuthButton';
import OrangeButton from '../../components/Button/OrangeButton';
import WhiteButton from '../../components/Button/WhiteButton';
import LightOrangeButtonInput from '../../components/Input/LightOrangeButtonInput';
import Label from '../../components/Label';
import { LABEL, PLACEHOLDER } from '../../constants';

export default function UniversityApproval({
  moveStep,
  signUpInfo,
  setSignUpInfo,
}) {
  const [messgae, setMessage] = useState('');
  const [isSelected, setIsSleceted] = useState('');
  const changeMenu = (event) => setIsSleceted(event.currentTarget.id);
  const [authData, setAuthData] = useState({ email: '', code: '' });
  const handleChange = (event) => {
    const { id, value } = event.target;
    setAuthData((prev) => ({ ...prev, [id]: value }));
  };
  const { email, code } = authData;
  const isPassed = true;

  return (
    <section className='flex flex-col items-center mt-[93px]'>
      <div className='w-[458px] flex flex-col'>
        <h2 className='text-center text-gray-scale-1 text-[24px] font-semibold leading mb-[30px]'>
          인증수단을 선택하세요
        </h2>
        <div className='rounded border border-gray-scale-7-main px-[24px] py-[26px] mb-[15px]'>
          <div className='flex justify-between mb-[60px]'>
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
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label={LABEL.universityEmail} />
              <LightOrangeButtonInput
                id='email'
                value={email}
                buttonText='입력완료'
                placeholder={PLACEHOLDER.universityEmail}
                onChange={handleChange}
                onClick={() => {
                  verifyUniversityEmail({
                    email,
                    university: signUpInfo.hostUniversity,
                  }).then((result) => {
                    if (result) {
                      alert('메일을 보냈습니다.');
                      return;
                    }
                    alert('메일 전송에 실패했습니다.');
                  });
                }}
              />
            </div>
            <div>
              <Label label={LABEL.code} />
              <LightOrangeButtonInput
                id='code'
                value={code}
                buttonText='확인'
                placeholder={PLACEHOLDER.code}
                message={messgae}
                isValid={signUpInfo.verified}
                onChange={handleChange}
                onClick={() => {
                  verifyAuthCode({
                    email,
                    code,
                    university: signUpInfo.hostUniversity,
                  }).then((result) => {
                    if (result) {
                      setSignUpInfo((prev) => ({ ...prev, verified: true }));
                      setMessage('인증에 성공했습니다.');
                      return;
                    }
                    setSignUpInfo((prev) => ({ ...prev, verified: false }));
                    setMessage('인증번호가 유효하지 않습니다.');
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between my-[56px] text'>
        <WhiteButton text='이전' onClick={() => moveStep('signUpInfo')} />
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
