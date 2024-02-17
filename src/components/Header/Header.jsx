import { React, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import authAxios from '../../axios/authAxios';
import LoginControl from '../LoginControl';
import SearchHeader from './SearchHeader';

export default function Header() {
  const navRectangle = useRef();
  const { pathname } = useLocation();
  const [currentItem, setCurrentItem] = useState(0);
  const [searchClick, setSearchClick] = useState(false);

  const [boardInfo, setBoardInfo] = useState({});
  const baseurl = `/board-information`;

  const getHeaderInfo = async () => {
    const requrl = `${baseurl}`;

    try {
      const res = await authAxios({
        method: 'get',
        url: requrl,
      });
      if (res.data.code === 'COMMON200') {
        setBoardInfo(res.data.result);

        localStorage.setItem('boardId_1', boardInfo.boardId_1);
        localStorage.setItem('boardName_1', boardInfo.boardName_1);
        localStorage.setItem('boardId_2', boardInfo.boardId_2);
        localStorage.setItem('boardName_2', boardInfo.boardName_2);
        localStorage.setItem('boardId_3', boardInfo.boardId_3);
        localStorage.setItem('boardName_3', boardInfo.boardName_3);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeaderInfo();
  }, []);

  function handleToggle() {
    setSearchClick((prev) => !prev);
  }
  const boardId = {
    boardId_1: localStorage.getItem('boardId_1'),
    boardId_2: localStorage.getItem('boardId_2'),
    boardId_3: localStorage.getItem('boardId_3'),
  };

  const boardName = {
    boardName_1: localStorage.getItem('boardName_1'),
    boardName_2: localStorage.getItem('boardName_2'),
    boardName_3: localStorage.getItem('boardName_3'),
  };

  useEffect(() => {
    if (currentItem === 1 || pathname.includes('/notice-board/All/')) {
      navRectangle.current.style.width = '140px';
      navRectangle.current.style.left = '-13px';
    }
    if (
      currentItem === 2 ||
      pathname.includes('/notice-board/International/')
    ) {
      navRectangle.current.style.width = '164px';
      navRectangle.current.style.left = '144px';
    }
    if (currentItem === 3 || pathname.includes('/notice-board/SouthKorea/')) {
      navRectangle.current.style.width = '132px';
      navRectangle.current.style.left = '317px';
    }
    if (currentItem === 4 || pathname.includes('/SearchingFriend/')) {
      navRectangle.current.style.width = '99px';
      navRectangle.current.style.left = '464px';
    }
    if (
      pathname.includes('/notice-board/') ||
      pathname.includes('/SearchingFriend')
    ) {
      navRectangle.current.style.opacity = '1';
    } else {
      navRectangle.current.style.opacity = '0';
    }
  });

  return (
    <div className='relative'>
      <SearchHeader searchClick={searchClick} setSearchClick={setSearchClick} />
      <div className='flex h-[130px] justify-center items-center'>
        <div className='flex w-[1280px] h-[130px] justify-center items-center border-b border-gray-scale-8'>
          <div className='flex flex-row w-[1280px] h-[76px] py-[27px] justify-between items-center'>
            <div className='flex w-[216px] h-[61px]'>
              <Link to='/'>
                <img src='/assets/logoHeader.svg' alt='logo' />
              </Link>
            </div>
            <div className='flex flex-row w-[552px] h-[60px] relative items-center justify-between'>
              <span
                ref={navRectangle}
                className='navRectangle w-[140px] h-[54px] absolute -z-10 bg-orange-main rounded-[35px] duration-500 opacity-0'
              />
              <div className='w-[114px] h-[60px] p-2.5'>
                <NavLink
                  to={`/notice-board/${boardId.boardId_1}`}
                  onClick={() => {
                    setCurrentItem(1);
                  }}
                  className={({ isActive }) =>
                    isActive ? 'text-gray-scale-9' : 'text-gray-scale-1'
                  }
                >
                  <p className='w-[94px] h-[40px] text-headerFont text-center duration-500'>
                    {boardName.boardName_1}
                    <br />
                  </p>
                </NavLink>
              </div>
              <div className='w-[138x] h-[60px] p-2.5'>
                <NavLink
                  to={`/notice-board/${boardId.boardId_2}`}
                  onClick={() => {
                    setCurrentItem(2);
                  }}
                  className={({ isActive }) =>
                    isActive ? 'text-gray-scale-9' : 'text-gray-scale-1'
                  }
                >
                  <p className='w-[146px] h-[40px] text-headerFont text-center duration-500'>
                    {boardName.boardName_2}
                  </p>
                </NavLink>
              </div>
              <div className='w-[106x] h-[60px] p-2.5'>
                <NavLink
                  to={`/notice-board/${boardId.boardId_3}`}
                  onClick={() => {
                    setCurrentItem(3);
                  }}
                  className={({ isActive }) =>
                    isActive ? 'text-gray-scale-9' : 'text-gray-scale-1'
                  }
                >
                  <p className='w-[91px] h-[40px] text-headerFont text-center duration-500'>
                    {boardName.boardName_3}
                  </p>
                </NavLink>
              </div>
              <div className='w-[73x] h-[40px] p-2.5'>
                <NavLink
                  to='/SearchingFriend'
                  onClick={() => {
                    setCurrentItem(4);
                  }}
                  className={({ isActive }) =>
                    isActive ? 'text-gray-scale-9' : 'text-gray-scale-1'
                  }
                >
                  <p className='w-[53px] h-[20px] text-headerFont text-center duration-500'>
                    친구찾기
                  </p>
                </NavLink>
              </div>
            </div>
            <div className='flex flex-row w-[215px] h-[47px] justify-between items-center'>
              <button type='button' onClick={handleToggle}>
                <div className='group w-[47px] h-[47px] relative'>
                  <img src='/assets/search.svg' alt='search' />
                  <img
                    src='/assets/searchHover.svg'
                    alt='searchHover'
                    className='absolute top-0 left-0 hidden group-hover:block'
                  />
                </div>
              </button>
              <LoginControl />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
