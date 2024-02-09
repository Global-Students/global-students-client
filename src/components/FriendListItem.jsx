import React from "react";

export default function FriendListItem({ username, mutualFriends }) {
    return (
        <div className="w-[211px] h-[289px] rounded-[14px] border border-gray-scale-7-main px-4 py-3.5 gap-[15px] flex flex-col items-center">
                <div className="w-[150px] h-[150px] rounded-full bg-[#D9D9D9]"> </div>
                <div className="flex flex-col items-center gap-[15px]">
                  <div className="flex flex-col items-center gap-[5px]">
                    <p className="text-gray-scale-1 font-bold text-xl leading-5"> {username} </p>
                    <p className="text-gray-scale-4 leading-5"> 함께아는 친구 {mutualFriends}명 </p>
                  </div>
                  <button type="button" className="flex justify-center items-center w-[179px] h-[36px] border border-gray-scale-7-main rounded-[13px] bg-gray-scale-8 hover:bg-gray-scale-7-main">
                    <p className="text-gray-scale-2 font-medium">
                    1:1 메세지
                    </p>
                  </button>
                </div>
              </div>
              
    );
}