import React, { useState } from 'react';
import OrangeButton from '../../components/Button/OrangeButton';
import CheckForm from '../../components/CheckForm';
import Checkbox from '../../components/Input/Checkbox';
import Modal from '../../components/Modal';
import { SCRIPTS } from '../../constants';

export default function TermsAndPrivacy({
  moveStep,
  signUpInfo: { terms, privacy, marketing },
  updateSignUpInfo,
}) {
  const [all, setAll] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const isPassed = terms && privacy;

  return (
    <section className='flex flex-col gap-[25px] mt-[74px]'>
      <Checkbox
        id='all'
        isChecked={all}
        onChange={(event) => {
          setAll((prev) => !prev);
          updateSignUpInfo(event);
        }}
        label='전체동의하기'
      />
      <CheckForm
        id='terms'
        isChecked={terms}
        onChange={updateSignUpInfo}
        tag='필수'
        label='글로벌스튜던트 이용약관'
        script={SCRIPTS.terms}
        onClick={() => setIsShow(true)}
      />
      <CheckForm
        id='privacy'
        isChecked={privacy}
        onChange={updateSignUpInfo}
        tag='필수'
        label='개인정보 수집 및 이용'
        script={SCRIPTS.privacy}
      />
      <CheckForm
        id='marketing'
        isChecked={marketing}
        onChange={updateSignUpInfo}
        tag='선택'
        label='이벤트・혜택 정보 수신'
        script={SCRIPTS.event}
      />
      <div className='flex justify-end my-[46px]'>
        <div className='w-[148px] h-[51px] text-[18px]'>
          <OrangeButton
            text='다음'
            onClick={() => moveStep('signUpInfo')}
            disabled={!isPassed}
          />
        </div>
      </div>
      {isShow && (
        <Modal
          id='terms'
          isChecked={terms}
          onChange={updateSignUpInfo}
          tag='필수'
          label='글로벌스튜던트 이용약관'
          script={SCRIPTS.event}
          onClick={() => setIsShow(false)}
        />
      )}
    </section>
  );
}
