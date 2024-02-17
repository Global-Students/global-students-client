import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SideBar() {
  const { pathname } = useLocation();
  const menu = pathname.split('/').pop();
  const [selectedMenu, setSelectedMenu] = useState(
    menu === 'admin' || menu === '' ? 'member-list' : menu,
  );
  const changeMenu = (event) => setSelectedMenu(event.target.name);

  const makerStyle = 'list-inside list-disc marker:text-sm';
  const makerColor = (menuId) =>
    menuId === selectedMenu
      ? 'marker:text-orange-1'
      : 'marker:text-gray-scale-2';
  const listStyle = (menuId) =>
    `${
      menuId === selectedMenu
        ? 'text-orange-1 font-medium'
        : 'text-gray-scale-2 font-normal'
    } text-[18px] tracking-[0.36px] align-middle inline-block ml-[-3px]`;
  const titleStyle =
    'text-gray-scale-4 text-[14px] font-semibold leading-[20px] tracking-[0.28px]';
  const listLayout = 'ml-[14px] leading-[20px]';

  return (
    <section className='flex flex-col gap-[23px] border rounded border-gray-scale-8 bg-gray-scale-9 shadow py-[48px] pl-[38px] pr-[79px] mr-[42px]'>
      <ul className={`flex flex-col gap-[23px] ${makerStyle}`}>
        <span className={`${titleStyle}`}>회원관리</span>
        <li className={`${listLayout} ${makerColor('member-list')}`}>
          <Link
            to='/admin/member-list'
            className={`${listStyle('member-list')}`}
            name='member-list'
            onClick={changeMenu}
          >
            회원목록
          </Link>
        </li>
        <li className={`${listLayout} ${makerColor('university-approval')}`}>
          <Link
            to='/admin/university-approval'
            className={listStyle('university-approval')}
            name='university-approval'
            onClick={changeMenu}
          >
            학교승인
          </Link>
        </li>
      </ul>
      <ul className={`flex flex-col gap-[23px] ${makerStyle}`}>
        <span className={`${titleStyle}`}>신고 및 문의</span>
        <li className={`${listLayout} ${makerColor('report')}`}>
          <Link
            to='/admin/report'
            className={listStyle('report')}
            name='report'
            onClick={changeMenu}
          >
            게시글/댓글 신고
          </Link>
        </li>
        <li className={`${listLayout} ${makerColor('inquiry')}`}>
          <Link
            to='/admin/inquiry'
            className={listStyle('inquiry')}
            name='inquiry'
            onClick={changeMenu}
          >
            회원 문의
          </Link>
        </li>
      </ul>
      <ul className={`flex flex-col gap-[23px] ${makerStyle}`}>
        <span className={`${titleStyle}`}>양식 관리</span>
        <li className={`${listLayout} ${makerColor('email-template')}`}>
          <Link
            to='/admin/email-template'
            className={listStyle('email-template')}
            name='email-template'
            onClick={changeMenu}
          >
            메일 양식 관리하기
          </Link>
        </li>
        <li className={`${listLayout} ${makerColor('notice')}`}>
          <Link
            to='/admin/notice'
            className={listStyle('notice')}
            name='notice'
            onClick={changeMenu}
          >
            공지글 관리하기
          </Link>
        </li>
      </ul>
    </section>
  );
}
