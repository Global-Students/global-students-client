import React from 'react';

export default function ValidationMessage({ message, isShowed, value }) {
  return (
    <div
      className={`${
        isShowed === false || value === '' ? 'hidden' : 'block'
      } text-orange-main p-3`}
    >
      {message}
    </div>
  );
}
