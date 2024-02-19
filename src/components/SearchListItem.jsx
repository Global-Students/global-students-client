import React from 'react';

export default function SearchListItem({
  nickname,
  country,
  major,
  bio,
  imageAddress
}) {
  const link = `/auth/friend`;
  return (
    <div className='flex w-[954px] h-[146px] px-[18px] py-[27.5px] border border-gray-scale-7-main rounded-[14px] gap-[449px] relative'>
      <div className='flex items-center gap-[30px]'>
        <div className='w-[110px] h-[110px] rounded-full bg-[#D9D9D9]'> 
          <img src={`/assets/profileImg/ellipse-27${imageAddress}.png`} alt="profile" />
        </div>
        <div className='flex flex-col justify-center gap-[15px] h-[87px]'>
          <div className='flex items-center gap-2'>
            <p className='text-gray-scale-1 text-[22px] leading-[22px] font-semibold'>
              {' '}
              {nickname}{' '}
            </p>
            <a href={link}>
              <img src='/assets/expand_circle_right.svg' alt='expand icon' />
            </a>
          </div>
          <div className='flex flex-col gap-2 leading-5 text-align-center'>
            <div className='flex gap-[30px]'>
              <div className='flex gap-2.5'>
                <p className='text-gray-scale-4'> 국적 </p>
                <p> {country} </p>
              </div>
              <div className='flex gap-2.5'>
                <p className='text-gray-scale-4'> 학과 </p>
                <p> {major} </p>
              </div>
            </div>
            <p className='text-gray-scale-3'> {bio} </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1.5 px-[18px] py-4 rounded-2xl bg-orange-4 absolute right-[20px]'>
        <img src='/assets/forward_to_inbox.svg' alt='envelop icon' width='28' />
        <p className='text-orange-main font-medium'> 1:1 메세지 </p>
      </div>
    </div>
  );
}
