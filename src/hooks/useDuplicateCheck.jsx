import axios from 'axios';
import { useState } from 'react';

export default function useDuplicateCheck() {
  const [result, setResult] = useState(false);
  const [message, setMessage] = useState('');
  const checkDuplicate = (url, target) => {
    axios
      .get(url, {
        'Content-Type': 'application/json',
      })
      .then((response) => {
        setMessage(`사용할 수 있는 ${target}입니다.`);
        setResult(response.data.isSuccess);
      })
      .catch((error) => {
        if (error.response.data.code === 'CHECK409_2') {
          setMessage(`사용할 수 없는 ${target}입니다.`);
          setResult(error.response.data.isSuccess);
          return;
        }
        setMessage('중복확인을 할 수 없습니다.');
        setResult(error.response.data.isSuccess);
      });
  };
  return { result, message, checkDuplicate };
}
