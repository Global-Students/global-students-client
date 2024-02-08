import React from 'react';
import { MEMBER_LIST, SCHEMA } from '../../constants';
import ManagementButton from '../Button/ManagementButton';

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
          {SCHEMA.memberList.map(({ id, head }) => (
            <th key={id} className={`${cellStyle} ${schemaStyle}`}>
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {MEMBER_LIST.map(
          ({
            uniqueId,
            memberId,
            name,
            nickname,
            birthDay,
            nationality,
            hostCountry,
            hostUniversity,
            joinDate,
            authentication,
            reportCount,
            accountSuspension: { isSuspension, period },
          }) => (
            <tr key={uniqueId}>
              <td className={cellStyle}>{uniqueId}</td>
              <td className={cellStyle}>{memberId}</td>
              <td className={cellStyle}>{name}</td>
              <td className={cellStyle}>{nickname}</td>
              <td className={cellStyle}>{birthDay}</td>
              <td className={cellStyle}>{nationality}</td>
              <td className={cellStyle}>{hostCountry}</td>
              <td className={cellStyle}>{hostUniversity}</td>
              <td className={cellStyle}>{joinDate}</td>
              <td className={cellStyle}>{authentication}</td>
              <td className={cellStyle}>{reportCount}</td>
              <td className={cellStyle}>
                {isSuspension ? (
                  <span className={suspensionStyle}>{`~${period}`}</span>
                ) : (
                  <ManagementButton text='계정정지' onClick={() => {}} />
                )}
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}
