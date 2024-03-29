import { http, HttpResponse } from 'msw';
import board from './board.json';
import searchPop from './searchPop.json';
import boardInfo from './boardInfo.json';
import totalSearch from './totalSearch.json';
import univSearch from './univSearch.json';

// const deniedAccess = () =>
//   HttpResponse.json(
//     {
//       isSuccess: false,
//       code: 'LOGIN403_1',
//       message: '접근이 거부되었습니다',
//       result: {},
//     },
//     { status: 403 },
//   );

// const serverError = () =>
//   HttpResponse.json(
//     {
//       isSuccess: false,
//       code: 'COMMON500',
//       message: '서버 에러',
//       result: {},
//     },
//     { status: 500 },
//   );

// const temporaryServerError = () =>
//   HttpResponse.json(
//     {
//       isSuccess: false,
//       code: 'COMMON503',
//       message: '일시적인 서버 오류',
//       result: {},
//     },
//     { status: 503 },
//   );

const handlers = [
  http.get(`/boards/${localStorage.getItem('currentBoardId')}`, () =>
    HttpResponse.json(board),
  ),
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
    // deniedAccess,
    // serverError,
    // temporaryServerError,
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
    // deniedAccess,
    // serverError,
    // temporaryServerError,
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
    //       code: 'CHECK409_1',
    //       message: '이미 존재하는 아이디입니다',
    //       result: {},
    //     },
    //     { status: 409 },
    //   ),
    // deniedAccess,
    // serverError,
    // temporaryServerError,
  ),
  http.get(
    `/auth/join/check-nickname/:nickname`,
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'JOIN200_2',
        message: 'OK',
        result: {},
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'CHECK409_2',
    //       message: '이미 존재하는 닉네임입니다',
    //       result: {},
    //     },
    //     { status: 409 },
    //   ),
    // deniedAccess,
    // serverError,
    // temporaryServerError,
  ),
  http.post(
    '/auth/join/university-verification/email',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'JOIN201_3',
        message: '인증번호 전송 성공',
        result: {},
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'VERIFY400_1',
    //       message: '잘못된 이메일 형식입니다',
    //       result: {},
    //     },
    //     { status: 400 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'VERIFY400_2',
    //       message: '학생 혹은 교육기관의 이메일이 아닙니다',
    //       result: {},
    //     },
    //     { status: 400 },
    //   ),
    // deniedAccess,
    // serverError,
    // temporaryServerError,
  ),
  http.post(
    '/auth/join/university-verification/email/code',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'JOIN200_5',
        message: 'OK',
        result: {
          university: '00 대학교',
        },
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'VERIFY400_2',
    //       message: '잘못된 인증번호입니다',
    //       result: {},
    //     },
    //     { status: 400 },
    //   ),
    // deniedAccess,
    // serverError,
    // temporaryServerError,
  ),
  http.post(
    `/auth/join/information`,
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'JOIN201_1',
        message: '기본 정보 입력 성공',
        result: {
          complete: true,
        },
      }),
    // serverError,
    // temporaryServerError,
  ),
  http.post(
    '/user/find-id',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'LOGIN200_2',
        message: 'OK',
        result: {},
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'LOGIN400_2',
    //       message: '등록된 이메일이 존재하지 않습니다',
    //       result: {},
    //     },
    //     { status: 400 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'LOGIN400_3',
    //       message: '잘못된 형식입니다.',
    //       result: {},
    //     },
    //     { status: 400 },
    //   ),
    // serverError,
    // temporaryServerError,
  ),
  http.post(
    'user/find-password',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'VERIFY201_1',
        message: '인증번호 전송 성공',
        result: {},
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'VERIFY400_3',
    //       message: '등록된 이메일이 존재하지 않습니다',
    //       result: {},
    //     },
    //     {
    //       status: 400,
    //     },
    //   ),
    // deniedAccess,
    // serverError,
    // temporaryServerError,
  ),
  http.post(
    'user/find-password/code',
    () =>
      HttpResponse.json({
        isSuccess: true,
        code: 'JOIN200_5',
        message: 'OK',
        result: {},
      }),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'VERIFY400_2',
    //       message: '잘못된 인증번호입니다',
    //       result: {
    //         verified: false,
    //       },
    //     },
    //     { status: 400 },
    //   ),
    // () =>
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'VERIFY403_3',
    //       message: '접근이 거부되었습니다',
    //       result: {
    //         verified: false,
    //       },
    //     },
    //     { status: 403 },
    //   ),
    // serverError,
    // temporaryServerError,
  ),
  http.post(
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
    //     { status: 400 },
    //   ),
    // serverError,
    // temporaryServerError,
  ),
  http.post('/boards/post/write', async ({ request }) => {
    const { title, content } = await request.json();

    return HttpResponse.json({
      status: 200,

      body: {
        postId: '1',
        title,
        content,
        message: '게시물이 성공적으로 작성되었습니다.',
      },
    });
  }),

  http.put('/boards/post/write/:postId', async ({ request, params }) => {
    const { postId } = params;

    const { title, content } = await request.json();

    const updatedData = {
      postId,
      title,
      content,
      message: '게시물이 성공적으로 수정되었습니다.',
    };

    return HttpResponse.json(updatedData);
  }),

  http.post('/boards/post/upload-image', async ({ request }) => {
    try {
      const formData = await request.formData();
      const imageFile = formData.get('image');

      return HttpResponse.json({
        status: 200,

        body: {
          postId: '12345',
          imageFile,
          message: '사진이 성공적으로 업로드되었습니다.',
        },
      });
    } catch (error) {
      console.error('Error while uploading image:', error);
      return HttpResponse.error();
    }
  }),
  http.get(`/search/popular-post`, () => HttpResponse.json(searchPop)),
  http.get(`/board-information`, () => HttpResponse.json(boardInfo)),
  http.get(`/search/total`, () => HttpResponse.json(totalSearch)),
  http.get(`/search/university`, () => HttpResponse.json(univSearch)),
];
export default handlers;
