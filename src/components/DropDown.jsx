import React, { useEffect, useState } from 'react';

export default function DropDown({ setCurrSort }) {
  const [isClick, setIsClick] = useState(false);
  const [sort, setSort] = useState('최신순');

  function handleToggle() {
    setIsClick((prev) => !prev);
  }

  const listChangeHandler = (e) => {
    e.preventDefault();
    return sort === '최신순' ? setSort('인기순') : setSort('최신순');
  };

  useEffect(() =>
    sort === '인기순' ? setCurrSort('popular') : setCurrSort('latest'),
  );

  const normalStyle = `rounded-[14px] border border-gray-scale-7-main`;
  const dropDownStyle = `rounded-t-[14px] border border-gray-scale-6 border-b-0`;

  return (
    <div className='absolute z-10'>
      <button
        type='button'
        onClick={handleToggle}
        className={`flex w-[100px] h-[30px] justify-center items-center bg-gray-scale-9 ${
          isClick ? dropDownStyle : normalStyle
        }`}
      >
        <div className='flex flex-row gap-x-[7.7px]'>
          <p className='text-gray-scale-3 text-[15px] font-normal'>{sort}</p>
          <img src='/assets/arrow_drop_down.svg' alt='arrow_drop_down' />
        </div>
      </button>
      {isClick ? (
        <table className='w-[100px] table-fixed border-separate border-spacing-0 rounded-b-[14px] border border-gray-scale-6 bg-gray-scale-9 hover:overflow-hidden hover:cursor-pointer'>
          <tbody>
            <tr
              onClick={listChangeHandler}
              className='h-7 border-b border-gray-scale-7-main hover:bg-gray-scale-8'
            >
              <td className='text-center text-gray-scale-4 text-[13px] font-normal hover:text-gray-scale-2'>
                인기순
              </td>
            </tr>
            <tr
              onClick={listChangeHandler}
              className='h-7 border-b border-gray-scale-7-main hover:bg-gray-scale-8'
            >
              <td className='text-center text-gray-scale-4 text-[13px] font-normal hover:text-gray-scale-2 '>
                최신순
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        ''
      )}
    </div>
  );
}
