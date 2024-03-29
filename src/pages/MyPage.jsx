import React from 'react';
import Infobox from '../components/Infobox';
import PostTable from '../components/PostTable';
import ProfileBox from '../components/ProfileBox';

export default function MyPage() {
  return (
    <div className='flex justify-start items-start my-[100px] gap-6'>
      <ProfileBox nickname='test' bio='test' profileImage='test' />
      <div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[45px]'>
        <Infobox univ='ㅇㅇ대학교' major='기계공학과' pnumber='010-0000-0000' />
        <PostTable tablename='내가 쓴 글' link='/auth/dashboard/my-posts' />
        <PostTable
          tablename='즐겨찾기한 글'
          link='/auth/dashboard/bookmark-posts'
        />
      </div>
    </div>
  );
}
