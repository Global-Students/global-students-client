import React, { useState, useEffect } from 'react';

export default function Pagination({ pageInfo, setCurrPage }) {
  const currentPageInfo = {
    page: pageInfo.page, // 현재 페이지
    size: pageInfo.size, // 페이지 당 보여줄 데이터 개수
    totalPage: pageInfo.totalPage, // 보여줄 페이지 개수
    totalPost: pageInfo.totalPost, // 데이터의 총 개수
  };

  const totalPages = Math.ceil(
    currentPageInfo.totalPost / currentPageInfo.size,
  );
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + currentPageInfo.totalPage - 1 >= totalPages;
  const keyValue = (i) => start + i;
  useEffect(() => {
    keyValue();
  }, []);
  useEffect(() => {
    if (currentPageInfo.page === start + currentPageInfo.totalPage)
      setStart((prev) => prev + currentPageInfo.totalPage);
    if (currentPageInfo.page < start)
      setStart((prev) => prev - currentPageInfo.totalPage);
  }, [currentPageInfo.page, currentPageInfo.totalPage, start]);

  const commonStyle = `flex w-7 h-7 justify-center items-center rounded-full border border-gray-scale-7-main text-center text-gray-scale-2 text-xs font-light hover:bg-gray-scale-7-main duration-500`;
  const activeStyle = `flex w-7 h-7 justify-center items-center rounded-full bg-orange-main text-center text-gray-scale-9 text-xs font-light duration-500`;
  return (
    <div className='flex w-[640px] h-10 justify-center items-center bg-white rounded-[100px] border border-gray-scale-8 mb-3'>
      <div className='flex flex-row w-[610px] h-7 justify-between items-center'>
        <button type='button' onClick={() => setCurrPage(1)}>
          <img
            src='/assets/keyboard_double_arrow_left.svg'
            className='rounded-full hover:bg-gray-scale-8 duration-500'
            alt='double_arrow_left'
          />
        </button>
        <div className='flex flex-row w-[416px] justify-between items-center'>
          <button
            type='button'
            onClick={() => (noPrev ? setCurrPage(1) : setCurrPage(start - 1))}
          >
            <img
              src='/assets/keyboard_arrow_left.svg'
              className='rounded-full hover:bg-gray-scale-8 duration-500'
              alt='arrow_left'
            />
          </button>
          <div className='flex flex-row gap-x-[11px]'>
            {[...Array(currentPageInfo.totalPage)].map((a, i) => (
              <button
                type='button'
                key={keyValue(i)}
                onClick={() => setCurrPage(start + i)}
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
            onClick={() =>
              noNext
                ? setCurrPage(totalPages)
                : setCurrPage(start + currentPageInfo.totalPage)
            }
          >
            <img
              src='/assets/keyboard_arrow_right.svg'
              className='rounded-full hover:bg-gray-scale-8 duration-500'
              alt='arrow_right'
            />
          </button>
        </div>
        <button type='button' onClick={() => setCurrPage(totalPages)}>
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
