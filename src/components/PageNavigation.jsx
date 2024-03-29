import React from "react";

function NotClickedButton({link, value}) {
    return (
        <a href={link}>
            <div className="w-[28px] h-[28px] rounded-[50%] border border-[#E7EAF2] hover:bg-[#E7EAF2]">
                <p className="text-center text-xs/[28px] text-[#414244]">{value}</p>
            </div>
        </a>
    );
}

function ClickedButton({value}){
    return (
        <div className="w-[28px] h-[28px] rounded-[50%] bg-[#FF743D]">
        <p className="text-center text-xs/[28px] text-white">{value}</p>
    </div>
    );
}

export default function PageNavigation() {
    return (
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 px-[15px] py-1.5 rounded-[100px] bg-white border border-neutral-100">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[75px]">
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
            id="mask0_1989_7759"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={23}
            height={22}
          >
            <rect x="0.5" width={22} height={22} fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_1989_7759)">
            <path
              d="M7.46194 11.0002L11.1815 14.7339C11.3084 14.8608 11.3757 15.018 11.3833 15.2054C11.391 15.3929 11.3237 15.5577 11.1815 15.6999C11.0487 15.8327 10.8877 15.8991 10.6985 15.8991C10.5093 15.8991 10.3483 15.8327 10.2155 15.6999L6.09579 11.5802C6.01 11.4944 5.94948 11.4039 5.91422 11.3087C5.87896 11.2135 5.86133 11.1107 5.86133 11.0002C5.86133 10.8898 5.87896 10.7869 5.91422 10.6918C5.94948 10.5966 6.01 10.5061 6.09579 10.4203L10.2155 6.30058C10.3424 6.17365 10.4996 6.10637 10.687 6.09873C10.8745 6.09109 11.0393 6.15837 11.1815 6.30058C11.3143 6.43337 11.3807 6.59437 11.3807 6.78357C11.3807 6.97277 11.3143 7.13377 11.1815 7.26656L7.46194 11.0002ZM13.2828 11.0002L17.0023 14.7339C17.1292 14.8608 17.1965 15.018 17.2042 15.2054C17.2118 15.3929 17.1445 15.5577 17.0023 15.6999C16.8695 15.8327 16.7085 15.8991 16.5193 15.8991C16.3301 15.8991 16.1691 15.8327 16.0363 15.6999L11.9166 11.5802C11.8308 11.4944 11.7703 11.4039 11.735 11.3087C11.6998 11.2135 11.6822 11.1107 11.6822 11.0002C11.6822 10.8898 11.6998 10.7869 11.735 10.6918C11.7703 10.5966 11.8308 10.5061 11.9166 10.4203L16.0363 6.30058C16.1632 6.17365 16.3204 6.10637 16.5079 6.09873C16.6953 6.09109 16.8601 6.15837 17.0023 6.30058C17.1351 6.43337 17.2015 6.59437 17.2015 6.78357C17.2015 6.97277 17.1351 7.13377 17.0023 7.26656L13.2828 11.0002Z"
              fill="#1E1E1E"
            />
          </g>
        </svg>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
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
              id="mask0_1989_7763"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={23}
              height={22}
            >
              <rect x="0.5" width={22} height={22} fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1989_7763)">
              <path
                d="M10.0826 11L13.8162 14.7337C13.9432 14.8606 14.0081 15.0201 14.011 15.2123C14.014 15.4044 13.9491 15.5669 13.8162 15.6997C13.6834 15.8325 13.5225 15.8989 13.3333 15.8989C13.1441 15.8989 12.9831 15.8325 12.8503 15.6997L8.73055 11.58C8.64475 11.4942 8.58423 11.4037 8.54899 11.3085C8.51372 11.2133 8.49609 11.1105 8.49609 11C8.49609 10.8895 8.51372 10.7867 8.54899 10.6915C8.58423 10.5963 8.64475 10.5058 8.73055 10.4201L12.8503 6.30036C12.9772 6.17343 13.1367 6.1085 13.3289 6.10556C13.521 6.10262 13.6834 6.16755 13.8162 6.30036C13.9491 6.43315 14.0155 6.59415 14.0155 6.78335C14.0155 6.97255 13.9491 7.13354 13.8162 7.26634L10.0826 11Z"
                fill="#1E1E1E"
              />
            </g>
          </svg>
          <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-[11px]">
            <ClickedButton value="1" />
            <NotClickedButton value="2" link="/" />
            <NotClickedButton value="3" link="/" />
            <NotClickedButton value="4" link="/" />
            <NotClickedButton value="5" link="/" />
            <NotClickedButton value="6" link="/" />
            <NotClickedButton value="7" link="/" />
            <NotClickedButton value="8" link="/" />
            <NotClickedButton value="9"  link="/" />
          </div>
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
              id="mask0_1989_7794"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={23}
              height={22}
            >
              <rect x="0.5" width={22} height={22} fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1989_7794)">
              <path
                d="M12.3665 10.9999L8.63281 7.26627C8.50588 7.13936 8.44095 6.97983 8.43802 6.78768C8.43507 6.59555 8.5 6.43308 8.63281 6.30029C8.7656 6.16748 8.9266 6.10107 9.1158 6.10107C9.305 6.10107 9.466 6.16748 9.59879 6.30029L13.7185 10.42C13.8043 10.5058 13.8648 10.5963 13.9001 10.6915C13.9353 10.7866 13.953 10.8895 13.953 10.9999C13.953 11.1104 13.9353 11.2132 13.9001 11.3084C13.8648 11.4036 13.8043 11.4941 13.7185 11.5799L9.59879 15.6996C9.47188 15.8265 9.31235 15.8915 9.1202 15.8944C8.92807 15.8973 8.7656 15.8324 8.63281 15.6996C8.5 15.5668 8.43359 15.4058 8.43359 15.2166C8.43359 15.0274 8.5 14.8664 8.63281 14.7336L12.3665 10.9999Z"
                fill="#1E1E1E"
              />
            </g>
          </svg>
        </div>
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
            id="mask0_1989_7797"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={23}
            height={22}
          >
            <rect x="0.5" width={22} height={22} fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_1989_7797)">
            <path
              d="M9.71691 10.9999L5.99736 7.26627C5.87043 7.13936 5.80314 6.98218 5.79551 6.79474C5.78787 6.6073 5.85515 6.44248 5.99736 6.30029C6.13015 6.16748 6.29115 6.10107 6.48035 6.10107C6.66956 6.10107 6.83057 6.16748 6.96336 6.30029L11.0831 10.42C11.1689 10.5058 11.2294 10.5963 11.2646 10.6915C11.2999 10.7866 11.3175 10.8895 11.3175 10.9999C11.3175 11.1104 11.2999 11.2132 11.2646 11.3084C11.2294 11.4036 11.1689 11.4941 11.0831 11.5799L6.96336 15.6996C6.83643 15.8265 6.67925 15.8938 6.49181 15.9015C6.30436 15.9091 6.13955 15.8418 5.99736 15.6996C5.86456 15.5668 5.79816 15.4058 5.79816 15.2166C5.79816 15.0274 5.86456 14.8664 5.99736 14.7336L9.71691 10.9999ZM15.5377 10.9999L11.8182 7.26627C11.6913 7.13936 11.624 6.98218 11.6163 6.79474C11.6087 6.6073 11.676 6.44248 11.8182 6.30029C11.951 6.16748 12.112 6.10107 12.3012 6.10107C12.4904 6.10107 12.6514 6.16748 12.7842 6.30029L16.9039 10.42C16.9897 10.5058 17.0502 10.5963 17.0854 10.6915C17.1207 10.7866 17.1383 10.8895 17.1383 10.9999C17.1383 11.1104 17.1207 11.2132 17.0854 11.3084C17.0502 11.4036 16.9897 11.4941 16.9039 11.5799L12.7842 15.6996C12.6573 15.8265 12.5001 15.8938 12.3126 15.9015C12.1252 15.9091 11.9604 15.8418 11.8182 15.6996C11.6854 15.5668 11.619 15.4058 11.619 15.2166C11.619 15.0274 11.6854 14.8664 11.8182 14.7336L15.5377 10.9999Z"
              fill="#1E1E1E"
            />
          </g>
        </svg>
      </div>
    </div>
    );
    }