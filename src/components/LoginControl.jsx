import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginControl() {
  // const [isLogin, setIsLogin] = useState(false);
  const isLogin = false;
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
          <Link to='/Message'>
            <div className='w-[47px] h-[47px] bg-message hover:bg-messageHover active:bg-messageHoverPress' />
          </Link>
          <Link to='/MyPage'>
            <div className='w-[47px] h-[47px] bg-mypage hover:bg-mypageHover active:bg-mypageHoverPress' />
          </Link>
        </div>
      ) : (
        <Link to='/Login'>
          <div className='w-[143px] h-12 px-[50px] py-3.5 bg-white rounded-[14px] shadow shadow-inner border border-slate-200 justify-center items-center gap-2.5 inline-flex hover:bg-neutral-100'>
            <div className='text-zinc-600 text-base font-semibold leading-tight tracking-tight'>
              로그인
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
