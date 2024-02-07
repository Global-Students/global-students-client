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
  icon,
}) {
  return (
    <Input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      icon={icon}
    >
      <ResetButton id={id} onReset={onReset} />
    </Input>
  );
}
