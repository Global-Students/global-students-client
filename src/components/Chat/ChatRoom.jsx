import React from "react";
import ChatContent from "./ChatContent";

export default function ChatRoom({username}) {
    return (
        <div
  className="gap-2.5 p-5 rounded-[14px] bg-white/60 backdrop-blur-[30px] fixed top-[130px] right-[750px]"
  style={{ boxShadow: "8px 15px 60px -26px rgba(0,0,0,0.25)" }}
>
  <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 h-[498px] gap-2.5">
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[369px] relative gap-[222px]">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
      <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]"> </div>
        <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-gray-scale-1">
          {username}
        </p>
      </div>
      <div className="w-6 h-6 rounded-full bg-gray-scale_7_main">
        <img src="assets/close_chat.svg" alt="close icon" />
        </div>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[369px] h-[445px] relative rounded-[14px] bg-gray-scale-9">
      <div className="flex gap-2.5 absolute bottom-0">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[429px]">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[17px] py-4 h-[363px] overflow-auto">
            <ChatContent receiverId="100" />
            <div className="flex w-[340px] gap-2">
              <div className="max-w-[223px] px-6 py-3.5 shadow-message rounded-r-[30px] rounded-tl-[30px] rounded-bl-md bg-orange-4">
                <p className="text-sm text-gray-scale-1">
                  상대 메세지 내용입니다
                </p>
              </div>
              <p className="text-xs text-left text-gray-scale-4 self-end">00:00</p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 px-[7px] py-2.5 rounded-bl-[14px] rounded-br-[14px] bg-neutral-100 h-[66px]">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5 pl-5 pr-2.5 pt-[9px] pb-[11px] rounded-[30px] bg-white">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[222px]">
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-gray-scale-5">
                  메세지 입력···
                </p>
                <div className="w-[26px] h-[26px] rounded-full "> 
                  <img src="assets/arrow_forward.svg" alt="arrow_forward icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}