import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useSearchList({ boardId, boardName }) {
  const [keyword, setKeyword] = useState('');
  const [pageInfo, setPageInfo] = useState({});
  const [posts, setPosts] = useState([]);

  const [currPage, setCurrPage] = useState(1);
  const currentBoard = boardId;
  const baseurl = `/search/total`;
  const q = localStorage.getItem('q');

  const params = {
    boardId: currentBoard,
    q: localStorage.getItem('q'),
    page: currPage,
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
        console.log(res.data.code);
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
  }, [q]);

  return {
    boardName,
    boardId,
    currPage,
    setCurrPage,
    keyword,
    pageInfo,
    posts,
  };
}
