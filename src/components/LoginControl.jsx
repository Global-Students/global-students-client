import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <div className='flex flex-row w-[131px] items-center justify-between'>
          <NavLink to='/Message'>
            {({ isActive }) =>
              isActive ? (
                <img src='/assets/messagePress.svg' alt='messagePress' />
              ) : (
                <HeaderIcon label='message' />
              )
            }
          </NavLink>
          <NavLink to='/MyPage'>
            {({ isActive }) =>
              isActive ? (
                <img src='/assets/mypagePress.svg' alt='mypagePress' />
              ) : (
                <HeaderIcon label='mypage' />
              )
            }
          </NavLink>
        </div>
      ) : (
        <NavLink to='/Login'>
          <div className='w-[143px] h-12 px-[50px] py-3.5 bg-white rounded-[14px] shadow shadow-inner border border-slate-200 justify-center items-center gap-2.5 inline-flex hover:bg-gray-scale-8'>
            <div className='text-gray-scale-3 text-base font-semibold leading-tight tracking-tight'>
              로그인
            </div>
          </div>
        </NavLink>
      )}
    </div>
  );
}
