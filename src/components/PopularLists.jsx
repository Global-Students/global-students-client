import React, { useState } from 'react';

export default function PopularLists() {
  const [isClick, setIsClick] = useState(false);

  function handleToggle() {
    setIsClick(!isClick);
  }

  return (
    <div className='pb-[60px]'>
      {isClick ? (
        <button
          onClick={handleToggle}
          className='flex flex-row w-[953px] h-[72px] rounded-[14px] justify-center items-center bg-[#FFA77B] bg-opacity-20 border border-[#FFA77B] border-opacity-25'
          type='button'
        >
          <div className='flex flex-row w-[891px] h-[22px] justify-between items-center'>
            <div className='flex flex-row w-[155px] justify-between'>
              <p className='text-orange-main text-lg font-medium'>인기글</p>
              <p className='text-gray-scale-3 text-lg font-normal'>
                게시글 제목
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
      ) : (
        <div className='flex flex-col w-[953px] h-[427px]'>
          <button
            onClick={handleToggle}
            className='flex flex-row h-[72px] rounded-t-[14px] justify-center items-center bg-[#FFA77B] bg-opacity-20 border border-[#FFA77B] border-opacity-25'
            type='button'
          >
            <div className='flex flex-row w-[891px] h-[22px] justify-between items-center'>
              <p className='text-orange-main text-lg font-medium'>인기글</p>
              <img src='/assets/arrowNew.svg' alt='arrowNew' />
            </div>
          </button>
          <table className='w-[953px] table-fixed rounded-b-[14px] border border-separate	border-spacing-0 hover:overflow-hidden border-gray-scale-8'>
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
                    <img src='/assets/thumbUp.svg' alt='thumbUp' />
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
