import React from 'react';

const LogicalDbDesign = () => {
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
      <h2 style={titleStyle}>🗃️ 논리 데이터베이스 설계</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 논리적 설계 단계 (순서 암기 필수)</h3>
        <div style={processStyle}>
          개체 추출 → 속성 정의 → 관계 설정 → 정규화 → ERD 작성
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "개속관정E" (개체-속성-관계-정규화-ERD)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 정규화 (Normalization) - 시험 핵심</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '1NF (제1정규형)', desc: '원자값(Atomic Value)만 허용. 중복 그룹 제거' },
            { name: '2NF (제2정규형)', desc: '1NF + 부분 함수적 종속성 제거' },
            { name: '3NF (제3정규형)', desc: '2NF + 이행적 종속성 제거' },
            { name: 'BCNF (보이스-코드 정규형)', desc: '3NF + 모든 결정자가 후보키' },
            { name: '4NF (제4정규형)', desc: 'BCNF + 다치 종속성 제거' },
            { name: '5NF (제5정규형)', desc: '4NF + 조인 종속성 제거' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small>
            </div>
          ))}
        </div>
        <div style={tipStyle}>
          📝 <strong>정규화 목적:</strong> 데이터 중복 제거, 삽입/갱신/삭제 이상 방지, 저장 공간 절약
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 ERD (Entity-Relationship Diagram)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>ERD 구성요소</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>개체(Entity)</span>: 독립적으로 존재하는 객체</li>
              <li><span style={highlightStyle}>속성(Attribute)</span>: 개체의 특성</li>
              <li><span style={highlightStyle}>관계(Relationship)</span>: 개체 간 연관성</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>관계 유형</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>1:1</span> - 일대일 관계</li>
              <li><span style={highlightStyle}>1:N</span> - 일대다 관계</li>
              <li><span style={highlightStyle}>N:M</span> - 다대다 관계</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 ERD 표기법 (자주 출제)</h3>
        <div style={methodBoxStyle}>
          {[
            'IE (Information Engineering)',
            'Barker 표기법',
            'IDEF1X 표기법', 
            'UML 표기법'
          ].map((notation, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{notation}</strong>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 함수적 종속성</h3>
        <div style={categoryStyle}>
          <strong>핵심 개념</strong>
          <ul style={listStyle}>
            <li><span style={highlightStyle}>완전 함수적 종속</span>: 기본키 전체에 종속</li>
            <li><span style={highlightStyle}>부분 함수적 종속</span>: 기본키 일부에만 종속</li>
            <li><span style={highlightStyle}>이행적 종속</span>: A→B, B→C일 때 A→C</li>
          </ul>
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> 정규화는 종속성을 단계별로 제거하는 과정
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 반정규화 (Denormalization)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>반정규화 기법</strong>
            <ul style={listStyle}>
              <li>테이블 병합</li>
              <li>테이블 분할 (수직분할, 수평분할)</li>
              <li>중복 컬럼 추가</li>
              <li>파생 컬럼 추가</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>반정규화 목적</strong>
            <ul style={listStyle}>
              <li>조회 성능 향상</li>
              <li>조인 연산 최소화</li>
              <li>계산 작업 단순화</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>주의사항:</strong> 반정규화는 성능 향상을 위해 의도적으로 정규화 원칙을 위반하는 것
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 슈퍼키와 후보키</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '슈퍼키(Super Key)', desc: '튜플을 유일하게 식별할 수 있는 속성들의 집합' },
            { name: '후보키(Candidate Key)', desc: '슈퍼키 중에서 최소한의 속성으로 구성된 키' },
            { name: '기본키(Primary Key)', desc: '후보키 중에서 선택된 대표 키' },
            { name: '대체키(Alternate Key)', desc: '후보키 중에서 기본키가 아닌 나머지 키' },
            { name: '외래키(Foreign Key)', desc: '다른 테이블의 기본키를 참조하는 키' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogicalDbDesign; 