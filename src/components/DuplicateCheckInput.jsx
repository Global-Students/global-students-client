import React from 'react';
import useDuplicateCheck from '../hooks/useDuplicateCheck';
import DuplicateCheckButton from './Button/DuplicateCheckButton';
import Input from './Input';
import ValidationMessage from './ValidationMessage';

export default function DuplicateCheckInput({
  id,
  value,
  onChange,
  placeholder,
  apiUrl,
  target,
}) {
  const { message, checkDuplicate } = useDuplicateCheck();

  return (
    <>
      <Input
        id={id}
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      >
        <DuplicateCheckButton onClick={() => checkDuplicate(apiUrl, target)} />
      </Input>
      <ValidationMessage isShowed message={message} value={message} />
    </>
  );
}
