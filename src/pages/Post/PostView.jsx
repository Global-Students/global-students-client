import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { authAxios, defaultAxios } from '../../axios/authAxios';
import MoreButton from '../../components/Button/MoreButton';
import Comment from '../../components/Comment';
import CommentPagination from '../../components/CommentPagination';
import MoreDropdown from '../../components/MoreDropdown';
import PostHeader from '../../components/PostHeader';
import WriteComment from '../../components/WriteComment';
import NoticeBoard from '../NoticeBoard';

export default function PostView() {
  const [post, setPost] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { boardId, postId } = useParams();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const fetchPost = async (boardIdParam, postIdParam) => {
    try {
      const response = await defaultAxios.get(
        `/boards/${boardIdParam}/posts/${postIdParam}`,
      );
      setPost(response.data.result);
      setComments(response.data.result.comment);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };
  useEffect(() => {
    fetchPost(boardId, postId);
  }, [boardId, postId]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const response = await authAxios.post('/boards/post/comment/delete', {
        commentId,
      });
      console.log(response.data);
      setComments(
        comments.filter((comment) => comment.commentId !== commentId),
      );
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div>
      <PostHeader />
      {post && (
        <div className='relative'>
          <div className='flex flex-col justify-center w-[954px] rounded-[14px] border mt-[10px] pt-[50px] px-[35px] border-gray-scale-8 bg-gray-scale-9 shadow'>
            <div className='border-b border-gray-scale-7 w-[884px] pb-[50px]'>
              <div className='border-b border-gray-scale-7 w-[884px]'>
                <div className='flex justify-between items-center w-[884px] h-[32px]'>
                  <p className='text-gray-scale-1 text-[26px] font-bold'>
                    {post.title}
                  </p>
                  <MoreButton onClick={toggleDropdown} />
                </div>
                {isDropdownOpen && (
                  <MoreDropdown boardId={boardId} postId={postId} />
                )}

                <div className='flex my-[30px]'>
                  <div
                    className='w-[50px] h-[50px] rounded-full bg-[#D9D9D9]'
                    alt='프로필 사진'
                  />
                  <div className='flex flex-col ml-[10px]'>
                    <div className='flex'>
                      <p className='text-gray-scale-1 font-bold'>
                        {post.author}
                      </p>
                      <button
                        type='button'
                        className='w-[65px] h-[22px] ml-[10px] px-[7.5px] py-[1px] text-[12px] bg-gray-scale-8 text-[#808593] rounded-[7px] items-center hover:bg-[#E9E9E9]'
                      >
                        1:1 메세지
                      </button>
                    </div>
                    <div className='flex flex-row justify-between w-[818px] text-gray-scale-5'>
                      <p>{post.date}</p>
                      <div className='flex flex-row items-end w-[244px] justify-between'>
                        <p>조회수 {post.views}</p>
                        <p>좋아요 {post.likes}</p>
                        <p>북마크 {post.bookmarks}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[884px] h-[352px] text-[18px] mt-[35px] font-light leading-6 tracking-wider text-left'>
                {post.content}
              </div>
              <div className='flex flex-row mt-[42px] items-center justify-center'>
                <div className='flex flex-col w-[78px] h-[96px] mx-[21px]'>
                  <button
                    type='button'
                    className='flex flex-col w-[78px] h-[78px] gray-scale-3 rounded-full bg-gray-scale-8 items-center justify-center hover:bg-[#E7EAF2]'
                  >
                    <img
                      src='../../../assets/thumb_up_gray.svg'
                      alt='thumb_up_gray'
                      className='w-[24px] h-[24px]'
                    />
                    <p className='leading-[20px] tracking-[0.02em]  text-[#808593]'>
                      좋아요
                    </p>
                  </button>
                  <p className='text-center leading-[20px] tracking-[0.02em]  text-[#808593]'>
                    00
                  </p>
                </div>
                <div className='flex flex-col w-[78px] h-[96px] mx-[21px]'>
                  <button
                    type='button'
                    className='flex flex-col w-[78px] h-[78px] gray-scale-3 rounded-full bg-gray-scale-8 items-center justify-center hover:bg-[#E7EAF2]'
                  >
                    <img
                      src='../../../assets/bookmark.svg'
                      alt='bookmark'
                      className='w-[24px] h-[24px]'
                    />
                    <p className='leading-[20px] tracking-[0.02em]  text-[#808593]'>
                      북마크
                    </p>
                  </button>
                  <p className='text-center leading-[20px] tracking-[0.02em]  text-[#808593]'>
                    00
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[884px] h-[1196px] mt-[20px]'>
              <div className='w-[884px] h-[166px]'>
                <div className='flex flex-row w-[884px] h-[26px] justify-between'>
                  <p className='text-[22px]'>댓글 {comments.length}</p>
                  <div className='flex flex-row w-[170px] justify-between items-center text-[16px]'>
                    <button
                      className={`rounded w-14 ${
                        isAnonymous
                          ? 'bg-orange-1 text-white'
                          : 'bg-gray-scale-5 text-gray-scale-8'
                      }`}
                      type='button'
                      onClick={() => setIsAnonymous((prev) => !prev)}
                    >
                      익명
                    </button>
                    <button type='button'>좋아요순</button>
                    <button type='button'>최신순</button>
                  </div>
                </div>
                <WriteComment
                  addComment={addComment}
                  fetchPost={fetchPost}
                  boardId={boardId}
                  postId={postId}
                  isAnonymous={isAnonymous}
                />
                {comments.map((comment) => (
                  <Comment
                    key={comment.commentId}
                    comment={comment}
                    deleteComment={() => handleDeleteComment(comment.commentId)}
                  />
                ))}
                <CommentPagination
                  pageInfo={{
                    page: currentPage,
                    totalPage: comments.length,
                  }}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <NoticeBoard bottom />
    </div>
  );
}
