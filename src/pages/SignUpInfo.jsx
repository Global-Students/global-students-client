import React, { useState } from 'react';
import DuplicateCheckButton from '../components/Button/DuplicateCheckButton';
import OrangeButton from '../components/Button/OrangeButton';
import FieldSet from '../components/FieldSet';
import Input from '../components/Input';
import Label from '../components/Label';
import ResetIcon from '../components/ResetIcon';
import ValidationMessage from '../components/ValidationMessage';

export default function SignUpInfo({ moveStep }) {
  const isPassed = true;
  const [signUpInfo, setSignUpInfo] = useState({
    userId: '',
    password: '',
    passwordConfirmation: '',
    name: '',
    birthYear: '',
    birthMonth: '',
    birthDate: '',
    nickname: '',
    nationality: '',
    hostCountry: '',
    hostUniversity: '',
  });
  const updateSignUpInfo = (event) => {
    const { id, value } = event.target;
    setSignUpInfo((prev) => ({ ...prev, [id]: value }));
  };
  const checkPasswordPattern = () =>
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      signUpInfo.password,
    );
  const checkPasswordReEnter = () =>
    signUpInfo.password === signUpInfo.passwordConfirmation;

  return (
    <section className='flex flex-col items-center mt-[94px]'>
      <form className='w-[460px] flex flex-col gap-[90px]'>
        <FieldSet legend='아이디/비밀번호 설정'>
          <div>
            <Label label='아이디' required />
            <Input
              id='userId'
              type='text'
              value={signUpInfo.userId}
              onChange={updateSignUpInfo}
              placeholder='영문소문자숫자, 4~16자'
            >
              <DuplicateCheckButton />
            </Input>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label='비밀번호' required />
              <Input
                id='password'
                type='password'
                value={signUpInfo.password}
                onChange={updateSignUpInfo}
                placeholder='8자 이상의 영문 대소문자/숫자/특수문자'
              >
                <ResetIcon />
              </Input>
              <ValidationMessage
                isShowed={!checkPasswordPattern()}
                message='8자 이상의 영문 대소문자/숫자/특수문자를 사용해주세요.'
                value={signUpInfo.password}
              />
            </div>
            <div>
              <Label label='비밀번호 재입력' required />
              <Input
                id='passwordConfirmation'
                type='password'
                value={signUpInfo.passwordConfirmation}
                onChange={updateSignUpInfo}
                placeholder='8자 이상의 영문 대소문자/숫자/특수문자'
              >
                <ResetIcon />
              </Input>
              <ValidationMessage
                isShowed={!checkPasswordReEnter()}
                message='비밀번호가 틀립니다. 다시 입력해주세요.'
                value={signUpInfo.passwordConfirmation}
              />
            </div>
          </div>
        </FieldSet>
        <FieldSet legend='기본정보 입력'>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label='이름' required />
              <Input
                id='name'
                type='text'
                value={signUpInfo.name}
                onChange={updateSignUpInfo}
                placeholder='이름을 입력해 주세요'
              >
                <ResetIcon />
              </Input>
            </div>
            <div>
              <Label label='생년월일' required />
              <div className='flex justify-between gap-[16px]'>
                <div className='flex-[2_1_0%]'>
                  <Input
                    id='birthYear'
                    type='text'
                    value={signUpInfo.birthYear}
                    onChange={updateSignUpInfo}
                  >
                    <p className=' bg-white text-gray-scale-4 font-light pl-[4px] mr-[19px]'>
                      년
                    </p>
                  </Input>
                </div>
                <div className='flex-1'>
                  <Input
                    id='birthMonth'
                    type='text'
                    value={signUpInfo.birthMonth}
                    onChange={updateSignUpInfo}
                  >
                    <p className='bg-white text-gray-scale-4 font-light pl-[4px] mr-[19px]'>
                      월
                    </p>
                  </Input>
                </div>
                <div className='flex-1'>
                  <Input
                    id='birthDate'
                    type='text'
                    value={signUpInfo.birthDate}
                    onChange={updateSignUpInfo}
                  >
                    <p className='bg-white text-gray-scale-4 font-light pl-[4px] mr-[19px]'>
                      일
                    </p>
                  </Input>
                </div>
              </div>
            </div>
            <div>
              <Label label='닉네임' required />
              <Input
                id='nickname'
                type='text'
                value={signUpInfo.nickname}
                onChange={updateSignUpInfo}
                placeholder='닉네임을 입력해 주세요'
              >
                <DuplicateCheckButton />
              </Input>
            </div>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label='유학국' required />
              <Input
                id='nationality'
                type='text'
                value={signUpInfo.nationality}
                onChange={updateSignUpInfo}
                placeholder='유학국명을 입력해 주세요'
              >
                <ResetIcon />
              </Input>
            </div>
            <div>
              <Label label='학교설정(본교)' required />
              <Input
                id='hostCountry'
                type='text'
                value={signUpInfo.hostCountry}
                onChange={updateSignUpInfo}
                placeholder='본교명을 입력해 주세요'
              >
                <ResetIcon />
              </Input>
            </div>
            <div>
              <Label label='학교설정(교환학생)' required />
              <Input
                id='hostUniversity'
                type='text'
                value={signUpInfo.hostUniversity}
                onChange={updateSignUpInfo}
                placeholder='교환학교명을 입력해 주세요'
              >
                <ResetIcon />
              </Input>
            </div>
          </div>
        </FieldSet>
      </form>
      <div className='w-full flex justify-between my-[46px]'>
        <button
          className='rounded border border-gray-scale-5 py-[14px] w-[148px] shadow-prev-btn text-[18px] text-gray-scale-4 font-semibold leading hover:bg-gray-scale-8'
          type='button'
          onClick={() => moveStep('terms')}
        >
          이전
        </button>
        <OrangeButton
          text='다음'
          textSize={18}
          py={14}
          width={148}
          onClick={() => moveStep('welcome')}
          disabled={!isPassed}
        />
      </div>
    </section>
  );
}
