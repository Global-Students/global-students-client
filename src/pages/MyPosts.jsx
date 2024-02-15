import React, { useState, useEffect } from "react";
import axios from "axios";
import URL from "../constants/testServer";

function PostPreview( {title, comments, date, author, likes, views} ) {
  return(
      <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[71px] relative bg-white hover:bg-neutral-100">
          <div className="flex justify-start items-center h-[71px] absolute left-[25px]">
            <div className="flex justify-start items-center absolute inset-y-0 gap-[23px]">
            <input
type="checkbox"
className="accent-[#FF743D]"
/>
              <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#1e1e1e]">
                {title}
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#f50]">
                ({comments})
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#50545e]">
                {date}
              </p>
            </div>
            <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 absolute left-[678px] inset-y-0 w-[220px] gap-[60px]">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  {author}
              </p>
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <svg
                  width={13}
                  height={13}
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[13px] h-[13px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <mask
                    id="mask0_1308_3779"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={13}
                    height={13}
                  >
                    <rect width={13} height={13} fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1308_3779)">
                    <path
                      d="M11.2077 4.98664C11.4653 4.98664 11.6929 5.08684 11.8905 5.28724C12.088 5.48762 12.1868 5.71848 12.1868 5.9798V6.86728C12.1868 6.92494 12.1795 6.98673 12.1649 7.05264C12.1504 7.11854 12.134 7.18002 12.116 7.23708L10.5637 10.9525C10.486 11.1282 10.3559 11.2766 10.1733 11.3977C9.99064 11.5189 9.80008 11.5795 9.60158 11.5795H3.90559V4.98664L7.05663 1.81808C7.16427 1.7089 7.28892 1.64374 7.43058 1.62261C7.57225 1.60148 7.70801 1.62613 7.83786 1.69657C7.96772 1.76701 8.06285 1.86702 8.12327 1.99662C8.18369 2.12622 8.19654 2.2604 8.16181 2.39915L7.57848 4.98664H11.2077ZM4.71808 5.33741V10.7554H9.60349C9.64169 10.7554 9.68075 10.7448 9.72068 10.7237C9.76062 10.7025 9.79101 10.6673 9.81184 10.618L11.3743 6.90955V5.9798C11.3743 5.93049 11.3587 5.88999 11.3275 5.85829C11.2962 5.82659 11.2563 5.81074 11.2077 5.81074H6.55142L7.23059 2.79957L4.71808 5.33741ZM2.33269 11.5795C2.06341 11.5795 1.8329 11.4822 1.64115 11.2877C1.4494 11.0932 1.35352 10.8594 1.35352 10.5863V5.9798C1.35352 5.70669 1.4494 5.47288 1.64115 5.27839C1.8329 5.08389 2.06341 4.98664 2.33269 4.98664H3.90559V5.81074H2.33269C2.28407 5.81074 2.24414 5.82659 2.21288 5.85829C2.18163 5.88999 2.166 5.93049 2.166 5.9798V10.5863C2.166 10.6356 2.18163 10.6761 2.21288 10.7078C2.24414 10.7395 2.28407 10.7554 2.33269 10.7554H3.90559V11.5795H2.33269Z"
                      fill="#808593"
                    />
                  </g>
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  {likes}
                </p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  {views}
              </p>
            </div>
          </div>
        </div>
  );
}

export default function MyPosts({tablename}) {
  const [posts, setPosts] = useState([""]);

  // const userId = localStorage.getItem('userId');
  const userId = "00";
  // const accessToken = localStorage.getItem('token');

  const pathname = tablename === "내가 쓴 글" ? "writepost" : "favoritepost";

  useEffect(() => { 
    async function fetchData() {
      try {
        const response = await axios.get(`${URL}/mypage/${pathname}?userId=${userId}`, {
          // headers: { Authorization: accessToken }
        });
        setPosts(response.data.result.posts.slice(0, 5));
        console.log(posts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // 날짜를 원하는 형식으로 변환하는 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' });
  };

    return (
      <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 gap-[23px]">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
        <div className="flex justify-start items-end flex-grow-0 flex-shrink-0">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-5 py-2 border-t-0 border-r-0 border-b-2 border-l-0 border-[#ff743d]">
            <p className="flex-grow-0 flex-shrink-0 w-[87px] h-[29px] text-xl font-semibold text-center text-[#ff743d]">
              내가 쓴 글
            </p>
          </div>
          <a href="/dashboard/bookmarkPosts">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2 px-5 py-2 rounded-tl-[14px] rounded-tr-[14px] bg-neutral-100 border-t-0 border-r-0 border-b border-l-0 border-[#808593]">
            <p className="flex-grow-0 flex-shrink-0 w-[120px] h-[29px] text-xl text-center text-[#808593]">
              즐겨찾기한 글
            </p>
          </div>
          </a>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
          <div className="flex-grow-0 flex-shrink-0 w-[953px] h-10 relative bg-[#F5F5F5] border border-[#e7eaf2] rounded-tr-lg">

            <div className="flex justify-start items-start absolute left-[31px] top-3 gap-[646px]">
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#808593]">제목</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[57px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#808593]">작성자</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#808593]">좋아요</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#808593]">조회수</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[953px] relative overflow-hidden rounded-bl-[14px] rounded-br-[14px] border-t-0 border-r border-b border-l border-[#e7eaf2]">
            {posts.map((post) => (
            <a href="/" aria-label="link">
              <PostPreview
                title={post.title}
                comments={post.numberOfComments}
                date={formatDate(post.date)}
                author={post.author}
                likes={post.likes}
                views={post.views}
              />
            </a>
          ))}
        </div>
        </div>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[15px]">
        <a href="/">
        <div
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[44.5px] py-2.5 rounded-[14px] bg-white border border-[#e7eaf2] hover:bg-[#E7EAF2]"
          style={{ boxShadow: "1px 2px 8.300000190734863px -3px rgba(0,0,0,0.15)" }}
        >
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#50545e]">
            삭제
          </p>
        </div>
        </a>
        <a href="/">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[38px] py-2.5 rounded-[14px] bg-[#ff743d] hover:bg-[#F50]">
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
            글쓰기
          </p>
        </div>
        </a>
      </div>
    </div>
    );
}