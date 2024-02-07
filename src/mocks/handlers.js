import { http, HttpResponse } from 'msw';

const handlers = [
  http.post(
    `/auth/login`,
    () =>
      HttpResponse.json(
        { message: '로그인 성공' },
        {
          status: 201,
          headers: { Authorization: 'Bearer {JWT_TOKEN}' },
        },
      ),
    // HttpResponse.json({ message: '로그인 실패' }, { status: 400 }),
  ),
  http.get(
    `/auth/join/check-id/:userId`,
    () =>
      HttpResponse.json({
        isSuccess: true,
        message: 'OK - user id',
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       // code: 'CHECK403_2',
    //       code: 'CHECK409_2',
    //       // code: 'COMMON500',
    //       // code: 'COMMON503',
    //       message: 'fail - user id',
    //     },
    //     {
    //       status: 400,
    //     },
    //   ),
  ),
  http.get(
    `/auth/join/check-nickname/:nickname`,
    () =>
      HttpResponse.json({
        isSuccess: true,
        message: 'OK - nickname',
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       // code: 'CHECK403_2',
    //       code: 'CHECK409_2',
    //       // code: 'COMMON500',
    //       // code: 'COMMON503',
    //       message: 'fail - nickname',
    //     },
    //     { status: 400 },
    //   ),
  ),
  http.post(
    '/auth/join/university-verification/email',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'JOIN201_3',
        message: '인증번호 전송 성공',
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'VERIFY400_2',
    //       message: '학생 혹은 교육기관의 이메일이 아닙니다',
    //     },
    //     { status: 400 },
    //   ),
  ),
  http.post(
    `/auth/join/information`,
    () =>
      HttpResponse.json({
        isSuccess: true,
        message: '회원가입 성공',
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'COMMON500',
    //       // code: 'COMMON503',
    //       message: 'fail - signUp',
    //     },
    //     { status: 500 },
    //   ),
    // const baseUrl = ' http://localhost';
  ),
];

export default handlers;
