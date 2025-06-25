import React from 'react';

const SystemSecurityConstruction = () => {
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
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
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
    color: '#334155',
    marginBottom: '15px',
    borderBottom: '3px solid #f1f5f9',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '15px',
    margin: '15px 0'
  };



  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🛡️ 시스템 보안 구축</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 방화벽 (Firewall) - 필수 출제</h3>
        <div style={processStyle}>
          네트워크 레벨에서 접근 제어를 통해 허가되지 않은 접근을 차단하는 보안 시스템
        </div>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>방화벽 유형</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>패킷 필터링</span>: IP, 포트 기반 차단</li>
              <li><span style={highlightStyle}>상태 검사</span>: 연결 상태 추적</li>
              <li><span style={highlightStyle}>애플리케이션 게이트웨이</span>: 응용 계층 검사</li>
              <li><span style={highlightStyle}>차세대 방화벽(NGFW)</span>: 통합 보안</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>방화벽 정책</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Default Deny</span>: 기본 차단 정책</li>
              <li><span style={highlightStyle}>Default Allow</span>: 기본 허용 정책</li>
              <li><span style={highlightStyle}>ACL</span> (Access Control List): 접근 제어 목록</li>
              <li><span style={highlightStyle}>Rule Base</span>: 규칙 기반 처리</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "패상애차" (패킷필터링-상태검사-애플리케이션게이트웨이-차세대방화벽)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 침입 탐지/방지 시스템 - 시험 빈출</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>IDS (침입 탐지 시스템)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>NIDS</span>: 네트워크 기반 탐지</li>
              <li><span style={highlightStyle}>HIDS</span>: 호스트 기반 탐지</li>
              <li><span style={highlightStyle}>시그니처 기반</span>: 알려진 공격 패턴</li>
              <li><span style={highlightStyle}>이상 탐지</span>: 비정상 행위 탐지</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>IPS (침입 방지 시스템)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>실시간 차단</span>: 즉시 공격 차단</li>
              <li><span style={highlightStyle}>인라인 배치</span>: 네트워크 경로 상 위치</li>
              <li><span style={highlightStyle}>자동 대응</span>: 공격 패턴 감지 시 차단</li>
              <li><span style={highlightStyle}>오탐 최소화</span>: 정확한 공격 탐지</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>차이점:</strong> IDS는 탐지만, IPS는 탐지+차단
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 VPN (가상 사설망) - 필수 암기</h3>
        <div style={processStyle}>
          공중 네트워크를 통해 암호화된 터널을 구성하여 안전한 원격 접속을 제공
        </div>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>VPN 유형</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Site-to-Site VPN</span>: 사이트 간 연결</li>
              <li><span style={highlightStyle}>Remote Access VPN</span>: 원격 접속</li>
              <li><span style={highlightStyle}>SSL VPN</span>: 웹 브라우저 기반</li>
              <li><span style={highlightStyle}>IPSec VPN</span>: IP 계층 암호화</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>VPN 프로토콜</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>PPTP</span>: Point-to-Point Tunneling</li>
              <li><span style={highlightStyle}>L2TP</span>: Layer 2 Tunneling Protocol</li>
              <li><span style={highlightStyle}>IPSec</span>: IP Security Protocol</li>
              <li><span style={highlightStyle}>OpenVPN</span>: 오픈 소스 VPN</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 보안 취약점 및 공격 유형</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>네트워크 공격</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>DDoS</span>: 분산 서비스 거부 공격</li>
              <li><span style={highlightStyle}>스니핑</span>: 네트워크 패킷 도청</li>
              <li><span style={highlightStyle}>스푸핑</span>: IP/MAC 주소 위조</li>
              <li><span style={highlightStyle}>세션 하이재킹</span>: 세션 탈취</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>웹 애플리케이션 공격</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>SQL Injection</span>: SQL 삽입 공격</li>
              <li><span style={highlightStyle}>XSS</span>: 크로스 사이트 스크립팅</li>
              <li><span style={highlightStyle}>CSRF</span>: 사이트 간 요청 위조</li>
              <li><span style={highlightStyle}>디렉터리 트래버설</span>: 경로 조작</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>웹 공격 OWASP Top 10</strong>: SQL Injection, XSS, CSRF가 주요 취약점
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 네트워크 보안 아키텍처</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>DMZ (비무장지대)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>내부망과 외부망 사이</span>: 중간 지대</li>
              <li><span style={highlightStyle}>웹서버, 메일서버</span>: 공개 서비스 배치</li>
              <li><span style={highlightStyle}>이중 방화벽</span>: 내부망 추가 보호</li>
              <li><span style={highlightStyle}>트래픽 제어</span>: 내외부 통신 제한</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>다계층 방어 (Defense in Depth)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>물리적 보안</span>: 시설 및 장비 보호</li>
              <li><span style={highlightStyle}>네트워크 보안</span>: 방화벽, IDS/IPS</li>
              <li><span style={highlightStyle}>시스템 보안</span>: OS, 애플리케이션</li>
              <li><span style={highlightStyle}>데이터 보안</span>: 암호화, 접근제어</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 엔드포인트 보안</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>보안 솔루션</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>안티바이러스</span>: 악성코드 탐지/차단</li>
              <li><span style={highlightStyle}>EDR</span>: 엔드포인트 탐지 및 대응</li>
              <li><span style={highlightStyle}>DLP</span>: 데이터 유출 방지</li>
              <li><span style={highlightStyle}>NAC</span>: 네트워크 접근 제어</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>모바일 보안</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>MDM</span>: 모바일 기기 관리</li>
              <li><span style={highlightStyle}>MAM</span>: 모바일 앱 관리</li>
              <li><span style={highlightStyle}>MCM</span>: 모바일 컨텐츠 관리</li>
              <li><span style={highlightStyle}>EMM</span>: 통합 모바일 관리</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "안E디나" (안티바이러스-EDR-DLP-NAC)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 보안 관리 및 정책</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>정보보안 관리체계 (ISMS)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>계획(Plan)</span>: 보안 정책 수립</li>
              <li><span style={highlightStyle}>실행(Do)</span>: 보안 대책 구현</li>
              <li><span style={highlightStyle}>점검(Check)</span>: 보안 수준 평가</li>
              <li><span style={highlightStyle}>개선(Act)</span>: 지속적 개선</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>접근 제어 모델</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>DAC</span>: 임의적 접근 제어</li>
              <li><span style={highlightStyle}>MAC</span>: 강제적 접근 제어</li>
              <li><span style={highlightStyle}>RBAC</span>: 역할 기반 접근 제어</li>
              <li><span style={highlightStyle}>ABAC</span>: 속성 기반 접근 제어</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>PDCA 사이클</strong>: Plan-Do-Check-Act로 지속적 보안 관리
        </div>
      </div>
    </div>
  );
};

export default SystemSecurityConstruction; 