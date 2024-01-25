import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { PopularBoardList } from './PopularBoardList';

export default function PopularPosts() {
  const [isClick, setIsClick] = useState(false);

  function handleToggle() {
    setIsClick(!isClick);
  }

  return (
    <div>
      {isClick ? (
        <button
          onClick={handleToggle}
          className='flex flex-row w-[953px] h-[72px] rounded-[14px] justify-center items-center bg-[#FFA77B] bg-opacity-20 border-[#FFA77B] border-opacity-25'
          type='button'
        >
          <div className='flex flex-row w-[891px] h-[22px] relative items-center'>
            <p className='text-orange-main text-lg font-medium'>인기글</p>
            <p className='absolute left-[77px] text-gray-scale-3 text-lg font-normal'>
              게시글 제목
            </p>
            <div className='absolute left-[800px] flex flex-row justify-center items-center'>
              <div className='w-4 h-4 bg-likeOrg' />
              <div className='text-orange-main text-opacity-70 text-base font-light '>
                00
              </div>
            </div>
            <div className='absolute left-[869px] w-[22px] h-[22px] bg-arrowBack' />
          </div>
        </button>
      ) : (
        <div className='flex flex-col w-[953px] h-[427px]'>
          <button
            onClick={handleToggle}
            className='flex flex-row w-[953px] h-[72px] rounded-t-[14px] justify-center items-center bg-[#FFA77B] bg-opacity-20 border-[#FFA77B] border-opacity-25'
            type='button'
          >
            <div className='flex flex-row w-[891px] h-[22px] relative items-center'>
              <p className='text-orange-main text-lg font-medium'>인기글</p>
              <div className='absolute left-[869px] w-[22px] h-[22px] bg-arrowBack' />
            </div>
          </button>
          <table className='w-[953px] table-fixed rounded-b-[14px] border border-collapse border-gray-scale-8'>
            <tbody>
              <tr className='h-[71px] border-b border-gray-scale-7-main hover:bg-gray-scale-8'>
                <td className='w-[77px] text-center text-orange-main text-xl font-bold'>
                  1
                </td>
                <td className='w-[806px] text-gray-scale-1 text-lg font-normal'>
                  게시글 제목
                </td>
                <td className='w-[70px]'>
                  <div className='flex flex-row w-[70px] items-center text-gray-scale-4 text-base font-light'>
                    <div className='w-4 h-4 bg-like' />
                    &nbsp;00
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
