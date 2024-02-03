import { http, HttpResponse } from 'msw';

const handlers = [
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
];

export default handlers;
