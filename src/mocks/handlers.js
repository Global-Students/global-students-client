import { http, HttpResponse } from 'msw';

const handlers = [
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
    //   HttpResponse.json(
    //     {
    //       isSuccess: false,
    //       code: 'VERIFY400_3',
    //       message: 'find password - fail',
    //     },
    //     {
    //       status: 400,
    //     },
    //   ),
  ),
  http.get(
    'user/find-password',
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
    //       code: 'VERIFY403_3',
    //       message: 'code verification - fail',
    //     },
    //     {
    //       status: 400,
    //     },
    //   ),
  ),
];

export default handlers;
