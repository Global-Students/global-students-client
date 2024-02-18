import React, { useState, useEffect } from 'react';
import authAxios from '../axios/authAxios';
import Infobox from '../components/Infobox';
import PostTable from '../components/PostTable';
import ProfileBox from '../components/ProfileBox';

export default function MyPage() {
  const [data, setData] = useState({});
  useEffect(() => {
    authAxios.get(`/mypage`).then((res) => {
      setData(res.data.result);
    });
  }, []);

  return (
    <div className='flex justify-start items-start my-[100px] gap-6'>
      <ProfileBox nickname={data.nickname} bio={data.introduction} profileImage={data.profile_photo} backgroundImage={data.background_photo} />
      <div className='flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[45px]'>
        <Infobox univ={data.host_university} major={data.major} pnumber={data.phone} />
        <PostTable tablename='내가 쓴 글' link='/auth/dashboard/my-posts' />
        <PostTable
          tablename='즐겨찾기한 글'
          link='/auth/dashboard/bookmark-posts'
        />
      </div>
    </div>
  );
}
