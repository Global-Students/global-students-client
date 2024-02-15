import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileBox from '../components/ProfileBox';
import PostTable from '../components/PostTable';
import Infobox from '../components/Infobox';
import URL from '../constants/testServer';

export default function MyPage() {
  const [data, setData] = useState([]);
  // const userId = localStorage.getItem('userId');
  const userId = "00";
  // const accessToken = localStorage.getItem('token');

  useEffect(() => { 
    async function fetchData() {
      try {
        const response = await axios.get(`${URL}/mypage?userId=${userId}`, {
          // headers: { Authorization: accessToken }
        });
        setData(response.data.result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

    return (
  <div className="flex justify-start items-start my-[100px] gap-6">
    <ProfileBox nickname={data.nickname} bio={data.introduction} profileImage={data.profile_photo} />
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[45px]">
      <Infobox univ={data.host_university} major={data.major} pnumber={data.phone}/>
      <PostTable tablename="내가 쓴 글" link="/dashboard/myPosts"/>
      <PostTable tablename="즐겨찾기한 글" link="/dashboard/bookmarkPosts" />
    </div>
  </div>
    );
}
