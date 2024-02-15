import { REGEX } from '../constants';

const checkUserIdPattern = (userId) => REGEX.userIdPattern.test(userId);
const checkPasswordPattern = (password) => REGEX.passwordPattern.test(password);
const checkPasswordReEnter = (password, confirmPassword) =>
  password === confirmPassword;

export { checkPasswordPattern, checkPasswordReEnter, checkUserIdPattern };
