import React from 'react';

const PhysicalDbDesign = () => {
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px',
    margin: '15px 0'
  };

  const methodItemStyle: React.CSSProperties = {
    backgroundColor: '#f8fafc',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    borderLeft: '4px solid #7c3aed'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🔧 물리 데이터베이스 설계</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 물리적 설계 단계</h3>
        <div style={processStyle}>
          저장 레코드 설계 → 파일 구조 설계 → 접근 경로 설계 → 저장 공간 할당
        </div>
        <div style={tipStyle}>
          📝 <strong>목적:</strong> 성능 최적화, 저장 공간 효율성, 접근 시간 단축
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 파일 조직 (File Organization) - 시험 핵심</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '순차 파일 (Sequential)', desc: '레코드를 키 순서대로 연속 저장. 순차 접근 효율적' },
            { name: '직접 파일 (Direct)', desc: '해시 함수로 레코드 위치 결정. 임의 접근 빠름' },
            { name: '색인 순차 파일 (ISAM)', desc: '순차 + 색인. 순차/임의 접근 모두 지원' },
            { name: 'B-트리 파일', desc: '균형 트리 구조. 삽입/삭제 효율적' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small>
            </div>
          ))}
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "순직색B" (순차-직접-색인순차-B트리)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 인덱스 (Index) 종류</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>B-트리 인덱스</strong>
            <ul style={listStyle}>
              <li>균형 트리 구조</li>
              <li>범위 검색에 효율적</li>
              <li>가장 일반적인 인덱스</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>비트맵 인덱스</strong>
            <ul style={listStyle}>
              <li>카디널리티가 낮은 컬럼</li>
              <li>데이터 웨어하우스에 적합</li>
              <li>AND, OR 연산 효율적</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>해시 인덱스</strong>
            <ul style={listStyle}>
              <li>등치 조건 검색 최적화</li>
              <li>O(1) 접근 시간</li>
              <li>범위 검색 불가</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 ACID 특성 (트랜잭션)</h3>
        <div style={methodBoxStyle}>
          {[
            { name: 'Atomicity (원자성)', desc: '트랜잭션의 모든 연산이 완전히 수행되거나 전혀 수행되지 않음' },
            { name: 'Consistency (일관성)', desc: '트랜잭션 실행 전후 데이터베이스가 일관된 상태 유지' },
            { name: 'Isolation (독립성)', desc: '동시 실행되는 트랜잭션들이 서로 영향을 주지 않음' },
            { name: 'Durability (지속성)', desc: '성공적으로 완료된 트랜잭션의 결과는 영구적으로 반영' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small>
            </div>
          ))}
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "원일독지" (원자성-일관성-독립성-지속성)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 병행 제어 (Concurrency Control)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>잠금 (Locking)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>공유 잠금 (S-Lock)</span>: 읽기 전용</li>
              <li><span style={highlightStyle}>배타 잠금 (X-Lock)</span>: 읽기/쓰기</li>
              <li><span style={highlightStyle}>2단계 잠금 규약 (2PL)</span>: 확장단계 → 축소단계</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>타임스탬프</strong>
            <ul style={listStyle}>
              <li>트랜잭션 시작 시각으로 순서 결정</li>
              <li>교착상태 방지</li>
              <li>읽기/쓰기 타임스탬프 관리</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 회복 기법 (Recovery)</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '로그 기반 회복', desc: 'UNDO/REDO 로그를 이용한 회복' },
            { name: '체크포인트', desc: '특정 시점의 데이터베이스 상태 저장' },
            { name: '그림자 페이징', desc: '현재 페이지와 그림자 페이지 유지' },
            { name: '미디어 회복', desc: '저장 매체 손상 시 백업을 이용한 회복' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 파티셔닝 (Partitioning)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>수평 파티셔닝</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>범위 분할</span>: 특정 범위 기준</li>
              <li><span style={highlightStyle}>해시 분할</span>: 해시 함수 이용</li>
              <li><span style={highlightStyle}>리스트 분할</span>: 특정 값 목록 기준</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>수직 파티셔닝</strong>
            <ul style={listStyle}>
              <li>컬럼 단위로 분할</li>
              <li>정규화와 유사</li>
              <li>자주 사용되는 컬럼 분리</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>장점:</strong> 성능 향상, 관리 용이성, 가용성 증대
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 클러스터링 (Clustering)</h3>
        <div style={categoryStyle}>
          <strong>클러스터링 개념</strong>
          <ul style={listStyle}>
            <li>관련된 데이터를 물리적으로 인접하게 저장</li>
            <li>조인 성능 향상</li>
            <li>디스크 I/O 감소</li>
          </ul>
        </div>
        <div style={tipStyle}>
          📝 <strong>주의사항:</strong> 삽입/수정 시 성능 저하 가능, 적절한 클러스터 키 선택 중요
        </div>
      </div>
    </div>
  );
};

export default PhysicalDbDesign; 