import React from 'react';

export default function DropDownInquiry({
  inquirySort,
  setInquirySort,
  setIsClick,
}) {
  const optionStyle = `flex h-[50px] px-[25px] items-center text-gray-scale-4 text-lg font-light leading-tight tracking-tight border-b border-gray-scale-7-main hover:bg-gray-scale-8`;
  const handleChange = (event) => setInquirySort(event.target.value);
  const listChangeHandler = (e) => {
    e.preventDefault();
    setIsClick((prev) => !prev);
    return inquirySort === '서비스 개선'
      ? setInquirySort('마이페이지 오류')
      : setInquirySort('서비스 개선');
  };
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsClick((prev) => !prev);
    }
  };
  return (
    <table className='absolute w-[845px] table-fixed border-separate border-spacing-0 rounded-b-[14px] border border-t-0 border-gray-scale-6 bg-gray-scale-9 hover:overflow-hidden hover:cursor-pointer'>
      <tbody>
        <tr className={`${optionStyle}`} onClick={listChangeHandler}>
          서비스 개선
        </tr>
        <tr className={`${optionStyle}`} onClick={listChangeHandler}>
          마이페이지 오류
        </tr>
        <tr className={`${optionStyle} group`}>
          <input
            className='w-[648px] group-hover:bg-gray-scale-8 outline-none'
            onChange={handleChange}
            onKeyUp={handleOnKeyPress}
            placeholder='문의 종류를 입력해주세요'
          />
        </tr>
      </tbody>
    </table>
  );
}
