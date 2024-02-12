import { http, HttpResponse } from 'msw';
import board from './board.json';

const boardId = 123;

const handlers = [
  http.get(`/boards/${boardId}`, () => HttpResponse.json(board)),
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
  http.get(`/auth/join/check-id/:userId`, () =>
    HttpResponse.json({
      isSuccess: true,
      message: 'OK - user id',
    }),
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
];

export default handlers;
