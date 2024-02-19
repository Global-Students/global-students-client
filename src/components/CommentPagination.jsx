import React from 'react';

const COMMENTS_PER_PAGE = 7;

export default function CommentPagination({ pageInfo, onPageChange }) {
  const { page, totalPage } = pageInfo;
  const noPrev = page === 1;
  const noNext = page === totalPage;

  const commonStyle = `flex w-7 h-7 justify-center items-center rounded-full border border-gray-scale-7-main text-center text-gray-scale-2 text-xs font-light hover:bg-gray-scale-7-main duration-500`;
  const activeStyle = `flex w-7 h-7 justify-center items-center rounded-full bg-orange-main text-center text-gray-scale-9 text-xs font-light duration-500`;

  const handlePrevClick = () => {
    if (!noPrev) onPageChange(page - 1);
  };

  const handleNextClick = () => {
    if (!noNext) onPageChange(page + 1);
  };

  const renderPageButtons = () => {
    const buttons = [];
    const totalPages = Math.ceil(totalPage / COMMENTS_PER_PAGE);

    for (let i = 1; i <= totalPages; i+= 1) {
      buttons.push(
        <button
          key={i}
          type='button'
          onClick={() => onPageChange(i)}
          className={page === i ? activeStyle : commonStyle}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className='flex w-[640px] h-10 justify-center items-center bg-white rounded-[100px] border border-gray-scale-8 mb-3'>
      <div className='flex flex-row w-[610px] h-7 justify-between items-center'>
        <button type='button' onClick={handlePrevClick} disabled={noPrev}>
          <img
            src='/assets/keyboard_double_arrow_left.svg'
            className='rounded-full hover:bg-gray-scale-8 duration-500'
            alt='double_arrow_left'
          />
        </button>
        <div className='flex flex-row w-[416px] justify-between items-center'>
          <button
            type='button'
            onClick={handlePrevClick}
            disabled={noPrev}
          >
            <img
              src='/assets/keyboard_arrow_left.svg'
              className='rounded-full hover:bg-gray-scale-8 duration-500'
              alt='arrow_left'
            />
          </button>
          <div className='flex flex-row flex-wrap justify-between w-[340px]'>
            {renderPageButtons()}
          </div>
          <button type='button' onClick={handleNextClick} disabled={noNext}>
            <img
              src='/assets/keyboard_arrow_right.svg'
              className='rounded-full hover:bg-gray-scale-8 duration-500'
              alt='arrow_right'
            />
          </button>
        </div>
        <button type='button' onClick={handleNextClick} disabled={noNext}>
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




