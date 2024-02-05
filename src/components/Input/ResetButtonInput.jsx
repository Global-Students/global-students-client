import React from 'react';
import ResetButton from '../Button/ResetButton';
import Input from './Input';

export default function ResetButtonInput({
  id,
  type,
  value,
  placeholder,
  onChange,
  onReset,
}) {
  return (
    <Input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    >
      <ResetButton id={id} onReset={onReset} />
    </Input>
  );
}
