import React from 'react';

const Exam2023First: React.FC = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>2023년도-1회차 정보처리기사 실기 복원 문제</h1>
        <p className="page-description">
          2023년 1회 정보처리기사 실기 시험 복원 문제입니다. 전 영역에 걸쳐 균형있게 출제된 문제들로 구성되어 있습니다.
        </p>
      </div>

      <div className="content-section">
        <h2>📝 문제 1. 자료구조</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 자료구조에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( )는 Last In First Out(LIFO) 구조로 동작하는 자료구조이다.</p>
            <p>( )는 First In First Out(FIFO) 구조로 동작하는 자료구조이다.</p>
            <p>( )는 노드들이 트리 형태로 연결된 계층적 자료구조이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>스택(Stack)</strong></li>
              <li>두 번째 괄호: <strong>큐(Queue)</strong></li>
              <li>세 번째 괄호: <strong>트리(Tree)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 2. 프로그래밍 언어 (Python)</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 Python 코드의 실행 결과를 작성하시오.</p>
          <div className="code-block">
            <pre>{`
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

result = []
for i in range(5):
    result.append(fibonacci(i))

print(result)
            `}</pre>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>[0, 1, 1, 2, 3]</pre>
            <p><strong>해설:</strong></p>
            <ul>
              <li>fibonacci(0) = 0</li>
              <li>fibonacci(1) = 1</li>
              <li>fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1</li>
              <li>fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2</li>
              <li>fibonacci(4) = fibonacci(3) + fibonacci(2) = 2 + 1 = 3</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 3. SQL 활용</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 조건에 맞는 SQL문을 작성하시오.</p>
          <div className="code-block">
            <p>상품(Product) 테이블에서 카테고리별 평균 가격을 구하되,</p>
            <p>평균 가격이 50,000원 이상인 카테고리만 조회하고, 평균 가격 오름차순으로 정렬하시오.</p>
            <p>테이블 구조: Product(product_id, name, price, category)</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>{`
SELECT category, AVG(price) AS avg_price
FROM Product
GROUP BY category
HAVING AVG(price) >= 50000
ORDER BY avg_price ASC;
            `}</pre>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 4. 운영체제</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 프로세스 스케줄링 알고리즘에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 스케줄링은 먼저 도착한 프로세스를 먼저 처리하는 비선점 스케줄링 알고리즘이다.</p>
            <p>( ) 스케줄링은 CPU 버스트 시간이 가장 짧은 프로세스를 먼저 처리하는 알고리즘이다.</p>
            <p>( ) 스케줄링은 각 프로세스에 동일한 시간 할당량을 주어 순환하며 처리하는 선점 스케줄링 알고리즘이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>FCFS(First Come First Served)</strong></li>
              <li>두 번째 괄호: <strong>SJF(Shortest Job First)</strong></li>
              <li>세 번째 괄호: <strong>RR(Round Robin)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 5. 네트워크</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 OSI 7계층에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 계층은 실제 전기적 신호를 전송하는 물리적 매체를 다루는 계층이다.</p>
            <p>( ) 계층은 네트워크 간의 경로 결정과 논리적 주소 지정을 담당하는 계층이다.</p>
            <p>( ) 계층은 사용자 인터페이스와 네트워크 서비스를 제공하는 최상위 계층이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>물리(Physical)</strong></li>
              <li>두 번째 괄호: <strong>네트워크(Network)</strong></li>
              <li>세 번째 괄호: <strong>응용(Application)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 6. 정보보안</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 암호화 기법에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 암호화는 송신자와 수신자가 동일한 키를 사용하는 암호화 방식이다.</p>
            <p>( ) 암호화는 공개키와 개인키 한 쌍을 사용하는 암호화 방식이다.</p>
            <p>( )는 메시지의 무결성을 검증하기 위해 사용되는 고정 길이의 값이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>대칭키(Symmetric Key)</strong></li>
              <li>두 번째 괄호: <strong>비대칭키(Asymmetric Key) 또는 공개키(Public Key)</strong></li>
              <li>세 번째 괄호: <strong>해시(Hash)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📚 출제 경향 분석</h2>
        <div className="trend-analysis">
          <h3>🎯 주요 특징</h3>
          <ul>
            <li><strong>자료구조:</strong> 기본 자료구조의 특성과 동작 원리</li>
            <li><strong>알고리즘:</strong> 재귀 함수를 활용한 피보나치 수열 구현</li>
            <li><strong>데이터베이스:</strong> GROUP BY와 HAVING을 활용한 집계 함수</li>
            <li><strong>운영체제:</strong> 프로세스 스케줄링 알고리즘의 특징</li>
            <li><strong>네트워크:</strong> OSI 7계층 모델의 각 계층별 역할</li>
            <li><strong>보안:</strong> 암호화 기법의 분류와 해시 함수</li>
          </ul>
          
          <h3>📈 학습 포인트</h3>
          <ul>
            <li>기본 자료구조(스택, 큐, 트리)의 특성과 활용 방법</li>
            <li>재귀 함수의 동작 원리와 피보나치 수열 계산 과정</li>
            <li>SQL의 GROUP BY, HAVING 절을 활용한 데이터 집계</li>
            <li>주요 프로세스 스케줄링 알고리즘의 동작 방식</li>
            <li>OSI 7계층 모델의 각 계층별 기능과 역할</li>
            <li>대칭키와 비대칭키 암호화의 차이점과 해시 함수의 역할</li>
          </ul>
        </div>
      </div>

      <div className="reference-section">
        <h2>📖 참고 자료</h2>
        <p>출처: <a href="https://chobopark.tistory.com/372" target="_blank" rel="noopener noreferrer">2023년 1회 정보처리기사 실기 복원 문제 - Life-Journey 블로그</a></p>
      </div>
    </div>
  );
};

export default Exam2023First; 