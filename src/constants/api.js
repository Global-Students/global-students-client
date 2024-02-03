const API_PATH = Object.freeze({
  checkUserId: (userId) => `/auth/join/check-id/${userId}`,
  checkNickname: (nickname) => `/auth/join/check-nickname/${nickname}`,
});

export default API_PATH;
