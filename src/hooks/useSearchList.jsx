import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useSearchList({ boardId, boardName }) {
  const [keyword, setKeyword] = useState('');
  const [pageInfo, setPageInfo] = useState({});
  const [posts, setPosts] = useState([]);

  const [currPage, setCurrPage] = useState(1);
  const q = localStorage.getItem('q');

  const params = {
    boardId: `${localStorage.getItem('boardId_1')}`,
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
