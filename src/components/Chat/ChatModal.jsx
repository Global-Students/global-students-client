import React, { useEffect, useRef, useState } from "react";
import ChatListItem from "./ChatListItem";

export default function ChatModal({_isChatModalOpen}) {
    const [isChatModalOpen, setIsChatModalOpen] = useState(_isChatModalOpen);
    const ChatRef = useRef();
    useEffect(() => {
        function handleClickOutside(event) {
            if (ChatRef.current && !ChatRef.current.contains(event.target) ) {
                setIsChatModalOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, );

    useEffect(() => {
        setIsChatModalOpen(_isChatModalOpen);
    }, [_isChatModalOpen]);
    
    function handleModalClick(event) {
        event.stopPropagation();
      }

      function handleKeyDown() {
        console.log('keydown');
      }
    

    return (
        <div>
            {isChatModalOpen ? <div ref={ChatRef} onClick={handleModalClick} onKeyDown={handleKeyDown} role="button" tabIndex={0} className="flex flex-col justify-start items-start fixed top-[84px] right-[320px]">
  <div className="w-[410px] h-[46px] relative">
    <img src="assets/Frame_321.svg" alt="frame" className="absolute left-[288px] top-[10px] boxShadow-dropShadow"/>
  </div>
  <div className="flex-grow-0 flex-shrink-0 w-[410px] h-[543px] relative">
    <div className="w-[410px] h-[538px] absolute left-0 top-0">
      <div
        className="w-[410px] h-[538px] absolute left-[-1px] top-[-1px] rounded-[14px] bg-white/60"
        style={{ boxShadow: "8px 15px 60px -26px rgba(0,0,0,0.25)" }}
      />
    </div>
    <div className="flex flex-col justify-start items-end absolute left-5 top-5 gap-5">
      <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-[270px]">
        <p className="flex-grow-0 flex-shrink-0 text-[26px] font-semibold text-left text-gray-scale-2">
          메세지
        </p>
        <img src="assets/menu.svg" alt="menu icon" />
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[446px] overflow-auto gap-[9px]">
        <ChatListItem username="사용자명" message="메시지명 메시지명 메시지명" time="00:00" isNewMessage/>
        <ChatListItem username="사용자명" message="메시지명 메시지명 메시지명" time="00:00" />
        <ChatListItem username="사용자명" message="메시지명 메시지명 메시지명" time="00:00" />
        <ChatListItem username="사용자명" message="메시지명 메시지명 메시지명" time="00:00" />
        <ChatListItem username="사용자명" message="메시지명 메시지명 메시지명" time="00:00" />
        <ChatListItem username="사용자명" message="메시지명 메시지명 메시지명" time="00:00" />
        <ChatListItem username="사용자명" message="메시지명 메시지명 메시지명" time="00:00" />
      </div>
    </div>
  </div>
</div> : false }
        </div>
    );
    }