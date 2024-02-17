import React, { useState } from 'react';

export default function DropDown1() {
  const [isClick, setIsClick] = useState(false); // 초기 값 변경

  const [sort, setSort] = useState('All');
  let dropdownButtonText;
  const arrowIcon = isClick ? 'arrowNew.svg' : 'arrowBack.svg';

  if (sort === 'All') {
    dropdownButtonText = 'Hanyang Uni All Students';
  } else if (sort === 'International') {
    dropdownButtonText = 'Hanyang Uni Korean Students';
  } else {
    dropdownButtonText = 'South Korea All Students';
  }

  function handleToggle() {
    setIsClick(!isClick); // 클릭할 때 상태 변경
  }

  const listChangeHandler = (e, option) => {
    e.preventDefault();
    if (sort !== option) {
      setSort(option);
    }
    setIsClick(false); // 메뉴를 선택한 후에도 창을 닫기 위해
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
                onClick={(e) => listChangeHandler(e, 'All')}
                className='h-[7px] border-b border-gray-scale-7-main hover:bg-gray-scale-8'
              >
                <td className='text-gray-scale-4 text-[18px] font-normal hover:text-gray-scale-2 px-[15px] py-[10px]'>
                  Hanyang Uni All Students
                </td>
              </tr>
              <tr
                onClick={(e) => listChangeHandler(e, 'International')}
                className='h-[7px] border-b border-gray-scale-7-main hover:bg-gray-scale-8'
              >
                <td className='text-gray-scale-4 text-[18px] font-normal hover:text-gray-scale-2 px-[15px] py-[10px]'>
                  Hanyang Uni Korean Students
                </td>
              </tr>
              <tr
                onClick={(e) => listChangeHandler(e, 'SouthKorea')}
                className='h-[7px] border-b border-gray-scale-7-main hover:bg-gray-scale-8'
              >
                <td className='text-gray-scale-4 text-[18px] font-normal hover:text-gray-scale-2 px-[15px] py-[10px]'>
                  South Korea All Students
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}


