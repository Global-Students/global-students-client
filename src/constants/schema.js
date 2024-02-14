const SCHEMA = Object.freeze({
  memberList: [
    { id: '0', head: '회원 고유 번호' },
    { id: '1', head: '회원 id' },
    { id: '2', head: '이름' },
    { id: '3', head: '닉네임' },
    { id: '4', head: '생일' },
    { id: '5', head: '국적' },
    { id: '6', head: '유학국' },
    { id: '7', head: '학교' },
    { id: '8', head: '가입일자' },
    { id: '9', head: '인증여부' },
    { id: '10', head: '신고횟수' },
    { id: '11', head: '상태' },
  ],
  universityApprovalList: [
    { id: '0', head: '회원 고유 번호' },
    { id: '1', head: '회원 id' },
    { id: '2', head: '가입일자' },
    { id: '3', head: '대학교' },
    { id: '4', head: '인증파일' },
    { id: '5', head: '인증확인' },
  ],
  postReport: [
    { id: '0', head: 'No' },
    { id: '1', head: '게시글 제목' },
    { id: '2', head: '작성자 id' },
    { id: '3', head: '최초 신고일' },
    { id: '4', head: '게시글 작성일' },
    { id: '5', head: '신고 횟수' },
    { id: '6', head: '이유' },
    { id: '7', head: '처리 여부' },
    { id: '8', head: '처리 방법' },
  ],
});

export default SCHEMA;
