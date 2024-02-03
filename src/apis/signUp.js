import axios from 'axios';
import { API_PATH } from '../constants';

const submitSignUpInfo = (signUpInfo, moveStep) => {
  axios
    .post(API_PATH.sumbitSignUpInfo, signUpInfo, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => moveStep('welcome'))
    .catch(() => alert('회원가입을 진행할 수 없습니다. 다시 시도해주세요.'));
};

export default submitSignUpInfo;
