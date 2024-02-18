import React from 'react';

export default function Comment({ comment, deleteComment }) {
  return (
    <div className='border-b border-gray-scale-7'>
      <div className='w-[884px] h-[146px] py-[10px]'>
        <div className='flex my-[10px]'>
          <div
            className='w-[50px] h-[50px] rounded-full bg-[#D9D9D9]'
            alt='프로필 사진'
          />
          <div className='flex flex-col ml-[10px]'>
            <div className='flex justify-between'>
              <p className='text-gray-scale-1 font-bold'>
                {comment.isAnonymous ? '익명' : comment.nickname}
              </p>
              <button
                type='button'
                className='text-[15px] font-normal text-[#808593] hover:text-gray-scale-1'
                onClick={() => deleteComment(comment.commentId)}
              >
                삭제하기
              </button>
            </div>
            <div className='flex flex-row justify-between w-[818px] text-gray-scale-5'>
              <p>{comment.date}</p>
            </div>
          </div>
        </div>
        <p className='text-[18px] leading-[26px] tracking-[0.04em]'>
          {comment.content}
        </p>
        <div className='flex flex-row justify-between py-[10px]'>
          <button
            type='button'
            className='text-[15px] font-normal text-[#808593] hover:text-gray-scale-1'
          >
            답글 쓰기
          </button>
          <div className='flex flex-row'>
            <img
              src='../../assets/thumb_up_gray.svg'
              alt='thumb_up_gray'
              className='w-[20px] h-[18.14px]'
            />
            <p className='font-normal text-[#808593] text-[14px] leading-[20px] tracking-[0.02em]'>
              {comment.likes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
