import React, { useState } from 'react';

const Exam2024Third: React.FC = () => {
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
        <h1>2024년도-3회차 정보처리기사 실기 복원 문제</h1>
        <p className="page-description">
          2024년 3회 정보처리기사 실기 시험 복원 문제입니다. 실무 중심의 문제들로 구성되어 있습니다.
          <br />📚 각 문제 제목을 클릭하면 문제와 기본 지식을 번갈아가며 확인할 수 있습니다.
        </p>
      </div>

      <div className="content-section">
        <h2 
          className={showingKnowledge['q1'] ? 'showing-knowledge' : ''} 
          onClick={() => toggleSection('q1')}
        >
          📝 문제 1. Java 프로그래밍
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q1'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - Java 배열과 메서드</h4>
            <ul>
              <li><span className="highlight">정적 배열</span>: static 키워드로 선언된 클래스 변수</li>
              <li><span className="highlight">배열 초기화</span>: new String[크기]로 배열 생성</li>
              <li><span className="highlight">void 메서드</span>: 반환값이 없는 메서드</li>
              <li><span className="highlight">배열 요소 접근</span>: 인덱스를 사용하여 배열 요소에 값 할당</li>
              <li><span className="highlight">System.out.print</span>: 줄바꿈 없이 출력</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q1'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음은 Java 코드에 대한 문제이다. 아래 코드를 확인하여 알맞는 출력값을 작성하시오.</p>
            <div className="code-block">
              <pre>{`
public class Main{
    static String[] s = new String[3];
    static void Method(int i) {
        s[i] = "world";
    }
    
    public static void main(String[] args) {
        s[0] = "Hello";
        s[1] = "JAVA";
        Method(1);
        
        for(int i = 0; i < s.length; i++) {
            System.out.print(s[i]);
        }
    }
}
              `}</pre>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <pre>Helloworldnull</pre>
              <p><strong>해설:</strong></p>
              <ul>
                <li>s[0] = "Hello" 할당</li>
                <li>s[1] = "JAVA" 할당 후 Method(1) 호출로 s[1] = "world"로 변경</li>
                <li>s[2]는 초기화되지 않아 null</li>
                <li>결과: "Hello" + "world" + "null" = "Helloworldnull"</li>
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
          📝 문제 2. Python 프로그래밍
        </h2>
        <div className={`knowledge-content ${showingKnowledge['q2'] ? 'show' : ''}`}>
          <div className="knowledge-box">
            <h4>🔍 기본 지식 - Python 리스트와 집합</h4>
            <ul>
              <li><span className="highlight">리스트(List)</span>: 순서가 있고 중복을 허용하는 자료구조</li>
              <li><span className="highlight">집합(Set)</span>: 순서가 없고 중복을 허용하지 않는 자료구조</li>
              <li><span className="highlight">set() 함수</span>: 리스트를 집합으로 변환</li>
              <li><span className="highlight">sorted() 함수</span>: 정렬된 새로운 리스트 반환</li>
              <li><span className="highlight">중복 제거</span>: set으로 변환 후 다시 리스트로 변환</li>
            </ul>
          </div>
        </div>
        <div className={`question-content ${showingKnowledge['q2'] ? 'hide' : ''}`}>
          <div className="question-box">
            <p><strong>문제:</strong> 다음 Python 코드의 실행 결과를 작성하시오.</p>
            <div className="code-block">
              <pre>{`
a = [1, 2, 3, 4, 5, 3, 2, 1]
b = list(set(a))
c = sorted(b, reverse=True)
print(c)
              `}</pre>
            </div>
            <div className="answer-box">
              <p><strong>정답:</strong></p>
              <pre>[5, 4, 3, 2, 1]</pre>
              <p><strong>해설:</strong></p>
              <ul>
                <li>a = [1, 2, 3, 4, 5, 3, 2, 1]</li>
                <li>set(a) = {'{'}1, 2, 3, 4, 5{'}'} (중복 제거)</li>
                <li>b = [1, 2, 3, 4, 5] (집합을 리스트로 변환)</li>
                <li>c = sorted(b, reverse=True) = [5, 4, 3, 2, 1] (내림차순 정렬)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 3. 소프트웨어 설계</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 GoF 디자인 패턴에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 패턴은 객체의 생성과정을 템플릿으로 정의하고, 서브클래스에서 각 단계의 세부 구현을 정의하는 패턴이다.</p>
            <p>( ) 패턴은 어떤 클래스의 인스턴스가 오직 하나만 생성되도록 보장하는 패턴이다.</p>
            <p>( ) 패턴은 객체의 상태 변화를 관찰하는 관찰자들에게 자동으로 알림을 보내는 패턴이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>팩토리 메서드(Factory Method)</strong></li>
              <li>두 번째 괄호: <strong>싱글톤(Singleton)</strong></li>
              <li>세 번째 괄호: <strong>옵저버(Observer)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 4. 네트워크 프로토콜</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 네트워크 프로토콜에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( )는 웹 브라우저와 웹 서버 간의 통신에 사용되는 프로토콜로, 비연결형이며 상태정보를 유지하지 않는다.</p>
            <p>( )는 인터넷에서 전자우편을 송신할 때 사용하는 프로토콜이다.</p>
            <p>( )는 원격지의 컴퓨터에 안전하게 접속하여 명령을 실행할 수 있게 해주는 암호화된 프로토콜이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>HTTP</strong></li>
              <li>두 번째 괄호: <strong>SMTP</strong></li>
              <li>세 번째 괄호: <strong>SSH</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 5. SQL 고급 기능</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 조건에 맞는 SQL문을 작성하시오.</p>
          <div className="code-block">
            <p>주문(Order) 테이블에서 고객별 주문 총액을 계산하되,</p>
            <p>주문 총액이 100,000원 이상인 고객만 조회하고, 주문 총액 내림차순으로 정렬하시오.</p>
            <p>테이블 구조: Order(order_id, customer_id, amount, order_date)</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>{`
SELECT customer_id, SUM(amount) AS total_amount
FROM Order
GROUP BY customer_id
HAVING SUM(amount) >= 100000
ORDER BY total_amount DESC;
            `}</pre>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 6. 정보보안</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 보안 공격에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 공격은 웹 애플리케이션의 입력값 검증 취약점을 이용하여 악성 스크립트를 삽입하는 공격이다.</p>
            <p>( ) 공격은 데이터베이스 쿼리에 악의적인 SQL 구문을 삽입하여 데이터베이스를 조작하는 공격이다.</p>
            <p>( ) 공격은 정상적인 요청으로 위장하여 사용자가 의도하지 않은 행위를 수행하게 하는 공격이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>XSS(Cross-Site Scripting)</strong></li>
              <li>두 번째 괄호: <strong>SQL 인젝션(SQL Injection)</strong></li>
              <li>세 번째 괄호: <strong>CSRF(Cross-Site Request Forgery)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📚 출제 경향 분석</h2>
        <div className="trend-analysis">
          <h3>🎯 주요 특징</h3>
          <ul>
            <li><strong>프로그래밍 언어:</strong> Java 배열 및 메서드, Python 자료구조 활용</li>
            <li><strong>다양한 언어 비교:</strong> Java, Python, C언어의 기본 문법과 실행 결과</li>
            <li><strong>실무 중심:</strong> 실제 코딩에서 자주 사용되는 패턴과 문법</li>
            <li><strong>기본기 중시:</strong> 각 언어의 핵심 개념과 동작 원리 이해</li>
            <li><strong>실행 결과 예측:</strong> 코드를 보고 정확한 출력값을 예측하는 능력</li>
          </ul>
          
          <h3>📈 학습 포인트</h3>
          <ul>
            <li>Java 정적 배열과 메서드 호출 과정 이해</li>
            <li>Python 자료구조(리스트, 집합) 변환과 정렬 함수 활용</li>
            <li>각 프로그래밍 언어의 특성과 문법 차이점 파악</li>
            <li>코드 실행 흐름을 따라가며 결과 예측하는 연습</li>
            <li>null 값 처리와 배열 초기화 개념 정리</li>
          </ul>
        </div>
      </div>

      <div className="reference-section">
        <h2>📖 참고 자료</h2>
        <p>출처: <a href="https://chobopark.tistory.com/495" target="_blank" rel="noopener noreferrer">2024년 3회 정보처리기사 실기 복원 문제 - Life-Journey 블로그</a></p>
      </div>
    </div>
  );
};

export default Exam2024Third; 