import React from "react";
import defaultprofileimage from "../../assets/ellipse-28.png";
import defaultbackgroundimage from "../../assets/rectangle-88.png"
import InfoInput from "../../components/Input/InfoInput";
import LongInput from "../../components/Input/LongInput";
import UploadImage from "../../components/Button/uploadImage";

export default function UpdateProfile() {
    return (
<div className="flex justify-start items-start gap-[25px] my-[70px]">
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[30px]">
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[302px] gap-2.5">
      <div
        className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[109px] py-5 rounded-[14px] bg-white border border-[#e7eaf2]"
        style={{ boxShadow: "1px 2px 8.300000190734863px -3px rgba(0,0,0,0.15)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#f50]">
          프로필 수정
        </p>
      </div>
      <a href="/updateInfo">
      <div className="group flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[107px] py-5 rounded-[14px] bg-neutral-100 hover:bg-[#ffa77b]/25">
        <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#808593] group-hover:text-[#ffa77b]">
          내 정보 수정
        </p>
      </div>
      </a>
    </div>
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
      <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#b7becf]">회원 탈퇴</p>
      <svg
        width={19}
        height={19}
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-[19px] h-[19px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <mask
          id="mask0_1867_28232"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={19}
          height={19}
        >
          <rect width={19} height={19} fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1867_28232)">
          <path
            d="M11.7403 9.49996L5.77693 3.53657C5.61961 3.37926 5.54298 3.192 5.54703 2.97481C5.55109 2.7576 5.63178 2.57034 5.7891 2.41304C5.94642 2.25572 6.13367 2.17706 6.35087 2.17706C6.56806 2.17706 6.75532 2.25572 6.91263 2.41304L12.9735 8.48603C13.1166 8.62914 13.2226 8.7895 13.2916 8.96711C13.3607 9.14473 13.3952 9.32235 13.3952 9.49996C13.3952 9.67757 13.3607 9.85519 13.2916 10.0328C13.2226 10.2104 13.1166 10.3708 12.9735 10.5139L6.90046 16.5869C6.74314 16.7442 6.55791 16.8208 6.34477 16.8168C6.13164 16.8127 5.94642 16.732 5.7891 16.5747C5.63178 16.4174 5.55312 16.2301 5.55312 16.0129C5.55312 15.7958 5.63178 15.6085 5.7891 15.4512L11.7403 9.49996Z"
            fill="#B7BECF"
          />
        </g>
      </svg>
    </div>
  </div>
  <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 gap-[30px]">
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[84px] py-[60px] rounded-[14px] border border-[#e7eaf2]">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-16">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[25px]">
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
                id="mask0_549_6931"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={24}
                height={25}
              >
                <rect y="0.5" width={24} height={24} fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_549_6931)">
                <path
                  d="M12 17.5C12.2833 17.5 12.5208 17.4042 12.7125 17.2125C12.9042 17.0208 13 16.7833 13 16.5C13 16.2167 12.9042 15.9792 12.7125 15.7875C12.5208 15.5958 12.2833 15.5 12 15.5C11.7167 15.5 11.4792 15.5958 11.2875 15.7875C11.0958 15.9792 11 16.2167 11 16.5C11 16.7833 11.0958 17.0208 11.2875 17.2125C11.4792 17.4042 11.7167 17.5 12 17.5ZM12 13.5C12.2833 13.5 12.5208 13.4042 12.7125 13.2125C12.9042 13.0208 13 12.7833 13 12.5V8.5C13 8.21667 12.9042 7.97917 12.7125 7.7875C12.5208 7.59583 12.2833 7.5 12 7.5C11.7167 7.5 11.4792 7.59583 11.2875 7.7875C11.0958 7.97917 11 8.21667 11 8.5V12.5C11 12.7833 11.0958 13.0208 11.2875 13.2125C11.4792 13.4042 11.7167 13.5 12 13.5ZM8.65 20.5H6C5.45 20.5 4.97917 20.3042 4.5875 19.9125C4.19583 19.5208 4 19.05 4 18.5V15.85L2.075 13.9C1.89167 13.7 1.75 13.4792 1.65 13.2375C1.55 12.9958 1.5 12.75 1.5 12.5C1.5 12.25 1.55 12.0042 1.65 11.7625C1.75 11.5208 1.89167 11.3 2.075 11.1L4 9.15V6.5C4 5.95 4.19583 5.47917 4.5875 5.0875C4.97917 4.69583 5.45 4.5 6 4.5H8.65L10.6 2.575C10.8 2.39167 11.0208 2.25 11.2625 2.15C11.5042 2.05 11.75 2 12 2C12.25 2 12.4958 2.05 12.7375 2.15C12.9792 2.25 13.2 2.39167 13.4 2.575L15.35 4.5H18C18.55 4.5 19.0208 4.69583 19.4125 5.0875C19.8042 5.47917 20 5.95 20 6.5V9.15L21.925 11.1C22.1083 11.3 22.25 11.5208 22.35 11.7625C22.45 12.0042 22.5 12.25 22.5 12.5C22.5 12.75 22.45 12.9958 22.35 13.2375C22.25 13.4792 22.1083 13.7 21.925 13.9L20 15.85V18.5C20 19.05 19.8042 19.5208 19.4125 19.9125C19.0208 20.3042 18.55 20.5 18 20.5H15.35L13.4 22.425C13.2 22.6083 12.9792 22.75 12.7375 22.85C12.4958 22.95 12.25 23 12 23C11.75 23 11.5042 22.95 11.2625 22.85C11.0208 22.75 10.8 22.6083 10.6 22.425L8.65 20.5Z"
                  fill="#FF743D"
                />
              </g>
            </svg>
            <p className="flex-grow-0 flex-shrink-0 w-[261px] h-[29px] text-2xl font-semibold text-left text-[#1e1e1e]">
              자기소개 등록 및 공개 범위
            </p>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-6 py-3 rounded-[14px] bg-neutral-100">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[129px]">
              <p className="flex-grow-0 flex-shrink-0 text-lg font-light text-left text-[#1e1e1e]">
                <span className="flex-grow-0 flex-shrink-0 text-lg font-light text-left text-[#1e1e1e]">
                  친구찾기 리스트에 정보를 공개하지 않으면 친구찾기 서비스를 이용할 수 없습니다.{" "}
                </span>
                <br />
                <span className="flex-grow-0 flex-shrink-0 text-lg font-light text-left text-[#1e1e1e]">
                  공개하시겠습니까?
                </span>
              </p>
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[30px] h-[30px] relative"
                role="button"
                preserveAspectRatio="xMidYMid meet"
              >
                <mask
                  id="mask0_544_6875"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={30}
                  height={30}
                >
                  <rect width={30} height={30} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_544_6875)">
                  <path
                    d="M13.25 17.25L10.5625 14.5625C10.3333 14.3333 10.0417 14.2187 9.6875 14.2187C9.33333 14.2187 9.04167 14.3333 8.8125 14.5625C8.58333 14.7916 8.46875 15.0833 8.46875 15.4375C8.46875 15.7916 8.58333 16.0833 8.8125 16.3125L12.375 19.875C12.625 20.125 12.9167 20.25 13.25 20.25C13.5833 20.25 13.875 20.125 14.125 19.875L21.1875 12.8125C21.4167 12.5833 21.5312 12.2916 21.5312 11.9375C21.5312 11.5833 21.4167 11.2916 21.1875 11.0625C20.9583 10.8333 20.6667 10.7187 20.3125 10.7187C19.9583 10.7187 19.6667 10.8333 19.4375 11.0625L13.25 17.25ZM15 27.5C13.2708 27.5 11.6458 27.1718 10.125 26.5156C8.60417 25.8593 7.28125 24.9687 6.15625 23.8437C5.03125 22.7187 4.14063 21.3958 3.48438 19.875C2.82812 18.3541 2.5 16.7291 2.5 15C2.5 13.2708 2.82812 11.6458 3.48438 10.125C4.14063 8.60414 5.03125 7.28122 6.15625 6.15622C7.28125 5.03122 8.60417 4.14059 10.125 3.48434C11.6458 2.82809 13.2708 2.49997 15 2.49997C16.7292 2.49997 18.3542 2.82809 19.875 3.48434C21.3958 4.14059 22.7188 5.03122 23.8438 6.15622C24.9688 7.28122 25.8594 8.60414 26.5156 10.125C27.1719 11.6458 27.5 13.2708 27.5 15C27.5 16.7291 27.1719 18.3541 26.5156 19.875C25.8594 21.3958 24.9688 22.7187 23.8438 23.8437C22.7188 24.9687 21.3958 25.8593 19.875 26.5156C18.3542 27.1718 16.7292 27.5 15 27.5ZM15 25C17.7917 25 20.1562 24.0312 22.0938 22.0937C24.0312 20.1562 25 17.7916 25 15C25 12.2083 24.0312 9.84372 22.0938 7.90622C20.1562 5.96872 17.7917 4.99997 15 4.99997C12.2083 4.99997 9.84375 5.96872 7.90625 7.90622C5.96875 9.84372 5 12.2083 5 15C5 17.7916 5.96875 20.1562 7.90625 22.0937C9.84375 24.0312 12.2083 25 15 25Z"
                    fill="#B7BECF"
                  />
                </g>
              </svg>
            </div>
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
                id="mask0_549_6925"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={24}
                height={25}
              >
                <rect y="0.5" width={24} height={24} fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_549_6925)">
                <path
                  d="M16.8125 15.125C15.9271 15.125 15.1745 14.8151 14.5547 14.1953C13.9349 13.5755 13.625 12.8229 13.625 11.9375C13.625 11.0521 13.9349 10.2995 14.5547 9.67969C15.1745 9.0599 15.9271 8.75 16.8125 8.75C17.6979 8.75 18.4505 9.0599 19.0703 9.67969C19.6901 10.2995 20 11.0521 20 11.9375C20 12.8229 19.6901 13.5755 19.0703 14.1953C18.4505 14.8151 17.6979 15.125 16.8125 15.125ZM11.5 21.5C11.199 21.5 10.9466 21.3982 10.743 21.1945C10.5393 20.9909 10.4375 20.7385 10.4375 20.4375V19.4813C10.4375 19.1094 10.526 18.7552 10.7031 18.4188C10.8802 18.0823 11.1281 17.8167 11.4469 17.6219C12.2438 17.1438 13.0893 16.7852 13.9836 16.5461C14.8779 16.307 15.8208 16.1875 16.8125 16.1875C17.8042 16.1875 18.7471 16.307 19.6414 16.5461C20.5357 16.7852 21.3813 17.1438 22.1781 17.6219C22.4969 17.8167 22.7448 18.0823 22.9219 18.4188C23.099 18.7552 23.1875 19.1094 23.1875 19.4813V20.4375C23.1875 20.7385 23.0857 20.9909 22.882 21.1945C22.6784 21.3982 22.426 21.5 22.125 21.5H11.5ZM10.4375 15.125H4.0625C3.76146 15.125 3.50911 15.0232 3.30547 14.8195C3.10182 14.6159 3 14.3635 3 14.0625C3 13.7615 3.10182 13.5091 3.30547 13.3055C3.50911 13.1018 3.76146 13 4.0625 13H10.4375C10.7385 13 10.9909 13.1018 11.1945 13.3055C11.3982 13.5091 11.5 13.7615 11.5 14.0625C11.5 14.3635 11.3982 14.6159 11.1945 14.8195C10.9909 15.0232 10.7385 15.125 10.4375 15.125ZM14.6875 6.625H4.0625C3.76146 6.625 3.50911 6.52318 3.30547 6.31953C3.10182 6.11589 3 5.86354 3 5.5625C3 5.26146 3.10182 5.00911 3.30547 4.80547C3.50911 4.60182 3.76146 4.5 4.0625 4.5H14.6875C14.9885 4.5 15.2409 4.60182 15.4445 4.80547C15.6482 5.00911 15.75 5.26146 15.75 5.5625C15.75 5.86354 15.6482 6.11589 15.4445 6.31953C15.2409 6.52318 14.9885 6.625 14.6875 6.625ZM11.6063 10.875H4.0625C3.76146 10.875 3.50911 10.7732 3.30547 10.5695C3.10182 10.3659 3 10.1135 3 9.8125C3 9.51146 3.10182 9.25911 3.30547 9.05547C3.50911 8.85182 3.76146 8.75 4.0625 8.75H12.5625C12.3146 9.05104 12.1154 9.37865 11.9648 9.73281C11.8143 10.087 11.6948 10.4677 11.6063 10.875Z"
                  fill="#FF743D"
                />
              </g>
            </svg>
            <p className="flex-grow-0 flex-shrink-0 w-[261px] h-[29px] text-2xl font-semibold text-left text-[#1e1e1e]">
              개인정보
            </p>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
          <InfoInput index="닉네임" value="text12345"/>
          <InfoInput index="국적" value="대한민국"/>
          <InfoInput index="이름" value="홍길동" accessbutton/>
          <InfoInput index="생년월일" value="2000.01.01" accessbutton/>
          <InfoInput index="학교" value="한양대학교" accessbutton/>
          <InfoInput index="학과" value="미디어커뮤니케이션학과" accessbutton/>
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
                id="mask0_549_6943"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={24}
                height={25}
              >
                <rect y="0.5" width={24} height={24} fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_549_6943)">
                <path
                  d="M4 24.5C3.45 24.5 2.97917 24.3042 2.5875 23.9125C2.19583 23.5208 2 23.05 2 22.5C2 21.95 2.19583 21.4792 2.5875 21.0875C2.97917 20.6958 3.45 20.5 4 20.5H20C20.55 20.5 21.0208 20.6958 21.4125 21.0875C21.8042 21.4792 22 21.95 22 22.5C22 23.05 21.8042 23.5208 21.4125 23.9125C21.0208 24.3042 20.55 24.5 20 24.5H4ZM4 17.5V14.675C4 14.5417 4.025 14.4125 4.075 14.2875C4.125 14.1625 4.2 14.05 4.3 13.95L15.2 3.075C15.3833 2.89167 15.5958 2.75 15.8375 2.65C16.0792 2.55 16.3333 2.5 16.6 2.5C16.8667 2.5 17.125 2.55 17.375 2.65C17.625 2.75 17.85 2.9 18.05 3.1L19.425 4.5C19.625 4.68333 19.7708 4.9 19.8625 5.15C19.9542 5.4 20 5.65833 20 5.925C20 6.175 19.9542 6.42083 19.8625 6.6625C19.7708 6.90417 19.625 7.125 19.425 7.325L8.55 18.2C8.45 18.3 8.3375 18.375 8.2125 18.425C8.0875 18.475 7.95833 18.5 7.825 18.5H5C4.71667 18.5 4.47917 18.4042 4.2875 18.2125C4.09583 18.0208 4 17.7833 4 17.5ZM16.6 7.3L18 5.9L16.6 4.5L15.2 5.9L16.6 7.3Z"
                  fill="#FF743D"
                />
              </g>
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#1e1e1e]">
              자기소개
            </p>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
            <LongInput index="소개글" value="소개글을 입력해 주세요" />
            <LongInput index="Skill" value="Skill을 입력해 주세요"/>
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
                id="mask0_549_6949"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={24}
                height={25}
              >
                <rect y="0.5" width={24} height={24} fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_549_6949)">
                <path
                  d="M12 18C13.25 18 14.3125 17.5625 15.1875 16.6875C16.0625 15.8125 16.5 14.75 16.5 13.5C16.5 12.25 16.0625 11.1875 15.1875 10.3125C14.3125 9.4375 13.25 9 12 9C10.75 9 9.6875 9.4375 8.8125 10.3125C7.9375 11.1875 7.5 12.25 7.5 13.5C7.5 14.75 7.9375 15.8125 8.8125 16.6875C9.6875 17.5625 10.75 18 12 18ZM12 16C11.3 16 10.7083 15.7583 10.225 15.275C9.74167 14.7917 9.5 14.2 9.5 13.5C9.5 12.8 9.74167 12.2083 10.225 11.725C10.7083 11.2417 11.3 11 12 11C12.7 11 13.2917 11.2417 13.775 11.725C14.2583 12.2083 14.5 12.8 14.5 13.5C14.5 14.2 14.2583 14.7917 13.775 15.275C13.2917 15.7583 12.7 16 12 16ZM4 21.5C3.45 21.5 2.97917 21.3042 2.5875 20.9125C2.19583 20.5208 2 20.05 2 19.5V7.5C2 6.95 2.19583 6.47917 2.5875 6.0875C2.97917 5.69583 3.45 5.5 4 5.5H7.15L8.4 4.15C8.58333 3.95 8.80417 3.79167 9.0625 3.675C9.32083 3.55833 9.59167 3.5 9.875 3.5H14.125C14.4083 3.5 14.6792 3.55833 14.9375 3.675C15.1958 3.79167 15.4167 3.95 15.6 4.15L16.85 5.5H20C20.55 5.5 21.0208 5.69583 21.4125 6.0875C21.8042 6.47917 22 6.95 22 7.5V19.5C22 20.05 21.8042 20.5208 21.4125 20.9125C21.0208 21.3042 20.55 21.5 20 21.5H4Z"
                  fill="#FF743D"
                />
              </g>
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-[#1e1e1e]">
              사진
            </p>
          </div>
          <div
            className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[62px] py-9 rounded-[14px] bg-white border border-[#e7eaf2]"
            style={{ boxShadow: "0px 5px 30px -15px rgba(0,0,0,0.2)" }}
          >
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[50px]">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[30px]">
                <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#1e1e1e]">
                  프로필 사진
                </p>
                <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <img className="flex-grow-0 flex-shrink-0" src={defaultprofileimage} alt="profileimage"/>
                    <UploadImage />
                  </div>
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[43px] overflow-hidden gap-2.5 px-[22px] py-3 rounded-[9px] bg-neutral-100">
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 h-[19px] relative gap-[180px]">
                        <p className="flex-grow-0 flex-shrink-0 w-[42px] h-[19px] text-base font-light text-left text-[#808593]">
                          파일명
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 w-[39px] h-[19px] text-base font-light text-left text-[#b7becf]">
                          00KB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[30px]">
                <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-[#1e1e1e]">
                  배경 사진
                </p>
                <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-5">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                    <img
                      className="flex-grow-0 flex-shrink-0 w-[190px] h-[190px] rounded-[14px]"
                      src={defaultbackgroundimage}
                      alt="backgroundimage"
                    />
                    <UploadImage />
                  </div>
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[22px] py-3 rounded-[9px] bg-neutral-100">
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[180px]">
                        <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#808593]">
                          파일명
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#b7becf]">
                          00KB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="/mypage">
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-[65px] py-4 rounded-[14px] bg-[#ff743d] hover:bg-[#f50] cursor-pointer">
      <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-white">
        수정완료
      </p>
    </div>
    </a>
  </div>
</div>
    );
}