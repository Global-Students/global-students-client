import React from 'react';
import UniversityApprovalTable from '../../components/Table/UniversityApprovalTable';

export default function UniversityApprovalPage() {
  const layoutStyle = 'flex flex-col items-center';
  const titleStyle = 'w-full flex flex-col items-start';
  const categoryStyle =
    'text-gray-scale-4 text-[16px] font-normal leading mb-[10px]';
  const menuStyle = 'text-gray-scale-1 text-[26px] font-bold leading mb-[25px]';

  return (
    <section className={layoutStyle}>
      <div className={titleStyle}>
        <span className={categoryStyle}>회원관리</span>
        <h3 className={menuStyle}>학교 승인</h3>
      </div>
      <UniversityApprovalTable />
    </section>
  );
}
