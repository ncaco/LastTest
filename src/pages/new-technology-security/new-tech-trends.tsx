import React from 'react';

const NewTechTrends = () => {
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
    background: 'linear-gradient(135deg, #7c2d12 0%, #991b1b 100%)',
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
      <h2 style={titleStyle}>🚀 신기술 동향</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 4차 산업혁명 핵심기술</h3>
        <div style={processStyle}>
          IoT → 빅데이터 → 인공지능 → 블록체인 → 클라우드
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "아빅인블클" (IoT-빅데이터-인공지능-블록체인-클라우드)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 인공지능 (AI) - 시험 핵심</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>머신러닝 유형</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>지도학습</span> (Supervised): 정답 라벨 제공</li>
              <li><span style={highlightStyle}>비지도학습</span> (Unsupervised): 패턴 발견</li>
              <li><span style={highlightStyle}>강화학습</span> (Reinforcement): 보상 기반</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>딥러닝 모델</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>CNN</span> (Convolutional Neural Network)</li>
              <li><span style={highlightStyle}>RNN</span> (Recurrent Neural Network)</li>
              <li><span style={highlightStyle}>GAN</span> (Generative Adversarial Network)</li>
              <li><span style={highlightStyle}>Transformer</span></li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>AI 발전 단계:</strong> 규칙 기반 → 머신러닝 → 딥러닝 → 생성형 AI
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 빅데이터 - 자주 출제</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>3V 특성</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Volume</span> (크기): 대용량 데이터</li>
              <li><span style={highlightStyle}>Velocity</span> (속도): 실시간 처리</li>
              <li><span style={highlightStyle}>Variety</span> (다양성): 다형태 데이터</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>확장된 V</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>Veracity</span> (정확성): 데이터 품질</li>
              <li><span style={highlightStyle}>Value</span> (가치): 비즈니스 가치</li>
              <li><span style={highlightStyle}>Visualization</span> (시각화): 가독성</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>빅데이터 처리:</strong> 수집 → 저장 → 처리 → 분석 → 시각화
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 클라우드 컴퓨팅</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>서비스 모델</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>IaaS</span> (Infrastructure as a Service)</li>
              <li><span style={highlightStyle}>PaaS</span> (Platform as a Service)</li>
              <li><span style={highlightStyle}>SaaS</span> (Software as a Service)</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>배포 모델</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>퍼블릭 클라우드</span>: 공개형</li>
              <li><span style={highlightStyle}>프라이빗 클라우드</span>: 전용형</li>
              <li><span style={highlightStyle}>하이브리드 클라우드</span>: 혼합형</li>
              <li><span style={highlightStyle}>멀티 클라우드</span>: 다중형</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>클라우드 특성:</strong> 온디맨드 셀프서비스, 광범위한 네트워크 접근, 자원 풀링, 신속한 탄력성, 측정 가능한 서비스
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 IoT (Internet of Things)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>IoT 구성요소</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>센서</span>: 데이터 수집</li>
              <li><span style={highlightStyle}>통신</span>: 데이터 전송</li>
              <li><span style={highlightStyle}>데이터 처리</span>: 분석 및 판단</li>
              <li><span style={highlightStyle}>사용자 인터페이스</span>: 정보 제공</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>IoT 통신 기술</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>WiFi</span>: 근거리 무선통신</li>
              <li><span style={highlightStyle}>Bluetooth</span>: 저전력 근거리</li>
              <li><span style={highlightStyle}>Zigbee</span>: 메쉬 네트워크</li>
              <li><span style={highlightStyle}>LoRa</span>: 장거리 저전력</li>
              <li><span style={highlightStyle}>5G</span>: 고속 대용량</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 블록체인</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>핵심 특징</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>분산원장</span>: 탈중앙화</li>
              <li><span style={highlightStyle}>불변성</span>: 데이터 변경 불가</li>
              <li><span style={highlightStyle}>투명성</span>: 모든 거래 공개</li>
              <li><span style={highlightStyle}>합의 메커니즘</span>: 검증 프로세스</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>합의 알고리즘</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>PoW</span> (Proof of Work): 작업증명</li>
              <li><span style={highlightStyle}>PoS</span> (Proof of Stake): 지분증명</li>
              <li><span style={highlightStyle}>DPoS</span> (Delegated PoS): 위임지분증명</li>
              <li><span style={highlightStyle}>PBFT</span> (Practical Byzantine Fault Tolerance)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 메타버스 (Metaverse)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>구성 기술</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>VR</span> (Virtual Reality): 가상현실</li>
              <li><span style={highlightStyle}>AR</span> (Augmented Reality): 증강현실</li>
              <li><span style={highlightStyle}>MR</span> (Mixed Reality): 혼합현실</li>
              <li><span style={highlightStyle}>XR</span> (Extended Reality): 확장현실</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>핵심 요소</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>아바타</span>: 가상 자아</li>
              <li><span style={highlightStyle}>디지털 트윈</span>: 현실 복제</li>
              <li><span style={highlightStyle}>NFT</span>: 디지털 자산</li>
              <li><span style={highlightStyle}>가상경제</span>: 디지털 경제</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 엣지 컴퓨팅</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>특징</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>지연시간 단축</span>: 실시간 처리</li>
              <li><span style={highlightStyle}>대역폭 절약</span>: 로컬 처리</li>
              <li><span style={highlightStyle}>보안 강화</span>: 데이터 로컬 유지</li>
              <li><span style={highlightStyle}>가용성 향상</span>: 오프라인 동작</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>vs 클라우드 컴퓨팅</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>위치</span>: 데이터 생성 지점 근처</li>
              <li><span style={highlightStyle}>처리</span>: 실시간 로컬 처리</li>
              <li><span style={highlightStyle}>용도</span>: IoT, 자율주행 등</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 양자 컴퓨팅</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>핵심 개념</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>큐비트</span> (Qubit): 양자 비트</li>
              <li><span style={highlightStyle}>중첩</span> (Superposition): 동시 상태</li>
              <li><span style={highlightStyle}>얽힘</span> (Entanglement): 양자 상관</li>
              <li><span style={highlightStyle}>간섭</span> (Interference): 확률 조작</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>응용 분야</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>암호 해독</span>: 기존 암호 무력화</li>
              <li><span style={highlightStyle}>약물 개발</span>: 분자 시뮬레이션</li>
              <li><span style={highlightStyle}>최적화</span>: 복잡한 문제 해결</li>
              <li><span style={highlightStyle}>AI 가속</span>: 머신러닝 향상</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 디지털 트윈</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>구성요소</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>물리적 자산</span>: 실제 객체</li>
              <li><span style={highlightStyle}>디지털 모델</span>: 가상 복제본</li>
              <li><span style={highlightStyle}>데이터 연결</span>: 실시간 동기화</li>
              <li><span style={highlightStyle}>분석 플랫폼</span>: 인사이트 도출</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>활용 분야</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>제조업</span>: 생산 최적화</li>
              <li><span style={highlightStyle}>스마트시티</span>: 도시 관리</li>
              <li><span style={highlightStyle}>헬스케어</span>: 개인 건강</li>
              <li><span style={highlightStyle}>항공우주</span>: 장비 모니터링</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 신기술 융합 트렌드</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>하이퍼 커넥티비티</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>5G/6G</span>: 초고속 통신</li>
              <li><span style={highlightStyle}>위성 인터넷</span>: 전지구 연결</li>
              <li><span style={highlightStyle}>O2O</span> (Online to Offline): 온오프라인 통합</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>지능형 자동화</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>RPA</span> (Robotic Process Automation)</li>
              <li><span style={highlightStyle}>Intelligent Automation</span></li>
              <li><span style={highlightStyle}>자율주행</span>: 완전 무인 운전</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>미래 기술:</strong> 6G, 양자인터넷, AGI (Artificial General Intelligence), 뇌-컴퓨터 인터페이스
        </div>
      </div>
    </div>
  );
};

export default NewTechTrends; 