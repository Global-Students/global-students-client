import React from 'react';
import LightOrangeButton from '../Button/LightOrangeButton';
import ValidationMessage from '../ValidationMessage';
import Input from './Input';

export default function LightOrangeButtonInput({
  id,
  value,
  placeholder,
  buttonText,
  disabled,
  message,
  isValid,
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
        <LightOrangeButton
          text={buttonText}
          onClick={onClick}
          disabled={disabled}
        />
      </Input>
      <ValidationMessage message={message} isValid={isValid} />
    </>
  );
}
