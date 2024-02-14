const API_PATH = Object.freeze({
  refresh: '/auth/refresh',
  checkUserId: (userId) => `/auth/join/check-id/${userId}`,
  checkNickname: (nickname) => `/auth/join/check-nickname/${nickname}`,
  emailVarification: '/auth/join/university-verification/email',
  emailVarificationCode: '/auth/join/university-verification/email/code',
  sumbitSignUpInfo: '/auth/join/information',
  findId: '/user/find-id',
  findPassword: '/user/find-password',
  findPasswordCode: '/user/find-password/code',
  passwordReset: '/user/find-password/reset',
});

export default API_PATH;
