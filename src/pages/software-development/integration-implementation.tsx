import React from 'react';

const IntegrationImplementation = () => {
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
    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px',
    margin: '15px 0'
  };

  const methodItemStyle: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    borderLeft: '4px solid #059669'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🔗 통합 구현</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 통합 구현 단계</h3>
        <div style={processStyle}>
          모듈 연동 → 데이터 연동 → 통합 테스트 → 연동 오류 처리
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "모데통연" (모듈-데이터-통합테스트-연동오류)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 연동 방식 - 시험 핵심</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>직접 연동</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>DB Link</span>: 데이터베이스 직접 연결</li>
              <li><span style={highlightStyle}>JDBC/ODBC</span>: 데이터베이스 연결 인터페이스</li>
              <li><span style={highlightStyle}>Socket 통신</span>: TCP/UDP 프로토콜</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>간접 연동</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>EAI</span>: Enterprise Application Integration</li>
              <li><span style={highlightStyle}>ESB</span>: Enterprise Service Bus</li>
              <li><span style={highlightStyle}>API Gateway</span>: API 중앙 관리</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 EAI (Enterprise Application Integration)</h3>
        <div style={methodBoxStyle}>
          {[
            { name: 'Point-to-Point', desc: '1:1 직접 연결', feature: '간단하지만 복잡도 증가' },
            { name: 'Hub & Spoke', desc: '중앙 허브 방식', feature: '관리 용이, 단일 장애점' },
            { name: 'Message Bus', desc: '메시지 버스 방식', feature: '확장성 우수, 표준화' },
            { name: 'Hybrid', desc: '혼합 방식', feature: '장점 결합, 복잡한 구조' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small><br/>
              <span style={highlightStyle}>{item.feature}</span>
            </div>
          ))}
        </div>
        <div style={tipStyle}>
          📝 <strong>EAI 발전순서:</strong> Point-to-Point → Hub & Spoke → Message Bus → Hybrid
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 통합 테스트 - 자주 출제</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '하향식 (Top-Down)', desc: '상위 모듈부터 테스트', tool: 'Stub 사용' },
            { name: '상향식 (Bottom-Up)', desc: '하위 모듈부터 테스트', tool: 'Driver 사용' },
            { name: '빅뱅 (Big Bang)', desc: '모든 모듈 동시 테스트', tool: '통합 후 테스트' },
            { name: '샌드위치', desc: '상하향식 결합', tool: 'Stub + Driver' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small><br/>
              <span style={highlightStyle}>{item.tool}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 데이터 연동 형식</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>XML (eXtensible Markup Language)</strong>
            <ul style={listStyle}>
              <li>태그 기반 구조화 데이터</li>
              <li>SOAP 웹서비스에서 사용</li>
              <li>스키마 검증 가능</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>JSON (JavaScript Object Notation)</strong>
            <ul style={listStyle}>
              <li>경량화된 데이터 교환 형식</li>
              <li>RESTful API에서 주로 사용</li>
              <li>파싱 속도 빠름</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 메시지 큐 (Message Queue)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>특징</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>비동기 통신</span>: 송신자와 수신자 분리</li>
              <li><span style={highlightStyle}>안정성</span>: 메시지 유실 방지</li>
              <li><span style={highlightStyle}>확장성</span>: 부하 분산 가능</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>주요 제품</strong>
            <ul style={listStyle}>
              <li>Apache Kafka</li>
              <li>RabbitMQ</li>
              <li>Amazon SQS</li>
              <li>IBM MQ</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 API 연동</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>REST API</strong>
            <ul style={listStyle}>
              <li>HTTP 메소드 활용</li>
              <li>Stateless 통신</li>
              <li>JSON 형식 주로 사용</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>SOAP API</strong>
            <ul style={listStyle}>
              <li>XML 기반 프로토콜</li>
              <li>WSDL로 서비스 정의</li>
              <li>엄격한 표준 준수</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>API 보안:</strong> API 키, OAuth, JWT 토큰 등을 활용한 인증/인가
        </div>
      </div>
    </div>
  );
};

export default IntegrationImplementation; 