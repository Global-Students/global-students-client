import React from 'react';
import SearchBox from '../../components/SearchBox';
import MemberListTable from '../../components/Table/MemberListTable';

export default function MemberList() {
  const layoutStyle = 'flex flex-col items-center';
  const titleStyle = 'w-full flex flex-col items-start';
  const categoryStyle =
    'text-gray-scale-4 text-[16px] font-normal leading mb-[10px]';
  const menuStyle = 'text-gray-scale-1 text-[26px] font-bold leading mb-[12px]';

  return (
    <section className={layoutStyle}>
      <div className={titleStyle}>
        <span className={categoryStyle}>회원관리</span>
        <h3 className={menuStyle}>회원목록</h3>
      </div>
      <div className='mb-[15px]'>
        <SearchBox />
      </div>
      <MemberListTable />
    </section>
  );
}
