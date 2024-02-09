import React from 'react';

export default function ValidationMessage({ message }) {
  return (
    <div
      className={`${
        !!message === false ? 'hidden' : 'block'
      } text-orange-main p-3`}
    >
      {message}
    </div>
  );
}
