import React from 'react';
import DuplicateCheckButton from './Button/DuplicateCheckButton';
import Input from './Input';
import ValidationMessage from './ValidationMessage';

export default function DuplicateCheckInput({
  id,
  value,
  onChange,
  placeholder,
  message,
  onClick,
}) {
  return (
    <>
      <Input
        id={id}
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      >
        <DuplicateCheckButton onClick={onClick} />
      </Input>
      <ValidationMessage isShowed message={message} value={message} />
    </>
  );
}
