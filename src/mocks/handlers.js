import { http, HttpResponse } from 'msw';

// const baseUrl = ' http://localhost';

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
];

export default handlers;
