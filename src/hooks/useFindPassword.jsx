import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_PATH } from '../constants';

export default function useFindAccount() {
  const findId = (body) =>
    axios
      .post(API_PATH.findId, body)
      .then(() => alert('메일로 아이디를 전송했습니다.'))
      .catch((error) => alert(error.response.data.message));

  const sendCode = (body, setIsEmailVerified) =>
    axios
      .post(API_PATH.findPassword, body)
      .then((response) => {
        setIsEmailVerified(true);
        alert(response.data.message);
      })
      .catch((error) => alert(error.response.data.message));

  const verifyCode = (body, setIsPasswordResettable) =>
    axios
      .post(API_PATH.findPasswordCode, body)
      .then(() => setIsPasswordResettable(true))
      .catch((error) => {
        alert(error.response.data.message);
        setIsPasswordResettable(error.response.data.result.verified);
      });

  const navigator = useNavigate();
  const resetPassword = (body) =>
    axios
      .patch(API_PATH.resetPassword, body)
      .then(() => {
        alert('비밀번호가 변경됐습니다.');
        navigator('/login');
      })
      .catch(() => false);

  return { findId, resetPassword, sendCode, verifyCode };
}
