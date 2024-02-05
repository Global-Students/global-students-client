import React from 'react';
import ResetIcon from '../ResetIcon';
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
      <ResetIcon id={id} onReset={onReset} />
    </Input>
  );
}
