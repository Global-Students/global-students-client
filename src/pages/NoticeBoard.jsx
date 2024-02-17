import React, { useEffect, useState } from 'react';
import authAxios from '../axios/authAxios';
import UserInfoControl from '../components/UserInfoControl';
import InformText from '../components/InformText';
import Inform from '../components/Inform';
import PopularList from '../components/PopularList';
import Posts from '../components/Posts';

export default function NoticeBoard() {
  const [pageInfo, setPageInfo] = useState({});
  const [notice, setNotice] = useState({});
  const [populars, setPopulars] = useState([]);
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [currentSort, setCurrSort] = useState('latest');

  const boardName = localStorage.getItem('currentBoardName');
  const boardId = localStorage.getItem('currentBoardId');
  const baseurl = `/boards/${boardId}`;

  const getBoard = async () => {
    const params = {
      sort: currentSort,
      page: currentPage,
      q: keyword,
    };

    const queryStr = new URLSearchParams(params).toString();
    const requrl = `${baseurl}/?${queryStr}`;

    try {
      const res = await authAxios({
        method: 'get',
        url: requrl,
      });
      if (res.data.code === 'COMMON200') {
        console.log(baseurl);
        setPageInfo(res.data.result.pageInfo);
        setNotice(res.data.result.noticePost);
        setPopulars(res.data.result.popular);
        setPosts(res.data.result.posts);
      }
    } catch (error) {
      console.log(error);
      /* if (error.data === 'BOARD400_1') {
        alert('잘못된 게시판 ID입니다');
      } else if (error.data === 'BOARD400_2') {
        alert('잘못된 쿼리 형식입니다');
      } else if (error.data === 'BOARD403_1') {
        alert('접근이 거부되었습니다');
      } else if (error.data === 'BOARD404_1') {
        alert('존재하지 않는 게시판입니다');
      } else if (error.data === 'COMMMON401') {
        alert('인증이 필요합니다');
      } else if (error.data === 'COMMON500') {
        alert('서버 에러');
      } else if (error.data === 'COMMON503') {
        alert('일시적인 서버 오류');
      } */
    }
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <div className='flex flex-row h-[1824px] justify-center items-center'>
      <div className='flex w-[1279px] h-[1651px] justify-start gap-x-[24px]'>
        <UserInfoControl />
        <div className='flex flex-col w-[953px] items-center'>
          <InformText
            mb
            translate
            school={boardName}
            borderId={boardId}
            text='우리 학교에 재학 중인 모든 유학생을 만날 수 있습니다.'
          />
          <Inform baseurl={baseurl} notice={notice} />
          <div className='flex flex-col items-center'>
            <PopularList baseurl={baseurl} populars={populars} />
            <Posts
              posts={posts}
              pageInfo={pageInfo}
              setCurrPage={setCurrPage}
              setCurrSort={setCurrSort}
              setKeyword={setKeyword}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
