import React from 'react';
import submitSignUpInfo from '../../apis/signUp';
import OrangeButton from '../../components/Button/OrangeButton';
import FieldSet from '../../components/FieldSet';
import BirthDayInput from '../../components/Input/BirthDayInput';
import DuplicateCheckInput from '../../components/Input/DuplicateCheckInput';
import ResetButtonInput from '../../components/Input/ResetButtonInput';
import Label from '../../components/Label';
import ValidationMessage from '../../components/ValidationMessage';
import {
  API_PATH,
  DATES,
  LABEL,
  LEGEND,
  MONTHS,
  PLACEHOLDER,
  REGEX,
  YEARS,
} from '../../constants';
import useDuplicateCheck from '../../hooks/useDuplicateCheck';

export default function SignUpInfo({
  moveStep,
  signUpInfo,
  updateSignUpInfo,
  setSignUpInfo,
}) {
  const {
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
  } = signUpInfo;
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
  const checkUserIdPattern = () => REGEX.userIdPattern.test(userId);
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
              onClick={() => {
                if (checkUserIdPattern()) {
                  checkUserId(API_PATH.checkUserId(userId), '아이디');
                }
              }}
            />
            <ValidationMessage
              isShowed={!checkUserIdPattern()}
              message='4자 이상 16자 이하의 영소문사/숫자를 사용해주세요.'
              value={userId}
            />
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label={LABEL.password} required />
              <ResetButtonInput
                id='password'
                type='password'
                value={password}
                placeholder={PLACEHOLDER.password}
                onChange={updateSignUpInfo}
                onReset={setSignUpInfo}
              />
              <ValidationMessage
                isShowed={!checkPasswordPattern()}
                message='8자 이상의 영문 대소문자/숫자/특수문자를 사용해주세요.'
                value={password}
              />
            </div>
            <div>
              <Label label={LABEL.confirmPassword} required />
              <ResetButtonInput
                id='confirmPassword'
                type='password'
                value={confirmPassword}
                placeholder={PLACEHOLDER.password}
                onChange={updateSignUpInfo}
                onReset={setSignUpInfo}
              />
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
                <div className='flex-1'>
                  <ResetButtonInput
                    id='firstName'
                    type='text'
                    value={firstName}
                    placeholder={PLACEHOLDER.firstName}
                    onChange={updateSignUpInfo}
                    onReset={setSignUpInfo}
                  />
                </div>
                <div className='flex-1'>
                  <ResetButtonInput
                    id='lastName'
                    type='text'
                    value={lastName}
                    placeholder={PLACEHOLDER.lastName}
                    onChange={updateSignUpInfo}
                    onReset={setSignUpInfo}
                  />
                </div>
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
              <ResetButtonInput
                id='nationality'
                type='text'
                value={nationality}
                placeholder={PLACEHOLDER.nationality}
                onChange={updateSignUpInfo}
                onReset={setSignUpInfo}
              />
            </div>
            <div>
              <Label label={LABEL.hostCountry} required />
              <ResetButtonInput
                id='hostCountry'
                type='text'
                value={hostCountry}
                placeholder={PLACEHOLDER.hostCountry}
                onChange={updateSignUpInfo}
                onReset={setSignUpInfo}
              />
            </div>
            <div>
              <Label label={LABEL.homeUniversity} required />
              <ResetButtonInput
                id='homeUniversity'
                type='text'
                value={homeUniversity}
                placeholder={PLACEHOLDER.homeUniversity}
                onChange={updateSignUpInfo}
                onReset={setSignUpInfo}
              />
            </div>
            <div>
              <Label label={LABEL.hostUniversity} required />
              <ResetButtonInput
                id='hostUniversity'
                type='text'
                value={hostUniversity}
                placeholder={PLACEHOLDER.hostUniversity}
                onChange={updateSignUpInfo}
                onReset={setSignUpInfo}
              />
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
          onClick={() => {
            submitSignUpInfo(signUpInfo, moveStep);
          }}
          disabled={!isPassed}
        />
      </div>
    </section>
  );
}
