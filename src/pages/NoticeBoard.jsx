import React from 'react';
import MyProfileControl from '../components/MyProfileControl';
import InformText from '../components/InformText';
import Inform from '../components/Inform';
import PopularLists from '../components/PopularLists';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import SearchInput from '../components/SearchInput';

export default function NoticeBoard() {
  return (
    <div className='flex flex-row h-[1824px] justify-center items-center'>
      <div className='flex w-[1279px] h-[1651px] justify-start gap-x-[24px]'>
        <MyProfileControl />
        <div className='flex flex-col w-[953px] items-center'>
          <InformText
            school='Hanyang'
            borderId='All'
            text='우리 학교에 재학 중인 모든 유학생을 만날 수 있습니다.'
          />
          <Inform />
          <div className='flex flex-col items-center'>
            <PopularLists />
            <Posts />
            <Pagination />
          </div>
          <SearchInput />
          <div />
        </div>
      </div>
    </div>
  );
}
