import React from 'react';

const SoftwareEngineering = () => {
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🔧 소프트웨어 공학</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 소프트웨어 개발 생명주기 (SDLC)</h3>
        <div style={processStyle}>
          요구사항 분석 → 설계 → 구현 → 테스트 → 유지보수
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "요설구테유" (요구사항-설계-구현-테스트-유지보수)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 소프트웨어 품질 특성 - ISO/IEC 25010</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '기능성', desc: 'Functionality', items: ['기능 완전성', '기능 정확성', '기능 적절성'] },
            { name: '성능 효율성', desc: 'Performance Efficiency', items: ['시간 효율성', '자원 효율성', '용량'] },
            { name: '호환성', desc: 'Compatibility', items: ['상호 운용성', '공존성'] },
            { name: '사용성', desc: 'Usability', items: ['인식성', '학습성', '운용성'] },
            { name: '신뢰성', desc: 'Reliability', items: ['성숙성', '가용성', '장애 허용성'] },
            { name: '보안성', desc: 'Security', items: ['기밀성', '무결성', '부인 방지성'] },
            { name: '유지보수성', desc: 'Maintainability', items: ['모듈성', '재사용성', '분석성'] },
            { name: '이식성', desc: 'Portability', items: ['적응성', '설치성', '대체성'] }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small><br/>
              <span style={highlightStyle}>{item.items.join(', ')}</span>
            </div>
          ))}
        </div>
        <div style={tipStyle}>
          📝 <strong>8대 품질특성:</strong> "기성호사신보유이" (기능-성능-호환-사용-신뢰-보안-유지-이식)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 소프트웨어 메트릭 - 자주 출제</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>복잡도 메트릭</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>순환 복잡도</span> (Cyclomatic Complexity)</li>
              <li><span style={highlightStyle}>할스테드 복잡도</span></li>
              <li>인지적 복잡도</li>
              <li>깊이 복잡도</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>크기 메트릭</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>LOC</span> (Lines of Code)</li>
              <li><span style={highlightStyle}>FP</span> (Function Point)</li>
              <li>객체 지향 메트릭</li>
              <li>코드 커버리지</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>순환 복잡도:</strong> V(G) = E - N + 2 (E: 간선, N: 노드)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 소프트웨어 테스트</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>테스트 레벨</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>단위 테스트</span> (Unit Testing)</li>
              <li><span style={highlightStyle}>통합 테스트</span> (Integration Testing)</li>
              <li><span style={highlightStyle}>시스템 테스트</span> (System Testing)</li>
              <li><span style={highlightStyle}>인수 테스트</span> (Acceptance Testing)</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>테스트 기법</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>블랙박스</span>: 명세 기반</li>
              <li><span style={highlightStyle}>화이트박스</span>: 구조 기반</li>
              <li><span style={highlightStyle}>그레이박스</span>: 혼합 기법</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 블랙박스 테스트 기법</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '동등 분할', desc: '입력 도메인을 동등한 클래스로 분할', example: '나이: 0-17, 18-65, 66+' },
            { name: '경계값 분석', desc: '경계 근처의 값 테스트', example: '1-100 범위: 0,1,100,101 테스트' },
            { name: '결정 테이블', desc: '조건과 행동의 조합', example: '회원등급별 할인율 테이블' },
            { name: '상태 전이', desc: '상태 간 전이 테스트', example: '로그인 상태 변화' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small><br/>
              <span style={highlightStyle}>{item.example}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 화이트박스 테스트 기법</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>제어 흐름 기반</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>구문 커버리지</span> (Statement)</li>
              <li><span style={highlightStyle}>결정 커버리지</span> (Decision/Branch)</li>
              <li><span style={highlightStyle}>조건 커버리지</span> (Condition)</li>
              <li><span style={highlightStyle}>경로 커버리지</span> (Path)</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>데이터 흐름 기반</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>def-use 쌍</span></li>
              <li>변수 정의-사용 경로</li>
              <li>데이터 의존성 분석</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>커버리지 순서:</strong> 구문 &lt; 결정 &lt; 조건 &lt; 경로 (강도 순)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 소프트웨어 유지보수</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>유지보수 유형</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>수정적</span> (Corrective): 오류 수정</li>
              <li><span style={highlightStyle}>적응적</span> (Adaptive): 환경 변화 대응</li>
              <li><span style={highlightStyle}>완전화</span> (Perfective): 성능 개선</li>
              <li><span style={highlightStyle}>예방적</span> (Preventive): 미래 문제 예방</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>유지보수 활동</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>리팩토링</span>: 코드 구조 개선</li>
              <li><span style={highlightStyle}>리엔지니어링</span>: 시스템 재구성</li>
              <li><span style={highlightStyle}>역공학</span>: 기존 코드 분석</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>유지보수 유형:</strong> "수적완예" (수정적-적응적-완전화-예방적)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 소프트웨어 재사용</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>재사용 유형</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>함수/프로시저</span> 재사용</li>
              <li><span style={highlightStyle}>모듈/컴포넌트</span> 재사용</li>
              <li><span style={highlightStyle}>객체/클래스</span> 재사용</li>
              <li><span style={highlightStyle}>프레임워크</span> 재사용</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>재사용 기법</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>라이브러리</span>: 함수 집합</li>
              <li><span style={highlightStyle}>패턴</span>: 설계 솔루션</li>
              <li><span style={highlightStyle}>템플릿</span>: 코드 틀</li>
              <li><span style={highlightStyle}>제너레이터</span>: 자동 생성</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 소프트웨어 신뢰성</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>신뢰성 모델</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>MTBF</span> (Mean Time Between Failures)</li>
              <li><span style={highlightStyle}>MTTR</span> (Mean Time To Repair)</li>
              <li><span style={highlightStyle}>가용성</span> = MTBF / (MTBF + MTTR)</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>장애 허용 기법</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>체크포인트</span>: 상태 저장</li>
              <li><span style={highlightStyle}>롤백</span>: 이전 상태 복구</li>
              <li><span style={highlightStyle}>중복성</span>: 다중화</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 형상 관리 (Configuration Management)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>형상 관리 활동</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>형상 식별</span>: 관리 대상 결정</li>
              <li><span style={highlightStyle}>버전 제어</span>: 변경 이력 관리</li>
              <li><span style={highlightStyle}>변경 제어</span>: 변경 승인 관리</li>
              <li><span style={highlightStyle}>형상 감사</span>: 일관성 검증</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>형상 관리 도구</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Git</span>: 분산 버전 관리</li>
              <li><span style={highlightStyle}>SVN</span>: 중앙 집중식</li>
              <li><span style={highlightStyle}>CVS</span>: 레거시 시스템</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineering; 