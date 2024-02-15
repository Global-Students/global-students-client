import React from "react";
import InfoInput from "../../components/Input/InfoInput";

export default function UpdateInfo() {
    return (
        <div className="flex justify-start items-start gap-[25px] my-[70px]">
  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
    <a href="/updateProfile">
    <div className="group flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-[109px] py-5 rounded-[14px] bg-neutral-100 hover:bg-[#ffa77b]/25">
      <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#808593] group-hover:text-[#ffa77b]">
        프로필 수정
      </p>
    </div>
    </a>
    <div
      className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-[107px] py-5 rounded-[14px] bg-white border border-[#e7eaf2]"
      style={{ boxShadow: "1px 2px 8.300000190734863px -3px rgba(0,0,0,0.15)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#f50]">
        내 정보 수정
      </p>
    </div>
  </div>
  <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 gap-[30px]">
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[84px] py-[60px] rounded-[14px] bg-white border border-[#e7eaf2]">
      <div className="flex-grow-0 flex-shrink-0 w-[785px] h-[1071px] relative">
        <div className="flex flex-col justify-start items-start absolute left-0 top-0 gap-16">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[35px]">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[7px]">
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6"
                preserveAspectRatio="xMidYMid meet"
              >
                <mask
                  id="mask0_539_12475"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={24}
                  height={25}
                >
                  <rect y="0.5" width={24} height={24} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_539_12475)">
                  <path
                    d="M12 12.5C10.9 12.5 9.95833 12.1083 9.175 11.325C8.39167 10.5417 8 9.6 8 8.5C8 7.4 8.39167 6.45833 9.175 5.675C9.95833 4.89167 10.9 4.5 12 4.5C13.1 4.5 14.0417 4.89167 14.825 5.675C15.6083 6.45833 16 7.4 16 8.5C16 9.6 15.6083 10.5417 14.825 11.325C14.0417 12.1083 13.1 12.5 12 12.5ZM4 18.5V17.7C4 17.1333 4.14583 16.6125 4.4375 16.1375C4.72917 15.6625 5.11667 15.3 5.6 15.05C6.63333 14.5333 7.68333 14.1458 8.75 13.8875C9.81667 13.6292 10.9 13.5 12 13.5C13.1 13.5 14.1833 13.6292 15.25 13.8875C16.3167 14.1458 17.3667 14.5333 18.4 15.05C18.8833 15.3 19.2708 15.6625 19.5625 16.1375C19.8542 16.6125 20 17.1333 20 17.7V18.5C20 19.05 19.8042 19.5208 19.4125 19.9125C19.0208 20.3042 18.55 20.5 18 20.5H6C5.45 20.5 4.97917 20.3042 4.5875 19.9125C4.19583 19.5208 4 19.05 4 18.5Z"
                    fill="#FF743D"
                  />
                </g>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 w-[68px] h-[29px] text-2xl font-semibold text-left text-[#1e1e1e]">
                내 정보
              </p>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                <InfoInput index="아이디" value="text12345"/>
                <InfoInput index="비밀번호" value="**************"/>
                <InfoInput index="이름" value="홍길동"/>
                <InfoInput index="생년월일" value="2000.01.01" accessbutton/>
                <InfoInput index="닉네임" value="text12345"/>
                <InfoInput index="국적" value="대한민국"/>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[35px]">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[7px]">
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6"
                preserveAspectRatio="xMidYMid meet"
              >
                <mask
                  id="mask0_539_12499"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={24}
                  height={25}
                >
                  <rect y="0.5" width={24} height={24} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_539_12499)">
                  <path
                    d="M20.9996 16.4999V10.5999L12.9496 14.9749C12.6496 15.1416 12.3329 15.2249 11.9996 15.2249C11.6663 15.2249 11.3496 15.1416 11.0496 14.9749L2.59961 10.3749C2.41628 10.2749 2.28711 10.1499 2.21211 9.9999C2.13711 9.8499 2.09961 9.68324 2.09961 9.4999C2.09961 9.31657 2.13711 9.1499 2.21211 8.9999C2.28711 8.8499 2.41628 8.7249 2.59961 8.6249L11.0496 4.0249C11.1996 3.94157 11.3538 3.87907 11.5121 3.8374C11.6704 3.79574 11.8329 3.7749 11.9996 3.7749C12.1663 3.7749 12.3288 3.79574 12.4871 3.8374C12.6454 3.87907 12.7996 3.94157 12.9496 4.0249L22.4746 9.2249C22.6413 9.30824 22.7704 9.42907 22.8621 9.5874C22.9538 9.74574 22.9996 9.91657 22.9996 10.0999V16.4999C22.9996 16.7832 22.9038 17.0207 22.7121 17.2124C22.5204 17.4041 22.2829 17.4999 21.9996 17.4999C21.7163 17.4999 21.4788 17.4041 21.2871 17.2124C21.0954 17.0207 20.9996 16.7832 20.9996 16.4999ZM11.0496 20.9749L6.04961 18.2749C5.71628 18.0916 5.45794 17.8416 5.27461 17.5249C5.09128 17.2082 4.99961 16.8666 4.99961 16.4999V12.6999L11.0496 15.9749C11.3496 16.1416 11.6663 16.2249 11.9996 16.2249C12.3329 16.2249 12.6496 16.1416 12.9496 15.9749L18.9996 12.6999V16.4999C18.9996 16.8666 18.9079 17.2082 18.7246 17.5249C18.5413 17.8416 18.2829 18.0916 17.9496 18.2749L12.9496 20.9749C12.7996 21.0582 12.6454 21.1207 12.4871 21.1624C12.3288 21.2041 12.1663 21.2249 11.9996 21.2249C11.8329 21.2249 11.6704 21.2041 11.5121 21.1624C11.3538 21.1207 11.1996 21.0582 11.0496 20.9749Z"
                    fill="#FF743D"
                  />
                </g>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 w-[146px] h-[29px] text-2xl font-semibold text-left text-[#1e1e1e]">
                국가 및 학교
              </p>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                <InfoInput index="유학국" value="대한민국"/>
              <InfoInput index="학교" value="한양대학교"/>
                <InfoInput index="학과" value="미디어커뮤니케이션학과"/>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[35px]">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[7px]">
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6"
                preserveAspectRatio="xMidYMid meet"
              >
                <mask
                  id="mask0_539_12511"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={24}
                  height={25}
                >
                  <rect y="0.5" width={24} height={24} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_539_12511)">
                  <path
                    d="M19.95 21.5C17.8667 21.5 15.8083 21.0458 13.775 20.1375C11.7417 19.2292 9.89167 17.9417 8.225 16.275C6.55833 14.6083 5.27083 12.7583 4.3625 10.725C3.45417 8.69167 3 6.63333 3 4.55C3 4.25 3.1 4 3.3 3.8C3.5 3.6 3.75 3.5 4.05 3.5H8.1C8.33333 3.5 8.54167 3.57917 8.725 3.7375C8.90833 3.89583 9.01667 4.08333 9.05 4.3L9.7 7.8C9.73333 8.06667 9.725 8.29167 9.675 8.475C9.625 8.65833 9.53333 8.81667 9.4 8.95L6.975 11.4C7.30833 12.0167 7.70417 12.6125 8.1625 13.1875C8.62083 13.7625 9.125 14.3167 9.675 14.85C10.1917 15.3667 10.7333 15.8458 11.3 16.2875C11.8667 16.7292 12.4667 17.1333 13.1 17.5L15.45 15.15C15.6 15 15.7958 14.8875 16.0375 14.8125C16.2792 14.7375 16.5167 14.7167 16.75 14.75L20.2 15.45C20.4333 15.5167 20.625 15.6375 20.775 15.8125C20.925 15.9875 21 16.1833 21 16.4V20.45C21 20.75 20.9 21 20.7 21.2C20.5 21.4 20.25 21.5 19.95 21.5Z"
                    fill="#FF743D"
                  />
                </g>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 w-[146px] h-[29px] text-2xl font-semibold text-left text-[#1e1e1e]">
                연락처
              </p>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
            <InfoInput index="휴대폰" value="010-0000-0000" accessbutton/>
            <InfoInput index="이메일" value="000000@00000.com" accessbutton/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="/mypage">
    <div className="flex justify-center items-center w-193px h-53px flex-grow-0 flex-shrink-0 relative gap-2.5 px-[65px] py-4 rounded-[14px] bg-[#ff743d] hover:bg-[#f50]">
      <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-white">
        수정완료
      </p>
    </div>
    </a>
  </div>
</div>
    );
    }