const API_PATH = Object.freeze({
  findId: '/user/find-id',
  findPassword: '/user/find-password',
  checkUserId: (userId) => `/auth/join/check-id/${userId}`,
  checkNickname: (nickname) => `/auth/join/check-nickname/${nickname}`,
  sumbitSignUpInfo: '/auth/join/information',
});

export default API_PATH;
