import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserInfoControl from '../components/UserInfoControl';
import InformText from '../components/InformText';
import Inform from '../components/Inform';
import PopularList from '../components/PopularList';
import Posts from '../components/Posts';

export default function NoticeBoard({ bottom }) {
  const [boardInfo, setBoardInfo] = useState({});
  const [pageInfo, setPageInfo] = useState({});
  const [notice, setNotice] = useState({});
  const [populars, setPopulars] = useState([]);
  const [posts, setPosts] = useState([]);

  const [currentPage, setCurrPage] = useState(1);
  const [currentSort, setCurrSort] = useState('latest');

  const boardId = localStorage.getItem('currentBoardId');
  const baseurl = `/boards/${boardId}`;
  const params = {
    sort: currentSort,
    page: currentPage,
  };

  const queryStr = new URLSearchParams(params).toString();
  const requrl = `${baseurl}/?${queryStr}`;
  const getBoard = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: requrl,
      });
      if (res.data.code === 'COMMON200') {
        setBoardInfo(res.data.result.boardInfo);
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
  }, [boardId, currentPage, currentSort]);

  return (
    <div className='flex flex-row h-[1824px] justify-center items-center'>
      <div className='flex w-[1279px] h-[1651px] justify-start gap-x-[24px]'>
        <UserInfoControl />
        <div className='flex flex-col w-[953px] items-center'>
          {bottom ? (
            <InformText school={boardInfo.boardName} text={boardInfo.detail} />
          ) : (
            <>
              <InformText
                mb
                translate
                school={boardInfo.boardName}
                text={boardInfo.detail}
              />
              <Inform baseurl={baseurl} notice={notice} />
            </>
          )}
          <div className='flex flex-col items-center'>
            {bottom ? (
              ''
            ) : (
              <PopularList baseurl={baseurl} populars={populars} />
            )}
            <Posts
              posts={posts}
              pageInfo={pageInfo}
              setCurrPage={setCurrPage}
              setCurrSort={setCurrSort}
              boardId={boardId}
              requrl={requrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
