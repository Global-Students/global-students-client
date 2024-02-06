import React from 'react';
import InformText from './InformText';
import Posts from './Posts';

export default function BottomPost() {
  return (
    <div className='flex flex-col'>
      <InformText
        translate={false}
        school='Hanyang'
        borderId='All'
        text='우리 학교에 재학 중인 모든 유학생을 만날 수 있습니다.'
      />
      <Posts />
    </div>
  );
}
