import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_PATH from '../../constants/api';

export default function RealTimePopularPosts({ setSearchClick }) {
  const [populars, setPopulars] = useState([]);

  const getPopularPosts = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: API_PATH.searchPopularLists,
      });
      if (res.data.code === 'CHAT201_1') {
        setPopulars(res.data.result.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularPosts();
  }, []);

  return (
    <div className='flex flex-col w-[952px] h-[334px] justify-between'>
      <p className='text-gray-scale-2 text-lg font-semibold ml-[19px]'>
        실시간 인기글
      </p>
      <ul className='w-[952px] h-[300px] table-fixed bg-gray-scale-9 rounded-[14px] border border-separate	border-spacing-0 hover:overflow-hidden border-gray-scale-8'>
        {populars &&
          populars.map((post) => (
            <Link
              to={`/board/${post.postId}`}
              onClick={() => setSearchClick((prev) => !prev)}
            >
              <li
                key={post.postId}
                className='flex flex-row items-center w-[952px] h-[60px] border-b border-gray-scale-8 hover:bg-gray-scale-8'
              >
                <p className='w-[90px] text-center text-orange-main text-xl font-bold'>
                  {post.rank}
                </p>
                <div className='flex flex-row items-center w-[806px] text-gray-scale-1 text-lg font-normal'>
                  <p className='text-orange-1 text-sm font-normal mr-2'>
                    [게시판명]
                  </p>
                  <p className='text-gray-scale-1 text-base font-normal'>
                    {post.title}
                  </p>
                </div>
                <div className='w-[70px]'>
                  <div className='flex flex-row w-[70px] items-center text-gray-scale-4 text-base font-light'>
                    <img src='/assets/thumbUp.svg' alt='thumbUp' />
                    &nbsp;{post.likes}
                  </div>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}
