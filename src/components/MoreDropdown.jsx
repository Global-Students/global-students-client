import React from 'react'
import { Link } from 'react-router-dom';
import { authAxios } from '../axios/authAxios';



export default function MoreDropdown({boardId,postId }) {


  const handleDeletePost = async () => {
    try {
      const response = await authAxios.post('/boards/post/delete', {
        postId,
      });
      console.log(response);
      alert('삭제되었습니다')
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };



  return (
    <div className="dropdown-content mt-[5px] ml-[850px] absolute w-[154px] bg-white border rounded-[3px] border-gray-scale-7 shadow">
              <button onClick={handleDeletePost} className="flex flex-row justify-center w-full py-[5px] px-[4px] text-gray-scale-3 hover:bg-[#00000008] border-b border-gray-scale-7" type="button">
                <img src='../../../assets/delete.svg' alt='delete' className='pt-[2px] pr-[2px]'/>
                삭제하기</button>
                <Link to={`/auth/post-update/${boardId}/${postId}`}>
                  <button className="flex flex-row justify-center w-full py-[5px] px-[4px] text-gray-scale-3 hover:bg-[#00000008] border-b border-gray-scale-7" type="button">
                  <img src='../../../assets/edit_document.svg' alt='edit_document' className='pt-[2px] pr-[2px]'/>
                  수정하기
                 </button>
                </Link>
              <button className="flex flex-row justify-center w-full py-[5px] px-[4px] text-gray-scale-3 hover:bg-[#00000008]" type="button">
                <img src='../../../assets/share.svg' alt='share' className='pt-[2px] pr-[2px]'/>
                공유하기</button>
            </div>
  )
}
