import React, {useState} from "react";
import ChatRoom from "./ChatRoom";

export default function ChatListItem({username, message, time, isNewMessage}){
    const [isChatRoomOpen, setIsChatRoomOpen] = useState(false);
    function handleClick() {
        setIsChatRoomOpen(!isChatRoomOpen);
    }
    
    return (
        <div>
            <button 
        onClick={handleClick}
        type="button"
        tabIndex={0}
        className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[13px] py-[11px] rounded-[11px] bg-white border border-gray-scale-7-main">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[11px]">
            <div className="w-[60px] h-[60px] rounded-full bg-[#D9D9D9]"> </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[272px] gap-2.5">
                <div className="flex flex-col justify-start items-start relative flex-grow-0 flex-shrink-0 relative">
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[6px] h-[47px]">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5 h-[21px]">
                            <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-gray-scale-1">
                                {username}
                            </p>
                            {isNewMessage && <div className="w-[7px] h-[7px] rounded-full bg-[#FF743D]"> </div>}
                        </div>
                        <p className="flex-grow-0 flex-shrink-0 w-[272px] text-sm font-light text-left text-gray-scale-3">
                            {message}
                        </p>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 absolute right-[0px] text-sm font-light text-right text-gray-scale-5">
                        {time}
                    </p>
                </div>
            </div>
        </div>
            </button>
    {isChatRoomOpen && <ChatRoom username={username} />}
        </div>
    );
  }