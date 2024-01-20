import React from 'react';

export default function Label({ label, required }) {
  return (
    <p className='text-[20px] text-gray-scale-2 font-medium mb-[6px]'>
      {label}
      {required && <span className='text-orange-main'>*</span>}
    </p>
  );
}
