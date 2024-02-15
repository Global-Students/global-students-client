import React from "react";
import OrangeButton from "./Button/OrangeButton";

export default function IsPublicModal() {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#1E1E1E33]">
            <div className="flex flex-col items-center w-[536px] h-[337px] px-[65px] py-[66px] bg-white rounded-[14px] gap-[45px] text-xl ">
                <div className="flex">
                    <p className="text-orange-main"> 프로필을 공개 </p>
                    <p className="text-gray-scale-2"> 해야 교내친구를 확인할 수 있습니다. </p>
                </div>
                <div className="flex flex-col gap-4 h-[138px] w-[365px]">
                    <div className="flex h-full"> <OrangeButton text="내 프로필 공개하기" width={365}/> </div>
                    <div className="border border-gray-scale-7-main rounded-[14px] flex justify-center items-center text-gray-scale-5 h-full hover:bg-gray-scale-8"> 닫기 </div>
                </div>
            </div>
        </div>
    );
}