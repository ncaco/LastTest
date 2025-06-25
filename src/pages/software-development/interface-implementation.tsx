import React from 'react';

const InterfaceImplementation = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    lineHeight: '1.6',
    backgroundColor: '#f8fafc'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '30px',
    padding: '20px',
    background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
    color: 'white',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  };

  const sectionStyle: React.CSSProperties = {
    backgroundColor: 'white',
    margin: '20px 0',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    border: '1px solid #e2e8f0'
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: '15px',
    borderBottom: '3px solid #fef2f2',
    paddingBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const processStyle: React.CSSProperties = {
    backgroundColor: '#fef3c7',
    padding: '15px',
    borderRadius: '8px',
    border: '2px solid #f59e0b',
    margin: '10px 0',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textAlign: 'center'
  };

  const tipStyle: React.CSSProperties = {
    backgroundColor: '#ecfdf5',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #10b981',
    borderLeft: '4px solid #10b981',
    margin: '10px 0',
    fontStyle: 'italic',
    color: '#047857'
  };

  const categoryStyle: React.CSSProperties = {
    backgroundColor: '#f0f9ff',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #0ea5e9',
    margin: '15px 0'
  };

  const listStyle: React.CSSProperties = {
    backgroundColor: '#fafafa',
    padding: '15px',
    borderRadius: '8px',
    margin: '10px 0'
  };

  const highlightStyle: React.CSSProperties = {
    backgroundColor: '#fef9e7',
    padding: '2px 6px',
    borderRadius: '4px',
    border: '1px solid #f59e0b',
    fontWeight: 'bold',
    color: '#92400e'
  };

  const methodBoxStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '15px',
    margin: '15px 0'
  };

  const codeStyle: React.CSSProperties = {
    backgroundColor: '#1e293b',
    color: '#e2e8f0',
    padding: '15px',
    borderRadius: '8px',
    fontFamily: 'Monaco, Consolas, monospace',
    fontSize: '0.9rem',
    margin: '10px 0',
    overflow: 'auto'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🔌 인터페이스 구현</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 인터페이스 구현 단계</h3>
        <div style={processStyle}>
          인터페이스 설계 → 명세서 작성 → 구현 → 예외처리 → 테스트 → 문서화
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "설명구예테문" (설계-명세서-구현-예외처리-테스트-문서화)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 인터페이스 유형 - 시험 핵심</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>시스템 인터페이스</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>내부 모듈 간</span> 데이터 교환</li>
              <li>API, 함수 호출</li>
              <li>동기/비동기 통신</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>외부 인터페이스</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>외부 시스템 간</span> 연동</li>
              <li>웹 서비스, DB 연동</li>
              <li>프로토콜 기반 통신</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>사용자 인터페이스</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>사용자-시스템 간</span> 상호작용</li>
              <li>GUI, CLI</li>
              <li>웹 브라우저, 모바일 앱</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 인터페이스 명세서 - 자주 출제</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>필수 구성요소</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>인터페이스 ID</span>: 고유 식별자</li>
              <li><span style={highlightStyle}>인터페이스명</span>: 기능 설명</li>
              <li><span style={highlightStyle}>오퍼레이션</span>: 수행 기능</li>
              <li><span style={highlightStyle}>사전조건</span>: 실행 전 조건</li>
              <li><span style={highlightStyle}>사후조건</span>: 실행 후 결과</li>
              <li><span style={highlightStyle}>파라미터</span>: 입력/출력 데이터</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>데이터 항목</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>데이터명</span>: 필드 이름</li>
              <li><span style={highlightStyle}>데이터 타입</span>: 자료형</li>
              <li><span style={highlightStyle}>길이</span>: 데이터 크기</li>
              <li><span style={highlightStyle}>필수여부</span>: 선택/필수</li>
              <li><span style={highlightStyle}>설명</span>: 데이터 의미</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>명세서 구성:</strong> "아이오사사파" (ID-이름-오퍼레이션-사전조건-사후조건-파라미터)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 인터페이스 통신 방식</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>동기 방식 (Synchronous)</strong>
            <ul style={listStyle}>
              <li>요청 후 응답 대기</li>
              <li>실시간 처리</li>
              <li>예: HTTP 요청/응답</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>비동기 방식 (Asynchronous)</strong>
            <ul style={listStyle}>
              <li>요청 후 다른 작업 수행</li>
              <li>콜백, Promise 활용</li>
              <li>예: 메시지 큐, 이벤트</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 웹 서비스 인터페이스</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>REST (REpresentational State Transfer)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>HTTP 메소드</span> 활용</li>
              <li>무상태성 (Stateless)</li>
              <li>JSON/XML 데이터 형식</li>
              <li>URL 기반 리소스 식별</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>SOAP (Simple Object Access Protocol)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>XML 기반</span> 메시지</li>
              <li>WSDL로 서비스 정의</li>
              <li>엄격한 표준 준수</li>
              <li>보안 기능 내장</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 API 설계 원칙</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>RESTful API 설계</strong>
            <div style={codeStyle}>
              # 리소스 중심 URL 설계<br/>
              GET /api/users          # 사용자 목록<br/>
              GET /api/users/123      # 특정 사용자<br/>
              POST /api/users         # 사용자 생성<br/>
              PUT /api/users/123      # 사용자 수정<br/>
              DELETE /api/users/123   # 사용자 삭제
            </div>
          </div>
          <div style={categoryStyle}>
            <strong>HTTP 상태 코드 활용</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>200 OK</span>: 성공</li>
              <li><span style={highlightStyle}>201 Created</span>: 생성 성공</li>
              <li><span style={highlightStyle}>400 Bad Request</span>: 요청 오류</li>
              <li><span style={highlightStyle}>401 Unauthorized</span>: 인증 실패</li>
              <li><span style={highlightStyle}>404 Not Found</span>: 리소스 없음</li>
              <li><span style={highlightStyle}>500 Server Error</span>: 서버 오류</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 인터페이스 보안</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>인증 (Authentication)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>API Key</span>: 단순 키 기반</li>
              <li><span style={highlightStyle}>JWT</span>: JSON Web Token</li>
              <li><span style={highlightStyle}>OAuth 2.0</span>: 제3자 인증</li>
              <li><span style={highlightStyle}>Basic Auth</span>: ID/PW 인코딩</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>보안 위협 및 대응</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>SQL Injection</span>: 파라미터 검증</li>
              <li><span style={highlightStyle}>XSS</span>: 입력값 필터링</li>
              <li><span style={highlightStyle}>CSRF</span>: 토큰 검증</li>
              <li><span style={highlightStyle}>DDoS</span>: Rate Limiting</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 인터페이스 테스트</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>테스트 유형</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>단위 테스트</span>: 개별 인터페이스</li>
              <li><span style={highlightStyle}>통합 테스트</span>: 인터페이스 간 연동</li>
              <li><span style={highlightStyle}>시스템 테스트</span>: 전체 시스템</li>
              <li><span style={highlightStyle}>인수 테스트</span>: 사용자 관점</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>테스트 도구</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Postman</span>: API 테스트</li>
              <li><span style={highlightStyle}>JUnit</span>: 자바 단위 테스트</li>
              <li><span style={highlightStyle}>Selenium</span>: 웹 자동화</li>
              <li><span style={highlightStyle}>SoapUI</span>: 웹 서비스 테스트</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>테스트 순서:</strong> 단위 → 통합 → 시스템 → 인수
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 인터페이스 예외처리</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>예외 상황</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>네트워크 오류</span>: 연결 실패</li>
              <li><span style={highlightStyle}>데이터 오류</span>: 형식 불일치</li>
              <li><span style={highlightStyle}>시스템 오류</span>: 서버 장애</li>
              <li><span style={highlightStyle}>권한 오류</span>: 접근 거부</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>예외처리 방법</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Try-Catch</span>: 예외 포착</li>
              <li><span style={highlightStyle}>Timeout</span>: 응답 시간 제한</li>
              <li><span style={highlightStyle}>Retry</span>: 재시도 로직</li>
              <li><span style={highlightStyle}>Fallback</span>: 대체 처리</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterfaceImplementation; 