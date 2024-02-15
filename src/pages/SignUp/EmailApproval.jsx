import React, { useState } from 'react';
import LightOrangeButtonInput from '../../components/Input/LightOrangeButtonInput';
import Label from '../../components/Label';
import { LABEL, PLACEHOLDER, REGEX } from '../../constants';
import { useSignUpContext } from '../../contexts/SignUpContext';
import useSignUp from '../../hooks/useSignUp';

export default function EmailApproval() {
  const { signUpInfo } = useSignUpContext();
  const [isSent, setIsSent] = useState(false);
  const { message, verifyUniversityEmail, verifyAuthCode } = useSignUp();
  const [authData, setAuthData] = useState({ email: '', code: '' });
  const handleChange = (event) => {
    const { id, value } = event.target;
    setAuthData((prev) => ({ ...prev, [id]: value }));
  };
  const { email, code } = authData;

  return (
    <div className='flex flex-col gap-[20px] mt-[60px]'>
      <div>
        <Label label={LABEL.universityEmail} />
        <LightOrangeButtonInput
          id='email'
          value={email}
          placeholder={PLACEHOLDER.universityEmail}
          buttonText='입력완료'
          disabled={!REGEX.email.test(email)}
          onChange={handleChange}
          onClick={() =>
            verifyUniversityEmail(
              {
                email,
                university: signUpInfo.hostUniversity,
              },
              setIsSent,
            )
          }
        />
      </div>
      <div>
        <Label label={LABEL.code} />
        <LightOrangeButtonInput
          id='code'
          value={code}
          buttonText='확인'
          disabled={!isSent}
          placeholder={PLACEHOLDER.code}
          message={message.code}
          isValid={signUpInfo.verified}
          onChange={handleChange}
          onClick={() =>
            verifyAuthCode({
              email,
              code,
              university: signUpInfo.hostUniversity,
            })
          }
        />
      </div>
    </div>
  );
}
