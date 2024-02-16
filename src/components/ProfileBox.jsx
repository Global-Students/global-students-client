import React from "react";
import { Link } from "react-router-dom";
import defaultbackgroundimage from "../assets/rectangle-88.png";
import defaultprofileimage from "../assets/ellipse-28.png";

export default function ProfileBox({ nickname, bio }) {
    return (
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 h-[647px] relative gap-2.5 rounded-[14px]">
  <div
    className="flex-grow-0 flex-shrink-0 w-[302px] h-[647px] relative overflow-hidden rounded-[14px]"
    style={{ filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.05))" }}
  >
    <div className="flex flex-col justify-start items-start absolute left-0 top-0">
      <div className="flex-grow-0 flex-shrink-0 w-[302px] h-[357px] relative">
        <img
          className="w-[302px] h-[357px] absolute left-[-1px] top-[-1px] rounded-tl-[14px] rounded-tr-[14px]"
          src={defaultbackgroundimage} alt="defaultbackgroundimage"
        />
        <Link to="/">
        <div className="w-[30px] h-[30px] relative left-[252px] top-10">
          <div className="flex justify-center items-center relative top-1.5 gap-2.5">
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 absolute"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx={16} cy={16} r={16} fill="#B7BECF" />
            </svg>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 absolute"
              preserveAspectRatio="xMidYMid meet"
            >
              <mask
                id="mask0_1308_2040"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={24}
                height={24}
              >
                <rect width={24} height={24} fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1253_2040)">
                <path
                  d="M18.0011 21.75C17.2375 21.75 16.5881 21.4826 16.0529 20.9479C15.5176 20.4132 15.25 19.7639 15.25 19C15.25 18.8751 15.2599 18.7459 15.2798 18.6121C15.2997 18.4784 15.3295 18.3551 15.3692 18.2423L7.97305 13.9115C7.70895 14.1743 7.40831 14.3798 7.07113 14.5279C6.73394 14.6759 6.37689 14.75 5.99997 14.75C5.23609 14.75 4.58679 14.4827 4.05207 13.9482C3.51736 13.4137 3.25 12.7647 3.25 12.0011C3.25 11.2375 3.51736 10.5881 4.05207 10.0529C4.58679 9.51763 5.23609 9.25 5.99997 9.25C6.37689 9.25 6.73394 9.32403 7.07113 9.4721C7.40831 9.62018 7.70895 9.82563 7.97305 10.0885L15.3692 5.75768C15.3295 5.64486 15.2997 5.52157 15.2798 5.38783C15.2599 5.25409 15.25 5.12481 15.25 4.99998C15.25 4.23609 15.5173 3.58679 16.0518 3.05208C16.5863 2.51736 17.2353 2.25 17.9989 2.25C18.7624 2.25 19.4118 2.51725 19.9471 3.05175C20.4823 3.58625 20.75 4.23528 20.75 4.99885C20.75 5.76242 20.4826 6.41182 19.9479 6.94707C19.4132 7.48233 18.7639 7.74995 18 7.74995C17.6231 7.74995 17.266 7.67592 16.9288 7.52785C16.5916 7.37977 16.291 7.17432 16.0269 6.9115L8.63073 11.2423C8.67048 11.3551 8.70028 11.4782 8.72015 11.6115C8.74002 11.7447 8.74995 11.8736 8.74995 11.998C8.74995 12.1224 8.74002 12.2519 8.72015 12.3865C8.70028 12.5211 8.67048 12.6449 8.63073 12.7577L16.0269 17.0885C16.291 16.8256 16.5916 16.6202 16.9288 16.4721C17.266 16.324 17.6231 16.25 18 16.25C18.7639 16.25 19.4132 16.5173 19.9479 17.0518C20.4826 17.5863 20.75 18.2353 20.75 18.9989C20.75 19.7624 20.4827 20.4118 19.9482 20.9471C19.4137 21.4823 18.7647 21.75 18.0011 21.75ZM18 6.24998C18.3474 6.24998 18.6426 6.1285 18.8856 5.88555C19.1285 5.64258 19.25 5.34738 19.25 4.99995C19.25 4.65252 19.1285 4.35732 18.8856 4.11435C18.6426 3.87142 18.3474 3.74995 18 3.74995C17.6525 3.74995 17.3573 3.87143 17.1144 4.11438C16.8714 4.35734 16.75 4.65254 16.75 4.99998C16.75 5.34741 16.8714 5.64261 17.1144 5.88558C17.3573 6.12853 17.6525 6.24998 18 6.24998ZM5.99997 13.25C6.34741 13.25 6.64261 13.1285 6.88558 12.8856C7.12853 12.6426 7.25 12.3474 7.25 12C7.25 11.6525 7.12853 11.3573 6.88558 11.1144C6.64261 10.8714 6.34741 10.75 5.99997 10.75C5.65254 10.75 5.35734 10.8714 5.11438 11.1144C4.87143 11.3573 4.74995 11.6525 4.74995 12C4.74995 12.3474 4.87143 12.6426 5.11438 12.8856C5.35734 13.1285 5.65254 13.25 5.99997 13.25ZM18 20.25C18.3474 20.25 18.6426 20.1285 18.8856 19.8855C19.1285 19.6426 19.25 19.3474 19.25 19C19.25 18.6525 19.1285 18.3573 18.8856 18.1144C18.6426 17.8714 18.3474 17.75 18 17.75C17.6525 17.75 17.3573 17.8714 17.1144 18.1144C16.8714 18.3573 16.75 18.6525 16.75 19C16.75 19.3474 16.8714 19.6426 17.1144 19.8856C17.3573 20.1285 17.6525 20.25 18 20.25Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
        </Link>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-[302px] h-[313px] rounded-bl-[14px] rounded-br-[14px] bg-white" />
    </div>
  </div>
  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 h-[369px] absolute left-[26.5px] top-[262px] overflow-hidden gap-2.5">
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[25px]">
      <img className="flex-grow-0 flex-shrink-0" src={defaultprofileimage} alt="defaultprofileimage"/>
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[50px]">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[62px] relative gap-3">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[248px] text-[26px] font-bold text-center text-[#1e1e1e]">
            {nickname}
          </p>
          <p className="flex-grow w-[248px] h-[19px] text-base text-center text-[#50545e]">
            {bio}
          </p>
        </div>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-10">
          <Link to="/">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative p-[5px]">
            <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#808593]">
            프로필 수정
            </p>
            <svg
              width={23}
              height={22}
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[22px] h-[22px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <mask
                id="mask0_1253_2054"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={23}
                height={22}
              >
                <rect x="0.5" width={22} height={22} fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1253_2054)">
                <path
                  d="M10.614 19.5118C10.4083 19.5118 10.2303 19.4428 10.0799 19.3047C9.92943 19.1666 9.83894 18.9947 9.80839 18.7891L9.54221 16.7195C9.29659 16.6373 9.0448 16.5221 8.78683 16.374C8.52886 16.2259 8.29822 16.0673 8.09491 15.898L6.18049 16.7054C5.98424 16.7912 5.78944 16.8012 5.59612 16.7354C5.40279 16.6696 5.25089 16.5462 5.14042 16.3652L3.76194 13.9643C3.65733 13.7833 3.62501 13.59 3.66498 13.3843C3.70493 13.1786 3.80776 13.0129 3.97346 12.8872L5.63052 11.6338C5.60936 11.4975 5.59437 11.3606 5.58555 11.2231C5.57674 11.0856 5.57233 10.9487 5.57233 10.8124C5.57233 10.6819 5.57674 10.5494 5.58555 10.4148C5.59437 10.2802 5.60936 10.1331 5.63052 9.97323L3.97346 8.71985C3.80776 8.59412 3.70346 8.42841 3.66058 8.22274C3.61768 8.01709 3.65146 7.82377 3.76194 7.64279L5.14042 5.2595C5.25089 5.07852 5.40133 4.95512 5.59172 4.88931C5.7821 4.82349 5.97541 4.83348 6.17167 4.91928L8.08608 5.71784C8.30703 5.54272 8.54296 5.3826 8.79387 5.23746C9.04479 5.0923 9.29129 4.97566 9.53339 4.88752L9.80839 2.81798C9.83894 2.61231 9.92943 2.44044 10.0799 2.30236C10.2303 2.16426 10.4083 2.09521 10.614 2.09521H13.3904C13.5961 2.09521 13.7756 2.16426 13.9289 2.30236C14.0823 2.44044 14.1743 2.61231 14.2048 2.81798L14.471 4.89634C14.746 4.99623 14.9948 5.11287 15.2176 5.24626C15.4403 5.37965 15.665 5.53684 15.8918 5.71784L17.8415 4.91928C18.0378 4.83348 18.2311 4.82202 18.4215 4.88491C18.6119 4.94777 18.7623 5.0697 18.8728 5.25068L20.2513 7.64279C20.3617 7.82377 20.3955 8.01709 20.3526 8.22274C20.3097 8.42841 20.2054 8.59412 20.0397 8.71985L18.3474 9.99966C18.3803 10.1477 18.3983 10.2861 18.4012 10.4148C18.4041 10.5435 18.4056 10.6731 18.4056 10.8035C18.4056 10.9281 18.4027 11.0547 18.3968 11.1834C18.3909 11.3121 18.3698 11.4593 18.3333 11.625L20.008 12.8872C20.1737 13.0129 20.278 13.1786 20.3209 13.3843C20.3638 13.59 20.33 13.7833 20.2195 13.9643L18.841 16.3511C18.7306 16.5321 18.5763 16.6563 18.3783 16.7239C18.1803 16.7915 17.9831 16.7824 17.7869 16.6966L15.8918 15.8892C15.665 16.0702 15.4335 16.2303 15.1973 16.3696C14.9611 16.5089 14.719 16.6226 14.471 16.7107L14.2048 18.7891C14.1743 18.9947 14.0823 19.1666 13.9289 19.3047C13.7756 19.4428 13.5961 19.5118 13.3904 19.5118H10.614ZM11.0899 18.1369H12.8915L13.2212 15.6812C13.6889 15.559 14.1164 15.3854 14.5036 15.1603C14.8909 14.9353 15.2643 14.6459 15.6239 14.2922L17.9015 15.2494L18.804 13.691L16.8156 12.1926C16.892 11.9552 16.944 11.7225 16.9716 11.4946C16.9992 11.2666 17.013 11.0362 17.013 10.8035C17.013 10.565 16.9992 10.3346 16.9716 10.1125C16.944 9.89039 16.892 9.66358 16.8156 9.43206L18.8217 7.91603L17.9191 6.35769L15.6151 7.32902C15.3084 7.00112 14.9408 6.71143 14.5124 6.45995C14.0841 6.20844 13.6507 6.0304 13.2124 5.92581L12.9233 3.47019H11.104L10.8008 5.91698C10.3331 6.02746 9.9012 6.19669 9.50515 6.42468C9.10911 6.65267 8.73128 6.94648 8.37167 7.3061L6.0941 6.35769L5.19153 7.91603L7.17118 9.39152C7.09479 9.60892 7.04132 9.83514 7.01076 10.0702C6.98021 10.3052 6.96493 10.5526 6.96493 10.8124C6.96493 11.0509 6.98021 11.2848 7.01076 11.5139C7.04132 11.7431 7.09185 11.9693 7.16236 12.1926L5.19153 13.691L6.0941 15.2494L8.36285 14.2869C8.71071 14.6441 9.08266 14.9368 9.47871 15.1648C9.87475 15.3927 10.3125 15.5678 10.792 15.6901L11.0899 18.1369ZM12.0172 13.5535C12.7799 13.5535 13.4289 13.2859 13.9642 12.7506C14.4995 12.2152 14.7671 11.5662 14.7671 10.8035C14.7671 10.0408 14.4995 9.39182 13.9642 8.8565C13.4289 8.3212 12.7799 8.05355 12.0172 8.05355C11.2451 8.05355 10.5937 8.3212 10.0631 8.8565C9.53251 9.39182 9.26721 10.0408 9.26721 10.8035C9.26721 11.5662 9.53251 12.2152 10.0631 12.7506C10.5937 13.2859 11.2451 13.5535 12.0172 13.5535Z"
                  fill="#808593"
                />
              </g>
            </svg>
          </div>
          </Link>
          <Link to="/">
          <div className="flex-grow-0 flex-shrink-0 w-[94px] h-[31px] relative">
            <div className="flex justify-start items-start absolute left-[5px] top-[5px]">
              <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#808593]">
              로그아웃
              </p>
              <svg
                width={22}
                height={21}
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-[21px] h-[21px]"
                preserveAspectRatio="xMidYMid meet"
              >
                <mask
                  id="mask0_1253_2060"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={22}
                  height={21}
                >
                  <rect x="0.5" width={21} height={21} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1253_2060)">
                  <path
                    d="M5.14424 17.9375C4.70225 17.9375 4.32812 17.7843 4.02187 17.4781C3.71563 17.1718 3.5625 16.7977 3.5625 16.3557V4.64424C3.5625 4.20225 3.71563 3.82813 4.02187 3.52188C4.32812 3.21563 4.70225 3.0625 5.14424 3.0625H10.3521C10.5384 3.0625 10.6943 3.12533 10.8199 3.25098C10.9456 3.37661 11.0084 3.53254 11.0084 3.71875C11.0084 3.90496 10.9456 4.06089 10.8199 4.18653C10.6943 4.31216 10.5384 4.37498 10.3521 4.37498H5.14424C5.07692 4.37498 5.01521 4.40302 4.95911 4.45911C4.90302 4.51521 4.87498 4.57692 4.87498 4.64424V16.3557C4.87498 16.423 4.90302 16.4847 4.95911 16.5408C5.01521 16.5969 5.07692 16.625 5.14424 16.625H10.3521C10.5384 16.625 10.6943 16.6878 10.8199 16.8134C10.9456 16.9391 11.0084 17.095 11.0084 17.2812C11.0084 17.4674 10.9456 17.6233 10.8199 17.749C10.6943 17.8746 10.5384 17.9375 10.3521 17.9375H5.14424ZM15.9152 11.1562H9.11536C8.92914 11.1562 8.77322 11.0934 8.64758 10.9678C8.52193 10.8421 8.45911 10.6862 8.45911 10.5C8.45911 10.3138 8.52193 10.1578 8.64758 10.0322C8.77322 9.90657 8.92914 9.84375 9.11536 9.84375H15.9152L14.2324 8.16106C14.1113 8.0399 14.0493 7.89211 14.0465 7.71768C14.0437 7.54324 14.1057 7.38816 14.2324 7.25242C14.3592 7.11669 14.5129 7.04658 14.6935 7.04209C14.8741 7.0376 15.0323 7.10322 15.168 7.23896L17.8754 9.94639C18.0336 10.1046 18.1127 10.2891 18.1127 10.5C18.1127 10.7109 18.0336 10.8954 17.8754 11.0536L15.168 13.761C15.0379 13.8911 14.8834 13.9553 14.7044 13.9537C14.5255 13.952 14.3682 13.8833 14.2324 13.7475C14.1057 13.6118 14.0446 13.4559 14.049 13.2798C14.0535 13.1036 14.1192 12.9522 14.2459 12.8254L15.9152 11.1562Z"
                    fill="#808593"
                  />
                </g>
              </svg>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}