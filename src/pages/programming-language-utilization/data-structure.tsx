import React from 'react';

const DataStructure = () => {
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
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
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
    borderLeft: '4px solid #8b5cf6'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>📊 자료구조 활용</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 자료구조 분류</h3>
        <div style={processStyle}>
          선형 자료구조 (배열, 리스트, 스택, 큐) | 비선형 자료구조 (트리, 그래프)
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "배리스큐" (배열-리스트-스택-큐) + "트그" (트리-그래프)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 선형 자료구조 - 시험 핵심</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '배열 (Array)', desc: '같은 타입 원소들의 연속된 메모리 공간', feature: '인덱스로 O(1) 접근' },
            { name: '연결 리스트 (Linked List)', desc: '노드가 포인터로 연결된 구조', feature: '동적 크기 조절' },
            { name: '스택 (Stack)', desc: 'LIFO (Last In, First Out) 구조', feature: 'push, pop 연산' },
            { name: '큐 (Queue)', desc: 'FIFO (First In, First Out) 구조', feature: 'enqueue, dequeue 연산' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small><br/>
              <span style={highlightStyle}>{item.feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 스택과 큐 활용 (자주 출제)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>스택 활용</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>함수 호출</span>: 함수 호출 스택</li>
              <li><span style={highlightStyle}>괄호 검사</span>: (), [], {} 매칭</li>
              <li><span style={highlightStyle}>후위 표기법</span>: 중위→후위 변환</li>
              <li><span style={highlightStyle}>DFS</span>: 깊이 우선 탐색</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>큐 활용</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>BFS</span>: 너비 우선 탐색</li>
              <li><span style={highlightStyle}>프로세스 스케줄링</span>: 작업 대기열</li>
              <li><span style={highlightStyle}>버퍼</span>: 입출력 버퍼링</li>
              <li><span style={highlightStyle}>프린터 대기열</span>: 인쇄 작업 관리</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 트리 (Tree) 구조</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>트리 기본 용어</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>루트 (Root)</span>: 최상위 노드</li>
              <li><span style={highlightStyle}>리프 (Leaf)</span>: 자식이 없는 노드</li>
              <li><span style={highlightStyle}>높이 (Height)</span>: 루트에서 리프까지 거리</li>
              <li><span style={highlightStyle}>차수 (Degree)</span>: 자식 노드의 개수</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>이진 트리 종류</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>완전 이진 트리</span>: 마지막 레벨 제외하고 모든 노드 존재</li>
              <li><span style={highlightStyle}>포화 이진 트리</span>: 모든 레벨에 노드가 가득 참</li>
              <li><span style={highlightStyle}>이진 탐색 트리</span>: 왼쪽 &lt; 루트 &lt; 오른쪽</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 트리 순회 (Tree Traversal)</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '전위 순회 (Preorder)', desc: '루트 → 왼쪽 → 오른쪽', example: 'Root-Left-Right' },
            { name: '중위 순회 (Inorder)', desc: '왼쪽 → 루트 → 오른쪽', example: 'Left-Root-Right' },
            { name: '후위 순회 (Postorder)', desc: '왼쪽 → 오른쪽 → 루트', example: 'Left-Right-Root' },
            { name: '레벨 순회 (Level order)', desc: '레벨별로 왼쪽부터 순회', example: 'BFS 방식' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small><br/>
              <span style={highlightStyle}>{item.example}</span>
            </div>
          ))}
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "전중후레" (전위-중위-후위-레벨)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 힙 (Heap)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>힙 특성</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>완전 이진 트리</span> 구조</li>
              <li><span style={highlightStyle}>최대 힙</span>: 부모 ≥ 자식</li>
              <li><span style={highlightStyle}>최소 힙</span>: 부모 ≤ 자식</li>
              <li><span style={highlightStyle}>우선순위 큐</span> 구현에 사용</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>힙 연산</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>삽입</span>: O(log n)</li>
              <li><span style={highlightStyle}>삭제</span>: O(log n)</li>
              <li><span style={highlightStyle}>최댓값/최솟값 검색</span>: O(1)</li>
              <li><span style={highlightStyle}>힙 정렬</span>: O(n log n)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 그래프 (Graph)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>그래프 유형</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>무방향 그래프</span>: 양방향 간선</li>
              <li><span style={highlightStyle}>방향 그래프</span>: 단방향 간선</li>
              <li><span style={highlightStyle}>가중치 그래프</span>: 간선에 가중치</li>
              <li><span style={highlightStyle}>완전 그래프</span>: 모든 정점이 연결</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>그래프 표현</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>인접 행렬</span>: 2차원 배열</li>
              <li><span style={highlightStyle}>인접 리스트</span>: 연결 리스트</li>
              <li>정점 수: n, 간선 수: e</li>
              <li>공간복잡도: 행렬 O(n²), 리스트 O(n+e)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 해시 테이블 (Hash Table)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>해시 개념</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>해시 함수</span>: 키를 배열 인덱스로 변환</li>
              <li><span style={highlightStyle}>평균 시간복잡도</span>: O(1)</li>
              <li><span style={highlightStyle}>최악 시간복잡도</span>: O(n)</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>충돌 해결 방법</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>체이닝</span>: 연결 리스트로 연결</li>
              <li><span style={highlightStyle}>개방 주소법</span>: 다른 빈 슬롯 찾기</li>
              <li>선형 탐사, 이차 탐사, 이중 해싱</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>충돌 최소화:</strong> 좋은 해시 함수, 적절한 테이블 크기, 로드 팩터 관리
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 시간복잡도 비교</h3>
        <div style={methodBoxStyle}>
          {[
            { structure: '배열', access: 'O(1)', search: 'O(n)', insert: 'O(n)', delete: 'O(n)' },
            { structure: '연결 리스트', access: 'O(n)', search: 'O(n)', insert: 'O(1)', delete: 'O(1)' },
            { structure: '스택/큐', access: 'O(n)', search: 'O(n)', insert: 'O(1)', delete: 'O(1)' },
            { structure: '이진 탐색 트리', access: 'O(log n)', search: 'O(log n)', insert: 'O(log n)', delete: 'O(log n)' },
            { structure: '해시 테이블', access: 'O(1)', search: 'O(1)', insert: 'O(1)', delete: 'O(1)' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.structure}</strong><br/>
              <small>접근: {item.access}</small><br/>
              <small>검색: {item.search}</small><br/>
              <small>삽입: {item.insert}</small><br/>
              <small>삭제: {item.delete}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataStructure; 