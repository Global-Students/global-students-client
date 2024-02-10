import React from 'react';
import FileInput from '../../components/Input/FileInput';
import Label from '../../components/Label';
import { LABEL } from '../../constants';

export default function FileApproval({ signUpInfo: { file }, setSignUpInfo }) {
  const handleFile = (event) =>
    setSignUpInfo((prev) => ({ ...prev, file: event.target.files[0] }));

  return (
    <div>
      <div className='mb-[13px]'>
        <Label label={LABEL.uploadFile} />
        <FileInput onChange={handleFile} />
      </div>
      <div className='flex justify-between items-center rounded bg-gray-scale-8 px-[19px] py-[10px]'>
        <span className='text-gray-scale-4 text-[16px] font-light leading'>
          {file?.name || '파일명'}
        </span>
        <span className='text-gray-scale-4 text-[16px] font-light leading'>
          {file ? Math.ceil(file.size / 1024).toLocaleString() : 0}
          KB
        </span>
      </div>
    </div>
  );
}
