import React from 'react';
import FileInput from '../../components/Input/FileInput';
import Label from '../../components/Label';
import { FILE_MAX_SIZE, LABEL } from '../../constants';

export default function FileApproval({ file, changeFile }) {
  const handleFile = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile?.size > FILE_MAX_SIZE) {
      // alert('파일은 최대 10MB까지 업로드 할 수 있습니다.');
      return;
    }
    changeFile(selectedFile);
  };

  return (
    <div className='mt-[60px]'>
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
