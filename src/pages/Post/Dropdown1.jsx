import React, { useState } from 'react';

export default function DropDown1({ onDropDownChange }) {
  const [isClick, setIsClick] = useState(false);
  const [sort, setSort] = useState('all');
  const boardId1 = localStorage.getItem('boardId_1');
  const boardId2 = localStorage.getItem('boardId_2');
  const boardId3 = localStorage.getItem('boardId_3');
  const boardName1 = localStorage.getItem('boardName_1');
  const boardName2 = localStorage.getItem('boardName_2');
  const boardName3 = localStorage.getItem('boardName_3');
  let dropdownButtonText;
  const arrowIcon = isClick ? 'arrowNew.svg' : 'arrowBack.svg';

  if (sort === 'all') {
    dropdownButtonText = boardName1;
  } else if (sort === 'international') {
    dropdownButtonText = boardName2;
  } else {
    dropdownButtonText = boardName3;
  }

  function handleToggle() {
    setIsClick(!isClick);
  }

  const listChangeHandler = (e, option, boardId) => {
    e.preventDefault();
    if (sort !== option) {
      setSort(option);
    }
    setIsClick(false);
    onDropDownChange(boardId);
  };

  return (
    <div className='relative'>
      <button
        type='button'
        onClick={handleToggle}
        className='flex flex-row w-[698px] h-[50px] justify-center items-center bg-gray-scale-9 border-b border-gray-scale-7-main px-[6px]'
      >
        <div className='flex flex-row w-[698px] justify-between'>
          <p className='text-gray-scale-3 px-[15px] text-[18px] leading-[20px] tracking-[0.02em] font-medium'>
            {dropdownButtonText}
          </p>
          <img src={`../../../assets/${arrowIcon}`} alt='arrow_icon' />
        </div>
      </button>
      {isClick && (
        <div className='absolute top-[50px]'>
          <table className='w-[698px] table-fixed border-spacing-0 rounded-b-[14px] border border-gray-scale-6 bg-gray-scale-9 hover:overflow-hidden hover:cursor-pointer px-[15px]'>
            <tbody>
              <tr
                onClick={(e) => listChangeHandler(e, 'all', boardId1)}
                className='h-[7px] border-b border-gray-scale-7-main hover:bg-gray-scale-8'
              >
                <td className='text-gray-scale-4 text-[18px] font-normal hover:text-gray-scale-2 px-[15px] py-[10px]'>
                  {boardName1}
                </td>
              </tr>
              <tr
                onClick={(e) => listChangeHandler(e, 'international', boardId2)}
                className='h-[7px] border-b border-gray-scale-7-main hover:bg-gray-scale-8'
              >
                <td className='text-gray-scale-4 text-[18px] font-normal hover:text-gray-scale-2 px-[15px] py-[10px]'>
                  {boardName2}
                </td>
              </tr>
              <tr
                onClick={(e) => listChangeHandler(e, 'south-Korea', boardId3)}
                className='h-[7px] border-b border-gray-scale-7-main hover:bg-gray-scale-8'
              >
                <td className='text-gray-scale-4 text-[18px] font-normal hover:text-gray-scale-2 px-[15px] py-[10px]'>
                  {boardName3}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
