import React from 'react';
import LightOrangeButton from '../Button/LightOrangeButton';
import ValidationMessage from '../ValidationMessage';
import Input from './Input';

export default function LightOrangeButtonInput({
  id,
  buttonText,
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
        <LightOrangeButton text={buttonText} onClick={onClick} />
      </Input>
      <ValidationMessage isShowed message={message} value={message} />
    </>
  );
}
