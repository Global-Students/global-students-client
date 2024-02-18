import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChatModal from './Chat/ChatModal';
import HeaderIcon from './Header/HeaderIcon';

export default function LoginControl({ isLogin }) {
  // for chat modal
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  function handleClick() {
    setIsChatModalOpen(!isChatModalOpen);
  }
  function handleKeyDown() {
    console.log('keydown');
  }

  return (
    <div>
      {isLogin ? (
        <div className='flex flex-row w-[131px] items-center justify-between'>
          <div
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role='button'
            tabIndex={0}
          >
            <HeaderIcon label='message' />
            <ChatModal _isChatModalOpen={isChatModalOpen} />
          </div>
          <Link to='/auth/my-page'>
            <HeaderIcon label='mypage' />
          </Link>
        </div>
      ) : (
        <Link to='/login'>
          <div className='w-[143px] h-12 px-[50px] py-3.5 bg-white rounded-[14px] shadow shadow-inner border border-slate-200 justify-center items-center gap-2.5 inline-flex hover:bg-gray-scale-8'>
            <div className='text-gray-scale-3 text-base font-semibold leading-tight tracking-tight'>
              로그인
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
