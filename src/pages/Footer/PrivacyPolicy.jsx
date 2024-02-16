import React from 'react';
import { useNavigate } from 'react-router-dom';
import PRIVACY_POLICY_TEXT from '../../constants/privacyPolicy';

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col w-[1062px] h-[6157px] mt-[26px] mb-[80px]'>
        <div className='flex justify-start'>
          <button type='button' onClick={backButton}>
            <img src='/assets/arrow_back.svg' alt='뒤로 가기' />
          </button>
        </div>
        <div className='flex flex-col'>
          <p className='text-gray-scale-1 text-center text-[26px] font-bold mb-[60px]'>
            개인 정보 처리 방침
          </p>
          <div className='flex flex-col gap-y-[20px]'>
            {PRIVACY_POLICY_TEXT.explanation.map((item) => (
              <div className='text-gray-scale-1 text-base leading-relaxed '>
                <p className='font-medium'>{item.article}</p>
                <pre className='font-["Pretendard_Variable"] font-light whitespace-pre-wrap'>
                  {item.detail}
                </pre>
              </div>
            ))}
            <div className='flex h-[826px] px-[13px] items-center bg-neutral-100 rounded-[5px] border border-gray-scale-7-main'>
              <pre className='font-["Pretendard_Variable"] h-[806px] text-gray-scale-2 text-base font-normal leading-relaxed'>
                {PRIVACY_POLICY_TEXT.list}
              </pre>
            </div>
            <pre className='font-["Pretendard_Variable"] h-[74px] text-gray-scale-1 text-base font-normal leading-relaxed'>
              {PRIVACY_POLICY_TEXT.privacy}
            </pre>
            <div className='flex h-[4128px] px-[13px] items-center bg-neutral-100 rounded-[5px] border border-gray-scale-7-main'>
              <pre className='font-["Pretendard_Variable"] h-[4108px] text-gray-scale-2 text-base font-normal leading-relaxed whitespace-pre-wrap'>
                {PRIVACY_POLICY_TEXT.privacyList}
              </pre>
            </div>
          </div>

          <div />
        </div>
      </div>
    </div>
  );
}
