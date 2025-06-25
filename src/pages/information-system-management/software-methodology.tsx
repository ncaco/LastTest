import React from 'react';

const SoftwareMethodology = () => {
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
    background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
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
    borderLeft: '4px solid #dc2626'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>📋 소프트웨어 개발방법론</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 개발방법론 분류</h3>
        <div style={processStyle}>
          구조적 방법론 → 정보공학 방법론 → 객체지향 방법론 → 애자일 방법론
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "구정객애" (구조적-정보공학-객체지향-애자일)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 구조적 방법론 - 자주 출제</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>폭포수 모델 (Waterfall)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>순차적 진행</span></li>
              <li>각 단계 완료 후 다음 단계</li>
              <li>문서 중심</li>
              <li>변경 어려움</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>프로토타입 모델</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>시제품 제작</span></li>
              <li>사용자 피드백 반영</li>
              <li>요구사항 명확화</li>
              <li>빠른 구현</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>나선형 모델 (Spiral)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>위험 분석</span> 중심</li>
              <li>점진적 개발</li>
              <li>계획→분석→설계→구현 반복</li>
              <li>대규모 프로젝트 적합</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>V 모델</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>검증 중심</span></li>
              <li>개발 단계별 테스트 계획</li>
              <li>폭포수 모델 보완</li>
              <li>품질 보증</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>구조적 방법론:</strong> "폭프나V" (폭포수-프로토타입-나선형-V모델)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 애자일 방법론 - 시험 핵심</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>스크럼 (Scrum)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>스프린트</span>: 2-4주 반복 개발</li>
              <li><span style={highlightStyle}>스크럼 마스터</span>: 팀 코치</li>
              <li><span style={highlightStyle}>제품 책임자</span>: 요구사항 관리</li>
              <li><span style={highlightStyle}>일일 스크럼</span>: 매일 회의</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>XP (eXtreme Programming)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>짝 프로그래밍</span></li>
              <li><span style={highlightStyle}>테스트 주도 개발</span> (TDD)</li>
              <li><span style={highlightStyle}>지속적 통합</span></li>
              <li><span style={highlightStyle}>리팩토링</span></li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>칸반 (Kanban)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>시각적 작업 흐름</span></li>
              <li>To Do, Doing, Done</li>
              <li>WIP 제한</li>
              <li>지속적 개선</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>린 (Lean)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>낭비 제거</span></li>
              <li>빠른 학습</li>
              <li>고객 가치 중심</li>
              <li>지연 결정</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>애자일 핵심가치:</strong> 개인과 상호작용, 작동하는 소프트웨어, 고객과의 협력, 변화에 대응
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 객체지향 방법론</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>4가지 특성</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>캡슐화</span> (Encapsulation)</li>
              <li><span style={highlightStyle}>상속</span> (Inheritance)</li>
              <li><span style={highlightStyle}>다형성</span> (Polymorphism)</li>
              <li><span style={highlightStyle}>추상화</span> (Abstraction)</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>개발 과정</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>분석</span>: 객체 식별</li>
              <li><span style={highlightStyle}>설계</span>: 클래스 설계</li>
              <li><span style={highlightStyle}>구현</span>: 코딩</li>
              <li><span style={highlightStyle}>테스트</span>: 검증</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>객체지향 특성:</strong> "캡상다추" (캡슐화-상속-다형성-추상화)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 정보공학 방법론</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>특징</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>데이터 중심</span> 접근</li>
              <li>전사적 관점</li>
              <li>CASE 도구 활용</li>
              <li>정보 시스템 계획 (ISP)</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>단계</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>계획</span>: 전략 수립</li>
              <li><span style={highlightStyle}>분석</span>: 업무 분석</li>
              <li><span style={highlightStyle}>설계</span>: 시스템 설계</li>
              <li><span style={highlightStyle}>구축</span>: 시스템 구축</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 DevOps 방법론</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>핵심 원칙</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>CI/CD</span>: 지속적 통합/배포</li>
              <li><span style={highlightStyle}>자동화</span>: 프로세스 자동화</li>
              <li><span style={highlightStyle}>모니터링</span>: 지속적 감시</li>
              <li><span style={highlightStyle}>협업</span>: 개발/운영 협력</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>주요 도구</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Jenkins</span>: CI/CD 파이프라인</li>
              <li><span style={highlightStyle}>Docker</span>: 컨테이너화</li>
              <li><span style={highlightStyle}>Kubernetes</span>: 오케스트레이션</li>
              <li><span style={highlightStyle}>Git</span>: 소스 관리</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 방법론 비교 - 자주 출제</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '폭포수', feature: '순차적', advantage: '명확한 단계', disadvantage: '변경 어려움' },
            { name: '프로토타입', feature: '반복적', advantage: '요구사항 명확', disadvantage: '일정 지연' },
            { name: '스크럼', feature: '반복적', advantage: '빠른 피드백', disadvantage: '문서 부족' },
            { name: 'XP', feature: '반복적', advantage: '품질 향상', disadvantage: '높은 숙련도 요구' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>특징: {item.feature}</small><br/>
              <span style={highlightStyle}>장점: {item.advantage}</span><br/>
              <small>단점: {item.disadvantage}</small>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 방법론 선택 기준</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>프로젝트 특성 고려</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>규모</span>: 대규모 vs 소규모</li>
              <li><span style={highlightStyle}>기간</span>: 장기 vs 단기</li>
              <li><span style={highlightStyle}>요구사항</span>: 명확 vs 불명확</li>
              <li><span style={highlightStyle}>변경 빈도</span>: 높음 vs 낮음</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>팀 특성 고려</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>경험</span>: 숙련 vs 초급</li>
              <li><span style={highlightStyle}>규모</span>: 대팀 vs 소팀</li>
              <li><span style={highlightStyle}>분산</span>: 집중 vs 분산</li>
              <li><span style={highlightStyle}>문화</span>: 협력 vs 개별</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareMethodology; 