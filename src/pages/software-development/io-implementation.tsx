import React from 'react';

const IoImplementation = () => {
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
    background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
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
    paddingBottom: '10px'
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
    borderLeft: '4px solid #6366f1'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>💾 데이터 입출력 구현</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 CRUD 연산</h3>
        <div style={processStyle}>
          Create (생성) | Read (읽기) | Update (수정) | Delete (삭제)
        </div>
        <div style={methodBoxStyle}>
          {[
            { name: 'Create', desc: '새로운 데이터 생성', sql: 'INSERT' },
            { name: 'Read', desc: '데이터 조회/검색', sql: 'SELECT' },
            { name: 'Update', desc: '기존 데이터 수정', sql: 'UPDATE' },
            { name: 'Delete', desc: '데이터 삭제', sql: 'DELETE' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small><br/>
              <span style={{ backgroundColor: '#e0e7ff', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem' }}>
                SQL: {item.sql}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 파일 처리 기술</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '순차 파일', desc: '레코드를 순서대로 저장', access: '순차 접근' },
            { name: '직접 파일', desc: '주소로 직접 접근', access: '임의 접근' },
            { name: '색인 순차 파일', desc: '인덱스 + 순차 구조', access: '순차/임의' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small><br/>
              <span style={{ backgroundColor: '#fef3c7', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem' }}>
                {item.access}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 데이터 유효성 검사</h3>
        <div style={tipStyle}>
          📝 <strong>3대 요소:</strong> 정확성 (Accuracy) + 완전성 (Completeness) + 일관성 (Consistency)
        </div>
      </div>
    </div>
  );
};

export default IoImplementation; 