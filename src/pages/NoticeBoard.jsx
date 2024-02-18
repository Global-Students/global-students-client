import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Inform from '../components/Inform';
import InformText from '../components/InformText';
import PopularList from '../components/PopularList';
import Posts from '../components/Posts';
import UserInfoControl from '../components/UserInfoControl';
import { authAxios } from '../axios/authAxios';

export default function NoticeBoard({ bottom }) {
  const [noticeBoardInfo, setNoticeBoardInfo] = useState({
    boardInfo: {},
    pageInfo: {},
    noticePost: {},
    popular: [],
    posts: [],
  });

  const [currentBoard] = useState(`${localStorage.getItem('currentBoardId')}`);
  const [currentPage, setCurrPage] = useState(1);
  const [currentSort, setCurrSort] = useState('latest');

  const location = useLocation();
  const baseUrl = location.toString();

  const getBoard = async () => {
    const queryParams = {
      sort: currentSort,
      page: currentPage,
    };

    const baseurl = `/boards/${localStorage.getItem('currentBoardId')}`;

    try {
      const res = await authAxios({
        method: 'get',
        url: baseurl,
        params: { ...queryParams },
      });
      if (res.data.code === 'COMMON200') {
        setNoticeBoardInfo(res.data.result);
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
  }, [currentBoard]);

  return (
    <div className='flex flex-row h-[1824px] justify-center items-center'>
      <div className='flex w-[1279px] h-[1651px] justify-start gap-x-[24px]'>
        {bottom ? <div className='w-[302px]' /> : <UserInfoControl />}
        <div className='flex flex-col w-[953px] items-center'>
          {bottom ? (
            <InformText
              school={noticeBoardInfo.boardInfo.boardName}
              text={noticeBoardInfo.boardInfo.detail}
            />
          ) : (
            <>
              <InformText
                mb
                translate
                school={noticeBoardInfo.boardInfo.boardName}
                text={noticeBoardInfo.boardInfo.detail}
              />
              <Inform baseurl={baseUrl} notice={noticeBoardInfo.noticePost} />
            </>
          )}
          <div className='flex flex-col items-center'>
            {bottom ? (
              ''
            ) : (
              <PopularList
                baseurl={baseUrl}
                populars={noticeBoardInfo.popular}
              />
            )}
            <Posts
              posts={noticeBoardInfo.posts}
              pageInfo={noticeBoardInfo.pageInfo}
              setCurrPage={setCurrPage}
              setCurrSort={setCurrSort}
              boardId={localStorage.getItem('currentBoardId')}
              baseurl={baseUrl}
              bottom={bottom}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
