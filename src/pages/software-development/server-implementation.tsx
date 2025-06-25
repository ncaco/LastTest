import React from 'react';

const ServerImplementation = () => {
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
    background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
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

  const methodItemStyle: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    borderLeft: '4px solid #1e40af'
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
      <h2 style={titleStyle}>🖥️ 서버프로그램 구현</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 서버 개발 단계</h3>
        <div style={processStyle}>
          요구사항 분석 → 서버 설계 → 개발 환경 구축 → 코딩 → 테스트 → 배포
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "요서개코테배" (요구사항-서버설계-개발환경-코딩-테스트-배포)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 서버 아키텍처 패턴 - 시험 핵심</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>MVC (Model-View-Controller)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Model</span>: 데이터와 비즈니스 로직</li>
              <li><span style={highlightStyle}>View</span>: 사용자 인터페이스</li>
              <li><span style={highlightStyle}>Controller</span>: 요청 처리 및 흐름 제어</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>3계층 아키텍처</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Presentation</span>: 사용자 인터페이스</li>
              <li><span style={highlightStyle}>Business Logic</span>: 업무 처리 로직</li>
              <li><span style={highlightStyle}>Data Access</span>: 데이터 액세스</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 웹 서버 vs WAS - 자주 출제</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>웹 서버 (Web Server)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>정적 콘텐츠</span> 처리 (HTML, CSS, JS, 이미지)</li>
              <li>HTTP 프로토콜 기반</li>
              <li>대표제품: Apache, Nginx, IIS</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>WAS (Web Application Server)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>동적 콘텐츠</span> 처리 (JSP, Servlet, PHP)</li>
              <li>비즈니스 로직 실행</li>
              <li>대표제품: Tomcat, WebLogic, JBoss</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>차이점:</strong> 웹서버(정적) vs WAS(동적+비즈니스로직)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 HTTP 메소드 - 시험 필수</h3>
        <div style={methodBoxStyle}>
          {[
            { method: 'GET', desc: '데이터 조회', feature: '멱등성 O, 안전함' },
            { method: 'POST', desc: '데이터 생성', feature: '멱등성 X, Body 사용' },
            { method: 'PUT', desc: '데이터 전체 수정', feature: '멱등성 O, 덮어쓰기' },
            { method: 'PATCH', desc: '데이터 부분 수정', feature: '멱등성 X, 일부 수정' },
            { method: 'DELETE', desc: '데이터 삭제', feature: '멱등성 O, 삭제' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.method}</strong><br/>
              <small>{item.desc}</small><br/>
              <span style={highlightStyle}>{item.feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 HTTP 상태 코드</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>2xx - 성공</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>200 OK</span>: 성공</li>
              <li><span style={highlightStyle}>201 Created</span>: 생성 성공</li>
              <li><span style={highlightStyle}>204 No Content</span>: 성공, 응답 본문 없음</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>4xx - 클라이언트 오류</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>400 Bad Request</span>: 잘못된 요청</li>
              <li><span style={highlightStyle}>401 Unauthorized</span>: 인증 필요</li>
              <li><span style={highlightStyle}>403 Forbidden</span>: 권한 없음</li>
              <li><span style={highlightStyle}>404 Not Found</span>: 리소스 없음</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>5xx - 서버 오류</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>500 Internal Server Error</span>: 서버 내부 오류</li>
              <li><span style={highlightStyle}>502 Bad Gateway</span>: 게이트웨이 오류</li>
              <li><span style={highlightStyle}>503 Service Unavailable</span>: 서비스 이용 불가</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 세션 vs 쿠키</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>세션 (Session)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>서버 측</span> 저장</li>
              <li>보안성 높음</li>
              <li>서버 메모리 사용</li>
              <li>브라우저 종료 시 삭제</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>쿠키 (Cookie)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>클라이언트 측</span> 저장</li>
              <li>보안성 낮음</li>
              <li>용량 제한 (4KB)</li>
              <li>만료일 설정 가능</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 REST API 설계 원칙</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>6가지 원칙</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Client-Server</span>: 클라이언트-서버 분리</li>
              <li><span style={highlightStyle}>Stateless</span>: 무상태성</li>
              <li><span style={highlightStyle}>Cacheable</span>: 캐시 가능</li>
              <li><span style={highlightStyle}>Uniform Interface</span>: 일관된 인터페이스</li>
              <li><span style={highlightStyle}>Layered System</span>: 계층화</li>
              <li><span style={highlightStyle}>Code on Demand</span>: 코드 전송 (선택사항)</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>URL 설계 규칙</strong>
            <div style={codeStyle}>
              GET /users        # 사용자 목록 조회<br/>
              POST /users       # 사용자 생성<br/>
              GET /users/123    # 특정 사용자 조회<br/>
              PUT /users/123    # 특정 사용자 수정<br/>
              DELETE /users/123 # 특정 사용자 삭제
            </div>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>REST 원칙 암기:</strong> "클무캐유계코" (클라이언트-무상태-캐시-유니폼-계층-코드)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 서버 보안</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>인증 방식</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Basic Authentication</span>: ID/PW 인코딩</li>
              <li><span style={highlightStyle}>JWT</span>: JSON Web Token</li>
              <li><span style={highlightStyle}>OAuth</span>: 제3자 인증</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>보안 위협</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>SQL Injection</span>: SQL 삽입 공격</li>
              <li><span style={highlightStyle}>XSS</span>: Cross-Site Scripting</li>
              <li><span style={highlightStyle}>CSRF</span>: Cross-Site Request Forgery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerImplementation; 