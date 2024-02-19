import React from "react";
import UserInfoControl from "../components/UserInfoControl";
import SearchInput from "../components/Input/SearchInput";
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
          <SearchInput width='w-[500px]' height='h-[50px]' placeholder="친구를 검색해 보세요" px='px-[24px]'/>
          <div className="flex flex-col items-center gap-[30px]">
            <div className="flex flex-col gap-2.5">
              <SearchListItem userId="0" nickname="송강" country="대한민국" major="경영학과" bio="문학과 언어에 관심이 많아요! 책을 읽는 것을 좋아하며, 다양한 언어와 문화를 배우고 있어요." imageAddress="songkang" />
              <SearchListItem userId="1" nickname="제니" country="일본" major="영어영문학부" bio="새로운 기술과 혁신에 대해 관심이 많으며, 팀 프로젝트를 통해 문제 해결에 도전하는 것을 좋아해요." imageAddress="jenny" />
              <SearchListItem userId="2" nickname="민지" country="미국" major="수학과" bio="다양한 악기를 다루며 음악을 연주하는 것을 즐기고, 음악을 통해 사람들과 소통하는 것을 좋아해요." imageAddress="minji" />
              <SearchListItem userId="3" nickname="채종협" country="이탈리아" major="법학과" bio="함께 다양한 문화를 탐험하며 새로운 경험을 나누고 싶어요." imageAddress="chaejonghyoup" />
              <SearchListItem userId="4" nickname="코난" country="호주" major="한국음악과" bio="한국음악의 아름다움을 함께 나누고 싶어요." imageAddress="conan" />
              <SearchListItem userId="10" nickname="하울" country="르완다" major="회계학과" bio="다양한 장르의 책을 읽으며 새로운 지식을 습득하는 것을 즐기고, 문학의 아름다움에 빠져있습니다." imageAddress="ellipse-27-6" />
              <SearchListItem userId="10" nickname="앤" country="독일" major="생명과학과" bio="과학적인 궁금증을 해결하는 것을 즐기며, 함께 과학의 세계를 탐험하고 싶어요." imageAddress="ellipse-27-7" />
              <SearchListItem userId="10" nickname="Ariana" country="태국" major="수학교육과" bio="함께 여행 계획을 세우고 여행 이야기를 공유하고 싶어요." imageAddress="ellipse-27-8" />
              <SearchListItem userId="10" nickname="소나기" country="멕시코" major="교육학과" bio="사람들의 삶을 더 나은 방향으로 바꾸고 싶어해요. " imageAddress="ellipse-27-9" />
              <SearchListItem userId="10" nickname="밤양갱" country="브라질" major="건축공학부" bio="브라질 출신의 사진을 사랑하는 학생입니다." imageAddress="ellipse-27-10" />
            </div>
            <div className="flex justify-center rounded-full w-[46px] h-[46px] hover:bg-gray-scale-8">
              <img src="/assets/add_circle.svg" alt="add icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
    : <IsPublicModal />
  );
}