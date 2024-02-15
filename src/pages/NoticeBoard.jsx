import React from 'react';
import UserInfoControl from '../components/UserInfoControl';
import InformText from '../components/InformText';
import Inform from '../components/Inform';
import PopularList from '../components/PopularList';
import Posts from '../components/Posts';

export default function NoticeBoard() {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-row h-[1824px] justify-center items-center'>
        <div className='flex w-[1279px] h-[1651px] justify-start gap-x-[24px]'>
          <UserInfoControl />
          <div className='flex flex-col w-[953px] items-center'>
            <InformText
              mb
              translate
              school='Hanyang'
              borderId='All'
              text='우리 학교에 재학 중인 모든 유학생을 만날 수 있습니다.'
            />
            <Inform />
            <div className='flex flex-col items-center'>
              <PopularList />
              <Posts />
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}
