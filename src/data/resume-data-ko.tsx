import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';

export const RESUME_DATA_KO = {
  name: '김도형',
  initials: '도형',
  location: '대한민국 서울특별시 (한국 표준시)',
  locationLink: 'https://www.google.com/maps/place/seoul',
  about: '디테일에 주의를 기울이는 프론트엔드 개발자',
  summary:
    '아이디어를 빠르게 서비스하기 위한 가장 강력한 수단은 웹 개발이라고 생각합니다.\n예술 작품을 만들어낸다는 마음가짐으로 디테일과 간결함에 주의를 기울입니다.\n다양한 플랫폼에서 활용되는 Javascript에 관심을 갖고 열심히 공부하고 있습니다.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/40906871?v=4',
  contact: {
    email: 'ehgud456456@naver.com',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/d5br5',
        icon: IconGithub,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/dohkim777/',
        icon: IconLinkedin,
      },
    ],
  },
  education: [
    {
      school: '서울대학교',
      degree: '기계공학, 경영학 학사',
      start: '2015',
      end: '2022',
    },
  ],
  work: [
    {
      company: '토스뱅크',
      link: 'https://www.tossbank.com/',
      title: 'Front-end Desktop Developer',
      start: '2025. 07.',
      end: null,
      description: '토스(비바리퍼블리카)에서 설립한, 대한민국의 3번째 인터넷전문은행',
      points: ['입사 예정'],
    },
    {
      company: '아데나 소프트웨어',
      link: 'https://www.adenasoft.com/',
      title: 'Web Front-end Developer',
      start: '2023. 03.',
      end: '2025. 07.',
      description: '가상화폐 거래소 White Label을 운영하는 B2B 외환/페이먼트 핀테크 기업',
      points: [
        '가상화폐 현물, 선물 거래소 - 사용자 및 관리자 페이지 개발',
        '테마(다크/라이트) 및 디자인 시스템 적용',
        '거래소 차트 인터페이스 및 사용성 개선',
        '서드파티 결제 모듈 연동 및 수수료 계산 로직 개선',
        '검색엔진 최적화(SEO) 작업',
        '거래 및 유저 통계 데이터 시각화',
      ],
    },
    {
      company: '티맥스 핀테크',
      link: 'https://www.tmax.co.kr/tmaxfintech',
      title: 'Web Front-end Developer',
      start: '2022. 02.',
      end: '2023. 02.',
      description: '코어 뱅킹, 로보 어드바이저 등의 서비스를 제공하는 B2B/C BaaS 핀테크 기업',
      points: [
        '자산배분, 트레이딩 시뮬레이터 프론트엔드 개발',
        '협업 프로세스 체계화 (git commit, branch rule 정리)',
        '코드 마이그레이션 (Vue.js → React.js)',
        '웹 서비스 렌더링 성능 최적화',
      ],
    },
  ],
  skills: ['Javascript', 'Typescript', 'React.js', 'Next.js'],
} as const;
