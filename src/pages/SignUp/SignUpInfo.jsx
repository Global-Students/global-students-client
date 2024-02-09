import React, { useState } from 'react';
import { checkIdDuplicate, checkNicknameDuplicate } from '../../apis/signUp';
import OrangeButton from '../../components/Button/OrangeButton';
import FieldSet from '../../components/FieldSet';
import LightOrangeButtonInput from '../../components/Input/LightOrangeButtonInput';
import OptionInput from '../../components/Input/OptionInput';
import ResetButtonInput from '../../components/Input/ResetButtonInput';
import Label from '../../components/Label';
import ValidationMessage from '../../components/ValidationMessage';
import {
  DATES,
  LABEL,
  LEGEND,
  MONTHS,
  PLACEHOLDER,
  REGEX,
  YEARS,
} from '../../constants';

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
  const [isUniqued, setIsUniqued] = useState({
    userId: false,
    nickname: false,
  });
  const [message, setMessage] = useState({
    userIdPattern: '',
    userIdDuplication: '',
    passwordPattern: '',
    passwordReEntry: '',
    nicknameDuplication: '',
    emailVerification: '',
  });
  const checkUserIdPattern = (value) => REGEX.userIdPattern.test(value);
  const checkPasswordPattern = (value) => REGEX.passwordPattern.test(value);
  const checkPasswordReEnter = (value) => password === value;

  const isPassed =
    isUniqued.userId &&
    checkPasswordPattern(password) &&
    checkPasswordReEnter(confirmPassword) &&
    firstName &&
    lastName &&
    birthYear &&
    birthMonth &&
    birthDate &&
    isUniqued.nickname &&
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
            <LightOrangeButtonInput
              id='userId'
              value={userId}
              placeholder={PLACEHOLDER.id}
              buttonText='중복확인'
              message={message.userIdDuplication}
              isValid={isUniqued.userId}
              onChange={(event) => {
                updateSignUpInfo(event);
                setMessage((prev) => ({
                  ...prev,
                  userIdPattern: `${
                    checkUserIdPattern(event.target.value) ||
                    event.target.value === ''
                      ? ''
                      : '4자 이상 16자 이하의 영소문사/숫자를 사용해주세요.'
                  }`,
                  userIdDuplication: '',
                }));
                setIsUniqued((prev) => ({ ...prev, userId: false }));
              }}
              onClick={() => {
                if (checkUserIdPattern(userId)) {
                  checkIdDuplicate(userId).then((result) => {
                    if (result) {
                      setIsUniqued((prev) => ({ ...prev, userId: true }));
                      setMessage((prev) => ({
                        ...prev,
                        userIdDuplication: '사용할 수 있는 아이디입니다.',
                      }));
                      return;
                    }
                    setIsUniqued((prev) => ({ ...prev, userId: false }));
                    setMessage((prev) => ({
                      ...prev,
                      userIdDuplication: '사용할 수 없는 아이디입니다.',
                    }));
                  });
                }
              }}
            />
            <ValidationMessage message={message.userIdPattern} />
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label={LABEL.password} required />
              <ResetButtonInput
                id='password'
                type='password'
                value={password}
                placeholder={PLACEHOLDER.password}
                onChange={(event) => {
                  updateSignUpInfo(event);
                  setMessage((prev) => ({
                    ...prev,
                    passwordPattern: `${
                      checkPasswordPattern(event.target.value) ||
                      event.target.value === ''
                        ? ''
                        : '8자 이상의 영문 대소문자/숫자/특수문자를 사용해주세요.'
                    }`,
                  }));
                }}
                onReset={setSignUpInfo}
              />
              <ValidationMessage message={message.passwordPattern} />
            </div>
            <div>
              <Label label={LABEL.confirmPassword} required />
              <ResetButtonInput
                id='confirmPassword'
                type='password'
                value={confirmPassword}
                placeholder={PLACEHOLDER.password}
                onChange={(event) => {
                  updateSignUpInfo(event);
                  setMessage((prev) => ({
                    ...prev,
                    passwordReEntry: `${
                      checkPasswordReEnter(event.target.value) ||
                      event.target.value === ''
                        ? ''
                        : '비밀번호가 틀립니다. 다시 입력해주세요.'
                    }`,
                  }));
                }}
                onReset={setSignUpInfo}
              />
              <ValidationMessage message={message.passwordReEntry} />
            </div>
          </div>
        </FieldSet>
        <FieldSet legend={LEGEND.defaultInfo}>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label={LABEL.lastName} required />
              <ResetButtonInput
                id='lastName'
                type='text'
                value={lastName}
                placeholder={PLACEHOLDER.lastName}
                onChange={updateSignUpInfo}
                onReset={setSignUpInfo}
              />
            </div>
            <div>
              <Label label={LABEL.firstName} required />
              <ResetButtonInput
                id='firstName'
                type='text'
                value={firstName}
                placeholder={PLACEHOLDER.firstName}
                onChange={updateSignUpInfo}
                onReset={setSignUpInfo}
              />
            </div>
            <div>
              <Label label={LABEL.birthDay} required />
              <div className='flex justify-between gap-[16px]'>
                <div className='flex-[2_1_0%]'>
                  <OptionInput
                    id='birthYear'
                    value={birthYear}
                    options={YEARS}
                    placeholder='----'
                    onChange={updateSignUpInfo}
                  >
                    {PLACEHOLDER.year}
                  </OptionInput>
                </div>
                <div className='flex-1'>
                  <OptionInput
                    id='birthMonth'
                    value={birthMonth}
                    options={MONTHS}
                    placeholder='----'
                    onChange={updateSignUpInfo}
                  >
                    {PLACEHOLDER.month}
                  </OptionInput>
                </div>
                <div className='flex-1'>
                  <OptionInput
                    id='birthDate'
                    value={birthDate}
                    options={DATES}
                    placeholder='----'
                    onChange={updateSignUpInfo}
                  >
                    {PLACEHOLDER.date}
                  </OptionInput>
                </div>
              </div>
            </div>
            <div>
              <Label label={LABEL.nickname} required />
              <LightOrangeButtonInput
                id='nickname'
                value={nickname}
                placeholder={PLACEHOLDER.nickname}
                buttonText='중복확인'
                message={message.nicknameDuplication}
                isValid={isUniqued.nickname}
                onChange={(event) => {
                  updateSignUpInfo(event);
                  setIsUniqued((prev) => ({ ...prev, nickname: false }));
                  setMessage((prev) => ({
                    ...prev,
                    nicknameDuplication: '',
                  }));
                }}
                onClick={() =>
                  checkNicknameDuplicate(nickname).then((result) => {
                    if (result) {
                      setIsUniqued((prev) => ({ ...prev, nickname: true }));
                      setMessage((prev) => ({
                        ...prev,
                        nicknameDuplication: '사용할 수 있는 닉네임입니다.',
                      }));
                      return;
                    }
                    setIsUniqued((prev) => ({ ...prev, nickname: false }));
                    setMessage((prev) => ({
                      ...prev,
                      nicknameDuplication: '사용할 수 없는 닉네임입니다.',
                    }));
                  })
                }
              />
            </div>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label={LABEL.nationality} required />
              <OptionInput
                id='nationality'
                value={nationality}
                options={['나라1', '나라2', '나라3']}
                placeholder={PLACEHOLDER.nationality}
                onChange={updateSignUpInfo}
              />
            </div>
            <div>
              <Label label={LABEL.homeUniversity} required />
              <OptionInput
                id='homeUniversity'
                value={homeUniversity}
                options={['학교1', '학교2', '학교3']}
                placeholder={PLACEHOLDER.homeUniversity}
                onChange={updateSignUpInfo}
              />
            </div>
            <div>
              <Label label={LABEL.hostCountry} required />
              <OptionInput
                id='hostCountry'
                value={hostCountry}
                options={['나라1', '나라2', '나라3']}
                placeholder={PLACEHOLDER.hostCountry}
                onChange={updateSignUpInfo}
              />
            </div>
            <div>
              <Label label={LABEL.hostUniversity} required />
              <OptionInput
                id='hostUniversity'
                value={hostUniversity}
                options={['학교1', '학교2', '학교3']}
                placeholder={PLACEHOLDER.hostUniversity}
                onChange={updateSignUpInfo}
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
        <div className='flex justify-end'>
          <div className='w-[148px] h-[51px] text-[18px]'>
            <OrangeButton
              text='다음'
              onClick={() => moveStep('universityApproval')}
              disabled={!isPassed}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
