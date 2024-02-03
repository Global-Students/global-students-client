import React from 'react';
import OrangeButton from '../components/Button/OrangeButton';
import DuplicateCheckInput from '../components/DuplicateCheckInput';
import FieldSet from '../components/FieldSet';
import Input from '../components/Input';
import Label from '../components/Label';
import ResetIcon from '../components/ResetIcon';
import ValidationMessage from '../components/ValidationMessage';

export default function SignUpInfo({
  moveStep,
  signUpInfo: {
    userId,
    password,
    confirmPassword,
    firstName,
    lastName,
    birthYear,
    birthMonth,
    birthDate,
    nickname,
    nationality,
    hostCountry,
    homeUniversity,
    hostUniversity,
  },
  updateSignUpInfo,
}) {
  const checkPasswordPattern = () =>
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  const checkPasswordReEnter = () => password === confirmPassword;
  const isPassed =
    userId &&
    checkPasswordPattern() &&
    checkPasswordReEnter() &&
    firstName &&
    lastName &&
    birthYear &&
    birthMonth &&
    birthDate &&
    nickname &&
    nationality &&
    hostCountry &&
    hostUniversity;

  return (
    <section className='flex flex-col items-center mt-[94px]'>
      <form className='w-[460px] flex flex-col gap-[90px]'>
        <FieldSet legend='아이디/비밀번호 설정'>
          <div>
            <Label label='아이디' required />
            <DuplicateCheckInput
              id='userId'
              value={userId}
              onChange={updateSignUpInfo}
              placeholder='영문소문자숫자, 4~16자'
              apiUrl={`/auth/join/check-id/${userId}`}
              target='아이디'
            />
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label='비밀번호' required />
              <Input
                id='password'
                type='password'
                value={password}
                onChange={updateSignUpInfo}
                placeholder='8자 이상의 영문 대소문자/숫자/특수문자'
              >
                <ResetIcon />
              </Input>
              <ValidationMessage
                isShowed={!checkPasswordPattern()}
                message='8자 이상의 영문 대소문자/숫자/특수문자를 사용해주세요.'
                value={password}
              />
            </div>
            <div>
              <Label label='비밀번호 재입력' required />
              <Input
                id='confirmPassword'
                type='password'
                value={confirmPassword}
                onChange={updateSignUpInfo}
                placeholder='8자 이상의 영문 대소문자/숫자/특수문자'
              >
                <ResetIcon />
              </Input>
              <ValidationMessage
                isShowed={!checkPasswordReEnter()}
                message='비밀번호가 틀립니다. 다시 입력해주세요.'
                value={confirmPassword}
              />
            </div>
          </div>
        </FieldSet>
        <FieldSet legend='기본정보 입력'>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label='이름' required />
              <div className='flex gap-4'>
                <Input
                  id='firstName'
                  type='text'
                  value={firstName}
                  onChange={updateSignUpInfo}
                  placeholder='이름'
                >
                  <ResetIcon />
                </Input>
                <Input
                  id='lastName'
                  type='text'
                  value={lastName}
                  onChange={updateSignUpInfo}
                  placeholder='성'
                >
                  <ResetIcon />
                </Input>
              </div>
            </div>
            <div>
              <Label label='생년월일' required />
              <div className='flex justify-between gap-[16px]'>
                <div className='flex-[2_1_0%]'>
                  <Input
                    id='birthYear'
                    type='text'
                    value={birthYear}
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
                    value={birthMonth}
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
                    value={birthDate}
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
              <DuplicateCheckInput
                id='nickname'
                value={nickname}
                onChange={updateSignUpInfo}
                placeholder='닉네임을 입력해 주세요'
                apiUrl={`/auth/join/check-nickname/${nickname}`}
                target='닉네임'
              />
            </div>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label='본국' required />
              <Input
                id='nationality'
                type='text'
                value={nationality}
                onChange={updateSignUpInfo}
                placeholder='본국명을 입력해 주세요'
              >
                <ResetIcon />
              </Input>
            </div>
            <div>
              <Label label='유학국' required />
              <Input
                id='hostCountry'
                type='text'
                value={hostCountry}
                onChange={updateSignUpInfo}
                placeholder='유학국명을 입력해 주세요'
              >
                <ResetIcon />
              </Input>
            </div>
            <div>
              <Label label='학교설정(본교)' required />
              <Input
                id='homeUniversity'
                type='text'
                value={homeUniversity}
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
                value={hostUniversity}
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
