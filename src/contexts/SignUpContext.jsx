import React, { createContext, useContext, useMemo, useState } from 'react';

const SignUpContext = createContext();

export function SignUpContextProvider({ children }) {
  const [signUpInfo, setSignUpInfo] = useState({
    terms: false,
    privacy: false,
    marketing: false,
    userId: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    birthYear: '',
    birthMonth: '',
    birthDate: '',
    nickname: '',
    nationality: '',
    hostCountry: '',
    homeUniversity: '',
    hostUniversity: '',
    verified: false,
  });
  const updateSignUpInfo = (event) => {
    const { id, value, checked } = event.target;
    if (id === 'all') {
      setSignUpInfo((prev) => ({
        ...prev,
        terms: checked,
        privacy: checked,
        marketing: checked,
      }));
      return;
    }

    if (id === 'terms' || id === 'privacy' || id === 'marketing') {
      setSignUpInfo((prev) => ({ ...prev, [id]: checked }));
      return;
    }

    setSignUpInfo((prev) => ({ ...prev, [id]: value }));
  };
  const value = useMemo(
    () => ({ signUpInfo, setSignUpInfo, updateSignUpInfo }),
    [signUpInfo],
  );

  return (
    <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
  );
}

export function useSignUpContext() {
  return useContext(SignUpContext);
}
