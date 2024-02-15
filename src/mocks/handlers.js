import { http, HttpResponse } from 'msw';

const handlers = [
  http.post(
    `/auth/login`,
    () =>
      HttpResponse.json(
        {
          isSuccess: true,
          code: 'COMMON201',
          message: '생성하였습니다',
          result: {
            accessToken: 'Bearer Token',
            refreshToken: '9c8b3ad5-50e1-4db1-b180-3f4a11212d1d',
            expireAt: '2023-03-02T11:44:30.327959',
          },
        },
        {
          headers: { Authorization: 'Bearer {JWT_TOKEN}' },
        },
      ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'LOGIN400_1',
    //       message: '아이디 혹은 비밀번호를 재입력하세요',
    //       result: {},
    //     },
    //     { status: 400 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'LOGIN403_1',
    //       message: '접근이 거부되었습니다',
    //       result: {},
    //     },
    //     { status: 403 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'COMMON500',
    //       message: '서버 에러',
    //       result: {},
    //     },
    //     { status: 500 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'COMMON503',
    //       message: '일시적인 서버 오류',
    //       result: {},
    //     },
    //     { status: 503 },
    //   ),
  ),
  http.post(
    '/auth/refresh',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'COMMON201',
        message: '생성하였습니다',
        result: {
          accessToken:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzA3NDk4NzQ0LCJleHAiOjE3MDc0OTg3ODB9.nq2JmdT4ydYulq6DUM-b0b9ofBjbKPm_rvg_k7ErZJE',
          expireAt: '2024-02-20T03:21:19',
        },
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'TOKEN401_4',
    //       message: '만료된 refresh 토큰입니다',
    //     },
    //     { status: 401 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'COOKIE400_1',
    //       message: 'Cookie에 refresh 토큰이 없습니다',
    //     },
    //     { status: 400 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'TOKEN400_1',
    //       message: '유효한 토큰입니다',
    //     },
    //     { status: 400 },
    //   ),
  ),
  http.post(
    '/auth/logout',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'LOGIN201_2',
        message: '로그아웃 성공',
        result: {},
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'COMMON401',
    //       message: '인증이 필요합니다',
    //       result: {},
    //     },
    //     { status: 401 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'LOGIN403_1',
    //       message: '접근이 거부되었습니다',
    //       result: {},
    //     },
    //     { status: 403 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'COMMON500',
    //       message: '서버 에러',
    //       result: {},
    //     },
    //     { status: 500 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'COMMON503',
    //       message: '일시적인 서버 오류',
    //       result: {},
    //     },
    //     { status: 503 },
    //   ),
  ),
  http.get(
    `/auth/join/check-id/:userId`,
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'JOIN200_1',
        message: 'OK',
        result: {},
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'CHECK403_1',
    //       message: '접근이 거부되었습니다',
    //       result: {},
    //     },
    //     { status: 403 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'CHECK409_1',
    //       message: '이미 존재하는 아이디입니다',
    //       result: {},
    //     },
    //     { status: 409 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'COMMON500',
    //       message: '서버 에러',
    //       result: {},
    //     },
    //     { status: 500 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'COMMON503',
    //       message: '일시적인 서버 오류',
    //       result: {},
    //     },
    //     { status: 503 },
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
    //       code: 'CHECK409_2',
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
    '/auth/join/university-verification/email/code',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'JOIN200_5',
        message: '인증번호 전송 성공',
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'VERIFY400_2',
    //       message: '잘못된 인증번호입니다',
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
  http.post('/user/find-id', () =>
    HttpResponse.json({
      isSuccess: true,
      code: 'LOGIN200_2',
      message: 'find id - ok',
    }),
  ),
  http.post(
    'user/find-password',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'LOGIN201_1',
        message: 'find password - ok',
      }),
    // () =>
    // HttpResponse.json(
    //   {
    //     isSuccess: false,
    //     code: 'VERIFY400_3',
    //     message: 'find password - fail',
    //   },
    //   {
    //     status: 400,
    //   },
    // ),
  ),
  http.post(
    'user/find-password/code',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'VERIFY200_1',
        message: 'code verification - ok',
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'CHECK403_2',
    //       message: 'code verification - fail',
    //     },
    //     {
    //       status: 400,
    //     },
    //   ),
  ),
  http.patch(
    '/user/find-password/reset',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'LOGIN201_1',
        message: '비밀번호 재설정 성공',
        result: {},
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'LOGIN400_6',
    //       message: '잘못된 형식입니다',
    //       result: {},
    //     },
    //     {
    //       status: 400,
    //     },
    //   ),
  ),
];

export default handlers;
