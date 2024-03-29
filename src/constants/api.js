const API_PATH = Object.freeze({
  login: '/auth/login',
  refresh: '/auth/refresh',
  logout: '/auth/logout',
  checkUserId: (userId) => `/auth/join/check-id/${userId}`,
  checkNickname: (nickname) => `/auth/join/check-nickname/${nickname}`,
  emailVarification: '/auth/join/university-verification/email',
  emailVarificationCode: '/auth/join/university-verification/email/code',
  sumbitSignUpInfo: '/auth/join/information',
  findId: '/user/find-id',
  findPassword: '/user/find-password',
  findPasswordCode: '/user/find-password/code',
  passwordReset: '/user/find-password/reset',
  searchPopularLists: '/search/popular-post',
});

export default API_PATH;
