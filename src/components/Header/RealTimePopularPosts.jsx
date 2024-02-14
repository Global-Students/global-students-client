import React from 'react';

export default function RealTimePopularPosts() {
  return (
    <div className='flex flex-col w-[952px] h-[334px] justify-between'>
      <p className='text-gray-scale-2 text-lg font-semibold ml-[19px]'>
        실시간 인기글
      </p>
      <table className='w-[952px] h-[300px] table-fixed bg-gray-scale-9 rounded-[14px] border border-separate	border-spacing-0 hover:overflow-hidden border-gray-scale-8'>
        <tbody>
          <tr className='flex flex-row items-center w-[952px] h-[60px] border-b border-gray-scale-8 hover:bg-gray-scale-8'>
            <td className='w-[90px] text-center text-orange-main text-xl font-bold'>
              1
            </td>
            <td className='flex flex-row items-center w-[806px] text-gray-scale-1 text-lg font-normal'>
              <p className='text-orange-1 text-sm font-normal mr-2'>
                [게시판명]
              </p>
              <p className='text-gray-scale-1 text-base font-normal'>
                게시글 제목
              </p>
            </td>
            <td className='w-[70px]'>
              <div className='flex flex-row w-[70px] items-center text-gray-scale-4 text-base font-light'>
                <img src='/assets/thumbUp.svg' alt='thumbUp' />
                &nbsp;00
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
