import React from 'react';
import BirthDayInput from '../components/BirthDayInput';
import OrangeButton from '../components/Button/OrangeButton';
import DuplicateCheckInput from '../components/DuplicateCheckInput';
import FieldSet from '../components/FieldSet';
import Input from '../components/Input';
import Label from '../components/Label';
import ResetIcon from '../components/ResetIcon';
import ValidationMessage from '../components/ValidationMessage';
import {
  API_PATH,
  DATES,
  LABEL,
  LEGEND,
  MONTHS,
  PLACEHOLDER,
  REGEX,
  YEARS,
} from '../constants';
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
  const checkPasswordPattern = () => REGEX.passwordPattern.test(password);
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

  return (
    <section className='flex flex-col items-center mt-[94px]'>
      <form className='w-[460px] flex flex-col gap-[90px]'>
        <FieldSet legend={LEGEND.idPassword}>
          <div>
            <Label label={LABEL.id} required />
            <DuplicateCheckInput
              id='userId'
              value={userId}
              onChange={updateSignUpInfo}
              placeholder={PLACEHOLDER.id}
              message={userIdMessage}
              onClick={() =>
                checkUserId(API_PATH.checkUserId(userId), '아이디')
              }
            />
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label={LABEL.password} required />
              <Input
                id='password'
                type='password'
                value={password}
                onChange={updateSignUpInfo}
                placeholder={PLACEHOLDER.password}
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
              <Label label={LABEL.confirmPassword} required />
              <Input
                id='confirmPassword'
                type='password'
                value={confirmPassword}
                onChange={updateSignUpInfo}
                placeholder={PLACEHOLDER.password}
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
        <FieldSet legend={LEGEND.defaultInfo}>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label={LABEL.name} required />
              <div className='flex gap-4'>
                <Input
                  id='firstName'
                  type='text'
                  value={firstName}
                  onChange={updateSignUpInfo}
                  placeholder={PLACEHOLDER.firstName}
                >
                  <ResetIcon />
                </Input>
                <Input
                  id='lastName'
                  type='text'
                  value={lastName}
                  onChange={updateSignUpInfo}
                  placeholder={PLACEHOLDER.lastName}
                >
                  <ResetIcon />
                </Input>
              </div>
            </div>
            <div>
              <Label label={LABEL.birthDay} required />
              <div className='flex justify-between gap-[16px]'>
                <div className='flex-[2_1_0%]'>
                  <BirthDayInput
                    id='birthYear'
                    value={birthYear}
                    options={YEARS}
                    onChange={updateSignUpInfo}
                    placeholder={PLACEHOLDER.year}
                  />
                </div>
                <div className='flex-1'>
                  <BirthDayInput
                    id='birthMonth'
                    value={birthMonth}
                    options={MONTHS}
                    onChange={updateSignUpInfo}
                    placeholder={PLACEHOLDER.month}
                  />
                </div>
                <div className='flex-1'>
                  <BirthDayInput
                    id='birthDate'
                    value={birthDate}
                    options={DATES}
                    onChange={updateSignUpInfo}
                    placeholder={PLACEHOLDER.date}
                  />
                </div>
              </div>
            </div>
            <div>
              <Label label={LABEL.nickname} required />
              <DuplicateCheckInput
                id='nickname'
                value={nickname}
                onChange={updateSignUpInfo}
                placeholder={PLACEHOLDER.nickname}
                message={nicknameMessage}
                onClick={() =>
                  checkNickname(API_PATH.checkNickname(nickname), '닉네임')
                }
              />
            </div>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label={LABEL.nationality} required />
              <Input
                id='nationality'
                type='text'
                value={nationality}
                onChange={updateSignUpInfo}
                placeholder={PLACEHOLDER.nationality}
              >
                <ResetIcon />
              </Input>
            </div>
            <div>
              <Label label={LABEL.hostCountry} required />
              <Input
                id='hostCountry'
                type='text'
                value={hostCountry}
                onChange={updateSignUpInfo}
                placeholder={PLACEHOLDER.hostCountry}
              >
                <ResetIcon />
              </Input>
            </div>
            <div>
              <Label label={LABEL.homeUniversity} required />
              <Input
                id='homeUniversity'
                type='text'
                value={homeUniversity}
                onChange={updateSignUpInfo}
                placeholder={PLACEHOLDER.homeUniversity}
              >
                <ResetIcon />
              </Input>
            </div>
            <div>
              <Label label={LABEL.hostUniversity} required />
              <Input
                id='hostUniversity'
                type='text'
                value={hostUniversity}
                onChange={updateSignUpInfo}
                placeholder={PLACEHOLDER.hostUniversity}
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
