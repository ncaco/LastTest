import React from 'react';

const ItProjectManagement = () => {
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
    background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
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

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>📊 IT 프로젝트 관리</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 프로젝트 관리 프로세스</h3>
        <div style={processStyle}>
          착수 → 계획 → 실행 → 감시/통제 → 종료
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "착계실감종" (착수-계획-실행-감시통제-종료)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 프로젝트 관리 지식영역 - 시험 핵심</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>통합 관리</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>프로젝트 헌장</span> 개발</li>
              <li>프로젝트 관리 계획서</li>
              <li>변경 통제</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>범위 관리</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>WBS</span> (Work Breakdown Structure)</li>
              <li>요구사항 수집</li>
              <li>범위 검증</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>일정 관리</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>CPM</span> (Critical Path Method)</li>
              <li><span style={highlightStyle}>PERT</span> (Program Evaluation Review Technique)</li>
              <li>간트 차트</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>원가 관리</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>EVM</span> (Earned Value Management)</li>
              <li>예산 책정</li>
              <li>원가 통제</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>품질 관리</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>품질 계획</span></li>
              <li>품질 보증 (QA)</li>
              <li>품질 통제 (QC)</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>위험 관리</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>위험 식별</span></li>
              <li>위험 분석</li>
              <li>위험 대응</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>10대 지식영역:</strong> 통합, 범위, 일정, 원가, 품질, 인적자원, 의사소통, 위험, 조달, 이해관계자
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 일정 관리 기법 - 자주 출제</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>CPM (Critical Path Method)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>결정적 시간</span> 추정</li>
              <li>임계 경로 파악</li>
              <li>Float/Slack 계산</li>
              <li>일정 최적화</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>PERT (Program Evaluation Review Technique)</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>확률적 시간</span> 추정</li>
              <li>3점 추정 (낙관/비관/최빈)</li>
              <li>표준편차 계산</li>
              <li>불확실성 고려</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>PERT 공식:</strong> 기대시간 = (낙관 + 4×최빈 + 비관) ÷ 6
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 EVM (Earned Value Management)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>주요 지표</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>PV</span> (Planned Value): 계획 가치</li>
              <li><span style={highlightStyle}>EV</span> (Earned Value): 획득 가치</li>
              <li><span style={highlightStyle}>AC</span> (Actual Cost): 실제 비용</li>
              <li><span style={highlightStyle}>BAC</span> (Budget at Completion): 완료 예산</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>성과 지표</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>CV</span> = EV - AC (비용 편차)</li>
              <li><span style={highlightStyle}>SV</span> = EV - PV (일정 편차)</li>
              <li><span style={highlightStyle}>CPI</span> = EV / AC (비용 성과)</li>
              <li><span style={highlightStyle}>SPI</span> = EV / PV (일정 성과)</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>EVM 해석:</strong> CV &gt; 0, CPI &gt; 1이면 예산 절약, SV &gt; 0, SPI &gt; 1이면 일정 앞서감
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 위험 관리</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>위험 식별 기법</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>브레인스토밍</span></li>
              <li>체크리스트 분석</li>
              <li>SWOT 분석</li>
              <li>가정 분석</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>위험 대응 전략</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>회피</span> (Avoid): 위험 제거</li>
              <li><span style={highlightStyle}>전가</span> (Transfer): 위험 이전</li>
              <li><span style={highlightStyle}>완화</span> (Mitigate): 영향 감소</li>
              <li><span style={highlightStyle}>수용</span> (Accept): 위험 감수</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>위험 대응 4대 전략:</strong> "회전완수" (회피-전가-완화-수용)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 품질 관리</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>품질 계획 도구</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>벤치마킹</span></li>
              <li>실험 설계</li>
              <li>품질 비용</li>
              <li>품질 메트릭</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>품질 통제 도구</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>파레토 차트</span></li>
              <li>관리도</li>
              <li>산점도</li>
              <li>히스토그램</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 조달 관리</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>계약 유형</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>고정가</span> (FFP): 고정 가격</li>
              <li><span style={highlightStyle}>원가보상</span> (CPFF): 비용 + 고정 수수료</li>
              <li><span style={highlightStyle}>단가</span> (T&M): 시간 & 자재</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>조달 프로세스</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>조달 계획</span></li>
              <li>조달 수행</li>
              <li>조달 통제</li>
              <li>조달 종료</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 의사소통 관리</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>의사소통 채널</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>공식</span> (공식 문서, 회의)</li>
              <li><span style={highlightStyle}>비공식</span> (일상 대화)</li>
              <li><span style={highlightStyle}>수직</span> (상하 관계)</li>
              <li><span style={highlightStyle}>수평</span> (동급 관계)</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>의사소통 방법</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>대화형</span>: 즉시 피드백</li>
              <li><span style={highlightStyle}>푸시형</span>: 일방향 전달</li>
              <li><span style={highlightStyle}>풀형</span>: 수신자가 접근</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>의사소통 채널 수:</strong> n(n-1)/2 (n은 참여자 수)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 프로젝트 관리 도구</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>일정 관리 도구</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>MS Project</span></li>
              <li>간트 차트</li>
              <li>네트워크 다이어그램</li>
              <li>마일스톤 차트</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>협업 도구</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Jira</span></li>
              <li>Slack</li>
              <li>Trello</li>
              <li>Confluence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItProjectManagement; 