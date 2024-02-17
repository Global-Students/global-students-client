import React from 'react';
import InquiryInput from '../../components/InquiryInput';

export default function Inquiry({ isInquiryClick, onClick }) {
  return (
    <div
      className={`flex absolute top-0 left-0 w-full h-full justify-center items-center z-10 bg-gray-scale-1 bg-opacity-25 ${
        isInquiryClick ? 'block' : 'hidden'
      }`}
    >
      <InquiryInput onClick={onClick} />
    </div>
  );
}
