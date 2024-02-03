import React from 'react';
import BirthDayInput from '../components/BirthDayInput';
import OrangeButton from '../components/Button/OrangeButton';
import DuplicateCheckInput from '../components/DuplicateCheckInput';
import FieldSet from '../components/FieldSet';
import Input from '../components/Input';
import Label from '../components/Label';
import ResetIcon from '../components/ResetIcon';
import ValidationMessage from '../components/ValidationMessage';
import useDuplicateCheck from '../hooks/useDuplicateCheck';

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
  const {
    result: userIdResult,
    message: userIdMessage,
    checkDuplicate: checkUserId,
  } = useDuplicateCheck();
  const {
    result: nicknameResult,
    message: nicknameMessage,
    checkDuplicate: checkNickname,
  } = useDuplicateCheck();
  const checkPasswordPattern = () =>
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  const checkPasswordReEnter = () => password === confirmPassword;

  const isPassed =
    userIdResult &&
    checkPasswordPattern() &&
    checkPasswordReEnter() &&
    firstName &&
    lastName &&
    birthYear &&
    birthMonth &&
    birthDate &&
    nicknameResult &&
    nationality &&
    hostCountry &&
    homeUniversity &&
    hostUniversity;

  const years = [
    '2024',
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2010',
    '2009',
    '2008',
    '2007',
    '2006',
    '2005',
    '2004',
    '2003',
    '2002',
    '2001',
    '2000',
    '1999',
    '1998',
    '1997',
  ];
  const months = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];
  const dates = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ];

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
              message={userIdMessage}
              onClick={() =>
                checkUserId(`/auth/join/check-id/${userId}`, '아이디')
              }
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
                  <BirthDayInput
                    id='birthYear'
                    value={birthYear}
                    options={years}
                    onChange={updateSignUpInfo}
                    placeholder='년'
                  />
                </div>
                <div className='flex-1'>
                  <BirthDayInput
                    id='birthMonth'
                    value={birthMonth}
                    options={months}
                    onChange={updateSignUpInfo}
                    placeholder='월'
                  />
                </div>
                <div className='flex-1'>
                  <BirthDayInput
                    id='birthDate'
                    value={birthDate}
                    options={dates}
                    onChange={updateSignUpInfo}
                    placeholder='일'
                  />
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
                message={nicknameMessage}
                onClick={() =>
                  checkNickname(
                    `/auth/join/check-nickname/${nickname}`,
                    '닉네임',
                  )
                }
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
