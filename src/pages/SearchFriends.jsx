import React from "react";
import UserInfoControl from "../components/UserInfoControl";
import SearchInput from "../components/SearchInput";
import TranslateButton from "../components/Button/TranslateButton";
import SearchListItem from "../components/SearchListItem";
import IsPublicModal from "../components/IsPublicModal";

export default function SearchFriends( {isPublic} ) {
  return ( isPublic ? 
    <div className="flex relative top-[69px] gap-[23px]">
      <UserInfoControl />
      <div className="flex flex-col w-[953px] gap-[50px] pb-[103px]">
        <div className="flex relative">
          <div className="gap-2.5">
           <p className="text-gray-scale-1 font-bold text-[26px]">
            친구찾기
           </p>
           <p className="text-gray-scale-4">
            텍스트를 입력해주세요.
           </p>
          </div>
          <div className="absolute right-0 h-[31px]">
            <TranslateButton />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          <SearchInput />
          <div className="flex flex-col items-center gap-[30px]">
            <div className="flex flex-col gap-2.5">
              <SearchListItem userId="100" nickname="닉네임" country="대한민국" major="경영학과" bio="자기소개를 입력해 주세요." />
            </div>
            <div className="flex justify-center rounded-full w-[46px] h-[46px] hover:bg-gray-scale-8">
              <img src="assets/add_circle.svg" alt="add icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
    : <IsPublicModal />
  );
}