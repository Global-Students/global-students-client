import { http, HttpResponse } from 'msw';

const handlers = [
  http.post('/user/find-id', () =>
    HttpResponse.json({
      isSuccess: true,
      code: 'LOGIN200_2',
    }),
  ),
];

export default handlers;
