const API_PATH = Object.freeze({
  findId: '/user/find-id',
  findPassword: '/user/find-password',
  findPasswordCode: '/user/find-password/code',
  checkUserId: (userId) => `/auth/join/check-id/${userId}`,
  checkNickname: (nickname) => `/auth/join/check-nickname/${nickname}`,
  sumbitSignUpInfo: '/auth/join/information',
  logout: '/auth/logout',
});

export default API_PATH;
