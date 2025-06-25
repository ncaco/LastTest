import React from 'react';

const Exam2024Third: React.FC = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>2024년도-3회차 정보처리기사 실기 복원 문제</h1>
        <p className="page-description">
          2024년 3회 정보처리기사 실기 시험 복원 문제입니다. 실무 중심의 문제들로 구성되어 있습니다.
        </p>
      </div>

      <div className="content-section">
        <h2>📝 문제 1. 관계 데이터베이스</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 릴레이션에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( )는 릴레이션에서 중복되는 튜플을 허용하지 않는 제약조건이다.</p>
            <p>( )는 다른 릴레이션의 기본키를 참조하는 속성 또는 속성들의 집합이다.</p>
            <p>( )는 릴레이션에서 튜플을 유일하게 식별할 수 있는 속성 또는 속성들의 집합이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>개체 무결성(Entity Integrity)</strong></li>
              <li>두 번째 괄호: <strong>외래키(Foreign Key)</strong></li>
              <li>세 번째 괄호: <strong>기본키(Primary Key)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 2. 프로그래밍 언어 (Java)</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 Java 코드의 실행 결과를 작성하시오.</p>
          <div className="code-block">
            <pre>{`
class Parent {
    void show() {
        System.out.print("Parent ");
    }
}

class Child extends Parent {
    void show() {
        System.out.print("Child ");
    }
    
    void display() {
        super.show();
        this.show();
    }
}

public class Test {
    public static void main(String[] args) {
        Child c = new Child();
        c.display();
        Parent p = new Child();
        p.show();
    }
}
            `}</pre>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>Parent Child Child</pre>
            <p><strong>해설:</strong></p>
            <ul>
              <li>c.display(): super.show()로 "Parent " 출력, this.show()로 "Child " 출력</li>
              <li>p.show(): 다형성에 의해 Child의 show() 메서드가 호출되어 "Child " 출력</li>
            </ul>
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
            <li><strong>데이터베이스:</strong> 관계형 데이터베이스의 무결성 제약조건과 고급 SQL 활용</li>
            <li><strong>객체지향 프로그래밍:</strong> 상속, 다형성 등 Java의 핵심 개념</li>
            <li><strong>디자인 패턴:</strong> GoF 패턴의 실무 적용 사례</li>
            <li><strong>네트워크:</strong> 주요 프로토콜의 특징과 용도</li>
            <li><strong>보안:</strong> 웹 애플리케이션의 주요 취약점과 공격 기법</li>
          </ul>
          
          <h3>📈 학습 포인트</h3>
          <ul>
            <li>데이터베이스 무결성 제약조건과 GROUP BY, HAVING 절 활용</li>
            <li>Java의 상속, 메서드 오버라이딩, 다형성 개념 정리</li>
            <li>주요 디자인 패턴의 목적과 구현 방법 이해</li>
            <li>네트워크 프로토콜별 특성과 사용 목적 구분</li>
            <li>웹 보안 취약점과 대응 방안 숙지</li>
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