import React from 'react';
import DuplicateCheckButton from '../Button/DuplicateCheckButton';
import ValidationMessage from '../ValidationMessage';
import Input from './Input';

export default function DuplicateCheckInput({
  id,
  value,
  placeholder,
  message,
  onChange,
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
