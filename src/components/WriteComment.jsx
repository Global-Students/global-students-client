import React,{ useState } from 'react'
import OrangeButton from './Button/OrangeButton'

export default function WriteComment({ addComment }) {
  const [value, setValue] = useState('');
  const maxLength = 1000;

  const handleChange = (event) => {
    if (event.target.value.length <= maxLength) {
      setValue(event.target.value);
    }
  };

  const handleSubmit = () => {
    
    const newComment = {
      commentId: value,
      content: value,
      nickname: '닉네임', 
      date: new Date().toLocaleDateString(), 
    };
    
    addComment(newComment);
    
    setValue('');
  };

  return (
    <div className='flex flex-row w-[884px] h-[115px] mt-[25px] relative'>
      <textarea
        className='w-[762px] h-[115px] rounded-[14px] px-[16px] py-[16px] bg-gray-scale-8 text-left placeholder-gray-scale-5 focus:outline-none resize-none text-[17px] leading-[20px] tracking-[0.02em] overflow-hidden'
        placeholder='댓글을 입력해주세요'
        value={value}
        onChange={handleChange}
      />
      <div className='absolute bottom-[3px] right-[130px] text-gray-scale-5'>
        {value.length}/{maxLength}
      </div>
      <div className='flex flex-row w-[115px] ml-[7px]'>
        <OrangeButton
          text='등록'
          textSize={20}
          px={40}
          py={45}
          width={115}
          height={114}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

