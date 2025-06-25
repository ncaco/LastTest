import React from 'react';

const Exam2025First: React.FC = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>2025년도-1회차 정보처리기사 실기 복원 문제</h1>
        <p className="page-description">
          2025년 1회 정보처리기사 실기 시험 복원 문제입니다. 총 20문항으로 구성되어 있으며, 최신 출제 경향을 반영한 문제들입니다.
        </p>
      </div>

      <div className="content-section">
        <h2>📝 문제 1. 네트워크 보안 기법</h2>
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

      <div className="content-section">
        <h2>📝 문제 2. 데이터베이스 관계대수</h2>
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

      <div className="content-section">
        <h2>📝 문제 3. 프로그래밍 언어 (Python)</h2>
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

      <div className="content-section">
        <h2>📝 문제 4. 소프트웨어 아키텍처 패턴</h2>
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

      <div className="content-section">
        <h2>📝 문제 5. SQL 활용</h2>
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

      <div className="content-section">
        <h2>📝 문제 6. 자료구조</h2>
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

      <div className="content-section">
        <h2>📝 문제 7. 프로그래밍 언어 (Java)</h2>
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

      <div className="content-section">
        <h2>📝 문제 8. 네트워크 프로토콜</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 네트워크 프로토콜에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( )는 신뢰성 있는 연결지향 통신을 제공하는 전송 계층 프로토콜이다.</p>
            <p>( )는 빠른 전송을 위한 비연결지향 통신을 제공하는 전송 계층 프로토콜이다.</p>
            <p>( )는 네트워크 계층에서 패킷의 경로를 결정하는 프로토콜이다.</p>
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

      <div className="content-section">
        <h2>📝 문제 9. 소프트웨어 테스팅</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 테스트 기법에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 테스트는 경계값 근처에서 오류가 발생할 가능성이 높다는 점을 이용한 테스트 기법이다.</p>
            <p>( ) 테스트는 입력 도메인을 여러 클래스로 나누어 각 클래스에서 대표값을 선택하는 테스트 기법이다.</p>
            <p>( ) 테스트는 원인과 결과의 논리적 관계를 그래프로 표현하여 테스트 케이스를 설계하는 기법이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>경계값 분석(Boundary Value Analysis)</strong></li>
              <li>두 번째 괄호: <strong>동등 분할(Equivalence Partitioning)</strong></li>
              <li>세 번째 괄호: <strong>원인-결과 그래프(Cause-Effect Graph)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 10. 데이터베이스 정규화</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 정규화에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>제1정규형(1NF)은 릴레이션의 모든 도메인이 ( )이어야 한다는 조건이다.</p>
            <p>제2정규형(2NF)은 제1정규형을 만족하면서 ( ) 함수 종속성을 제거한 형태이다.</p>
            <p>제3정규형(3NF)은 제2정규형을 만족하면서 ( ) 함수 종속성을 제거한 형태이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>원자값(Atomic Value)</strong></li>
              <li>두 번째 괄호: <strong>부분(Partial)</strong></li>
              <li>세 번째 괄호: <strong>이행(Transitive)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 11. 프로그래밍 언어 (C언어)</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 C 코드의 실행 결과를 작성하시오.</p>
          <div className="code-block">
            <pre>{`
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = &arr[2];
    
    printf("%d ", *ptr);
    printf("%d ", *(ptr + 1));
    printf("%d ", *(ptr - 1));
    printf("%d", ptr[1]);
    
    return 0;
}
            `}</pre>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>30 40 20 40</pre>
            <p><strong>해설:</strong></p>
            <ul>
              <li>ptr = &arr[2] → ptr은 arr[2](30)을 가리킴</li>
              <li>*ptr = 30</li>
              <li>*(ptr + 1) = arr[3] = 40</li>
              <li>*(ptr - 1) = arr[1] = 20</li>
              <li>ptr[1] = *(ptr + 1) = arr[3] = 40</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 12. 운영체제</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 프로세스 스케줄링 알고리즘에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 스케줄링은 CPU 점유 시간이 가장 짧은 프로세스를 우선적으로 처리하는 알고리즘이다.</p>
            <p>( ) 스케줄링은 각 프로세스에 시간 할당량을 부여하여 순환하며 처리하는 알고리즘이다.</p>
            <p>( ) 스케줄링은 우선순위가 높은 프로세스를 먼저 처리하는 알고리즘이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>SJF(Shortest Job First)</strong></li>
              <li>두 번째 괄호: <strong>RR(Round Robin)</strong></li>
              <li>세 번째 괄호: <strong>Priority 스케줄링</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 13. 애자일 방법론</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 애자일 방법론에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( )는 매일 정해진 시간에 팀원들이 모여 어제 한 일, 오늘 할 일, 문제점을 공유하는 짧은 회의이다.</p>
            <p>( )는 개발 주기의 끝에서 개발팀이 완료한 작업을 검토하고 개선점을 논의하는 회의이다.</p>
            <p>( )는 제품 소유자가 개발할 기능들의 우선순위를 관리하는 목록이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>데일리 스탠드업(Daily Standup) 또는 일일 스크럼(Daily Scrum)</strong></li>
              <li>두 번째 괄호: <strong>스프린트 회고(Sprint Retrospective)</strong></li>
              <li>세 번째 괄호: <strong>제품 백로그(Product Backlog)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 14. 디자인 패턴</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 GoF 디자인 패턴에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 패턴은 어떤 클래스의 인스턴스가 오직 하나만 생성되도록 보장하는 패턴이다.</p>
            <p>( ) 패턴은 객체의 상태 변화를 관찰하는 관찰자들에게 자동으로 알림을 보내는 패턴이다.</p>
            <p>( ) 패턴은 복잡한 객체의 생성 과정을 단계별로 나누어 처리하는 패턴이다.</p>
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

      <div className="content-section">
        <h2>📝 문제 15. 정보보안</h2>
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
        <h2>📝 문제 16. 신기술 동향</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 신기술에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( )는 중앙 집중식 서버 없이 네트워크 참여자들이 직접 연결되어 데이터를 공유하는 분산 네트워크 기술이다.</p>
            <p>( )는 데이터를 블록 단위로 나누어 체인 형태로 연결한 분산 저장 기술로, 데이터의 위변조를 방지할 수 있다.</p>
            <p>( )는 물리적 서버를 가상화하여 여러 개의 가상 서버로 분할하는 기술이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>P2P(Peer-to-Peer)</strong></li>
              <li>두 번째 괄호: <strong>블록체인(Blockchain)</strong></li>
              <li>세 번째 괄호: <strong>가상화(Virtualization)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 17. 프로그래밍 언어 (Python)</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 Python 코드의 실행 결과를 작성하시오.</p>
          <div className="code-block">
            <pre>{`
def recursive_sum(n):
    if n <= 1:
        return n
    else:
        return n + recursive_sum(n - 1)

result = recursive_sum(4)
print(result)
            `}</pre>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>10</pre>
            <p><strong>해설:</strong></p>
            <ul>
              <li>recursive_sum(4) = 4 + recursive_sum(3)</li>
              <li>recursive_sum(3) = 3 + recursive_sum(2)</li>
              <li>recursive_sum(2) = 2 + recursive_sum(1)</li>
              <li>recursive_sum(1) = 1</li>
              <li>따라서 4 + 3 + 2 + 1 = 10</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 18. 데이터베이스 무결성</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 데이터베이스 무결성에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 무결성은 기본키 값이 NULL이거나 중복될 수 없다는 제약조건이다.</p>
            <p>( ) 무결성은 외래키 값이 참조하는 릴레이션의 기본키 값과 일치하거나 NULL이어야 한다는 제약조건이다.</p>
            <p>( ) 무결성은 사용자가 정의한 비즈니스 규칙을 위반하지 않아야 한다는 제약조건이다.</p>
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

      <div className="content-section">
        <h2>📝 문제 19. 시스템 보안</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 보안 시스템에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( )는 네트워크 트래픽을 모니터링하고 의심스러운 활동을 탐지하는 보안 시스템이다.</p>
            <p>( )는 인가되지 않은 접근을 차단하기 위해 네트워크 간의 트래픽을 제어하는 보안 시스템이다.</p>
            <p>( )는 암호화된 터널을 통해 안전한 원격 접속을 제공하는 기술이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>IDS(Intrusion Detection System)</strong></li>
              <li>두 번째 괄호: <strong>방화벽(Firewall)</strong></li>
              <li>세 번째 괄호: <strong>VPN(Virtual Private Network)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 20. 소프트웨어 품질</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 소프트웨어 품질 특성에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( )는 소프트웨어가 명시된 조건에서 요구된 기능을 정확하게 수행하는 능력이다.</p>
            <p>( )는 소프트웨어가 사용자에게 이해하기 쉽고 학습하기 쉬운 정도이다.</p>
            <p>( )는 소프트웨어가 변경, 수정, 개선되기 쉬운 정도이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>정확성(Correctness) 또는 기능성(Functionality)</strong></li>
              <li>두 번째 괄호: <strong>사용성(Usability)</strong></li>
              <li>세 번째 괄호: <strong>유지보수성(Maintainability)</strong></li>
            </ul>
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