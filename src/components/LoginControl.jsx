import React from 'react';
import { Link } from 'react-router-dom';
import HeaderIcon from './HeaderIcon';

export default function LoginControl() {
  // const [isLogin, setIsLogin] = useState(false);
  const isLogin = true;
  /* function handleLoginClick() {
    setIsLogin(!isLogin);
  }
  function handleLooutClick() {
    setIsLogin(!isLogin);
  } */

  return (
    <div>
      {isLogin ? (
        <div className='flex flex-row gap-[37px]'>
          <Link to='/Message' src='/assets/message.svg'>
            <HeaderIcon label='message' />
          </Link>
          <Link to='/MyPage'>
            <HeaderIcon label='mypage' />
          </Link>
        </div>
      ) : (
        <Link to='/Login'>
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
