const LEGEND = Object.freeze({
  idPassword: '아이디/비밀번호 설정',
  defaultInfo: '기본정보 입력',
});

const LABEL = Object.freeze({
  id: '아이디',
  password: '비밀번호',
  confirmPassword: '비밀번호 재입력',
  name: '이름',
  birthDay: '생년월일',
  nickname: '닉네임',
  nationality: '본국',
  hostCountry: '유학국',
  homeUniversity: '학교설정(본교)',
  hostUniversity: '학교설정(교환학생)',
});

const PLACEHOLDER = Object.freeze({
  id: '영문소문자숫자, 4~16자',
  password: '8자 이상의 영문 대소문자/숫자/특수문자',
  firstName: '이름',
  lastName: '성',
  year: '년',
  month: '월',
  date: '일',
  nickname: '닉네임을 입력해 주세요',
  nationality: '본국명을 입력해 주세요',
  hostCountry: '유학국명을 입력해 주세요',
  homeUniversity: '본교명을 입력해 주세요',
  hostUniversity: '교환학교명을 입력해 주세요',
});

export { LABEL, LEGEND, PLACEHOLDER };
