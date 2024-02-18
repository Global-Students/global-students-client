import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import UserInfoControl from '../../components/UserInfoControl';
import SearchText from '../../components/SearchText';
import SearchInput from '../../components/Input/SearchInput';

export default function Search() {
  const [keyword, setKeyword] = useState('');
  const [pageInfo, setPageInfo] = useState({});
  const [posts, setPosts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [currentSort, setCurrSort] = useState('latest');
  const [boardInfo, setBoardInfo] = useState({
    boardId: localStorage.getItem('currentBoardId'),
    boardName: localStorage.getItem('currentBoardName'),
  });
  const baseurl = `/search/total`;
  const q = localStorage.getItem('q');

  const params = {
    boardId: boardInfo.boardId,
    q: localStorage.getItem('q'),
    page: currPage,
    sort: currentSort,
  };

  const queryStr = new URLSearchParams(params).toString();
  const requrl = `${baseurl}/?${queryStr}`;
  const getSearch = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: requrl,
      });
      if (res.data.code === 'CHAT201_1') {
        setKeyword(res.data.result.q);
        setPageInfo(res.data.result.pageInfo);
        setPosts(res.data.result.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearch();
  }, [q, currPage, currentSort]);

  return (
    <div className='flex flex-row h-[1824px] justify-center items-center'>
      <div className='flex w-[1279px] h-[1651px] justify-start gap-x-[24px]'>
        <UserInfoControl />
        <div>
          <div className='flex flex-col w-[954px] h-[109px] justify-between items-center mb-[60px]'>
            <SearchText keyword={keyword} />
            <SearchInput
              width='w-[540px]'
              height='h-[50px]'
              px='px-[24px]'
              placeholder={keyword}
            />
          </div>
          <Outlet
            context={{
              requrl,
              keyword,
              posts,
              pageInfo,
              boardInfo,
              setCurrPage,
              setCurrSort,
              setBoardInfo,
            }}
          />
        </div>
      </div>
    </div>
  );
}
