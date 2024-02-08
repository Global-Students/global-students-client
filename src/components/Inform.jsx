import React from 'react';
import { Link } from 'react-router-dom';

export default function Inform({ baseurl, notice }) {
  return (
    <div className='flex w-[953px] h-[72px] items-center rounded-[14px] border border-gray-scale-7-main mb-[20px]'>
      <div className='flex flex-row w-[162px] justify-between ml-[29px]'>
        <p className='text-orange-main text-lg font-normal'>공지</p>
        <Link
          to={`${baseurl}/${notice.postId}`}
          className='text-gray-scale-4 text-lg font-normal'
        >
          {notice.notice}
        </Link>
      </div>
    </div>
  );
}
