import React from 'react';

const SqlUtilization = () => {
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
    background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
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
    borderLeft: '4px solid #ea580c'
  };

  const codeStyle: React.CSSProperties = {
    backgroundColor: '#1f2937',
    color: '#f9fafb',
    padding: '15px',
    borderRadius: '8px',
    fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", monospace',
    fontSize: '0.9rem',
    margin: '10px 0',
    overflow: 'auto'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>💾 SQL 활용</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 SQL 분류 (시험 필수)</h3>
        <div style={processStyle}>
          DDL (정의어) | DML (조작어) | DCL (제어어) | TCL (트랜잭션 제어어)
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "데데디티" (DDL-DML-DCL-TCL)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 DDL (Data Definition Language)</h3>
        <div style={methodBoxStyle}>
          {[
            { name: 'CREATE', desc: '테이블, 뷰, 인덱스 생성', example: 'CREATE TABLE 테이블명 (컬럼명 데이터타입);' },
            { name: 'ALTER', desc: '테이블 구조 변경', example: 'ALTER TABLE 테이블명 ADD 컬럼명 데이터타입;' },
            { name: 'DROP', desc: '테이블, 뷰, 인덱스 삭제', example: 'DROP TABLE 테이블명;' },
            { name: 'TRUNCATE', desc: '테이블 데이터 전체 삭제', example: 'TRUNCATE TABLE 테이블명;' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small>
              <div style={codeStyle}>{item.example}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 DML (Data Manipulation Language)</h3>
        <div style={methodBoxStyle}>
          {[
            { name: 'SELECT', desc: '데이터 조회', example: 'SELECT * FROM 테이블명 WHERE 조건;' },
            { name: 'INSERT', desc: '데이터 삽입', example: 'INSERT INTO 테이블명 VALUES (값1, 값2);' },
            { name: 'UPDATE', desc: '데이터 수정', example: 'UPDATE 테이블명 SET 컬럼=값 WHERE 조건;' },
            { name: 'DELETE', desc: '데이터 삭제', example: 'DELETE FROM 테이블명 WHERE 조건;' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small>
              <div style={codeStyle}>{item.example}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 조인 (JOIN) - 자주 출제</h3>
        <div style={methodBoxStyle}>
          {[
            { name: 'INNER JOIN', desc: '두 테이블의 교집합', example: 'SELECT * FROM A INNER JOIN B ON A.id = B.id;' },
            { name: 'LEFT JOIN', desc: '왼쪽 테이블 전체 + 오른쪽 일치', example: 'SELECT * FROM A LEFT JOIN B ON A.id = B.id;' },
            { name: 'RIGHT JOIN', desc: '오른쪽 테이블 전체 + 왼쪽 일치', example: 'SELECT * FROM A RIGHT JOIN B ON A.id = B.id;' },
            { name: 'FULL OUTER JOIN', desc: '두 테이블의 합집합', example: 'SELECT * FROM A FULL OUTER JOIN B ON A.id = B.id;' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small>
              <div style={codeStyle}>{item.example}</div>
            </div>
          ))}
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "이레라풀" (INNER-LEFT-RIGHT-FULL)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 집계 함수 (Aggregate Functions)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>기본 집계 함수</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>COUNT()</span>: 행의 개수</li>
              <li><span style={highlightStyle}>SUM()</span>: 합계</li>
              <li><span style={highlightStyle}>AVG()</span>: 평균</li>
              <li><span style={highlightStyle}>MAX()</span>: 최댓값</li>
              <li><span style={highlightStyle}>MIN()</span>: 최솟값</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>GROUP BY 활용</strong>
            <div style={codeStyle}>
              SELECT 부서, COUNT(*), AVG(급여)<br/>
              FROM 직원<br/>
              GROUP BY 부서<br/>
              HAVING COUNT(*) &gt; 5;
            </div>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 서브쿼리 (Subquery)</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '스칼라 서브쿼리', desc: '단일 값 반환', example: 'SELECT (SELECT MAX(급여) FROM 직원) AS 최고급여;' },
            { name: '인라인 뷰', desc: 'FROM 절의 서브쿼리', example: 'SELECT * FROM (SELECT * FROM 직원 WHERE 급여 > 3000);' },
            { name: '중첩 서브쿼리', desc: 'WHERE 절의 서브쿼리', example: 'SELECT * FROM 직원 WHERE 급여 > (SELECT AVG(급여) FROM 직원);' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small>
              <div style={codeStyle}>{item.example}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 DCL (Data Control Language)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>권한 관리</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>GRANT</span>: 권한 부여</li>
              <li><span style={highlightStyle}>REVOKE</span>: 권한 회수</li>
            </ul>
            <div style={codeStyle}>
              GRANT SELECT, INSERT ON 테이블명 TO 사용자명;<br/>
              REVOKE DELETE ON 테이블명 FROM 사용자명;
            </div>
          </div>
          <div style={categoryStyle}>
            <strong>권한 종류</strong>
            <ul style={listStyle}>
              <li>SELECT, INSERT, UPDATE, DELETE</li>
              <li>CREATE, ALTER, DROP</li>
              <li>ALL PRIVILEGES (모든 권한)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 TCL (Transaction Control Language)</h3>
        <div style={methodBoxStyle}>
          {[
            { name: 'COMMIT', desc: '트랜잭션 확정', example: 'COMMIT;' },
            { name: 'ROLLBACK', desc: '트랜잭션 취소', example: 'ROLLBACK;' },
            { name: 'SAVEPOINT', desc: '저장점 설정', example: 'SAVEPOINT sp1;' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small>
              <div style={codeStyle}>{item.example}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 윈도우 함수 (Window Functions)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>순위 함수</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>ROW_NUMBER()</span>: 행 번호</li>
              <li><span style={highlightStyle}>RANK()</span>: 순위 (동순위 다음 건너뜀)</li>
              <li><span style={highlightStyle}>DENSE_RANK()</span>: 밀집 순위</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>집계 윈도우 함수</strong>
            <div style={codeStyle}>
              SELECT 이름, 급여,<br/>
              &nbsp;&nbsp;SUM(급여) OVER() AS 전체합계,<br/>
              &nbsp;&nbsp;RANK() OVER(ORDER BY 급여 DESC) AS 순위<br/>
              FROM 직원;
            </div>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 성능 최적화</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>실행 계획</strong>
            <ul style={listStyle}>
              <li>EXPLAIN PLAN 사용</li>
              <li>인덱스 스캔 vs 테이블 스캔</li>
              <li>비용 기반 최적화</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>쿼리 튜닝 기법</strong>
            <ul style={listStyle}>
              <li>적절한 인덱스 생성</li>
              <li>WHERE 절 조건 최적화</li>
              <li>불필요한 SELECT * 지양</li>
              <li>EXISTS vs IN 적절한 선택</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>성능 향상 팁:</strong> 선택도가 높은 컬럼에 인덱스 생성, 조건절을 가장 제한적인 것부터 배치
        </div>
      </div>
    </div>
  );
};

export default SqlUtilization; 