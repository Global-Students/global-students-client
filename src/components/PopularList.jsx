import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PopularList({ populars }) {
  const [isClick, setIsClick] = useState(false);
  function handleToggle() {
    setIsClick((prev) => !prev);
  }

  return (
    <div className='pb-[60px]'>
      {isClick ? (
        <div className='relative h-[72px] duration-500'>
          <button
            onClick={handleToggle}
            className='popular flex flex-row w-[953px] h-[72px] rounded-[14px] justify-center items-center bg-[#FFA77B] bg-opacity-20 border border-[#FFA77B] border-opacity-25'
            type='button'
          >
            <div className='flex flex-row w-[891px] h-[22px] justify-between items-center'>
              <div className='flex flex-row gap-x-[30px]'>
                <p className='text-orange-main text-lg font-medium'>인기글</p>
                <p className='text-gray-scale-3 text-lg font-normal'>
                  인기글 제목
                </p>
              </div>
              <div className='flex flex-row w-[91px] justify-between'>
                <div className='flex flex-row justify-between items-center'>
                  <img src='/assets/thumbUpOrg.svg' alt='thumbUpOrg' />
                  <p className='text-orange-main text-opacity-70 text-base font-light '>
                    &nbsp;00
                  </p>
                </div>
                <img src='/assets/arrowBack.svg' alt='arrowBack' />
              </div>
            </div>
          </button>
        </div>
      ) : (
        <div className='flex flex-col h-[427px] duration-500'>
          <button
            onClick={handleToggle}
            className='flex flex-row w-[953px] h-[72px] py-[25px] rounded-t-[14px] justify-center items-center bg-[#FFA77B] bg-opacity-20 border border-[#FFA77B] border-opacity-25'
            type='button'
          >
            <div className='flex flex-row w-[891px] h-[22px] justify-between items-center'>
              <p className='text-orange-main text-lg font-medium '>인기글</p>
              <img src='/assets/arrowNew.svg' alt='arrowNew' />
            </div>
          </button>
          <ul className='w-[953px] table-fixed rounded-b-[14px] border border-separate	border-spacing-0 overflow-hidden border-gray-scale-7 '>
            {populars &&
              populars.map((popular, index) => (
                <Link
                  to={`/post-view/${localStorage.getItem('currentBoardId')}/${
                    popular.postId
                  }`}
                  key={popular.postId}
                >
                  <li className='flex h-[71px] justify-center items-center border-b border-gray-scale-7-main hover:bg-gray-scale-8 '>
                    <p className='w-[77px] text-center text-orange-main text-xl font-bold'>
                      {index + 1}
                    </p>
                    <p className='w-[806px] text-gray-scale-1 text-lg font-normal'>
                      {popular.title}
                    </p>
                    <p className='flex flex-row w-[70px] items-center text-gray-scale-4 text-base font-light'>
                      <img src='/assets/thumbUp.svg' alt='thumbUp' />
                      &nbsp;{popular.likes}
                    </p>
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
