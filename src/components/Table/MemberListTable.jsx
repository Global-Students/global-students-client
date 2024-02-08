import React from 'react';
import SuspensionButton from '../Button/SuspensionButton';

export default function MemberListTable() {
  const schema = [
    '회원 고유 번호',
    '회원 id',
    '이름',
    '닉네임',
    '생일',
    '국적',
    '유학국',
    '학교',
    '가입일자',
    '인증여부',
    '신고횟수',
    '상태',
  ];
  const records = [
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: false,
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: false,
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: false,
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
    {
      uniqueId: 'U_230101001',
      memberId: 'id_12345',
      name: '홍길동',
      nickname: '닉네임',
      birthDay: '2000.00.00',
      nationality: '대한민국',
      hostCountry: '대한민국',
      hostUniversity: '한국대학교',
      joinDate: '2000.00.00',
      authentication: '인증',
      reportCount: '0회',
      accountSuspension: {
        isSuspension: true,
        period: '2/1',
      },
    },
  ];

  const tableStyle =
    'block w-[954px] max-h-[777px] overflow-auto border-separate border-spacing-0 border-r border-gray-sacle-7-main whitespace-nowrap rounded-[4px] text-center text-[13px] mb-[41px]';
  const tableHeadStyle = 'sticky top-0 bg-gray-scale-8 rounded-[4px]';
  const schemaStyle = 'text-gray-scale-1 font-semibold';
  const cellStyle =
    'inline-block min-w-[109px] h-[37px] leading-[37px] border-l border-t border-gray-sacle-7-main text-gray-scale-2 font-normal p-0';
  const suspensionStyle = 'text-orange-1 font-semibold';

  return (
    <table className={tableStyle}>
      <thead className={tableHeadStyle}>
        <tr>
          {schema.map((field) => (
            <th className={`${cellStyle} ${schemaStyle}`}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
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
