import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ID } from '../constants';

export default function SideBar() {
  const [selectedMenu, setSelectedMenu] = useState(MENU_ID.member);
  const changeMenu = (event) => setSelectedMenu(event.target.id);

  const makerStyle = 'list-inside list-disc marker:text-sm';
  const makerColor = (menu) =>
    menu === selectedMenu ? 'marker:text-orange-1' : 'marker:text-gray-scale-2';
  const listStyle = (menu) =>
    `${
      menu === selectedMenu
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
        <li className={`${listLayout} ${makerColor(MENU_ID.member)}`}>
          <Link
            to='/admin/memberList'
            className={`${listStyle(MENU_ID.member)}`}
            id={MENU_ID.member}
            onClick={changeMenu}
          >
            회원목록
          </Link>
        </li>
        <li
          className={`${listLayout} ${makerColor(MENU_ID.universityApproval)}`}
        >
          <Link
            to='/admin'
            className={listStyle(MENU_ID.universityApproval)}
            id={MENU_ID.universityApproval}
            onClick={changeMenu}
          >
            학교승인
          </Link>
        </li>
      </ul>
      <ul className={`flex flex-col gap-[23px] ${makerStyle}`}>
        <span className={`${titleStyle}`}>신고 및 문의</span>
        <li className={`${listLayout} ${makerColor(MENU_ID.report)}`}>
          <Link
            to='/admin'
            className={listStyle(MENU_ID.report)}
            id={MENU_ID.report}
            onClick={changeMenu}
          >
            게시글/댓글 신고
          </Link>
        </li>
        <li className={`${listLayout} ${makerColor(MENU_ID.inquiry)}`}>
          <Link
            to='/admin'
            className={listStyle(MENU_ID.inquiry)}
            id={MENU_ID.inquiry}
            onClick={changeMenu}
          >
            회원 문의
          </Link>
        </li>
      </ul>
      <ul className={`flex flex-col gap-[23px] ${makerStyle}`}>
        <span className={`${titleStyle}`}>양식 관리</span>
        <li className={`${listLayout} ${makerColor(MENU_ID.emailTemplate)}`}>
          <Link
            to='/admin'
            className={listStyle(MENU_ID.emailTemplate)}
            id={MENU_ID.emailTemplate}
            onClick={changeMenu}
          >
            메일 양식 관리하기
          </Link>
        </li>
        <li className={`${listLayout} ${makerColor(MENU_ID.notice)}`}>
          <Link
            to='/admin'
            className={listStyle(MENU_ID.notice)}
            id={MENU_ID.notice}
            onClick={changeMenu}
          >
            공지글 관리하기
          </Link>
        </li>
      </ul>
    </section>
  );
}
