import React, { useState } from 'react';
import { verifyAuthCode, verifyUniversityEmail } from '../../apis/signUp';
import LightOrangeButtonInput from '../../components/Input/LightOrangeButtonInput';
import Label from '../../components/Label';
import { LABEL, PLACEHOLDER, REGEX } from '../../constants';

export default function EmailApproval({ signUpInfo, setSignUpInfo }) {
  const [messgae, setMessage] = useState('');
  const [authData, setAuthData] = useState({ email: '', code: '' });
  const handleChange = (event) => {
    const { id, value } = event.target;
    setAuthData((prev) => ({ ...prev, [id]: value }));
  };
  const { email, code } = authData;

  return (
    <div className='flex flex-col gap-[20px]'>
      <div>
        <Label label={LABEL.universityEmail} />
        <LightOrangeButtonInput
          id='email'
          value={email}
          placeholder={PLACEHOLDER.universityEmail}
          buttonText='입력완료'
          disabled={!REGEX.email.test(email)}
          onChange={handleChange}
          onClick={() => {
            verifyUniversityEmail({
              email,
              university: signUpInfo.hostUniversity,
            }).then((result) => {
              if (result) {
                alert('메일을 보냈습니다.');
                return;
              }
              alert('메일 전송에 실패했습니다.');
            });
          }}
        />
      </div>
      <div>
        <Label label={LABEL.code} />
        <LightOrangeButtonInput
          id='code'
          value={code}
          buttonText='확인'
          placeholder={PLACEHOLDER.code}
          message={messgae}
          isValid={signUpInfo.verified}
          onChange={handleChange}
          onClick={() => {
            verifyAuthCode({
              email,
              code,
              university: signUpInfo.hostUniversity,
            }).then((result) => {
              if (result) {
                setSignUpInfo((prev) => ({ ...prev, verified: true }));
                setMessage('인증에 성공했습니다.');
                return;
              }
              setSignUpInfo((prev) => ({ ...prev, verified: false }));
              setMessage('인증번호가 유효하지 않습니다.');
            });
          }}
        />
      </div>
    </div>
  );
}
