import React from 'react';
import { MEMBER_LIST, SCHEMA } from '../../constants';
import SuspensionButton from '../Button/SuspensionButton';

export default function MemberListTable() {
  const tableStyle =
    'block w-[954px] max-h-[777px] overflow-auto border-separate border-spacing-0 border-r border-gray-sacle-7-main whitespace-nowrap rounded-[4px] text-center text-[13px] pb-[1px] mb-[40px]';
  const tableHeadStyle = 'sticky top-0 bg-gray-scale-8 rounded-[4px]';
  const schemaStyle = 'text-gray-scale-1 font-semibold';
  const cellStyle =
    'inline-block min-w-[109px] h-[37px] leading-[37px] border-l border-t border-gray-sacle-7-main text-gray-scale-2 font-normal p-0';
  const suspensionStyle = 'text-orange-1 font-semibold';

  return (
    <table className={tableStyle}>
      <thead className={tableHeadStyle}>
        <tr>
          {SCHEMA.memberList.map((field) => (
            <th className={`${cellStyle} ${schemaStyle}`}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {MEMBER_LIST.map((record) => (
          <tr>
            <td className={cellStyle}>{record.uniqueId}</td>
            <td className={cellStyle}>{record.memberId}</td>
            <td className={cellStyle}>{record.name}</td>
            <td className={cellStyle}>{record.nickname}</td>
            <td className={cellStyle}>{record.birthDay}</td>
            <td className={cellStyle}>{record.nationality}</td>
            <td className={cellStyle}>{record.hostCountry}</td>
            <td className={cellStyle}>{record.hostUniversity}</td>
            <td className={cellStyle}>{record.joinDate}</td>
            <td className={cellStyle}>{record.authentication}</td>
            <td className={cellStyle}>{record.reportCount}</td>
            <td className={cellStyle}>
              {record.accountSuspension.isSuspension ? (
                <span className={suspensionStyle}>
                  {`~${record.accountSuspension.period}`}
                </span>
              ) : (
                <SuspensionButton />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
