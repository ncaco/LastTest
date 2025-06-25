import React from 'react';

const ReqConfirmation = () => {
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
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    borderLeft: '4px solid #3b82f6'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>📋 요구사항 확인</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 요구사항 개발 프로세스 (순서 암기 필수)</h3>
        <div style={processStyle}>
          도출(Elicitation) → 분석(Analysis) → 명세(Specification) → 확인(Validation)
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "도분명확" (도출-분석-명세-확인)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 요구사항 분류 (시험 단골 문제)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <p><strong>1. 기능적 요구사항 (Functional Requirements)</strong></p>
            <ul style={listStyle}>
              <li>시스템이 <span style={highlightStyle}>무엇(What)</span>을 해야 하는지</li>
              <li>입력, 출력, 처리, 저장 등</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <p><strong>2. 비기능적 요구사항 (Non-Functional Requirements)</strong></p>
            <ul style={listStyle}>
              <li>시스템이 <span style={highlightStyle}>어떻게(How)</span> 동작해야 하는지</li>
              <li><strong>성능, 보안, 사용성, 신뢰성, 이식성, 유지보수성</strong></li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> 비기능적 = "성보사신이유" (성능-보안-사용성-신뢰성-이식성-유지보수성)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 요구사항 도출 기법</h3>
        <div style={methodBoxStyle}>
          {['인터뷰', '설문조사', '브레인스토밍', '워크샵', '프로토타이핑', '유스케이스'].map((method, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{method}</strong>
            </div>
          ))}
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "인설브워프유" (인터뷰-설문-브레인스토밍-워크샵-프로토타이핑-유스케이스)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 요구사항 분석 기법</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <p><strong>1. 구조적 분석 기법</strong></p>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>자료 흐름도(DFD)</span>: 프로세스, 자료 저장소, 외부 개체, 자료 흐름</li>
              <li><span style={highlightStyle}>자료 사전(DD)</span>: DFD에서 사용되는 자료의 정의</li>
              <li><span style={highlightStyle}>소단위 명세서</span>: 각 프로세스의 상세 명세</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <p><strong>2. 객체지향 분석 기법</strong></p>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>유스케이스 다이어그램</span>: 액터와 시스템 간 상호작용</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 요구사항 명세 기법</h3>
        <div style={methodBoxStyle}>
          <div style={methodItemStyle}>
            <strong>정형 명세 기법</strong><br/>
            수학적 원리 기반 (Z, VDM, Petri-Net)
          </div>
          <div style={methodItemStyle}>
            <strong>비정형 명세 기법</strong><br/>
            자연어 기반 (유스케이스, 사용자 스토리)
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 요구사항 확인 기법 (검증 포인트)</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '완전성(Completeness)', desc: '모든 요구사항이 빠짐없이 기술' },
            { name: '일관성(Consistency)', desc: '요구사항 간 모순이 없음' },
            { name: '명확성(Clarity)', desc: '애매모호하지 않고 명확함' },
            { name: '기능성(Functionality)', desc: '요구되는 기능을 정확히 수행' },
            { name: '검증 가능성(Verifiability)', desc: '테스트로 확인 가능' },
            { name: '추적 가능성(Traceability)', desc: '출처와 관련 요구사항 추적 가능' },
            { name: '수정 용이성(Modifiability)', desc: '변경이 용이함' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{index + 1}. {item.name}</strong><br/>
              <small>{item.desc}</small>
            </div>
          ))}
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "완일명기검추수" (완전성-일관성-명확성-기능성-검증가능성-추적가능성-수정용이성)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 UML 다이어그램 (자주 출제)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>정적 다이어그램</strong><br/>
            클래스, 객체, 컴포넌트, 배치, 패키지, 복합체 구조
          </div>
          <div style={categoryStyle}>
            <strong>동적 다이어그램</strong><br/>
            유스케이스, 시퀀스, 커뮤니케이션, 상태, 활동, 상호작용 개요, 타이밍
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 요구사항 관리 도구</h3>
        <div style={methodBoxStyle}>
          {['DOORS', 'RequisitePro', 'CRADLE', 'CaliberRM', 'RTM'].map((tool, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{tool}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReqConfirmation; 