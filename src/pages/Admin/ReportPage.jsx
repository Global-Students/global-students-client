import React from 'react';
import PostReportTable from '../../components/Table/PostReportTable';

export default function ReportPage() {
  const layoutStyle = 'flex flex-col items-center';
  const titleStyle = 'w-full flex flex-col items-start';
  const categoryStyle =
    'text-gray-scale-4 text-[16px] font-normal leading mb-[10px]';
  const menuStyle = 'text-gray-scale-1 text-[26px] font-bold leading mb-[12px]';

  return (
    <section className={layoutStyle}>
      <div className={titleStyle}>
        <span className={categoryStyle}>신고 및 문의</span>
        <h3 className={menuStyle}>게시글 신고</h3>
      </div>
      <PostReportTable />
    </section>
  );
}
