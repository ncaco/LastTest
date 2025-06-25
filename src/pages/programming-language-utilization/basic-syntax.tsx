import React from 'react';

const BasicSyntax = () => {
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
    background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
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
    borderLeft: '4px solid #0891b2'
  };

  const codeStyle: React.CSSProperties = {
    backgroundColor: '#1f2937',
    color: '#f9fafb',
    padding: '12px',
    borderRadius: '6px',
    fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", monospace',
    fontSize: '0.85rem',
    margin: '8px 0',
    overflow: 'auto'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>💻 기본 문법 활용</h2>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 프로그래밍 기본 요소</h3>
        <div style={processStyle}>
          변수 → 조건문 → 반복문 → 함수 → 클래스
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "변조반함클" (변수-조건문-반복문-함수-클래스)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 데이터 타입 (Data Types) - 시험 핵심</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>기본 데이터 타입</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>정수형</span>: int, long, short, byte</li>
              <li><span style={highlightStyle}>실수형</span>: float, double</li>
              <li><span style={highlightStyle}>문자형</span>: char, string</li>
              <li><span style={highlightStyle}>논리형</span>: boolean (true/false)</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>복합 데이터 타입</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>배열 (Array)</span>: 동일한 타입의 연속된 메모리</li>
              <li><span style={highlightStyle}>구조체 (Struct)</span>: 다양한 타입의 묶음</li>
              <li><span style={highlightStyle}>포인터 (Pointer)</span>: 메모리 주소 저장</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 제어문 (Control Statements)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>조건문</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>if-else</span>: 조건에 따른 분기</li>
              <li><span style={highlightStyle}>switch-case</span>: 다중 선택</li>
              <li><span style={highlightStyle}>삼항연산자</span>: 조건 ? 참 : 거짓</li>
            </ul>
            <div style={codeStyle}>
              if (조건) {`{`}<br/>
              &nbsp;&nbsp;실행문;<br/>
              {`}`} else {`{`}<br/>
              &nbsp;&nbsp;실행문;<br/>
              {`}`}
            </div>
          </div>
          <div style={categoryStyle}>
            <strong>반복문</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>for</span>: 횟수 기반 반복</li>
              <li><span style={highlightStyle}>while</span>: 조건 기반 반복</li>
              <li><span style={highlightStyle}>do-while</span>: 후검사 반복</li>
            </ul>
            <div style={codeStyle}>
              for (int i = 0; i &lt; n; i++) {`{`}<br/>
              &nbsp;&nbsp;실행문;<br/>
              {`}`}
            </div>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 객체지향 프로그래밍 (OOP) - 자주 출제</h3>
        <div style={methodBoxStyle}>
          {[
            { name: '캡슐화 (Encapsulation)', desc: '데이터와 메소드를 하나로 묶고 외부 접근 제한' },
            { name: '상속 (Inheritance)', desc: '기존 클래스의 속성과 메소드를 물려받음' },
            { name: '다형성 (Polymorphism)', desc: '하나의 인터페이스로 다양한 형태 구현' },
            { name: '추상화 (Abstraction)', desc: '복잡한 구현을 숨기고 핵심 기능만 노출' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small>
            </div>
          ))}
        </div>
        <div style={tipStyle}>
          📝 <strong>암기팁:</strong> "캡상다추" (캡슐화-상속-다형성-추상화)
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 접근 제어자 (Access Modifiers)</h3>
        <div style={methodBoxStyle}>
          {[
            { name: 'public', desc: '모든 곳에서 접근 가능', scope: '전체' },
            { name: 'protected', desc: '같은 패키지 + 상속받은 클래스', scope: '패키지 + 상속' },
            { name: 'default', desc: '같은 패키지 내에서만 접근', scope: '패키지' },
            { name: 'private', desc: '같은 클래스 내에서만 접근', scope: '클래스' }
          ].map((item, index) => (
            <div key={index} style={methodItemStyle}>
              <strong>{item.name}</strong><br/>
              <small>{item.desc}</small><br/>
              <span style={highlightStyle}>범위: {item.scope}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 예외 처리 (Exception Handling)</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>예외 처리 구문</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>try</span>: 예외가 발생할 수 있는 코드</li>
              <li><span style={highlightStyle}>catch</span>: 예외 처리 코드</li>
              <li><span style={highlightStyle}>finally</span>: 항상 실행되는 코드</li>
              <li><span style={highlightStyle}>throw</span>: 예외 발생시키기</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>예외 처리 예시</strong>
            <div style={codeStyle}>
              try {`{`}<br/>
              &nbsp;&nbsp;// 예외 발생 가능 코드<br/>
              {`}`} catch (Exception e) {`{`}<br/>
              &nbsp;&nbsp;// 예외 처리<br/>
              {`}`} finally {`{`}<br/>
              &nbsp;&nbsp;// 정리 작업<br/>
              {`}`}
            </div>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 함수형 프로그래밍 개념</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>핵심 개념</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>순수 함수</span>: 부작용 없는 함수</li>
              <li><span style={highlightStyle}>불변성</span>: 데이터 변경 불가</li>
              <li><span style={highlightStyle}>고차 함수</span>: 함수를 인자로 받는 함수</li>
              <li><span style={highlightStyle}>람다식</span>: 익명 함수</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>람다식 예시</strong>
            <div style={codeStyle}>
              // Java 람다식<br/>
              (x, y) -&gt; x + y<br/><br/>
              // Python 람다식<br/>
              lambda x, y: x + y
            </div>
          </div>
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 메모리 관리</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>메모리 영역</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>스택 (Stack)</span>: 지역변수, 매개변수</li>
              <li><span style={highlightStyle}>힙 (Heap)</span>: 동적 할당 메모리</li>
              <li><span style={highlightStyle}>데이터 영역</span>: 전역변수, 정적변수</li>
              <li><span style={highlightStyle}>코드 영역</span>: 실행 코드</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>가비지 컬렉션</strong>
            <ul style={listStyle}>
              <li>자동 메모리 관리</li>
              <li>참조되지 않는 객체 정리</li>
              <li>메모리 누수 방지</li>
            </ul>
          </div>
        </div>
        <div style={tipStyle}>
          📝 <strong>주의사항:</strong> C/C++는 수동 메모리 관리, Java/Python은 가비지 컬렉션 자동 관리
        </div>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}>🔥 모듈화 및 패키지</h3>
        <div style={methodBoxStyle}>
          <div style={categoryStyle}>
            <strong>모듈화 장점</strong>
            <ul style={listStyle}>
              <li>코드 재사용성 향상</li>
              <li>유지보수 용이</li>
              <li>네임스페이스 분리</li>
              <li>개발 효율성 증대</li>
            </ul>
          </div>
          <div style={categoryStyle}>
            <strong>패키지 관리</strong>
            <ul style={listStyle}>
              <li><span style={highlightStyle}>import/include</span>: 모듈 가져오기</li>
              <li><span style={highlightStyle}>namespace</span>: 이름 공간</li>
              <li><span style={highlightStyle}>의존성 관리</span>: 라이브러리 관리</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicSyntax; 