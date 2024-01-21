import { React, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LoginControl from './LoginControl';

export default function HeaderLogged() {
  const navRectangle = useRef();
  const { pathname } = useLocation();
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    if (currentItem === 1 || pathname === '/Main') {
      navRectangle.current.style.width = '140px';
      navRectangle.current.style.left = '0px';
      navRectangle.current.style.opacity = '1';
    }
    if (currentItem === 2 || pathname === '/International') {
      navRectangle.current.style.width = '164px';
      navRectangle.current.style.left = '150px';
      navRectangle.current.style.opacity = '1';
    }
    if (currentItem === 3 || pathname === '/SouthKorea') {
      navRectangle.current.style.width = '132px';
      navRectangle.current.style.left = '324px';
      navRectangle.current.style.opacity = '1';
    }
    if (currentItem === 4 || pathname === '/SearchingFriend') {
      navRectangle.current.style.width = '99px';
      navRectangle.current.style.left = '466px';
      navRectangle.current.style.opacity = '1';
    }
    if (
      pathname !== '/Main' &&
      pathname !== '/International' &&
      pathname !== '/SouthKorea' &&
      pathname !== '/SearchingFriend'
    ) {
      navRectangle.current.style.opacity = '0';
    }
  });

  return (
    <div>
      <div className='flex w-[1920px] h-[130px] absolute justify-center items-center'>
        <div className='flex flex-row w-[1280px] h-[76px] absolute'>
          <div className='flex w-[216px] h-[61px] absolute top-[7px] left-[1px]'>
            <Link to='/'>
              <img src='/assets/logoHeader.svg' alt='logo' />
            </Link>
          </div>
          <div className='flex flex-row items-center items-center w-[552px] h-[60px] relative top-[8px] left-[370px] gap-[10px]'>
            <span
              ref={navRectangle}
              className='navRectangle w-[140px] h-[54px] bg-orange-main rounded-[35px] absolute duration-500 opacity-0'
            />
            <div className='item w-[114px] h-[60px] p-2.5 absolute left-[13px]'>
              <NavLink
                to='/Main'
                onClick={() => {
                  setCurrentItem(1);
                }}
                className={({ isActive }) =>
                  isActive ? 'text-gray-scale-9' : 'text-gray-scale-1'
                }
              >
                <p className='w-[94px] h-[40px] text-navBarFont text-center duration-500'>
                  Hanyang Uni <br />
                  All Students
                </p>
              </NavLink>
            </div>
            <div className='item w-[138x] h-[60px] p-2.5	absolute left-[163px]'>
              <NavLink
                to='/International'
                onClick={() => {
                  setCurrentItem(2);
                }}
                className={({ isActive }) =>
                  isActive ? 'text-gray-scale-9' : 'text-gray-scale-1'
                }
              >
                <p className='w-[118px] h-[40px] text-navBarFont text-center duration-500'>
                  Hanyang Uni <br />
                  Korean Students
                </p>
              </NavLink>
            </div>
            <div className='item w-[106x] h-[60px] p-2.5	absolute left-[337px]'>
              <NavLink
                to='/SouthKorea'
                onClick={() => {
                  setCurrentItem(3);
                }}
                className={({ isActive }) =>
                  isActive ? 'text-gray-scale-9' : 'text-gray-scale-1'
                }
              >
                <p className='w-[91px] h-[40px] text-navBarFont text-center duration-500'>
                  South Korea <br />
                  All Students
                </p>
              </NavLink>
            </div>
            <div className='item w-[73x] h-[40px] p-2.5 absolute top-[10px] left-[479px]'>
              <NavLink
                to='/SearchingFriend'
                onClick={() => {
                  setCurrentItem(4);
                }}
                className={({ isActive }) =>
                  isActive ? 'text-gray-scale-9' : 'text-gray-scale-1'
                }
              >
                <p className='w-[53px] h-[20px] text-navBarFont text-center duration-500'>
                  친구찾기
                </p>
              </NavLink>
            </div>
          </div>
          <div className='flex flex-row w-[215px] h-[47px] absolute top-[14px] left-[1075px] gap-[37px]'>
            <Link to='/Search'>
              <div className='w-[47px] h-[47px] bg-search hover:bg-searchHover' />
            </Link>
            <LoginControl />
          </div>
        </div>
      </div>
      <div className='w-[1280px] h-[0px] border border-gray-scale-8 absolute left-[320px]' />
    </div>
  );
}
