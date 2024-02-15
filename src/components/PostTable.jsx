import { React, useState, useEffect } from "react";
import authAxios from "../axios/authAxios";
import PrivacyButton from "./Button/PrivacyButton";
import URL from "../constants/testServer";

function PostPreview( {title, comments, date, author, likes, views} ) {
    return(
        <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[71px] relative bg-white hover:bg-neutral-100">
            <svg
              width={953}
              height={1}
              viewBox="0 0 953 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[-1px] top-[70px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <line y1="0.5" x2={953} y2="0.5" stroke="#E7EAF2" />
            </svg>
            <div className="flex justify-start items-center h-[71px] relative">
              <div className="flex justify-start items-center absolute inset-y-0 left-[30px] gap-[23px]">
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
              <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 absolute inset-y-0 right-[30px] w-[220px] gap-[60px]">
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

export default function PostTable({ tablename, link }) {
  const [privacy, setPrivacy] = useState("");
  const [posts, setPosts] = useState([""]);

  // const userId = localStorage.getItem('userId');
  const userId = "00";
  // const accessToken = localStorage.getItem('token');
  const boardId = "00";

  const pathname = tablename === "내가 쓴 글" ? "writepost" : "favoritepost";

  useEffect(() => { 
    async function fetchData() {
      try {
        const response = await authAxios.get(`${URL}/mypage/${pathname}?userId=${userId}`);
        setPrivacy(response.data.result.privacy);
        setPosts(response.data.result.posts.slice(0, 5));
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

    return(
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
        <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[69px]">
          <div className="w-[953px] absolute left-0 top-0 gap-2.5 pl-8 pr-[34px] py-5 rounded-tl-[14px] rounded-tr-[14px] bg-neutral-100">
            <div className="flex flex-nowrap w-[891px] h-[29px] relative">
              <p className="h-[29px] text-xl font-medium text-left text-[#414244]">
                {tablename}
              </p>
              <PrivacyButton Privacy={privacy} />
              <a href={link}>
              <div className="flex flex-nowrap items-center absolute right-[0px] gap-1">
                <p className="text-lg text-left text-[#808593]">
                  전체보기
                </p>
                <svg
                  width={21}
                  height={21}
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-[21px] h-[21px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <mask
                    id="mask0_569_9942"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={21}
                    height={21}
                  >
                    <rect width={21} height={21} fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_569_9942)">
                    <path
                      d="M12.9782 10.5L6.38708 3.90887C6.2132 3.73499 6.1285 3.52802 6.13298 3.28797C6.13747 3.04789 6.22666 2.84093 6.40053 2.66707C6.57441 2.49319 6.78138 2.40625 7.02143 2.40625C7.26149 2.40625 7.46846 2.49319 7.64233 2.66707L14.3411 9.37932C14.4993 9.53749 14.6165 9.71473 14.6928 9.91104C14.7691 10.1074 14.8072 10.3037 14.8072 10.5C14.8072 10.6963 14.7691 10.8926 14.6928 11.0889C14.6165 11.2852 14.4993 11.4625 14.3411 11.6206L7.62888 18.3329C7.455 18.5068 7.25028 18.5915 7.0147 18.587C6.77913 18.5825 6.57441 18.4933 6.40053 18.3194C6.22666 18.1456 6.13972 17.9386 6.13972 17.6985C6.13972 17.4585 6.22666 17.2515 6.40053 17.0776L12.9782 10.5Z"
                      fill="#808593"
                    />
                  </g>
                </svg>
              </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[953px] relative overflow-hidden rounded-bl-[14px] rounded-br-[14px] border-t-0 border-r border-b border-l border-[#e7eaf2]">
        {posts.map((post) => (
          <a href={`/boards/${boardId}/posts/${post.postId}`} aria-label="link">
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
    );
}