import type { MenuItem } from '../types/menu';

export const menuData: MenuItem[] = [
  {
    id: 'software-development',
    name: '소프트웨어 개발',
    children: [
      { id: 'req-confirmation', name: '요구사항 확인', content: '요구사항 확인에 대한 내용입니다.' },
      { id: 'io-implementation', name: '데이터 입출력 구현', content: '데이터 입출력 구현에 대한 내용입니다.' },
      { id: 'integration-implementation', name: '통합 구현', content: '통합 구현에 대한 내용입니다.' },
      { id: 'server-implementation', name: '서버 프로그램 구현', content: '서버 프로그램 구현에 대한 내용입니다.' },
      { id: 'interface-implementation', name: '인터페이스 구현', content: '인터페이스 구현에 대한 내용입니다.' },
    ],
  },
  {
    id: 'database-construction',
    name: '데이터베이스 구축',
    children: [
      { id: 'logical-db-design', name: '논리 데이터베이스 설계', content: '논리 데이터베이스 설계에 대한 내용입니다.' },
      { id: 'physical-db-design', name: '물리 데이터베이스 설계', content: '물리 데이터베이스 설계에 대한 내용입니다.' },
      { id: 'sql-utilization', name: 'SQL 활용', content: 'SQL 활용에 대한 내용입니다.' },
    ],
  },
  {
    id: 'programming-language-utilization',
    name: '프로그래밍 언어 활용',
    children: [
      { id: 'basic-syntax', name: '기본 문법 활용', content: '기본 문법 활용에 대한 내용입니다.' },
      { id: 'data-structure', name: '자료구조 활용', content: '자료구조 활용에 대한 내용입니다.' },
      { id: 'algorithm-implementation', name: '알고리즘 구현', content: '알고리즘 구현에 대한 내용입니다.' },
    ],
  },
  {
    id: 'information-system-management',
    name: '정보시스템 구축 관리',
    children: [
      { id: 'software-methodology', name: '소프트웨어 개발 방법론', content: '소프트웨어 개발 방법론에 대한 내용입니다.' },
      { id: 'it-project-management', name: 'IT 프로젝트 관리', content: 'IT 프로젝트 관리에 대한 내용입니다.' },
      { id: 'software-engineering', name: '소프트웨어 공학', content: '소프트웨어 공학에 대한 내용입니다.' },
    ],
  },
  {
    id: 'new-technology-security',
    name: '신기술 동향 및 보안',
    children: [
      { id: 'new-tech-trends', name: '신기술 동향', content: '신기술 동향에 대한 내용입니다.' },
      { id: 'info-security-tech', name: '정보 보안 기술', content: '정보 보안 기술에 대한 내용입니다.' },
      { id: 'system-security-construction', name: '시스템 보안 구축', content: '시스템 보안 구축에 대한 내용입니다.' },
    ],
  },
]; 