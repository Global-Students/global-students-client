import React from "react";
import { useParams } from "react-router-dom";
import UserInfoControl from "../components/UserInfoControl";
import OrangeButton from "../components/Button/OrangeButton";
import FriendListItem from "../components/FriendListItem";
import FRIEND from "../constants/searchingFriends";

export default function SearchFriends() {
  const {userId} = useParams();
  return (
    <div className="flex mt-[69px] gap-[23px] h-[1200px]">
      <UserInfoControl />
      <div className="flex flex-col relative w-[954px] gap-2.5">
        <div>
            <div className="flex justify-center items-center h-[290px] bg-[#D9D9D9]">
              <img src={`/assets/qr/${FRIEND[userId].qrImage}.jpg`} alt="" className="w-[250px] h-[250px]"/>
            </div>
            <div className="absolute top-[195px] left-[30px] w-[190px] h-[190px] bg-gray-scale-8 rounded-full overflow-hidden">
              <img src={`/assets/profileImg/${FRIEND[userId].profileImage}.png`} alt="" />
            </div>
            <div className="absolute top-4 left-4 w-[32px] h-[32px] rounded-full">
              <img src="/assets/arrow_back_ios.svg" alt="arrow back icon" />
            </div>
            <div className="absolute top-4 right-4 w-[32px] h-[32px] rounded-full">
              <img src="/assets/share.svg" alt="share icon" />
            </div>
        </div>
        <div className="flex flex-col justify-center absolute top-[405px] left-[30px] w-[894px] gap-[60px]"> 
          <div className="gap-5">
            <div className="flex flex-col gap-[60px]">
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center relative w-[894px] h-[44px]"> 
                  <div className="flex h-[34px] gap-[17px]"> 
                    <p className="text-gray-scale-1 text-2xl font-bold"> {FRIEND[userId].nickname} </p>
                    <div className="flex gap-[7px]">
                      <div className="flex items-center px-[13px] py-[7px] rounded-[30px] bg-[#FFA77B26] border border-orange-4">
                        <p className="text-gray-scale-2 leading-5"> 대한민국 </p>
                      </div>
                      <div className="flex items-center px-[13px] py-[7px] rounded-[30px] bg-[#FFA77B26] border border-orange-4">
                        <p className="text-gray-scale-2"> 00대학교 </p>
                      </div>
                      <div className="flex items-center px-[13px] py-[7px] rounded-[30px] bg-[#FFA77B26] border border-orange-4">
                        <p className="text-gray-scale-2"> 기계공학과 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[40px] w-[130px] absolute top-0 right-0"> <OrangeButton text="1:1 메세지" width={130} /> </div>
                </div>
                <div className="flex flex-col gap-[15px]"> 
                  <p className="text-gray-scale-4 text-xl leading-5"> 사용자 소개글 텍스트 입력 </p>
                  <div className="flex gap-[7px]"> 
                    <img src="/assets/cake.svg" alt="cake icon" />
                    <p className="text-base text-gray-scale-4 leading-5"> 2000.00.00 </p>
                  </div>
                </div>
              </div>
              <div className="p-5 border border-gray-scale-8 rounded-[14px] shadow">
                <div className="flex flex-col gap-[18px]">
                  <div className="flex gap-[17px]"> 
                    <div className="relative flex w-[119px]">
                      <img src="/assets/article.svg" alt="article icon" />
                      <p className="text-gray-scale-4 text-lg font-semibold absolute left-[38px] leading-5"> Skill </p>
                      <div className="w-0.5 h-5 bg-gray-scale-4 absolute left-[119px]"> </div>
                    </div>
                    <div className="flex gap-[25px] text-gray-scale-1 text-lg leading-5">
                      <p> #키워드 </p>
                      <p> #키워드 </p>
                      <p> #키워드 </p>
                    </div>
                  </div>
                  <div className="flex gap-[17px]"> 
                    <div className="relative flex w-[119px]">
                      <img src="/assets/article.svg" alt="article icon" />
                      <p className="text-gray-scale-4 text-lg font-semibold absolute left-[38px] leading-5"> 전화번호 </p>
                      <div className="w-0.5 h-5 bg-gray-scale-4 absolute left-[119px]"> </div>
                    </div>
                    <div className="flex gap-[25px] text-gray-scale-1 text-lg leading-5">
                      <p> 010-0000-0000 </p>
                    </div>
                  </div>
                  <div className="flex gap-[17px]"> 
                    <div className="relative flex w-[119px]">
                      <img src="/assets/article.svg" alt="article icon" />
                      <p className="text-gray-scale-4 text-lg font-semibold absolute left-[38px] leading-5"> 이메일 </p>
                      <div className="w-0.5 h-5 bg-gray-scale-4 absolute left-[119px]"> </div>
                    </div>
                    <div className="flex gap-[25px] text-gray-scale-1 text-lg leading-5">
                      <p> 00000@0000.com </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex h-5 relative">
              <p className="text-xl font-semibold"> 친구목록 </p>
              <div className="absolute right-0 flex">
                <p className="text-gray-scale-4 text-xl"> 더보기 </p>
                <img src="/assets/arrow_back_gray.svg" alt="arrow back icon" />
              </div>
            </div>
            <div className="flex rounded-[14px] shadow border border-gray-scale-8 p-[14.5px] gap-2.5 overflow-auto">
              <FriendListItem username="사용자 닉네임" mutualFriends={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}