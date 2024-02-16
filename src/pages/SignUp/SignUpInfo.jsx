import React from 'react';
import OrangeButton from '../../components/Button/OrangeButton';
import WhiteButton from '../../components/Button/WhiteButton';
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
  YEARS,
} from '../../constants';
import {
  COUNTRY_LIST,
  HOME_UNIVERSITY_LIST,
  HOST_UNIVERSITY_LIST,
} from '../../constants/belongTo';
import { useSignUpContext } from '../../contexts/SignUpContext';
import useSignUp from '../../hooks/useSignUp';
import {
  checkPasswordPattern,
  checkPasswordReEnter,
  checkUserIdPattern,
} from '../../utils/checkPattern';

export default function SignUpInfo({ moveStep }) {
  const {
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
    setSignUpInfo,
  } = useSignUpContext();
  const {
    isUniqued,
    message,
    checkIdDuplicate,
    checkNicknameDuplicate,
    resetValidation,
    updatePasswordMessage,
    updateConfirmPasswordMessage,
  } = useSignUp();

  const isPassed =
    isUniqued.userId &&
    isUniqued.nickname &&
    checkPasswordPattern(password) &&
    checkPasswordReEnter(password, confirmPassword) &&
    firstName &&
    lastName &&
    birthYear &&
    birthMonth &&
    birthDate &&
    nationality &&
    homeUniversity &&
    hostCountry &&
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
              disabled={!checkUserIdPattern(userId)}
              message={message.userId}
              isValid={isUniqued.userId}
              onChange={(event) => {
                updateSignUpInfo(event);
                resetValidation(event.target.id);
              }}
              onClick={() => checkIdDuplicate(userId)}
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
                onChange={(event) => {
                  const { value } = event.target;
                  updateSignUpInfo(event);
                  updatePasswordMessage(value);
                  updateConfirmPasswordMessage(value, confirmPassword);
                }}
                onReset={setSignUpInfo}
              />
              <ValidationMessage message={message.password} />
            </div>
            <div>
              <Label label={LABEL.confirmPassword} required />
              <ResetButtonInput
                id='confirmPassword'
                type='password'
                value={confirmPassword}
                placeholder={PLACEHOLDER.password}
                onChange={(event) => {
                  const { value } = event.target;
                  updateSignUpInfo(event);
                  updateConfirmPasswordMessage(password, value);
                }}
                onReset={setSignUpInfo}
              />
              <ValidationMessage message={message.confirmPassword} />
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
                message={message.nickname}
                isValid={isUniqued.nickname}
                onChange={(event) => {
                  updateSignUpInfo(event);
                  resetValidation(event.target.id);
                }}
                onClick={() => checkNicknameDuplicate(nickname)}
              />
            </div>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label={LABEL.nationality} required />
              <OptionInput
                id='nationality'
                value={nationality}
                options={COUNTRY_LIST}
                placeholder={PLACEHOLDER.nationality}
                onChange={updateSignUpInfo}
              />
            </div>
            <div>
              <Label label={LABEL.homeUniversity} required />
              <OptionInput
                id='homeUniversity'
                value={homeUniversity}
                options={HOME_UNIVERSITY_LIST}
                placeholder={PLACEHOLDER.homeUniversity}
                onChange={updateSignUpInfo}
              />
            </div>
            <div>
              <Label label={LABEL.hostCountry} required />
              <OptionInput
                id='hostCountry'
                value={hostCountry}
                options={COUNTRY_LIST}
                placeholder={PLACEHOLDER.hostCountry}
                onChange={updateSignUpInfo}
              />
            </div>
            <div>
              <Label label={LABEL.hostUniversity} required />
              <OptionInput
                id='hostUniversity'
                value={hostUniversity}
                options={HOST_UNIVERSITY_LIST}
                placeholder={PLACEHOLDER.hostUniversity}
                onChange={updateSignUpInfo}
              />
            </div>
          </div>
        </FieldSet>
      </form>
      <div className='w-full flex justify-between my-[46px]'>
        <WhiteButton text='이전' onClick={() => moveStep('terms')} />
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
