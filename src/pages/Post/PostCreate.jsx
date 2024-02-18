import React, { useState } from 'react';
import DropDown1 from './Dropdown1'
import CheckboxPost from '../../components/CheckboxPost'
import OrangeButton from '../../components/Button/OrangeButton1'
import WhiteButton from '../../components/Button/WhiteButton1'
import { authAxios } from '../../axios/authAxios';



export default function PostCreate() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImageIds, setUploadedImageIds] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState('')
  const [boardId, setBoardId] = useState('1');
  

  const handleDropDownChange = (value) => {
    setBoardId(value);
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]; 
    setSelectedImage(file);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedImage);

      const response = await authAxios.post('/boards/post/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response)

      const { imageId, uploadUrl } = response.data.result;
      setUploadedImageIds([...uploadedImageIds, imageId]);
      setUploadedImageUrl(uploadUrl);

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async () => {
    const postData = {
      boardId,
      title,
      content,
      isAnonymous: checkboxChecked,
      image: uploadedImageIds.map(imageId => ({ imageId }))
    };
    

    try {
      const response = await authAxios.post('/boards/post/write', postData);
      console.log(response.data);
      
      setTitle('');
      setContent('');
      setCheckboxChecked(false);
      setUploadedImageIds([]);
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <div className='flex flex-col w-[954px] h-[785px] justify-center'>
      <div className='flex flex-col w-[954px] h-[712px] rounded-[14px] items-start shadow border border-gray-scale-8 px-[25px]'>
        <div className='w-[895px] border-b border-gray-scale-7'>
        <div className='flex flex-col w-[864px] h-[118px] mt-[10px] mx-[18px] items-center justify-between text-[20px] font-bold'>

          <div className='flex flex-row w-[864px] h-[50px] items-center justify-between'>
            <p className='pr-[18px] text-[20px]'>게시판</p>
            <DropDown1 onDropDownChange={handleDropDownChange} />
            <div className="ml-[15px] justify-start z-[10]">
            <CheckboxPost
            text="익명"
            id="anonymous"
            isChecked={checkboxChecked}
            updateCheck={() => setCheckboxChecked(!checkboxChecked)}
            />
            </div>
          </div>

          <div className='flex flex-row w-[864px] h-[50px] mt-[18px] flex-shrink-0 items-center justify-between'>
            <p className='text-[20px]'>제목</p>
          <div className='flex items-center w-[800px] h-[50px] rounded-[14px] border-none bg-gray-scale-8'>
                <input 
                  type='text' 
                  placeholder='제목을 입력해주세요.' 
                  className='placeholder-gray-scale-3 text-gray-scale-3 leading-[20px] tracking-[0.02em] text-[18px] font-normal bg-gray-scale-8 px-[25px] focus:outline-none'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
          </div>
        </div>
        </div>

        <div className='pt-[50px] pb-[20px] px-[20px]'>
            <textarea 
              placeholder='내용을 입력해 주세요.' 
              className='w-[864px] h-[340px] text-left align-top placeholder-gray-scale-5 focus:outline-none resize-none'
              value={content}
              onChange={(e) => setContent(e.target.value)} 
            />
        </div>

        </div>
        
        <div className='items-start'>
        <label htmlFor="image-upload" className='flex flex-col w-[154px] h-[154px] ml-[5px] mt-[8px] items-center justify-center rounded-[14px] border-dashed border border-gray-scale-5 cursor-pointer'>
          <input type="file" id="image-upload" accept="image/*" className='hidden' onChange={handleImageChange} />
          <img src='../../../assets/add_a_photo.svg' alt='add_a_photo.svg' />
        </label>
        {selectedImage && (
            <div>
              <button type='button' onClick={handleImageUpload}>Upload Image</button>
            </div>
          )}
          {uploadedImageUrl && (
            <div>
              <img src={uploadedImageUrl} alt="Uploaded" />
            </div>
          )}
      </div>
    </div>

    <div className='flex flex-row justify-center py-[10px]'>
      <div className='px-[10px] mt-[6px]'>
      <WhiteButton text='취소' textSize={18} py={8} width={148} height={50} />
      </div>
      <div className='px-[10px] mt-[6px]'>
      <OrangeButton text='등록' textSize={18} py={8} width={148} height={50} onClick={handleSubmit} />
      </div>
    </div>
  </div>
  
  )
}
