import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useSearchList({ boardId, boardName }) {
  const [keyword, setKeyword] = useState('');
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    size: 10,
    totalPage: 10,
    totalPost: 100,
  });
  const [posts, setPosts] = useState([]);

  const [currPage, setCurrPage] = useState(1);
  const q = localStorage.getItem('q');

  const params = {
    boardId: { boardId },
    q: localStorage.getItem('q'),
    page: currPage,
  };

  const getSearch = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: `/search/total`,
        params: { params },
      });
      if (res.data.code === 'CHAT201_1') {
        setKeyword(res.data.result.q);
        setPageInfo({
          page: res.data.result.page,
          size: res.data.result.size,
          totalPage: res.data.result.totalPage,
          totalPost: res.data.result.totalPost,
        });
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
