import React from 'react';
import { Link } from 'react-router-dom';

export default function PostList({ posts, total }) {
  return (
    <div>
      <div className='w-[953px] mb-[30px] table-fixed rounded-[14px] border border-separate	border-spacing-0 overflow-hidden border-gray-scale-main-7'>
        <div className='flex h-10 bg-gray-scale-8 justify-center items-center border-b border-gray-scale-main-7'>
          <div className='flex flex-row text-gray-scale-4 text-[14px] font-normal'>
            <p className='font-normal mr-[646px]'>제목</p>
            <p className='font-normal mr-[55px]'>작성자</p>
            <p className='font-normal mr-[55px]'>좋아요</p>
            <p className='font-normal'>조회수</p>
          </div>
        </div>
        <ul className='flex flex-col bg-gray-scale-9'>
          {posts &&
            posts.map((post) => (
              <Link key={post.postId} to={`/${post.postId}`}>
                <li className='flex w-[953px] h-[71px] justify-center items-center border-b border-gray-scale-7-main hover:bg-gray-scale-8'>
                  <div className='flex w-[892px] justify-between'>
                    <div className='flex w-[672px] items-center font-normal gap-x-[23px]'>
                      {total ? (
                        <p className='text-orange-main text-base font-normal'>
                          [게시판명]
                        </p>
                      ) : (
                        ''
                      )}
                      <p className='flex text-gray-scale-1 text-lg font-normal'>
                        {post.title}
                        {post.hasImage ? (
                          <img src='/assets/photo.svg' alt='사진' />
                        ) : (
                          ''
                        )}
                      </p>
                      <p className='text-orange-1 text-lg font-semibold'>
                        ({post.numberOfComments})
                      </p>
                      <p className='text-gray-scale-3 text-base font-light'>
                        {post.date}
                      </p>
                    </div>
                    <div className='flex w-[220px] justify-between items-center relative'>
                      <p className='absolute font-normal text-center text-gray-scale-4 text-sm font-light'>
                        {post.author}
                      </p>
                      <p className='absolute left-[97px] font-normal flex items-center text-gray-scale-4 text-sm font-light'>
                        <img src='/assets/thumbUp.svg' alt='thumbUp' />
                        &nbsp;{post.likes}
                      </p>
                      <p className='absolute right-[18px] font-normal text-gray-scale-4 text-sm font-light'>
                        {post.views}
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
}
