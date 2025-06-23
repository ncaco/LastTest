import type { MenuItem } from '../types/menu';

export const menuData: MenuItem[] = [
  {
    id: 'software-development',
    name: '소프트웨어 개발',
    children: [
      { id: 'req-confirmation', name: '요구사항 확인', content: '[핵심] 요구사항 분석 및 명세: 소프트웨어 개발의 첫 단계, 사용자 요구를 명확히 이해하고 문서화.' },
      { id: 'io-implementation', name: '데이터 입출력 구현', content: '[핵심] 데이터 처리 기능: 파일/DB 입출력, 데이터 변환 및 가공.' },
      { id: 'integration-implementation', name: '통합 구현', content: '[핵심] 모듈/시스템 연동: 각 컴포넌트 결합, API 연동, 통합 테스트.' },
      { id: 'server-implementation', name: '서버 프로그램 구현', content: '[핵심] 백엔드 로직 개발: 비즈니스 로직, 데이터베이스 연동, API 서버 구축.' },
      { id: 'interface-implementation', name: '인터페이스 구현', content: '[핵심] 시스템 연동 인터페이스: 데이터 교환 형식, 통신 프로토콜 설계.' },
    ],
  },
  {
    id: 'database-construction',
    name: '데이터베이스 구축',
    children: [
      { id: 'logical-db-design', name: '논리 데이터베이스 설계', content: '[핵심] ERD, 정규화: 개체-관계 모델링, 데이터 중복 제거.' },
      { id: 'physical-db-design', name: '물리 데이터베이스 설계', content: '[핵심] 저장 구조, 인덱스: 실제 저장 방식, 성능 최적화 위한 인덱스 설계.' },
      { id: 'sql-utilization', name: 'SQL 활용', content: '[핵심] SQL 명령: DDL(정의), DML(조작), DCL(제어) 활용.' },
    ],
  },
  {
    id: 'programming-language-utilization',
    name: '프로그래밍 언어 활용',
    children: [
      { id: 'basic-syntax', name: '기본 문법 활용', content: '[핵심] 변수, 조건문, 반복문, 함수, 클래스: Python, Java, C 언어.' },
      { id: 'data-structure', name: '자료구조 활용', content: '[핵심] 배열, 스택, 큐, 트리, 그래프: 효율적인 데이터 저장 및 관리.' },
      { id: 'algorithm-implementation', name: '알고리즘 구현', content: '[핵심] 정렬, 탐색, 최단 경로: 문제 해결을 위한 단계별 절차.' },
    ],
  },
  {
    id: 'information-system-management',
    name: '정보시스템 구축 관리',
    children: [
      { id: 'software-methodology', name: '소프트웨어 개발 방법론', content: '[핵심] 폭포수, 애자일, 나선형: 소프트웨어 개발 프로세스.' },
      { id: 'it-project-management', name: 'IT 프로젝트 관리', content: '[핵심] PMBOK 지식 영역: 계획, 실행, 통제, 종료.' },
      { id: 'software-engineering', name: '소프트웨어 공학', content: '[핵심] 소프트웨어 품질, 비용, 일정 관리: 효율적이고 고품질 개발.' },
    ],
  },
  {
    id: 'new-technology-security',
    name: '신기술 동향 및 보안',
    children: [
      { id: 'new-tech-trends', name: '신기술 동향', content: '[핵심] 클라우드, 빅데이터, AI, IoT: 최신 기술 트렌드 이해.' },
      { id: 'info-security-tech', name: '정보 보안 기술', content: '[핵심] 암호화, 인증, 접근 제어: 정보 보호를 위한 기술.' },
      { id: 'system-security-construction', name: '시스템 보안 구축', content: '[핵심] 방화벽, IDS/IPS, VPN: 시스템 위협 방어 및 안전한 통신.' },
    ],
  },
]; 