import IconGithub from '@/components/icon/Github';

// import IconLinkedin from '@/components/icon/LinkedIn';

export const RESUME_DATA_KO = {
  name: '김민규',
  initials: '민규',
  location: '대한민국 서울특별시 (한국 표준시)',
  locationLink: 'https://www.google.com/maps/place/seoul',
  about: '추진력의 불씨를 꺼트리지 않는 프론트엔드 개발자',
  summary:
    'AI 시대에 맞서 스스로 성장하는 개발자를 목표로 합니다.\n안전한 선택보다 어려운 길을 택하는 용기와 실행력을 지니고 있습니다.\n다양한 플랫폼에서 활용되는 JavaScript에 관심을 갖고 열심히 공부하고 있습니다.',
  avatarUrl: 'https://avatars.githubusercontent.com/suinkimme',
  contact: {
    email: 'contact@suinkim.me',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/suinkimme',
        icon: IconGithub,
      },
    ],
  },
  education: [
    {
      school: '동국대학교',
      degree: '컴퓨터공학 학사',
      start: '2020',
      end: null,
    },
  ],
  work: [
    {
      company: '미다웍스',
      link: 'https://midaworks.kr/',
      title: 'Mobile Front-end Developer',
      start: '2023. 02.',
      end: '2025. 03.',
      description: 'CRM·ERP 및 마케팅 솔루션 개발 전문 기업',
      points: [
        '프랜차이즈 슈퍼바이저·사장님 앱 - 개발 및 운영',
        '디자인 시스템 설계 및 공통 UI 컴포넌트 라이브러리 개발',
        '가맹점 점검·운영 데이터 기반 통계 시각화',
        '앱스토어·플레이스토어 심사 대응 및 배포',
        '협업 프로세스 체계화 및 팀 리딩',
      ],
    },
  ],
  skills: ['JavaScript', 'TypeScript', 'React', 'React Native'],
} as const;
