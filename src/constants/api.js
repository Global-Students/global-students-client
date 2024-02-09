const API_PATH = Object.freeze({
  findId: '/user/find-id',
  findPassword: '/user/find-password',
  findPasswordCode: '/user/find-password/code',
  checkUserId: (userId) => `/auth/join/check-id/${userId}`,
  checkNickname: (nickname) => `/auth/join/check-nickname/${nickname}`,
  emailVarification: '/auth/join/university-verification/email',
  sumbitSignUpInfo: '/auth/join/information',
});

export default API_PATH;
