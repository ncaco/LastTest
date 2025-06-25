import React from 'react';

const AlgorithmImplementation = () => {
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
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
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
    borderLeft: '4px solid #ef4444'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>⚡ 알고리즘 구현</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 정렬 알고리즘 - 시험 핵심</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '버블 정렬', complexity: 'O(n²)', feature: '인접한 원소 비교 교환' },
            { name: '선택 정렬', complexity: 'O(n²)', feature: '최솟값을 찾아 앞으로 이동' },
            { name: '삽입 정렬', complexity: 'O(n²)', feature: '정렬된 부분에 삽입' },
            { name: '퀵 정렬', complexity: 'O(n log n)', feature: '분할 정복, 피벗 사용' },
            { name: '병합 정렬', complexity: 'O(n log n)', feature: '분할 후 병합' },
            { name: '힙 정렬', complexity: 'O(n log n)', feature: '힙 자료구조 이용' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.feature}</small><br/>
              <span style={{ backgroundColor: '#fee2e2', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                {item.complexity}
              </span>
            </div>
          ))}
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "버선삽퀵병힙" (버블-선택-삽입-퀵-병합-힙)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 탐색 알고리즘</h3>
        <div style={processStyle}>
          순차 탐색 O(n) | 이진 탐색 O(log n) | BFS/DFS
        </div>
        <div style={methodBoxStyle}>
          {[
            { name: 'BFS (너비 우선 탐색)', desc: '큐 사용, 레벨별 탐색', use: '최단 경로' },
            { name: 'DFS (깊이 우선 탐색)', desc: '스택 사용, 깊이별 탐색', use: '경로 탐색' },
            { name: '다익스트라', desc: '최단 경로 알고리즘', use: '가중치 그래프' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small><br/>
              <span style={{ backgroundColor: '#dbeafe', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem' }}>
                활용: {item.use}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 시간복잡도 (Big-O)</h3>
        <div style={methodBoxStyle}>
          {[
            { notation: 'O(1)', name: '상수 시간', example: '배열 인덱스 접근' },
            { notation: 'O(log n)', name: '로그 시간', example: '이진 탐색' },
            { notation: 'O(n)', name: '선형 시간', example: '순차 탐색' },
            { notation: 'O(n log n)', name: '선형 로그', example: '퀵/병합 정렬' },
            { notation: 'O(n²)', name: '제곱 시간', example: '버블/선택 정렬' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.notation}</strong><br/>
              <small>{item.name}</small><br/>
              <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                예: {item.example}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmImplementation; 