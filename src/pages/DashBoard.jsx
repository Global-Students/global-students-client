import React from 'react';
import TranslateButton from '../components/Button/TranslateButton';
import Pagination from '../components/Pagination';
import BookmarkPosts from './BookmarkPosts';
import MyPosts from './MyPosts';

export default function DashBoard({ isMyPosts }) {
  return (
    <div className='flex flex-col justify-start items-center my-[20px] gap-10'>
      <div className='flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[806px]'>
        <a href='/auth/my-page' aria-label='link to mypage'>
          <svg
            width={42}
            height={42}
            viewBox='0 0 42 42'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='flex-grow-0 flex-shrink-0 w-[42px] h-[42px] relative'
            preserveAspectRatio='none'
          >
            <circle cx={21} cy={21} r={21} fill='white' />
            <mask
              id='mask0_1867_29209'
              style={{ maskType: 'alpha' }}
              maskUnits='userSpaceOnUse'
              x={5}
              y={7}
              width={28}
              height={28}
            >
              <rect x={5} y={7} width={28} height={28} fill='#D9D9D9' />
            </mask>
            <g mask='url(#mask0_1867_29209)'>
              <path
                d='M15.4387 20.7829L24.2269 29.5711C24.4587 29.8029 24.5717 30.0759 24.5657 30.39C24.5597 30.7041 24.4408 30.977 24.2089 31.2089C23.9771 31.4407 23.7041 31.5566 23.39 31.5566C23.0759 31.5566 22.803 31.4407 22.5712 31.2089L13.6215 22.2771C13.4106 22.0662 13.2543 21.8299 13.1526 21.5682C13.0509 21.3064 13 21.0447 13 20.7829C13 20.5212 13.0509 20.2594 13.1526 19.9977C13.2543 19.7359 13.4106 19.4996 13.6215 19.2887L22.5712 10.339C22.803 10.1072 23.0789 9.99426 23.399 10.0002C23.7191 10.0062 23.9951 10.1251 24.2269 10.357C24.4587 10.5888 24.5746 10.8618 24.5746 11.1758C24.5746 11.49 24.4587 11.7629 24.2269 11.9948L15.4387 20.7829Z'
                fill='#50545E'
              />
            </g>
          </svg>
        </a>
        <TranslateButton />
      </div>
      <div className='flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-[65px]'>
        {isMyPosts ? <MyPosts /> : <BookmarkPosts />}
        <Pagination />
      </div>
    </div>
  );
}
