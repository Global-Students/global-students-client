import axios from 'axios';
import { useState } from 'react';

export default function useDuplicateCheck() {
  const [message, setMessage] = useState('');
  const checkDuplicate = (url, target) => {
    axios
      .get(url, {
        'Content-Type': 'application/json',
      })
      .then(() => setMessage(`사용할 수 있는 ${target}입니다.`))
      .catch((error) => {
        if (error.response.data.code === 'CHECK409_2') {
          setMessage(`사용할 수 없는 ${target}입니다.`);
          return;
        }
        setMessage('중복확인을 할 수 없습니다.');
      });
  };
  return { message, checkDuplicate };
}
