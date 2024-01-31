import React from 'react';
import DuplicateCheckButton from '../components/Button/DuplicateCheckButton';
import OrangeButton from '../components/Button/OrangeButton';
import FieldSet from '../components/FieldSet';
import Input from '../components/Input';
import Label from '../components/Label';
import ResetIcon from '../components/ResetIcon';

export default function SignUpInfo({ moveStep }) {
  const isPassed = true;
  return (
    <section className='w-[850px] flex flex-col items-center m-auto mt-[94px]'>
      <form className='w-[460px] flex flex-col gap-[90px]'>
        <FieldSet legend='아이디/비밀번호 설정'>
          <div>
            <Label label='아이디' required />
            <Input id='id' type='text' placeholder='영문소문자숫자, 4~16자'>
              <DuplicateCheckButton />
            </Input>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label='비밀번호' required />
              <Input
                id='password'
                type='password'
                placeholder='8자 이상의 영문 대소문자/숫자/특수문자'
              >
                <ResetIcon />
              </Input>
            </div>
            <div>
              <Label label='비밀번호 재입력' required />
              <Input
                id='check_password'
                type='password'
                placeholder='8자 이상의 영문 대소문자/숫자/특수문자'
              >
                <ResetIcon />
              </Input>
            </div>
          </div>
        </FieldSet>
        <FieldSet legend='기본정보 입력'>
          <div className='flex flex-col gap-[20px]'>
            <div>
              <Label label='이름' required />
              <Input id='name' type='text' placeholder='이름을 입력해 주세요'>
                <ResetIcon />
              </Input>
            </div>
            <div>
              <Label label='생년월일' required />
              <div className='flex justify-between gap-[16px]'>
                <div className='flex-[2_1_0%]'>
                  <Input id='name' type='number'>
                    <p className=' bg-white text-gray-scale-4 font-light pl-[4px] mr-[19px]'>
                      년
                    </p>
                  </Input>
                </div>
                <div className='flex-1'>
                  <Input id='name' type='number'>
                    <p className='bg-white text-gray-scale-4 font-light pl-[4px] mr-[19px]'>
                      월
                    </p>
                  </Input>
                </div>
                <div className='flex-1'>
                  <Input id='name' type='number'>
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
                id='exchangeCountry'
                type='text'
                placeholder='유학국명을 입력해 주세요'
              >
                <ResetIcon />
              </Input>
            </div>
            <div>
              <Label label='학교설정(본교)' required />
              <Input
                id='mainUniv'
                type='text'
                placeholder='본교명을 입력해 주세요'
              >
                <ResetIcon />
              </Input>
            </div>
            <div>
              <Label label='학교설정(교환학생)' required />
              <Input
                id='exchangeUchool'
                type='text'
                placeholder='교환학교명을 입력해 주세요'
              >
                <ResetIcon />
              </Input>
            </div>
          </div>
        </FieldSet>
      </form>
      <div className='w-[850px] flex justify-between my-[46px]'>
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
