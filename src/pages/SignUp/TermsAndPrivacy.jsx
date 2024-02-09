import React, { useState } from 'react';
import OrangeButton from '../../components/Button/OrangeButton';
import CheckForm from '../../components/CheckForm';
import Checkbox from '../../components/Input/Checkbox';
import Modal from '../../components/Modal';
import { CONSENTS } from '../../constants';

export default function TermsAndPrivacy({
  moveStep,
  signUpInfo,
  updateSignUpInfo,
}) {
  const [all, setAll] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const { terms, privacy } = signUpInfo;
  const isPassed = terms && privacy;
  const [modalId, setModalId] = useState('');

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
      {CONSENTS.map((conesnt) => {
        const { id, tag, label, script } = conesnt;
        return (
          <CheckForm
            key={id}
            id={id}
            isChecked={signUpInfo[id]}
            onChange={updateSignUpInfo}
            tag={tag}
            label={label}
            script={script}
            onClick={() => {
              setModalId(id);
              setIsShow(true);
            }}
          />
        );
      })}

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
          id={modalId}
          signUpInfo={signUpInfo}
          onChange={updateSignUpInfo}
          onClick={() => setIsShow(false)}
        />
      )}
    </section>
  );
}
