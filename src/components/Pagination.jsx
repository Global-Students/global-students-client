import React, { useEffect, useState } from 'react';

export default function Pagination({ pageInfo, setCurrPage }) {
  const currentPageInfo = {
    page: pageInfo.page, // 현재 페이지
    size: pageInfo.size, // 페이지 당 보여줄 데이터 개수
    totalPage: pageInfo.totalPage, // 보여줄 페이지 개수
    totalPost: pageInfo.totalPost, // 데이터의 총 개수
  };

  const [start, setStart] = useState(1);
  const keyValue = (i) => start + i;
  useEffect(() => {
    keyValue();
  }, []);

  const commonStyle = `flex w-7 h-7 justify-center items-center rounded-full border border-gray-scale-7-main text-center text-gray-scale-2 text-xs font-light hover:bg-gray-scale-7-main duration-500`;
  const activeStyle = `flex w-7 h-7 justify-center items-center rounded-full bg-orange-main text-center text-gray-scale-9 text-xs font-light duration-500`;
  return (
    <div className='flex w-[640px] h-10 justify-center items-center bg-white rounded-[100px] border border-gray-scale-8 mb-3'>
      <div className='flex flex-row w-[610px] h-7 justify-between items-center'>
        <button
          type='button'
          onClick={() => {
            setCurrPage(1);
            setStart(1);
          }}
        >
          <img
            src='/assets/keyboard_double_arrow_left.svg'
            className='rounded-full hover:bg-gray-scale-8 duration-500'
            alt='double_arrow_left'
          />
        </button>
        <div className='flex flex-row w-[416px] justify-between items-center'>
          <button
            type='button'
            onClick={() => {
              setCurrPage(start === 1 ? 1 : start - 1);
              setStart(start === 1 ? 1 : start - currentPageInfo.size);
            }}
          >
            <img
              src='/assets/keyboard_arrow_left.svg'
              className='rounded-full hover:bg-gray-scale-8 duration-500'
              alt='arrow_left'
            />
          </button>
          <div className='flex flex-row gap-x-[11px]'>
            {[...Array(currentPageInfo.totalPage)].map((i) => (
              <button
                type='button'
                key={keyValue(i)}
                onClick={() => {
                  setCurrPage(i + 1);
                  setStart(
                    currentPageInfo.page >= start + currentPageInfo.size
                      ? start + currentPageInfo.size
                      : start,
                  );
                }}
                className={
                  start + i === currentPageInfo.page ? activeStyle : commonStyle
                }
              >
                {start + i}
              </button>
            ))}
          </div>
          <button
            type='button'
            onClick={() => {
              setCurrPage(
                start === currentPageInfo.totalPage ||
                  currentPageInfo.page === currentPageInfo.totalPage
                  ? currentPageInfo.totalPage
                  : start + currentPageInfo.size,
              );
              setStart(start + currentPageInfo.size);
            }}
          >
            <img
              src='/assets/keyboard_arrow_right.svg'
              className='rounded-full hover:bg-gray-scale-8 duration-500'
              alt='arrow_right'
            />
          </button>
        </div>
        <button
          type='button'
          onClick={() => setCurrPage(currentPageInfo.totalPage)}
        >
          <img
            src='/assets/keyboard_double_arrow_right.svg'
            className='rounded-full hover:bg-gray-scale-8 duration-500'
            alt='double_arrow_right'
          />
        </button>
      </div>
    </div>
  );
}
