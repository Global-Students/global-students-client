import React from 'react';

export default function PostList({ total }) {
  return (
    <div>
      <table className='w-[953px] mb-[30px] table-fixed rounded-[14px] border border-separate	border-spacing-0 overflow-hidden border-gray-scale-main-7'>
        <thead className='flex h-10 bg-gray-scale-8 justify-center items-center border-b border-gray-scale-main-7'>
          <tr className='flex flex-row text-gray-scale-4 text-[14px] font-normal'>
            <th className='font-normal mr-[646px]'>제목</th>
            <th className='font-normal mr-[55px]'>작성자</th>
            <th className='font-normal mr-[55px]'>좋아요</th>
            <th className='font-normal'>조회수</th>
          </tr>
        </thead>
        <tbody className='flex flex-col bg-gray-scale-9'>
          <tr className='flex w-[953px] h-[71px] gap-x-[60px] items-center border-b border-gray-scale-7-main hover:bg-gray-scale-8'>
            <td className='flex w-[612px] items-center font-normal text-start gap-x-[23px] ml-[27px]'>
              {total ? (
                <p className='text-orange-main text-base font-normal'>
                  [게시판명]
                </p>
              ) : (
                ''
              )}
              <p className='text-gray-scale-1 text-lg font-normal'>
                게시글제목
              </p>
              <p className='text-orange-1 text-lg font-semibold'>(1)</p>
              <p className='text-gray-scale-3 text-base font-light'>1월 1일</p>
            </td>
            <td className='font-normal text-gray-scale-4 text-sm font-light'>
              작성자
            </td>
            <td className='font-normal flex flex-row items-center text-gray-scale-4 text-sm font-light'>
              <img src='/assets/thumbUp.svg' alt='thumbUp' />
              &nbsp;0
            </td>
            <td className='font-normal text-gray-scale-4 text-sm font-light'>
              조회수
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
