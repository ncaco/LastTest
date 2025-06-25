import React from 'react';

const InfoSecurityTech = () => {
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
    background: 'linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '15px',
    margin: '15px 0'
  };

  const methodItemStyle: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    borderLeft: '4px solid #991b1b'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🛡️ 정보보안 기술</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 정보보안 3대 요소 (CIA)</h3>
        <div style={processStyle}>
          기밀성 (Confidentiality) + 무결성 (Integrity) + 가용성 (Availability)
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "기무가" (기밀성-무결성-가용성) / CIA Triad
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 암호화 기술 - 시험 핵심</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>대칭키 암호화</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>DES</span> (Data Encryption Standard)</li>
              <li><span style={highlightStyle}>3DES</span> (Triple DES)</li>
              <li><span style={highlightStyle}>AES</span> (Advanced Encryption Standard)</li>
              <li><span style={highlightStyle}>ARIA</span> (한국 표준)</li>
            </ul>
            <div style={tipStyle}>
              <strong>특징:</strong> 빠른 속도, 키 분배 문제
            </div>
          </div>
          <div style={categoryStyle}>
            <strong>비대칭키 암호화 (공개키)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>RSA</span> (Rivest-Shamir-Adleman)</li>
              <li><span style={highlightStyle}>DSA</span> (Digital Signature Algorithm)</li>
              <li><span style={highlightStyle}>ECC</span> (Elliptic Curve Cryptography)</li>
              <li><span style={highlightStyle}>Diffie-Hellman</span> (키 교환)</li>
            </ul>
            <div style={tipStyle}>
              <strong>특징:</strong> 키 분배 안전, 느린 속도
            </div>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 해시 함수 - 자주 출제</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>해시 알고리즘</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>MD5</span> (128비트, 취약점 존재)</li>
              <li><span style={highlightStyle}>SHA-1</span> (160비트, 보안 약화)</li>
              <li><span style={highlightStyle}>SHA-256</span> (256비트, 안전)</li>
              <li><span style={highlightStyle}>SHA-3</span> (가변 길이)</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>해시 특성</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>단방향성</span>: 역산 불가능</li>
              <li><span style={highlightStyle}>결정성</span>: 동일 입력 → 동일 출력</li>
              <li><span style={highlightStyle}>눈사태 효과</span>: 작은 변화 → 큰 변화</li>
              <li><span style={highlightStyle}>충돌 저항성</span>: 충돌 발견 어려움</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>해시 용도:</strong> 무결성 검증, 디지털 서명, 패스워드 저장
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 디지털 서명</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>디지털 서명 과정</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>1단계</span>: 문서 해시값 생성</li>
              <li><span style={highlightStyle}>2단계</span>: 개인키로 해시값 암호화</li>
              <li><span style={highlightStyle}>3단계</span>: 문서와 서명 전송</li>
              <li><span style={highlightStyle}>4단계</span>: 공개키로 서명 검증</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>디지털 서명 효과</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>인증</span> (Authentication): 송신자 확인</li>
              <li><span style={highlightStyle}>무결성</span> (Integrity): 변조 방지</li>
              <li><span style={highlightStyle}>부인방지</span> (Non-repudiation): 부인 불가</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 인증 기술</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>인증 요소 (3가지)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>지식 기반</span>: 패스워드, PIN</li>
              <li><span style={highlightStyle}>소유 기반</span>: 스마트카드, OTP</li>
              <li><span style={highlightStyle}>특성 기반</span>: 지문, 홍채, 얼굴</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>다단계 인증 (MFA)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>2FA</span>: 2개 요소 결합</li>
              <li><span style={highlightStyle}>3FA</span>: 3개 요소 모두 사용</li>
              <li><span style={highlightStyle}>OTP</span>: 일회용 패스워드</li>
              <li><span style={highlightStyle}>생체인증</span>: 바이오메트릭</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>인증 강도:</strong> 단일 요소 &lt; 이중 요소 &lt; 다중 요소
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 네트워크 보안</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>방화벽 (Firewall)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>패킷 필터링</span>: IP, 포트 기반</li>
              <li><span style={highlightStyle}>상태 검사</span>: 연결 상태 추적</li>
              <li><span style={highlightStyle}>애플리케이션 게이트웨이</span>: 응용 계층</li>
              <li><span style={highlightStyle}>차세대 방화벽</span>: 통합 보안</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>침입 탐지/방지 시스템</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>IDS</span> (Intrusion Detection System)</li>
              <li><span style={highlightStyle}>IPS</span> (Intrusion Prevention System)</li>
              <li><span style={highlightStyle}>NIDS</span>: 네트워크 기반</li>
              <li><span style={highlightStyle}>HIDS</span>: 호스트 기반</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 VPN (Virtual Private Network)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>VPN 프로토콜</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>IPSec</span>: IP 계층 보안</li>
              <li><span style={highlightStyle}>SSL/TLS</span>: 애플리케이션 계층</li>
              <li><span style={highlightStyle}>PPTP</span>: Point-to-Point Tunneling</li>
              <li><span style={highlightStyle}>L2TP</span>: Layer 2 Tunneling</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>VPN 유형</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Site-to-Site</span>: 사이트 간 연결</li>
              <li><span style={highlightStyle}>Remote Access</span>: 원격 접속</li>
              <li><span style={highlightStyle}>Client-to-Site</span>: 클라이언트 접속</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 웹 보안</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>웹 취약점 (OWASP Top 10)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>SQL Injection</span>: SQL 삽입</li>
              <li><span style={highlightStyle}>XSS</span>: Cross-Site Scripting</li>
              <li><span style={highlightStyle}>CSRF</span>: Cross-Site Request Forgery</li>
              <li><span style={highlightStyle}>파일 업로드</span>: 악성 파일 업로드</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>웹 보안 기술</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>WAF</span> (Web Application Firewall)</li>
              <li><span style={highlightStyle}>HTTPS</span>: SSL/TLS 암호화</li>
              <li><span style={highlightStyle}>보안 헤더</span>: HSTS, CSP 등</li>
              <li><span style={highlightStyle}>입력값 검증</span>: 화이트리스트 방식</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 악성코드 대응</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>악성코드 유형</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>바이러스</span>: 자기 복제 프로그램</li>
              <li><span style={highlightStyle}>웜</span>: 네트워크 전파</li>
              <li><span style={highlightStyle}>트로이목마</span>: 위장 프로그램</li>
              <li><span style={highlightStyle}>랜섬웨어</span>: 파일 암호화</li>
              <li><span style={highlightStyle}>스파이웨어</span>: 정보 수집</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>대응 기술</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>백신</span>: 시그니처 기반 탐지</li>
              <li><span style={highlightStyle}>행위 분석</span>: 휴리스틱 탐지</li>
              <li><span style={highlightStyle}>샌드박스</span>: 격리 환경 실행</li>
              <li><span style={highlightStyle}>EDR</span>: Endpoint Detection Response</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 보안 관리</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>보안 정책</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>보안 정책</span>: 최상위 문서</li>
              <li><span style={highlightStyle}>보안 표준</span>: 구체적 기준</li>
              <li><span style={highlightStyle}>보안 절차</span>: 실행 방법</li>
              <li><span style={highlightStyle}>보안 가이드</span>: 권고사항</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>접근 통제 모델</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>DAC</span>: 임의적 접근 통제</li>
              <li><span style={highlightStyle}>MAC</span>: 강제적 접근 통제</li>
              <li><span style={highlightStyle}>RBAC</span>: 역할 기반 접근 통제</li>
              <li><span style={highlightStyle}>ABAC</span>: 속성 기반 접근 통제</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>보안 원칙:</strong> 최소 권한, 직무 분리, 심층 방어, 장애 시 안전
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 보안 인증/평가</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>국제 표준</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>ISO 27001</span>: 정보보안 관리체계</li>
              <li><span style={highlightStyle}>CC</span> (Common Criteria): 보안 평가</li>
              <li><span style={highlightStyle}>NIST</span>: 사이버보안 프레임워크</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>국내 인증</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>ISMS-P</span>: 개인정보보호 관리체계</li>
              <li><span style={highlightStyle}>K-ISMS</span>: 정보보안 관리체계</li>
              <li><span style={highlightStyle}>CC 평가</span>: 보안성 평가</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSecurityTech; 