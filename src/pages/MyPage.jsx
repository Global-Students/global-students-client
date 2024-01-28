import React from 'react';
import ProfileBox from '../components/ProfileBox';

export default function MyPage() {
    return (
  <div className="flex justify-start items-start mx-80 my-[100px] gap-6">
    <ProfileBox nickname='test' bio='test' profileImage='test' />
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[45px]">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[954px] overflow-hidden gap-2.5 pl-8 pr-[34px] py-5 rounded-tl-[14px] rounded-tr-[14px] bg-neutral-100">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[891px] relative gap-[739px]">
            <p className="flex-grow-0 flex-shrink-0 w-[68px] h-[29px] text-xl font-medium text-left text-[#414244]">
              내 정보
            </p>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#808593]">수정하기</p>
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
                  id="mask0_569_9898"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={21}
                  height={21}
                >
                  <rect width={21} height={21} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_569_9898)">
                  <path
                    d="M12.9782 10.5L6.38708 3.90887C6.2132 3.73499 6.1285 3.52802 6.13298 3.28797C6.13747 3.04789 6.22666 2.84093 6.40053 2.66707C6.57441 2.49319 6.78138 2.40625 7.02143 2.40625C7.26149 2.40625 7.46846 2.49319 7.64233 2.66707L14.3411 9.37932C14.4993 9.53749 14.6165 9.71473 14.6928 9.91104C14.7691 10.1074 14.8072 10.3037 14.8072 10.5C14.8072 10.6963 14.7691 10.8926 14.6928 11.0889C14.6165 11.2852 14.4993 11.4625 14.3411 11.6206L7.62888 18.3329C7.455 18.5068 7.25028 18.5915 7.0147 18.587C6.77913 18.5825 6.57441 18.4933 6.40053 18.3194C6.22666 18.1456 6.13972 17.9386 6.13972 17.6985C6.13972 17.4585 6.22666 17.2515 6.40053 17.0776L12.9782 10.5Z"
                    fill="#808593"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[954px] overflow-hidden gap-2.5 px-8 py-[26px] rounded-bl-[14px] rounded-br-[14px] bg-white border-t-0 border-r border-b border-l border-[#e7eaf2]">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-2">
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[892px] overflow-hidden gap-2.5 px-6 py-[18px] rounded-[14px] bg-white border border-[#e7eaf2]"
              style={{ boxShadow: "0px 5px 30px -15px rgba(0,0,0,0.2)" }}
            >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[22px]">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[22px]">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-[22px] h-[22px]"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <mask
                        id="mask0_569_9907"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={22}
                        height={22}
                      >
                        <rect width={22} height={22} fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_569_9907)">
                        <path
                          d="M5.90787 15.4299C5.63757 15.2795 5.42575 15.0765 5.27239 14.8211C5.11902 14.5656 5.04233 14.2791 5.04233 13.9615V9.98459L3.21255 8.97275C3.06212 8.88697 2.95166 8.7826 2.88115 8.65964C2.81064 8.53668 2.77539 8.40006 2.77539 8.24977C2.77539 8.0995 2.81064 7.96297 2.88115 7.84016C2.95166 7.71735 3.06212 7.61304 3.21255 7.52726L10.2114 3.71393C10.3356 3.64484 10.4636 3.59414 10.5952 3.56183C10.7269 3.5295 10.862 3.51334 11.0006 3.51334C11.1392 3.51334 11.2744 3.5295 11.406 3.56183C11.5377 3.59414 11.6658 3.64476 11.7902 3.7137L19.6948 8.01554C19.8358 8.09193 19.9439 8.19526 20.0191 8.32551C20.0944 8.45576 20.132 8.59629 20.132 8.74711V14.1554C20.132 14.3502 20.0661 14.5135 19.9342 14.6452C19.8024 14.777 19.6391 14.8429 19.4442 14.8429C19.2493 14.8429 19.0861 14.777 18.9544 14.6452C18.8228 14.5135 18.757 14.3502 18.757 14.1554V9.01153L16.959 9.98459V13.9615C16.959 14.2791 16.8823 14.5656 16.7289 14.8211C16.5755 15.0765 16.3637 15.2795 16.0934 15.4299L11.7921 17.7551C11.6664 17.8256 11.5377 17.877 11.406 17.9093C11.2744 17.9416 11.1392 17.9578 11.0006 17.9578C10.862 17.9578 10.7269 17.9416 10.5952 17.9093C10.4636 17.877 10.3349 17.8256 10.2091 17.7551L5.90787 15.4299ZM10.8949 11.5888C10.936 11.6123 10.9727 11.624 11.005 11.624C11.0374 11.624 11.0741 11.6123 11.1152 11.5888L17.271 8.25L11.1152 4.92005C11.0741 4.89654 11.0374 4.88478 11.005 4.88478C10.9727 4.88478 10.936 4.89654 10.8949 4.92005L4.7303 8.25L10.8949 11.5888ZM10.8861 16.5652C10.9272 16.5887 10.9654 16.6004 11.0006 16.6004C11.0359 16.6004 11.0741 16.5887 11.1152 16.5652L15.4517 14.2224C15.4988 14.193 15.5325 14.1592 15.5531 14.121C15.5737 14.0828 15.584 14.0344 15.584 13.9756V10.7179L11.8063 12.7928C11.6805 12.8633 11.5501 12.9147 11.4149 12.947C11.2798 12.9793 11.1417 12.9955 11.0006 12.9955C10.8596 12.9955 10.7215 12.9793 10.5864 12.947C10.4512 12.9147 10.3208 12.8633 10.195 12.7928L6.41731 10.7179V13.9756C6.41731 14.0226 6.42759 14.0681 6.44815 14.1122C6.46873 14.1563 6.50253 14.193 6.54954 14.2224L10.8861 16.5652Z"
                          fill="#808593"
                        />
                      </g>
                    </svg>
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#414244]">
                      학교
                    </p>
                  </div>
                  <svg
                    width={2}
                    height={22}
                    viewBox="0 0 2 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="none"
                  >
                    <path d="M1 1V21" stroke="#808593" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="flex-grow-0 flex-shrink-0 w-[87px] text-lg text-left text-[#808593]">
                  ㅇㅇ대학교
                </p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[892px] overflow-hidden gap-2.5 px-6 py-[18px] rounded-[14px] bg-white border border-[#e7eaf2]"
              style={{ boxShadow: "0px 5px 30px -15px rgba(0,0,0,0.2)" }}
            >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-48 relative gap-[22px]">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[22px]">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                    <svg
                      width={21}
                      height={22}
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-[21px] h-[21px]"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <mask
                        id="mask0_569_9917"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={21}
                        height={22}
                      >
                        <rect y="0.5" width={21} height={21} fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_569_9917)">
                        <path
                          d="M5.68746 14.5168C6.41215 14.5168 7.1172 14.599 7.80262 14.7634C8.48803 14.9277 9.1684 15.1854 9.84373 15.5366V6.93463C9.22898 6.53416 8.56376 6.2338 7.84805 6.03356C7.13234 5.83331 6.41215 5.73319 5.68746 5.73319C5.16246 5.73319 4.67195 5.77441 4.21595 5.85685C3.75994 5.93931 3.29131 6.0742 2.81006 6.26154C2.74275 6.28398 2.69507 6.31624 2.66702 6.35832C2.63898 6.40039 2.62496 6.44666 2.62496 6.49713V14.7726C2.62496 14.8511 2.653 14.9086 2.70909 14.9451C2.76519 14.9815 2.8269 14.9858 2.89422 14.9577C3.30927 14.8164 3.74733 14.7076 4.20838 14.6313C4.66943 14.555 5.16246 14.5168 5.68746 14.5168ZM11.1562 15.5366C11.8315 15.1854 12.5119 14.9277 13.1973 14.7634C13.8827 14.599 14.5878 14.5168 15.3125 14.5168C15.8375 14.5168 16.3305 14.555 16.7915 14.6313C17.2526 14.7076 17.6906 14.8164 18.1057 14.9577C18.173 14.9858 18.2347 14.9815 18.2908 14.9451C18.3469 14.9086 18.375 14.8511 18.375 14.7726V6.49713C18.375 6.44666 18.3609 6.40179 18.3329 6.36252C18.3048 6.32324 18.2572 6.28958 18.1898 6.26154C17.7086 6.0742 17.24 5.93931 16.784 5.85685C16.328 5.77441 15.8375 5.73319 15.3125 5.73319C14.5878 5.73319 13.8676 5.83331 13.1519 6.03356C12.4362 6.2338 11.7709 6.53416 11.1562 6.93463V15.5366ZM10.5 17.0947C10.3294 17.0947 10.1699 17.0734 10.0212 17.0308C9.87261 16.9881 9.73211 16.9315 9.59973 16.8608C8.99733 16.5198 8.36715 16.2626 7.70921 16.0893C7.05128 15.916 6.37736 15.8293 5.68746 15.8293C5.15349 15.8293 4.62906 15.8885 4.11416 16.0068C3.59925 16.1252 3.10286 16.2993 2.62498 16.5293C2.31313 16.6729 2.01642 16.6502 1.73484 16.4612C1.45328 16.2721 1.3125 16.0043 1.3125 15.6577V6.15724C1.3125 5.96878 1.36101 5.79182 1.45803 5.62636C1.55507 5.46089 1.69502 5.3417 1.87788 5.26879C2.47018 4.98049 3.08745 4.76707 3.72967 4.62853C4.37189 4.48999 5.02448 4.42072 5.68746 4.42072C6.5389 4.42072 7.37072 4.5371 8.18289 4.76988C8.99507 5.00265 9.76742 5.3462 10.5 5.80053C11.2325 5.3462 12.0048 5.00265 12.817 4.76988C13.6292 4.5371 14.461 4.42072 15.3125 4.42072C15.9754 4.42072 16.628 4.48999 17.2702 4.62853C17.9125 4.76707 18.5297 4.98049 19.122 5.26879C19.3049 5.3417 19.4448 5.46089 19.5419 5.62636C19.6389 5.79182 19.6874 5.96878 19.6874 6.15724V15.6577C19.6874 16.0043 19.541 16.2693 19.2482 16.4527C18.9555 16.6361 18.6475 16.6561 18.3244 16.5125C17.8522 16.2881 17.3628 16.1182 16.8563 16.0026C16.3498 15.8871 15.8352 15.8293 15.3125 15.8293C14.6225 15.8293 13.9486 15.916 13.2907 16.0893C12.6328 16.2626 12.0026 16.5198 11.4002 16.8608C11.2678 16.9315 11.1273 16.9881 10.9787 17.0308C10.83 17.0734 10.6705 17.0947 10.5 17.0947Z"
                          fill="#808593"
                        />
                      </g>
                    </svg>
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#414244]">
                      학과
                    </p>
                  </div>
                  <svg
                    width={2}
                    height={22}
                    viewBox="0 0 2 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0"
                    preserveAspectRatio="none"
                  >
                    <path d="M1 1V21" stroke="#808593" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="flex-grow w-20 text-lg text-left text-[#808593]">기계공학과</p>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[892px] overflow-hidden gap-2.5 px-6 py-[18px] rounded-[14px] bg-white border border-[#e7eaf2]"
              style={{ boxShadow: "0px 5px 30px -15px rgba(0,0,0,0.2)" }}
            >
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[326px] relative gap-[5px]">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[241px] relative gap-[22px]">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[22px]">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
                      <svg
                        width={21}
                        height={22}
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[21px] h-[21px]"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <mask
                          id="mask0_569_9928"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={21}
                          height={22}
                        >
                          <rect y="0.5" width={21} height={21} fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_569_9928)">
                          <path
                            d="M17.0103 18.4375C15.3613 18.4375 13.7047 18.0541 12.0405 17.2873C10.3763 16.5206 8.8459 15.4389 7.44927 14.0423C6.05825 12.6456 4.97937 11.1166 4.21262 9.45528C3.44587 7.7939 3.0625 6.1387 3.0625 4.48967C3.0625 4.22717 3.15 4.00702 3.325 3.82922C3.5 3.65141 3.71875 3.5625 3.98125 3.5625H6.83506C7.05606 3.5625 7.25097 3.63458 7.4198 3.77873C7.58863 3.92289 7.69604 4.10098 7.74202 4.31299L8.24346 6.88748C8.27824 7.12643 8.27095 7.33172 8.22159 7.50335C8.17224 7.67498 8.08361 7.81913 7.95572 7.93579L5.93482 9.90286C6.26014 10.4985 6.63174 11.062 7.04961 11.5931C7.46748 12.1243 7.91984 12.6316 8.40669 13.1151C8.88684 13.5953 9.39726 14.0412 9.93797 14.4529C10.4787 14.8646 11.0626 15.2477 11.6897 15.6022L13.6533 13.6216C13.7902 13.4792 13.956 13.3793 14.1506 13.3221C14.3452 13.2649 14.5474 13.2509 14.7572 13.2801L17.187 13.7748C17.408 13.8331 17.5883 13.9458 17.728 14.113C17.8676 14.2801 17.9375 14.4697 17.9375 14.6817V17.5187C17.9375 17.7812 17.8486 18 17.6707 18.175C17.4929 18.35 17.2728 18.4375 17.0103 18.4375Z"
                            fill="#808593"
                          />
                        </g>
                      </svg>
                      <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#414244]">
                        번호
                      </p>
                    </div>
                    <svg
                      width={2}
                      height={22}
                      viewBox="0 0 2 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0"
                      preserveAspectRatio="none"
                    >
                      <path d="M1 1V21" stroke="#808593" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="flex-grow-0 flex-shrink-0 w-[136px] text-lg text-left text-[#808593]">
                    010-0000-0000
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 w-[75px] text-lg text-left text-[#808593]">
                  (친구공개)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[412px] relative">
        <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[69px]">
          <div className="flex flex-col justify-start items-start w-[953px] absolute left-0 top-0 overflow-hidden gap-2.5 pl-8 pr-[34px] py-5 rounded-tl-[14px] rounded-tr-[14px] bg-neutral-100">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[891px] h-[29px] relative gap-[720px]">
              <p className="flex-grow-0 flex-shrink-0 w-[87px] h-[29px] text-xl font-medium text-left text-[#414244]">
                내가 쓴 글
              </p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[88px] h-[21px] relative gap-1">
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#808593]">
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
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[355px] w-[953px] relative overflow-hidden rounded-bl-[14px] rounded-br-[14px] border-t-0 border-r border-b border-l border-[#e7eaf2]">
          <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[71px] relative overflow-hidden bg-white">
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
            <div className="flex justify-start items-center w-[892px] absolute left-[31px] top-[25px] gap-[480px]">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[23px]">
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#1e1e1e]">
                  게시글제목
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#f50]">
                  (1)
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#50545e]">
                  1월 1일
                </p>
              </div>
              <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 w-[220px] relative gap-[60px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  작성자
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
                    0
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[71px] relative overflow-hidden bg-white">
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
            <div className="flex justify-start items-center absolute left-[31px] top-[25px] gap-[480px]">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[23px]">
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#1e1e1e]">
                  게시글제목
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#f50]">
                  (1)
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#50545e]">
                  1월 1일
                </p>
              </div>
              <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 w-[220px] relative gap-[60px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  작성자
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
                      id="mask0_1308_1480"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={13}
                      height={13}
                    >
                      <rect width={13} height={13} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1308_1480)">
                      <path
                        d="M11.2077 4.98664C11.4653 4.98664 11.6929 5.08684 11.8905 5.28724C12.088 5.48762 12.1868 5.71848 12.1868 5.9798V6.86728C12.1868 6.92494 12.1795 6.98673 12.1649 7.05264C12.1504 7.11854 12.134 7.18002 12.116 7.23708L10.5637 10.9525C10.486 11.1282 10.3559 11.2766 10.1733 11.3977C9.99064 11.5189 9.80008 11.5795 9.60158 11.5795H3.90559V4.98664L7.05663 1.81808C7.16427 1.7089 7.28892 1.64374 7.43058 1.62261C7.57225 1.60148 7.70801 1.62613 7.83786 1.69657C7.96772 1.76701 8.06285 1.86702 8.12327 1.99662C8.18369 2.12622 8.19654 2.2604 8.16181 2.39915L7.57848 4.98664H11.2077ZM4.71808 5.33741V10.7554H9.60349C9.64169 10.7554 9.68075 10.7448 9.72068 10.7237C9.76062 10.7025 9.79101 10.6673 9.81184 10.618L11.3743 6.90955V5.9798C11.3743 5.93049 11.3587 5.88999 11.3275 5.85829C11.2962 5.82659 11.2563 5.81074 11.2077 5.81074H6.55142L7.23059 2.79957L4.71808 5.33741ZM2.33269 11.5795C2.06341 11.5795 1.8329 11.4822 1.64115 11.2877C1.4494 11.0932 1.35352 10.8594 1.35352 10.5863V5.9798C1.35352 5.70669 1.4494 5.47288 1.64115 5.27839C1.8329 5.08389 2.06341 4.98664 2.33269 4.98664H3.90559V5.81074H2.33269C2.28407 5.81074 2.24414 5.82659 2.21288 5.85829C2.18163 5.88999 2.166 5.93049 2.166 5.9798V10.5863C2.166 10.6356 2.18163 10.6761 2.21288 10.7078C2.24414 10.7395 2.28407 10.7554 2.33269 10.7554H3.90559V11.5795H2.33269Z"
                        fill="#808593"
                      />
                    </g>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                    0
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[71px] relative overflow-hidden bg-white">
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
            <div className="flex justify-start items-center absolute left-[31px] top-[25px] gap-[480px]">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[23px]">
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#1e1e1e]">
                  게시글제목
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#f50]">
                  (1)
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#50545e]">
                  1월 1일
                </p>
              </div>
              <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 w-[220px] relative gap-[60px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  작성자
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
                      id="mask0_1308_1680"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={13}
                      height={13}
                    >
                      <rect width={13} height={13} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1308_1680)">
                      <path
                        d="M11.2077 4.98664C11.4653 4.98664 11.6929 5.08684 11.8905 5.28724C12.088 5.48762 12.1868 5.71848 12.1868 5.9798V6.86728C12.1868 6.92494 12.1795 6.98673 12.1649 7.05264C12.1504 7.11854 12.134 7.18002 12.116 7.23708L10.5637 10.9525C10.486 11.1282 10.3559 11.2766 10.1733 11.3977C9.99064 11.5189 9.80008 11.5795 9.60158 11.5795H3.90559V4.98664L7.05663 1.81808C7.16427 1.7089 7.28892 1.64374 7.43058 1.62261C7.57225 1.60148 7.70801 1.62613 7.83786 1.69657C7.96772 1.76701 8.06285 1.86702 8.12327 1.99662C8.18369 2.12622 8.19654 2.2604 8.16181 2.39915L7.57848 4.98664H11.2077ZM4.71808 5.33741V10.7554H9.60349C9.64169 10.7554 9.68075 10.7448 9.72068 10.7237C9.76062 10.7025 9.79101 10.6673 9.81184 10.618L11.3743 6.90955V5.9798C11.3743 5.93049 11.3587 5.88999 11.3275 5.85829C11.2962 5.82659 11.2563 5.81074 11.2077 5.81074H6.55142L7.23059 2.79957L4.71808 5.33741ZM2.33269 11.5795C2.06341 11.5795 1.8329 11.4822 1.64115 11.2877C1.4494 11.0932 1.35352 10.8594 1.35352 10.5863V5.9798C1.35352 5.70669 1.4494 5.47288 1.64115 5.27839C1.8329 5.08389 2.06341 4.98664 2.33269 4.98664H3.90559V5.81074H2.33269C2.28407 5.81074 2.24414 5.82659 2.21288 5.85829C2.18163 5.88999 2.166 5.93049 2.166 5.9798V10.5863C2.166 10.6356 2.18163 10.6761 2.21288 10.7078C2.24414 10.7395 2.28407 10.7554 2.33269 10.7554H3.90559V11.5795H2.33269Z"
                        fill="#808593"
                      />
                    </g>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                    0
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[71px] relative overflow-hidden bg-white">
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
            <div className="flex justify-start items-center absolute left-[31px] top-[25px] gap-[480px]">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[23px]">
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#1e1e1e]">
                  게시글제목
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#f50]">
                  (1)
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#50545e]">
                  1월 1일
                </p>
              </div>
              <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 w-[220px] relative gap-[60px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  작성자
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
                      id="mask0_1308_3167"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={13}
                      height={13}
                    >
                      <rect width={13} height={13} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1308_3167)">
                      <path
                        d="M11.2077 4.98664C11.4653 4.98664 11.6929 5.08684 11.8905 5.28724C12.088 5.48762 12.1868 5.71848 12.1868 5.9798V6.86728C12.1868 6.92494 12.1795 6.98673 12.1649 7.05264C12.1504 7.11854 12.134 7.18002 12.116 7.23708L10.5637 10.9525C10.486 11.1282 10.3559 11.2766 10.1733 11.3977C9.99064 11.5189 9.80008 11.5795 9.60158 11.5795H3.90559V4.98664L7.05663 1.81808C7.16427 1.7089 7.28892 1.64374 7.43058 1.62261C7.57225 1.60148 7.70801 1.62613 7.83786 1.69657C7.96772 1.76701 8.06285 1.86702 8.12327 1.99662C8.18369 2.12622 8.19654 2.2604 8.16181 2.39915L7.57848 4.98664H11.2077ZM4.71808 5.33741V10.7554H9.60349C9.64169 10.7554 9.68075 10.7448 9.72068 10.7237C9.76062 10.7025 9.79101 10.6673 9.81184 10.618L11.3743 6.90955V5.9798C11.3743 5.93049 11.3587 5.88999 11.3275 5.85829C11.2962 5.82659 11.2563 5.81074 11.2077 5.81074H6.55142L7.23059 2.79957L4.71808 5.33741ZM2.33269 11.5795C2.06341 11.5795 1.8329 11.4822 1.64115 11.2877C1.4494 11.0932 1.35352 10.8594 1.35352 10.5863V5.9798C1.35352 5.70669 1.4494 5.47288 1.64115 5.27839C1.8329 5.08389 2.06341 4.98664 2.33269 4.98664H3.90559V5.81074H2.33269C2.28407 5.81074 2.24414 5.82659 2.21288 5.85829C2.18163 5.88999 2.166 5.93049 2.166 5.9798V10.5863C2.166 10.6356 2.18163 10.6761 2.21288 10.7078C2.24414 10.7395 2.28407 10.7554 2.33269 10.7554H3.90559V11.5795H2.33269Z"
                        fill="#808593"
                      />
                    </g>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                    0
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[71px] relative overflow-hidden bg-white">
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
            <div className="flex justify-start items-center absolute left-[31px] top-[25px] gap-[480px]">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[23px]">
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#1e1e1e]">
                  게시글제목
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#f50]">
                  (1)
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#50545e]">
                  1월 1일
                </p>
              </div>
              <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 w-[220px] relative gap-[60px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  작성자
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
                      id="mask0_1308_1629"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={13}
                      height={13}
                    >
                      <rect width={13} height={13} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1308_1629)">
                      <path
                        d="M11.2077 4.98664C11.4653 4.98664 11.6929 5.08684 11.8905 5.28724C12.088 5.48762 12.1868 5.71848 12.1868 5.9798V6.86728C12.1868 6.92494 12.1795 6.98673 12.1649 7.05264C12.1504 7.11854 12.134 7.18002 12.116 7.23708L10.5637 10.9525C10.486 11.1282 10.3559 11.2766 10.1733 11.3977C9.99064 11.5189 9.80008 11.5795 9.60158 11.5795H3.90559V4.98664L7.05663 1.81808C7.16427 1.7089 7.28892 1.64374 7.43058 1.62261C7.57225 1.60148 7.70801 1.62613 7.83786 1.69657C7.96772 1.76701 8.06285 1.86702 8.12327 1.99662C8.18369 2.12622 8.19654 2.2604 8.16181 2.39915L7.57848 4.98664H11.2077ZM4.71808 5.33741V10.7554H9.60349C9.64169 10.7554 9.68075 10.7448 9.72068 10.7237C9.76062 10.7025 9.79101 10.6673 9.81184 10.618L11.3743 6.90955V5.9798C11.3743 5.93049 11.3587 5.88999 11.3275 5.85829C11.2962 5.82659 11.2563 5.81074 11.2077 5.81074H6.55142L7.23059 2.79957L4.71808 5.33741ZM2.33269 11.5795C2.06341 11.5795 1.8329 11.4822 1.64115 11.2877C1.4494 11.0932 1.35352 10.8594 1.35352 10.5863V5.9798C1.35352 5.70669 1.4494 5.47288 1.64115 5.27839C1.8329 5.08389 2.06341 4.98664 2.33269 4.98664H3.90559V5.81074H2.33269C2.28407 5.81074 2.24414 5.82659 2.21288 5.85829C2.18163 5.88999 2.166 5.93049 2.166 5.9798V10.5863C2.166 10.6356 2.18163 10.6761 2.21288 10.7078C2.24414 10.7395 2.28407 10.7554 2.33269 10.7554H3.90559V11.5795H2.33269Z"
                        fill="#808593"
                      />
                    </g>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                    0
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  조회수
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[412px] relative">
        <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[69px]">
          <div className="flex flex-col justify-start items-start w-[953px] absolute left-0 top-0 overflow-hidden gap-2.5 pl-8 pr-[34px] py-5 rounded-tl-[14px] rounded-tr-[14px] bg-neutral-100">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[891px] h-[29px] relative gap-[681px]">
              <p className="flex-grow-0 flex-shrink-0 w-[121px] h-[29px] text-xl font-medium text-left text-[#414244]">
                즐겨찾기한 글
              </p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[88px] h-[21px] relative gap-1">
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#808593]">
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
                    id="mask0_569_9958"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={21}
                    height={21}
                  >
                    <rect width={21} height={21} fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_569_9958)">
                    <path
                      d="M12.9782 10.5L6.38708 3.90887C6.2132 3.73499 6.1285 3.52802 6.13298 3.28797C6.13747 3.04789 6.22666 2.84093 6.40053 2.66707C6.57441 2.49319 6.78138 2.40625 7.02143 2.40625C7.26149 2.40625 7.46846 2.49319 7.64233 2.66707L14.3411 9.37932C14.4993 9.53749 14.6165 9.71473 14.6928 9.91104C14.7691 10.1074 14.8072 10.3037 14.8072 10.5C14.8072 10.6963 14.7691 10.8926 14.6928 11.0889C14.6165 11.2852 14.4993 11.4625 14.3411 11.6206L7.62888 18.3329C7.455 18.5068 7.25028 18.5915 7.0147 18.587C6.77913 18.5825 6.57441 18.4933 6.40053 18.3194C6.22666 18.1456 6.13972 17.9386 6.13972 17.6985C6.13972 17.4585 6.22666 17.2515 6.40053 17.0776L12.9782 10.5Z"
                      fill="#808593"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[355px] relative overflow-hidden rounded-bl-[14px] rounded-br-[14px] border-t-0 border-r border-b border-l border-[#e7eaf2]">
          <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[71px] relative overflow-hidden bg-white">
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
            <div className="flex justify-start items-center absolute left-[31px] top-[25px] gap-[480px]">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[23px]">
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#1e1e1e]">
                  게시글제목
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#f50]">
                  (1)
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#50545e]">
                  1월 1일
                </p>
              </div>
              <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 w-[220px] relative gap-[60px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  작성자
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
                      id="mask0_1308_2507"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={13}
                      height={13}
                    >
                      <rect width={13} height={13} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1308_2507)">
                      <path
                        d="M11.2077 4.98658C11.4653 4.98658 11.6929 5.08678 11.8905 5.28718C12.088 5.48756 12.1868 5.71842 12.1868 5.97974V6.86722C12.1868 6.92488 12.1795 6.98667 12.1649 7.05258C12.1504 7.11848 12.134 7.17996 12.116 7.23701L10.5637 10.9524C10.486 11.1281 10.3559 11.2765 10.1733 11.3977C9.99064 11.5188 9.80008 11.5794 9.60158 11.5794H3.90559V4.98658L7.05663 1.81801C7.16427 1.70884 7.28892 1.64368 7.43058 1.62255C7.57225 1.60142 7.70801 1.62607 7.83786 1.69651C7.96772 1.76695 8.06285 1.86696 8.12327 1.99656C8.18369 2.12616 8.19654 2.26034 8.16181 2.39909L7.57848 4.98658H11.2077ZM4.71808 5.33735V10.7553H9.60349C9.64169 10.7553 9.68075 10.7448 9.72068 10.7236C9.76062 10.7025 9.79101 10.6673 9.81184 10.618L11.3743 6.90949V5.97974C11.3743 5.93043 11.3587 5.88993 11.3275 5.85823C11.2962 5.82653 11.2563 5.81068 11.2077 5.81068H6.55142L7.23059 2.79951L4.71808 5.33735ZM2.33269 11.5794C2.06341 11.5794 1.8329 11.4822 1.64115 11.2877C1.4494 11.0932 1.35352 10.8594 1.35352 10.5863V5.97974C1.35352 5.70662 1.4494 5.47282 1.64115 5.27833C1.8329 5.08383 2.06341 4.98658 2.33269 4.98658H3.90559V5.81068H2.33269C2.28407 5.81068 2.24414 5.82653 2.21288 5.85823C2.18163 5.88993 2.166 5.93043 2.166 5.97974V10.5863C2.166 10.6356 2.18163 10.6761 2.21288 10.7078C2.24414 10.7395 2.28407 10.7553 2.33269 10.7553H3.90559V11.5794H2.33269Z"
                        fill="#808593"
                      />
                    </g>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                    0
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[71px] relative overflow-hidden bg-white">
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
            <div className="flex justify-start items-center absolute left-[31px] top-[25px] gap-[480px]">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[23px]">
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#1e1e1e]">
                  게시글제목
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#f50]">
                  (1)
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#50545e]">
                  1월 1일
                </p>
              </div>
              <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 w-[220px] relative gap-[60px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  작성자
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
                      id="mask0_1308_1036"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={13}
                      height={13}
                    >
                      <rect width={13} height={13} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1308_1036)">
                      <path
                        d="M11.2077 4.98658C11.4653 4.98658 11.6929 5.08678 11.8905 5.28718C12.088 5.48756 12.1868 5.71842 12.1868 5.97974V6.86722C12.1868 6.92488 12.1795 6.98667 12.1649 7.05258C12.1504 7.11848 12.134 7.17996 12.116 7.23701L10.5637 10.9524C10.486 11.1281 10.3559 11.2765 10.1733 11.3977C9.99064 11.5188 9.80008 11.5794 9.60158 11.5794H3.90559V4.98658L7.05663 1.81801C7.16427 1.70884 7.28892 1.64368 7.43058 1.62255C7.57225 1.60142 7.70801 1.62607 7.83786 1.69651C7.96772 1.76695 8.06285 1.86696 8.12327 1.99656C8.18369 2.12616 8.19654 2.26034 8.16181 2.39909L7.57848 4.98658H11.2077ZM4.71808 5.33735V10.7553H9.60349C9.64169 10.7553 9.68075 10.7448 9.72068 10.7236C9.76062 10.7025 9.79101 10.6673 9.81184 10.618L11.3743 6.90949V5.97974C11.3743 5.93043 11.3587 5.88993 11.3275 5.85823C11.2962 5.82653 11.2563 5.81068 11.2077 5.81068H6.55142L7.23059 2.79951L4.71808 5.33735ZM2.33269 11.5794C2.06341 11.5794 1.8329 11.4822 1.64115 11.2877C1.4494 11.0932 1.35352 10.8594 1.35352 10.5863V5.97974C1.35352 5.70662 1.4494 5.47282 1.64115 5.27833C1.8329 5.08383 2.06341 4.98658 2.33269 4.98658H3.90559V5.81068H2.33269C2.28407 5.81068 2.24414 5.82653 2.21288 5.85823C2.18163 5.88993 2.166 5.93043 2.166 5.97974V10.5863C2.166 10.6356 2.18163 10.6761 2.21288 10.7078C2.24414 10.7395 2.28407 10.7553 2.33269 10.7553H3.90559V11.5794H2.33269Z"
                        fill="#808593"
                      />
                    </g>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                    0
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[71px] relative overflow-hidden bg-white">
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
            <div className="flex justify-start items-center absolute left-[31px] top-[25px] gap-[480px]">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[23px]">
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#1e1e1e]">
                  게시글제목
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#f50]">
                  (1)
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#50545e]">
                  1월 1일
                </p>
              </div>
              <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 w-[220px] relative gap-[60px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  작성자
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
                      id="mask0_1308_834"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={13}
                      height={13}
                    >
                      <rect width={13} height={13} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1308_834)">
                      <path
                        d="M11.2077 4.98658C11.4653 4.98658 11.6929 5.08678 11.8905 5.28718C12.088 5.48756 12.1868 5.71842 12.1868 5.97974V6.86722C12.1868 6.92488 12.1795 6.98667 12.1649 7.05258C12.1504 7.11848 12.134 7.17996 12.116 7.23701L10.5637 10.9524C10.486 11.1281 10.3559 11.2765 10.1733 11.3977C9.99064 11.5188 9.80008 11.5794 9.60158 11.5794H3.90559V4.98658L7.05663 1.81801C7.16427 1.70884 7.28892 1.64368 7.43058 1.62255C7.57225 1.60142 7.70801 1.62607 7.83786 1.69651C7.96772 1.76695 8.06285 1.86696 8.12327 1.99656C8.18369 2.12616 8.19654 2.26034 8.16181 2.39909L7.57848 4.98658H11.2077ZM4.71808 5.33735V10.7553H9.60349C9.64169 10.7553 9.68075 10.7448 9.72068 10.7236C9.76062 10.7025 9.79101 10.6673 9.81184 10.618L11.3743 6.90949V5.97974C11.3743 5.93043 11.3587 5.88993 11.3275 5.85823C11.2962 5.82653 11.2563 5.81068 11.2077 5.81068H6.55142L7.23059 2.79951L4.71808 5.33735ZM2.33269 11.5794C2.06341 11.5794 1.8329 11.4822 1.64115 11.2877C1.4494 11.0932 1.35352 10.8594 1.35352 10.5863V5.97974C1.35352 5.70662 1.4494 5.47282 1.64115 5.27833C1.8329 5.08383 2.06341 4.98658 2.33269 4.98658H3.90559V5.81068H2.33269C2.28407 5.81068 2.24414 5.82653 2.21288 5.85823C2.18163 5.88993 2.166 5.93043 2.166 5.97974V10.5863C2.166 10.6356 2.18163 10.6761 2.21288 10.7078C2.24414 10.7395 2.28407 10.7553 2.33269 10.7553H3.90559V11.5794H2.33269Z"
                        fill="#808593"
                      />
                    </g>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                    0
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[71px] relative overflow-hidden bg-white">
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
            <div className="flex justify-start items-center absolute left-[31px] top-[25px] gap-[480px]">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[23px]">
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#1e1e1e]">
                  게시글제목
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#f50]">
                  (1)
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#50545e]">
                  1월 1일
                </p>
              </div>
              <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 w-[220px] relative gap-[60px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  작성자
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
                      id="mask0_1308_5671"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={13}
                      height={13}
                    >
                      <rect width={13} height={13} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1308_5671)">
                      <path
                        d="M11.2077 4.98658C11.4653 4.98658 11.6929 5.08678 11.8905 5.28718C12.088 5.48756 12.1868 5.71842 12.1868 5.97974V6.86722C12.1868 6.92488 12.1795 6.98667 12.1649 7.05258C12.1504 7.11848 12.134 7.17996 12.116 7.23701L10.5637 10.9524C10.486 11.1281 10.3559 11.2765 10.1733 11.3977C9.99064 11.5188 9.80008 11.5794 9.60158 11.5794H3.90559V4.98658L7.05663 1.81801C7.16427 1.70884 7.28892 1.64368 7.43058 1.62255C7.57225 1.60142 7.70801 1.62607 7.83786 1.69651C7.96772 1.76695 8.06285 1.86696 8.12327 1.99656C8.18369 2.12616 8.19654 2.26034 8.16181 2.39909L7.57848 4.98658H11.2077ZM4.71808 5.33735V10.7553H9.60349C9.64169 10.7553 9.68075 10.7448 9.72068 10.7236C9.76062 10.7025 9.79101 10.6673 9.81184 10.618L11.3743 6.90949V5.97974C11.3743 5.93043 11.3587 5.88993 11.3275 5.85823C11.2962 5.82653 11.2563 5.81068 11.2077 5.81068H6.55142L7.23059 2.79951L4.71808 5.33735ZM2.33269 11.5794C2.06341 11.5794 1.8329 11.4822 1.64115 11.2877C1.4494 11.0932 1.35352 10.8594 1.35352 10.5863V5.97974C1.35352 5.70662 1.4494 5.47282 1.64115 5.27833C1.8329 5.08383 2.06341 4.98658 2.33269 4.98658H3.90559V5.81068H2.33269C2.28407 5.81068 2.24414 5.82653 2.21288 5.85823C2.18163 5.88993 2.166 5.93043 2.166 5.97974V10.5863C2.166 10.6356 2.18163 10.6761 2.21288 10.7078C2.24414 10.7395 2.28407 10.7553 2.33269 10.7553H3.90559V11.5794H2.33269Z"
                        fill="#808593"
                      />
                    </g>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                    0
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  조회수
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[953px] h-[71px] relative overflow-hidden bg-white">
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
            <div className="flex justify-start items-center absolute left-[31px] top-[25px] gap-[480px]">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[23px]">
                <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#1e1e1e]">
                  게시글제목
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-[#f50]">
                  (1)
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-base font-light text-left text-[#50545e]">
                  1월 1일
                </p>
              </div>
              <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 w-[220px] relative gap-[60px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  작성자
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
                      id="mask0_1308_5302"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={13}
                      height={13}
                    >
                      <rect width={13} height={13} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1308_5302)">
                      <path
                        d="M11.2077 4.98658C11.4653 4.98658 11.6929 5.08678 11.8905 5.28718C12.088 5.48756 12.1868 5.71842 12.1868 5.97974V6.86722C12.1868 6.92488 12.1795 6.98667 12.1649 7.05258C12.1504 7.11848 12.134 7.17996 12.116 7.23701L10.5637 10.9524C10.486 11.1281 10.3559 11.2765 10.1733 11.3977C9.99064 11.5188 9.80008 11.5794 9.60158 11.5794H3.90559V4.98658L7.05663 1.81801C7.16427 1.70884 7.28892 1.64368 7.43058 1.62255C7.57225 1.60142 7.70801 1.62607 7.83786 1.69651C7.96772 1.76695 8.06285 1.86696 8.12327 1.99656C8.18369 2.12616 8.19654 2.26034 8.16181 2.39909L7.57848 4.98658H11.2077ZM4.71808 5.33735V10.7553H9.60349C9.64169 10.7553 9.68075 10.7448 9.72068 10.7236C9.76062 10.7025 9.79101 10.6673 9.81184 10.618L11.3743 6.90949V5.97974C11.3743 5.93043 11.3587 5.88993 11.3275 5.85823C11.2962 5.82653 11.2563 5.81068 11.2077 5.81068H6.55142L7.23059 2.79951L4.71808 5.33735ZM2.33269 11.5794C2.06341 11.5794 1.8329 11.4822 1.64115 11.2877C1.4494 11.0932 1.35352 10.8594 1.35352 10.5863V5.97974C1.35352 5.70662 1.4494 5.47282 1.64115 5.27833C1.8329 5.08383 2.06341 4.98658 2.33269 4.98658H3.90559V5.81068H2.33269C2.28407 5.81068 2.24414 5.82653 2.21288 5.85823C2.18163 5.88993 2.166 5.93043 2.166 5.97974V10.5863C2.166 10.6356 2.18163 10.6761 2.21288 10.7078C2.24414 10.7395 2.28407 10.7553 2.33269 10.7553H3.90559V11.5794H2.33269Z"
                        fill="#808593"
                      />
                    </g>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                    0
                  </p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-[#808593]">
                  조회수
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}
