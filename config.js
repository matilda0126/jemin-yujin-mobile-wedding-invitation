/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "박제민",
    nameEn: "Groom",
    father: "박진호",
    mother: "최은순",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이유진",
    nameEn: "Bride",
    father: "이현철",
    mother: "이숙경",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-09-13",
    time: "13:00",
    venue: "소노펠리체 컨벤션",
    hall: "2호선 삼성역/9호선 봉은사역",
    address: "서울특별시 강남구 테헤란로87길 22 도심공항터미널 3층",
    tel: "02-2222-7401",
    mapLinks: {
        kakao: "https://kko.to/PTd_WCQOAL",
        naver: "https://naver.me/5VmQvsvf"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로를 웃게 하는 두 사람이\n사랑과 신뢰로 한 가정을 이루려 합니다.\n\n축복의 자리에 귀한 걸음 하시어\n저희의 새로운 시작을 응원해 주세요."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "Our Story",
    content: ""
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "박제민", bank: "신한은행", number: "110-438-675410" },
      { role: "아버지", name: "박진호", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "최은순", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "이유진", bank: "하나은행", number: "199-890216-25707" },
      { role: "아버지", name: "이현철", bank: "하나은행", number: "000-000-000000" },
      { role: "어머니", name: "이숙경", bank: "하나은행", number: "199-890193-55907" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "박제민 ♥ 이유진 모바일 청첩장",
    description: "2026년 09월 13일, 소중한 분들을 초대합니다."
  }
};
