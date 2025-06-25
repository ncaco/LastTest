import React, { useState } from 'react';

const Exam2025First: React.FC = () => {
  const [showingKnowledge, setShowingKnowledge] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionId: string) => {
    setShowingKnowledge(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <h1>2025년도-1회차 정보처리기사 실기 복원 문제</h1>
        <p className="page-description">
          2025년 1회 정보처리기사 실기 시험 복원 문제입니다. 총 20문항으로 구성되어 있으며, 최신 출제 경향을 반영한 문제들입니다.
          <br />📚 각 문제 제목을 클릭하면 문제와 기본 지식을 번갈아가며 확인할 수 있습니다.
        </p>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q1'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q1')}
        >
          📝 문제 1. 네트워크 보안 기법
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q1'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 네트워크 보안 공격</h4>
            <ul>
              <li><span className="highlight">세션 하이재킹(Session Hijacking)</span>: 사용자의 세션 정보를 탈취하여 인증을 우회하는 공격</li>
              <li><span className="highlight">TCP 하이재킹</span>: TCP 연결의 시퀀스 번호를 조작하여 세션을 가로채는 공격</li>
              <li><span className="highlight">방어 방법</span>: SSL/TLS 암호화, 세션 토큰 무작위화, 타임아웃 설정</li>
              <li><span className="highlight">관련 개념</span>: IP 스푸핑, ARP 스푸핑, 중간자 공격(MITM)</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q1'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음은 네트워크 보안에 관련된 문제이다. 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( )은/는 '세션을 가로채다.' 라는 의미로 다른 사람의 세션 상태를 훔치거나 도용하여 액세스하는 해킹 기법이다.</p>
              <p>TCP ( )은/는 TCP의 3-way 핸드셰이크가 완료된 후에 공격자가 시퀀스 번호 등을 조작하여 정상적인 세션을 가로채고 인증 없이 통신하는 공격 기법이다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>세션 하이재킹(Session Hijacking)</strong></li>
                <li>두 번째 괄호: <strong>세션 하이재킹(Session Hijacking)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q2'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q2')}
        >
          📝 문제 2. 데이터베이스 관계대수
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q2'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 관계대수 연산</h4>
            <ul>
              <li><span className="highlight">Select(σ)</span>: 조건을 만족하는 튜플을 선택하는 연산 (행 선택)</li>
              <li><span className="highlight">Project(π)</span>: 지정된 속성만을 추출하는 연산 (열 선택)</li>
              <li><span className="highlight">Join(⋈)</span>: 두 릴레이션을 공통 속성으로 결합하는 연산</li>
              <li><span className="highlight">Union(∪)</span>: 두 릴레이션의 합집합</li>
              <li><span className="highlight">Intersection(∩)</span>: 두 릴레이션의 교집합</li>
              <li><span className="highlight">Difference(-)</span>: 두 릴레이션의 차집합</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q2'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 관계대수 연산에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( )는 주어진 조건에 만족하는 튜플들을 선택하는 연산이다.</p>
              <p>( )는 주어진 속성들만을 추출하는 연산이다.</p>
              <p>( )는 두 개의 릴레이션을 결합하여 새로운 릴레이션을 만드는 연산이다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>셀렉트(Select) 또는 선택</strong></li>
                <li>두 번째 괄호: <strong>프로젝트(Project) 또는 투영</strong></li>
                <li>세 번째 괄호: <strong>조인(Join) 또는 결합</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q3'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q3')}
        >
          📝 문제 3. 프로그래밍 언어 (Python)
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q3'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - Python 함수와 매개변수</h4>
            <ul>
              <li><span className="highlight">기본 매개변수</span>: 함수 정의 시 기본값을 설정하여 호출 시 생략 가능</li>
              <li><span className="highlight">조건문</span>: if-elif-else 구조로 조건에 따라 다른 실행</li>
              <li><span className="highlight">리스트 메서드</span>: append()로 요소 추가, extend()로 리스트 확장</li>
              <li><span className="highlight">함수 호출</span>: 위치 인수와 키워드 인수를 혼합하여 사용 가능</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q3'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 Python 코드의 실행 결과를 작성하시오.</p>
            <div className="code-block">
              <pre>{`
def calculate(x, y, operation='add'):
    if operation == 'add':
        return x + y
    elif operation == 'multiply':
        return x * y
    else:
        return x - y

result = []
result.append(calculate(5, 3))
result.append(calculate(5, 3, 'multiply'))
result.append(calculate(5, 3, 'subtract'))

print(result)
              `}</pre>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <pre>[8, 15, 2]</pre>
              <p><strong>해설:</strong></p>
              <ul>
                <li>calculate(5, 3): operation 기본값 'add' → 5 + 3 = 8</li>
                <li>calculate(5, 3, 'multiply'): 5 * 3 = 15</li>
                <li>calculate(5, 3, 'subtract'): else문 실행 → 5 - 3 = 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q4'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q4')}
        >
          📝 문제 4. 소프트웨어 아키텍처 패턴
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q4'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 아키텍처 패턴</h4>
            <ul>
              <li><span className="highlight">MVC 패턴</span>: Model(데이터), View(화면), Controller(제어) 분리</li>
              <li><span className="highlight">계층화 패턴</span>: 시스템을 여러 계층으로 나누어 각 계층이 하위 계층만 사용</li>
              <li><span className="highlight">파이프 앤 필터</span>: 데이터가 파이프를 통해 흐르며 각 필터에서 처리</li>
              <li><span className="highlight">클라이언트-서버</span>: 서비스 제공자(서버)와 요청자(클라이언트) 분리</li>
              <li><span className="highlight">마이크로서비스</span>: 작은 독립적인 서비스들의 조합</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q4'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 소프트웨어 아키텍처 패턴에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( ) 패턴은 Model, View, Controller로 구성되어 사용자 인터페이스와 비즈니스 로직을 분리하는 패턴이다.</p>
              <p>( ) 패턴은 계층을 나누어 각 계층이 하위 계층의 서비스만을 이용하는 패턴이다.</p>
              <p>( ) 패턴은 여러 개의 독립적인 컴포넌트들이 파이프로 연결되어 데이터를 처리하는 패턴이다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>MVC(Model-View-Controller)</strong></li>
                <li>두 번째 괄호: <strong>계층화(Layered) 또는 Layer</strong></li>
                <li>세 번째 괄호: <strong>파이프 앤 필터(Pipe and Filter)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q5'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q5')}
        >
          📝 문제 5. SQL 활용
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q5'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - SQL 집계 함수와 그룹화</h4>
            <ul>
              <li><span className="highlight">GROUP BY</span>: 지정된 컬럼을 기준으로 그룹을 만들어 집계</li>
              <li><span className="highlight">HAVING</span>: GROUP BY 결과에 조건을 적용 (WHERE는 그룹화 전)</li>
              <li><span className="highlight">AVG()</span>: 평균값을 계산하는 집계 함수</li>
              <li><span className="highlight">ORDER BY</span>: 결과를 정렬 (ASC: 오름차순, DESC: 내림차순)</li>
              <li><span className="highlight">별칭(AS)</span>: 컬럼이나 테이블에 임시 이름 부여</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q5'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 조건에 맞는 SQL문을 작성하시오.</p>
            <div className="code-block">
              <p>직원(Employee) 테이블에서 부서별 평균 급여를 구하되,</p>
              <p>평균 급여가 3000 이상인 부서만 조회하고, 평균 급여 내림차순으로 정렬하시오.</p>
              <p>테이블 구조: Employee(emp_id, name, salary, dept_name)</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <pre>{`
SELECT dept_name, AVG(salary) AS avg_salary
FROM Employee
GROUP BY dept_name
HAVING AVG(salary) >= 3000
ORDER BY avg_salary DESC;
              `}</pre>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q6'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q6')}
        >
          📝 문제 6. 자료구조
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q6'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 기본 자료구조</h4>
            <ul>
              <li><span className="highlight">트리(Tree)</span>: 노드와 간선으로 구성된 계층적 자료구조, 루트-부모-자식 관계</li>
              <li><span className="highlight">우선순위 큐</span>: 우선순위가 높은 요소가 먼저 처리되는 추상 자료형</li>
              <li><span className="highlight">해시 테이블</span>: 해시 함수로 키를 배열 인덱스로 변환하여 빠른 검색 지원</li>
              <li><span className="highlight">스택(Stack)</span>: LIFO(후입선출) 구조의 자료구조</li>
              <li><span className="highlight">큐(Queue)</span>: FIFO(선입선출) 구조의 자료구조</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q6'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 자료구조에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( )는 노드와 간선으로 이루어진 자료구조로, 계층적 관계를 표현한다.</p>
              <p>( )는 우선순위가 높은 데이터가 먼저 나가는 자료구조이다.</p>
              <p>( )는 해시 함수를 이용하여 키와 값을 매핑하는 자료구조이다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>트리(Tree)</strong></li>
                <li>두 번째 괄호: <strong>우선순위 큐(Priority Queue)</strong></li>
                <li>세 번째 괄호: <strong>해시 테이블(Hash Table)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q7'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q7')}
        >
          📝 문제 7. Java 프로그래밍
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q7'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - Java 상속과 오버라이딩</h4>
            <ul>
              <li><span className="highlight">상속(Inheritance)</span>: 부모 클래스의 속성과 메서드를 자식 클래스가 물려받는 것</li>
              <li><span className="highlight">오버라이딩(Overriding)</span>: 부모 클래스의 메서드를 자식 클래스에서 재정의</li>
              <li><span className="highlight">super 키워드</span>: 부모 클래스의 생성자나 메서드를 호출</li>
              <li><span className="highlight">@Override 어노테이션</span>: 메서드 오버라이딩을 명시적으로 표시</li>
              <li><span className="highlight">다형성(Polymorphism)</span>: 같은 인터페이스로 다른 동작을 수행</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q7'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 Java 코드의 실행 결과를 작성하시오.</p>
            <div className="code-block">
              <pre>{`
class Parent {
    int x = 10;
    
    void display() {
        System.out.print(x + " ");
    }
}

class Child extends Parent {
    int x = 20;
    
    void display() {
        System.out.print(x + " ");
        super.display();
    }
}

public class Test {
    public static void main(String[] args) {
        Parent p = new Child();
        p.display();
    }
}
            `}</pre>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <pre>20 10</pre>
              <p><strong>해설:</strong></p>
              <ul>
                <li>메서드는 동적 바인딩으로 Child의 display() 호출</li>
                <li>Child의 display()에서 x는 Child의 x = 20 출력</li>
                <li>super.display()로 Parent의 display() 호출하여 Parent의 x = 10 출력</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q8'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q8')}
        >
          📝 문제 8. 네트워크 프로토콜
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q8'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 네트워크 프로토콜</h4>
            <ul>
              <li><span className="highlight">TCP (Transmission Control Protocol)</span>: 연결지향, 신뢰성 있는 데이터 전송</li>
              <li><span className="highlight">UDP (User Datagram Protocol)</span>: 비연결지향, 빠르지만 신뢰성 낮음</li>
              <li><span className="highlight">IP (Internet Protocol)</span>: 네트워크 계층에서 패킷 라우팅</li>
              <li><span className="highlight">HTTP (HyperText Transfer Protocol)</span>: 웹 통신 프로토콜</li>
              <li><span className="highlight">HTTPS</span>: SSL/TLS로 암호화된 HTTP</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q8'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 네트워크 프로토콜에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( )는 연결지향적이고 신뢰성 있는 데이터 전송을 보장하는 전송 계층 프로토콜이다.</p>
              <p>( )는 비연결지향적이고 빠른 데이터 전송이 가능하지만 신뢰성을 보장하지 않는 프로토콜이다.</p>
              <p>( )는 인터넷에서 패킷을 목적지까지 전달하는 네트워크 계층 프로토콜이다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>TCP</strong></li>
                <li>두 번째 괄호: <strong>UDP</strong></li>
                <li>세 번째 괄호: <strong>IP</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q9'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q9')}
        >
          📝 문제 9. 소프트웨어 테스팅
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q9'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 소프트웨어 테스팅 기법</h4>
            <ul>
              <li><span className="highlight">경계값 분석</span>: 입력 범위의 경계에서 오류가 발생할 가능성이 높다는 점을 이용한 테스트 기법이다.</li>
              <li><span className="highlight">동등 분할</span>: 입력을 동등한 클래스로 나누어 테스트</li>
              <li><span className="highlight">블랙박스 테스팅</span>: 내부 구조를 모르고 기능만 테스트</li>
              <li><span className="highlight">화이트박스 테스팅</span>: 내부 구조를 알고 코드 경로를 테스트</li>
              <li><span className="highlight">단위 테스트</span>: 개별 모듈이나 함수를 테스트</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q9'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 소프트웨어 테스팅 기법에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( )는 입력 도메인을 유한한 개수의 동등한 클래스로 나누어 각 클래스에서 대표값을 선택하여 테스트하는 기법이다.</p>
              <p>( )는 입력 값의 경계 부분에서 오류가 발생할 가능성이 높다는 점을 이용한 테스트 기법이다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>동등 분할(Equivalence Partitioning)</strong></li>
                <li>두 번째 괄호: <strong>경계값 분석(Boundary Value Analysis)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q10'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q10')}
        >
          📝 문제 10. 데이터베이스 정규화
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q10'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 데이터베이스 정규화</h4>
            <ul>
              <li><span className="highlight">1NF (1차 정규형)</span>: 원자값으로만 구성, 반복 그룹 제거</li>
              <li><span className="highlight">2NF (2차 정규형)</span>: 제1정규형을 만족하면서 부분 함수 종속 제거한 형태이다.</li>
              <li><span className="highlight">3NF (3차 정규형)</span>: 제2정규형을 만족하면서 이행 함수 종속 제거한 형태이다.</li>
              <li><span className="highlight">BCNF</span>: 3NF의 강화된 형태</li>
              <li><span className="highlight">함수 종속</span>: A → B (A가 결정되면 B도 유일하게 결정)</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q10'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 정규화에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( )는 테이블의 모든 속성이 원자값(Atomic Value)을 가져야 하며, 반복 그룹이 존재하지 않아야 한다.</p>
              <p>( )는 1차 정규형을 만족하면서 기본키가 아닌 모든 속성이 기본키에 완전 함수 종속되어야 한다.</p>
              <p>( )는 2차 정규형을 만족하면서 기본키가 아닌 모든 속성이 기본키에 이행적 함수 종속을 하지 않아야 한다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>1NF (1차 정규형)</strong></li>
                <li>두 번째 괄호: <strong>2NF (2차 정규형)</strong></li>
                <li>세 번째 괄호: <strong>3NF (3차 정규형)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q11'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q11')}
        >
          📝 문제 11. C언어 프로그래밍
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q11'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - C언어 포인터와 배열</h4>
            <ul>
              <li><span className="highlight">포인터(Pointer)</span>: 메모리 주소를 저장하는 변수</li>
              <li><span className="highlight">배열과 포인터</span>: 배열명은 첫 번째 원소의 주소</li>
              <li><span className="highlight">포인터 연산</span>: 주소 증감, 역참조(*) 연산</li>
              <li><span className="highlight">동적 메모리</span>: malloc(), free() 함수 사용</li>
              <li><span className="highlight">문자열</span>: 문자 배열, NULL 문자로 종료</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q11'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 C언어 코드의 실행 결과를 작성하시오.</p>
            <div className="code-block">
              <pre>{`
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;
    
    printf("%d\\n", *ptr);
    printf("%d\\n", *(ptr + 2));
    printf("%d\\n", ptr[3]);
    
    return 0;
}
            `}</pre>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <pre>{`10
30
40`}</pre>
              <p><strong>해설:</strong></p>
              <ul>
                <li>ptr = &arr[0] → ptr은 arr[0](10)을 가리킴</li>
                <li>*ptr = 10</li>
                <li>*(ptr + 2): arr[2] = 30</li>
                <li>ptr[3]: arr[3] = 40</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q12'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q12')}
        >
          📝 문제 12. 운영체제
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q12'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 프로세스 스케줄링</h4>
            <ul>
              <li><span className="highlight">FCFS (First Come First Served)</span>: 먼저 온 순서대로 처리</li>
              <li><span className="highlight">SJF (Shortest Job First)</span>: 실행 시간이 짧은 작업부터</li>
              <li><span className="highlight">Round Robin</span>: 시간 할당량을 두고 순환 처리</li>
              <li><span className="highlight">Priority Scheduling</span>: 우선순위에 따라 처리</li>
              <li><span className="highlight">대기 시간</span>: 프로세스가 실행되기까지 기다린 시간</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q12'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 프로세스 스케줄링 기법에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( )는 프로세스가 도착한 순서대로 CPU를 할당하는 가장 간단한 스케줄링 기법이다.</p>
              <p>( )는 CPU 사용 시간이 가장 짧은 프로세스에게 먼저 CPU를 할당하는 기법이다.</p>
              <p>( )는 각 프로세스에게 동일한 크기의 시간 할당량을 부여하여 순환하며 실행하는 기법이다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>FCFS (First Come First Served)</strong></li>
                <li>두 번째 괄호: <strong>SJF (Shortest Job First)</strong></li>
                <li>세 번째 괄호: <strong>Round Robin</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q13'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q13')}
        >
          📝 문제 13. 애자일 방법론
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q13'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 스크럼 (Scrum)</h4>
            <ul>
              <li><span className="highlight">스프린트(Sprint)</span>: 1-4주 단위의 개발 주기</li>
              <li><span className="highlight">스크럼 마스터</span>: 스크럼 프로세스를 관리하고 촉진</li>
              <li><span className="highlight">제품 백로그</span>: 구현해야 할 기능들의 우선순위 목록</li>
              <li><span className="highlight">일일 스크럼</span>: 매일 짧은 진행 상황 공유 회의</li>
              <li><span className="highlight">스프린트 리뷰</span>: 스프린트 완료 후 결과 검토</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q13'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 스크럼에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( )는 스크럼에서 1~4주 단위의 반복적인 개발 주기를 의미한다.</p>
              <p>( )는 스크럼 팀이 매일 진행하는 짧은 회의로, 어제 한 일, 오늘 할 일, 장애물 등을 공유한다.</p>
              <p>( )는 구현해야 할 제품의 기능들을 우선순위 순으로 정렬한 목록이다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>스프린트(Sprint)</strong></li>
                <li>두 번째 괄호: <strong>일일 스크럼(Daily Scrum)</strong></li>
                <li>세 번째 괄호: <strong>제품 백로그(Product Backlog)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q14'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q14')}
        >
          📝 문제 14. 디자인 패턴
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q14'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - GoF 디자인 패턴</h4>
            <ul>
              <li><span className="highlight">Singleton 패턴</span>: 클래스의 인스턴스를 하나만 생성</li>
              <li><span className="highlight">Observer 패턴</span>: 객체 상태 변화를 관찰자들에게 알림</li>
              <li><span className="highlight">Builder 패턴</span>: 복잡한 객체를 단계별로 생성</li>
              <li><span className="highlight">Factory 패턴</span>: 객체 생성을 캡슐화</li>
              <li><span className="highlight">Strategy 패턴</span>: 알고리즘을 교체 가능하게 캡슐화</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q14'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 디자인 패턴에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( ) 패턴은 클래스의 인스턴스가 오직 하나만 존재하도록 보장하는 패턴이다.</p>
              <p>( ) 패턴은 한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체들에게 연락이 가고 자동으로 내용이 갱신되는 방식으로 일대다 의존성을 정의하는 패턴이다.</p>
              <p>( ) 패턴은 복잡한 객체의 생성 과정과 표현 방법을 분리하여 동일한 생성 절차에서 서로 다른 표현 결과를 만들 수 있게 하는 패턴이다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>싱글톤(Singleton)</strong></li>
                <li>두 번째 괄호: <strong>옵저버(Observer)</strong></li>
                <li>세 번째 괄호: <strong>빌더(Builder)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q15'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q15')}
        >
          📝 문제 15. 정보보안
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q15'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 웹 보안 취약점</h4>
            <ul>
              <li><span className="highlight">XSS (Cross-Site Scripting)</span>: 악성 스크립트를 웹사이트에 삽입하는 공격</li>
              <li><span className="highlight">SQL 인젝션</span>: SQL 쿼리에 악의적인 코드를 삽입하는 공격</li>
              <li><span className="highlight">CSRF (Cross-Site Request Forgery)</span>: 사용자의 의지와 무관하게 요청을 전송하는 공격</li>
              <li><span className="highlight">입력 값 검증</span>: 사용자 입력을 검증하여 공격 방지</li>
              <li><span className="highlight">준비된 문장</span>: SQL 인젝션 방지를 위한 기법</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q15'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 웹 보안 취약점에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( )는 웹 애플리케이션에서 사용자의 입력값에 대한 검증이 부족할 때, 공격자가 악의적인 스크립트를 삽입하여 다른 사용자의 브라우저에서 실행되도록 하는 공격이다.</p>
              <p>( )는 웹 애플리케이션이 데이터베이스와 연동할 때, 입력값에 대한 검증이나 필터링이 부족하여 공격자가 임의의 SQL문을 실행할 수 있게 되는 보안 취약점이다.</p>
              <p>( )는 웹 애플리케이션의 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위를 특정 웹사이트에 요청하게 하는 공격이다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>XSS (Cross-Site Scripting)</strong></li>
                <li>두 번째 괄호: <strong>SQL 인젝션(SQL Injection)</strong></li>
                <li>세 번째 괄호: <strong>CSRF (Cross-Site Request Forgery)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q16'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q16')}
        >
          📝 문제 16. 신기술 동향
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q16'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 신기술 동향</h4>
            <ul>
              <li><span className="highlight">P2P (Peer-to-Peer)</span>: 중앙 서버 없이 사용자들이 직접 연결</li>
              <li><span className="highlight">블록체인</span>: 분산 원장 기술, 데이터 무결성 보장</li>
              <li><span className="highlight">가상화</span>: 물리적 서버를 논리적으로 분할하여 활용</li>
              <li><span className="highlight">클라우드 컴퓨팅</span>: 인터넷을 통해 IT 리소스 제공</li>
              <li><span className="highlight">IoT</span>: 사물인터넷, 다양한 기기들의 네트워크 연결</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q16'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 신기술에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( )는 중앙 집중식 서버에 의존하지 않고, 개별 노드들이 직접 통신하고 자원을 공유하는 분산 네트워킹 구조이다.</p>
              <p>( )는 거래 기록을 체인 형태로 연결하여 분산 보관하는 기술로, 데이터의 위변조를 방지할 수 있다.</p>
              <p>( )는 하나의 물리적 시스템에서 여러 개의 가상 시스템을 운영할 수 있게 하는 기술이다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>P2P (Peer-to-Peer)</strong></li>
                <li>두 번째 괄호: <strong>블록체인(Blockchain)</strong></li>
                <li>세 번째 괄호: <strong>가상화(Virtualization)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q17'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q17')}
        >
          📝 문제 17. Python 재귀함수
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q17'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 재귀함수</h4>
            <ul>
              <li><span className="highlight">재귀함수</span>: 자기 자신을 호출하는 함수</li>
              <li><span className="highlight">기저 조건</span>: 재귀 호출을 중단하는 조건</li>
              <li><span className="highlight">팩토리얼</span>: n! = n × (n-1)!</li>
              <li><span className="highlight">피보나치 수열</span>: F(n) = F(n-1) + F(n-2)</li>
              <li><span className="highlight">스택 오버플로우</span>: 무한 재귀로 인한 메모리 부족</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q17'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 Python 재귀함수의 실행 결과를 작성하시오.</p>
            <div className="code-block">
              <pre>{`
def factorial(n):
    if n <= 1:
        return 1
    else:
        return n * factorial(n - 1)

def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

print(factorial(4))
print(fibonacci(5))
              `}</pre>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <pre>{`24
5`}</pre>
              <p><strong>해설:</strong></p>
              <ul>
                <li>factorial(4): 4 × 3 × 2 × 1 = 24</li>
                <li>fibonacci(5): 0, 1, 1, 2, 3, 5 → 5번째는 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q18'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q18')}
        >
          📝 문제 18. 데이터베이스 무결성
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q18'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 데이터베이스 무결성</h4>
            <ul>
              <li><span className="highlight">개체 무결성</span>: 기본키는 NULL이나 중복값을 가질 수 없음</li>
              <li><span className="highlight">참조 무결성</span>: 외래키는 참조하는 테이블의 기본키 값과 일치해야 함</li>
              <li><span className="highlight">도메인 무결성</span>: 속성 값이 정의된 도메인에 속한 값이어야 함</li>
              <li><span className="highlight">사용자 정의 무결성</span>: 사용자가 정의한 비즈니스 규칙</li>
              <li><span className="highlight">제약 조건</span>: CHECK, NOT NULL, UNIQUE 등</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q18'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 데이터베이스 무결성에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( ) 무결성은 기본키를 구성하는 어떤 속성도 NULL 값이나 중복값을 가질 수 없다는 규칙이다.</p>
              <p>( ) 무결성은 외래키 값은 NULL이거나 참조 릴레이션의 기본키 값과 동일해야 한다는 규칙이다.</p>
              <p>( ) 무결성은 주어진 속성 값이 그 속성에서 정의된 도메인에 속한 값이어야 한다는 규칙이다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>개체(Entity)</strong></li>
                <li>두 번째 괄호: <strong>참조(Referential)</strong></li>
                <li>세 번째 괄호: <strong>도메인(Domain)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q19'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q19')}
        >
          📝 문제 19. 시스템 보안
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q19'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 시스템 보안 도구</h4>
            <ul>
              <li><span className="highlight">IDS (Intrusion Detection System)</span>: 침입 탐지 시스템</li>
              <li><span className="highlight">방화벽(Firewall)</span>: 네트워크 트래픽을 모니터링하고 차단</li>
              <li><span className="highlight">VPN (Virtual Private Network)</span>: 가상 사설망</li>
              <li><span className="highlight">IPS (Intrusion Prevention System)</span>: 침입 방지 시스템</li>
              <li><span className="highlight">DLP (Data Loss Prevention)</span>: 데이터 유출 방지</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q19'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 시스템 보안 도구에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( )는 네트워크 트래픽을 모니터링하고 의심스러운 활동을 탐지하는 보안 시스템이다.</p>
              <p>( )는 인가되지 않은 접근을 차단하기 위해 네트워크 간의 트래픽을 제어하는 보안 장치이다.</p>
              <p>( )는 공중망을 통해 사설망에 안전하게 접속할 수 있도록 암호화된 터널을 제공하는 기술이다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>IDS (Intrusion Detection System)</strong></li>
                <li>두 번째 괄호: <strong>방화벽(Firewall)</strong></li>
                <li>세 번째 괄호: <strong>VPN (Virtual Private Network)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q20'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q20')}
        >
          📝 문제 20. 소프트웨어 품질
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q20'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - 소프트웨어 품질 특성</h4>
            <ul>
              <li><span className="highlight">정확성(Correctness)</span>: 요구사항을 정확히 수행하는 정도</li>
              <li><span className="highlight">사용성(Usability)</span>: 사용자가 쉽게 사용할 수 있는 정도</li>
              <li><span className="highlight">유지보수성(Maintainability)</span>: 수정과 개선이 용이한 정도</li>
              <li><span className="highlight">신뢰성(Reliability)</span>: 오류 없이 지속적으로 동작하는 정도</li>
              <li><span className="highlight">효율성(Efficiency)</span>: 자원을 최적으로 사용하는 정도</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q20'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 소프트웨어 품질 특성에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
            <div className="code-block">
              <p>( )는 주어진 조건에서 소프트웨어가 명시된 기능을 정확하게 수행하는 정도를 나타낸다.</p>
              <p>( )는 사용자가 소프트웨어를 쉽게 배우고 사용할 수 있으며, 사용자에게 만족감을 주는 정도를 나타낸다.</p>
              <p>( )는 소프트웨어에 수정이 필요할 때 쉽게 수정할 수 있는 정도를 나타낸다.</p>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <ul>
                <li>첫 번째 괄호: <strong>정확성(Correctness)</strong></li>
                <li>두 번째 괄호: <strong>사용성(Usability)</strong></li>
                <li>세 번째 괄호: <strong>유지보수성(Maintainability)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📚 출제 경향 분석</h2>
        <div className="trend-analysis">
          <h3>🎯 주요 특징</h3>
          <ul>
            <li><strong>네트워크 보안:</strong> 세션 하이재킹, XSS, SQL 인젝션 등 실무 중심 보안 개념</li>
            <li><strong>데이터베이스:</strong> 관계대수, 정규화, 무결성 등 이론과 실무 균형</li>
            <li><strong>프로그래밍:</strong> Python, Java, C언어의 핵심 개념과 실행 결과 문제</li>
            <li><strong>소프트웨어 공학:</strong> 아키텍처 패턴, 디자인 패턴, 테스팅 기법</li>
            <li><strong>시스템 분야:</strong> 운영체제, 네트워크 프로토콜, 보안 시스템</li>
            <li><strong>최신 기술:</strong> 애자일, 블록체인, 가상화 등 신기술 동향</li>
          </ul>
          
          <h3>📈 학습 포인트</h3>
          <ul>
            <li><strong>보안 영역 강화:</strong> 다양한 보안 공격 기법과 대응 시스템 숙지</li>
            <li><strong>프로그래밍 실무:</strong> 언어별 특성과 객체지향 개념 이해</li>
            <li><strong>데이터베이스 심화:</strong> 이론적 기초와 SQL 활용 능력</li>
            <li><strong>소프트웨어 설계:</strong> 아키텍처와 디자인 패턴의 실무 적용</li>
            <li><strong>시스템 통합 지식:</strong> 운영체제와 네트워크의 연계 이해</li>
            <li><strong>품질 관리:</strong> 테스팅 기법과 소프트웨어 품질 특성</li>
          </ul>

          <h3>🎯 2025년 출제 특징</h3>
          <ul>
            <li>실무 중심의 보안 문제 비중 증가</li>
            <li>다양한 프로그래밍 언어의 균형 출제</li>
            <li>이론과 실무를 연결하는 통합적 사고 요구</li>
            <li>최신 기술 트렌드 반영 문제 지속 출제</li>
          </ul>
        </div>
      </div>

      <div className="reference-section">
        <h2>📖 참고 자료</h2>
        <p>출처: <a href="https://chobopark.tistory.com/540" target="_blank" rel="noopener noreferrer">2025년 1회 정보처리기사 실기 복원 문제 - Life-Journey 블로그</a></p>
        <p>복원 문제는 실제 시험 문제를 기반으로 재구성된 것으로, 학습 목적으로만 사용하시기 바랍니다.</p>
      </div>
    </div>
  );
};

export default Exam2025First; 