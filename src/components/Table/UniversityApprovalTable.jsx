import React from 'react';
import { SCHEMA, UNIVERSITY_APPROVAL_LIST } from '../../constants';
import ManagementButton from '../Button/ManagementButton';

export default function UniversityApprovalTable() {
  const tableStyle =
    'block w-[954px] max-h-[777px] overflow-auto border-separate border-spacing-0 border-r border-b border-gray-sacle-7-main whitespace-nowrap rounded-[4px] text-center text-[13px] pb-[1px] mb-[40px]';
  const tableHeadStyle = 'sticky top-0 bg-gray-scale-8 rounded-[4px]';
  const schemaStyle = 'text-gray-scale-1 font-semibold';
  const rowStyle = 'w-[953px] flex';
  const cellStyle =
    'inline-block flex-1 h-[37px] leading-[37px] border-l border-t border-gray-sacle-7-main text-gray-scale-2 font-normal p-0';

  return (
    <table className={tableStyle}>
      <thead className={tableHeadStyle}>
        <tr className={rowStyle}>
          {SCHEMA.universityApprovalList.map((field) => (
            <th className={`${cellStyle} ${schemaStyle}`}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {UNIVERSITY_APPROVAL_LIST.map((record) => (
          <tr className={rowStyle}>
            <td className={cellStyle}>{record.uniqueId}</td>
            <td className={cellStyle}>{record.memberId}</td>
            <td className={cellStyle}>{record.joinDate}</td>
            <td className={cellStyle}>{record.university}</td>
            <td className={cellStyle}>{`[${record.file.name}].png`}</td>
            <td className={cellStyle} aria-label='aa'>
              <ManagementButton text='인증하기' onClick={() => {}} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
