import React from 'react';
import { Link } from 'react-router-dom';
import { SCHEMA } from '../../constants';
import { POST_REPORT_LIST } from '../../constants/dummy';
import SquareCheckBox from '../Input/SquareCheckBox';

export default function PostReportTable() {
  const tableStyle =
    'block w-[954px] max-h-[777px] overflow-auto border-separate border-spacing-0 border-r border-gray-sacle-7-main whitespace-nowrap rounded-[4px] text-center text-[13px] pb-[1px] mb-[40px]';
  const tableHeadStyle = 'sticky top-0 bg-gray-scale-8 rounded-[4px]';
  const schemaStyle = 'text-gray-scale-1 font-semibold';
  const cellStyle =
    'h-[37px] align-middle leading-[37px] border-l border-t border-gray-sacle-7-main text-gray-scale-2 font-normal';
  const statusStyle = 'text-orange-1 font-semibold';
  const linkStyle =
    'block w-[81px] truncate underline underline-offset-2 text-[#148EE6] font-semibold leading-[130%] m-auto ';

  return (
    <table className={tableStyle}>
      <thead className={tableHeadStyle}>
        <tr>
          {SCHEMA.postReport.map(({ id, head }) => (
            <th key={id} className={`${cellStyle} ${schemaStyle}`}>
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {POST_REPORT_LIST.map(
          (
            {
              title,
              link,
              id,
              initialReportDate,
              postDate,
              reportCount,
              reason,
              isResolved,
              status,
            },
            index,
          ) => (
            <tr key={id}>
              <td className={`${cellStyle} w-[50px]`}>{index + 1}</td>
              <td className={`${cellStyle} w-[105.5px]`}>
                <Link className={linkStyle} to={link}>
                  {title}
                </Link>
              </td>
              <td className={`${cellStyle} w-[105.5px]`}>{id}</td>
              <td className={`${cellStyle} w-[105.5px]`}>
                {initialReportDate}
              </td>
              <td className={`${cellStyle} w-[105.5px]`}>{postDate}</td>
              <td className={`${cellStyle} w-[75px]`}>{reportCount}</td>
              <td className={`${cellStyle} w-[240px]`}>{reason}</td>
              <td className={`${cellStyle} w-[75px]`}>
                {' '}
                <SquareCheckBox isChecked={isResolved} />
              </td>
              <td className={`${cellStyle} ${statusStyle} w-[75px]`}>
                {status}
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}
