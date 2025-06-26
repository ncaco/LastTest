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
        <h2>📝 문제 7. C언어 프로그래밍</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 C언어 코드의 실행 결과를 작성하시오.</p>
          <div className="code-block">
            <pre>{`
#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *p = arr + 2;
    
    printf("%d ", *p);
    printf("%d ", *(p + 1));
    printf("%d", *(p - 1));
    
    return 0;
}
            `}</pre>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>3 4 2</pre>
            <p><strong>해설:</strong></p>
            <ul>
              <li>p = arr + 2는 arr[2]의 주소를 가리킴</li>
              <li>*p = arr[2] = 3</li>
              <li>*(p + 1) = arr[3] = 4</li>
              <li>*(p - 1) = arr[1] = 2</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 8. 데이터베이스 정규화</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 테이블을 3NF(제3정규형)까지 정규화하여 최종 테이블 구조를 작성하시오.</p>
          <div className="code-block">
            <p>학생성적(학번, 학생명, 과목코드, 과목명, 담당교수, 성적)</p>
            <p>함수종속: 학번 → 학생명, 과목코드 → 과목명, 담당교수, 학번+과목코드 → 성적</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <div className="code-block">
              <pre>{`
학생(학번, 학생명)
과목(과목코드, 과목명, 담당교수)
성적(학번, 과목코드, 성적)
              `}</pre>
            </div>
            <p><strong>해설:</strong></p>
            <ul>
              <li>1NF: 원자값으로 구성 (이미 만족)</li>
              <li>2NF: 부분함수종속 제거 → 학생정보와 과목정보 분리</li>
              <li>3NF: 이행함수종속 제거 → 과목명과 담당교수를 과목 테이블로 분리</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 9. 운영체제 스케줄링</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 프로세스들에 대해 SJF(Shortest Job First) 스케줄링을 적용할 때, 평균 대기시간을 계산하시오.</p>
          <div className="code-block">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>프로세스</th>
                  <th>도착시간</th>
                  <th>실행시간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>P1</td>
                  <td>0</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>P2</td>
                  <td>1</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>P3</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>P4</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>평균 대기시간: 4시간</pre>
            <p><strong>해설:</strong></p>
            <ul>
              <li>실행 순서: P1(0-8) → P4(8-9) → P3(9-11) → P2(11-15)</li>
              <li>대기시간: P1=0, P2=10, P3=7, P4=5</li>
              <li>평균 대기시간 = (0+10+7+5)/4 = 5.5시간</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 10. Python 딕셔너리</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 Python 코드의 실행 결과를 작성하시오.</p>
          <div className="code-block">
            <pre>{`
data = {'a': 1, 'b': 2, 'c': 3}
result = {}

for key, value in data.items():
    if value % 2 == 1:
        result[key] = value * 2

print(sorted(result.items()))
            `}</pre>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>[('a', 2), ('c', 6)]</pre>
            <p><strong>해설:</strong></p>
            <ul>
              <li>홀수인 값 찾기: a=1(홀수), c=3(홀수)</li>
              <li>홀수 값에 2를 곱함: a=2, c=6</li>
              <li>sorted()로 키 기준 정렬: [('a', 2), ('c', 6)]</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 11. 소프트웨어 테스팅</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 소프트웨어 테스트 기법에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 테스트는 소프트웨어 내부 구조를 모르는 상태에서 기능 명세서를 바탕으로 테스트하는 기법이다.</p>
            <p>( ) 테스트는 소프트웨어 내부 구조와 로직을 바탕으로 테스트하는 기법이다.</p>
            <p>( ) 테스트는 경계값 부근에서 오류가 발생할 확률이 높다는 가정하에 경계값을 테스트하는 기법이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>블랙박스(Black Box)</strong></li>
              <li>두 번째 괄호: <strong>화이트박스(White Box)</strong></li>
              <li>세 번째 괄호: <strong>경계값 분석(Boundary Value Analysis)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 12. UML 다이어그램</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 UML 관계에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 관계는 한 클래스가 다른 클래스를 포함하는 관계로, 전체와 부분의 관계를 나타낸다.</p>
            <p>( ) 관계는 일반적인 것과 구체적인 것 사이의 관계로, 상속 관계를 나타낸다.</p>
            <p>( ) 관계는 한 클래스가 다른 클래스의 객체를 사용하는 관계를 나타낸다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>집합(Aggregation) 또는 합성(Composition)</strong></li>
              <li>두 번째 괄호: <strong>일반화(Generalization)</strong></li>
              <li>세 번째 괄호: <strong>연관(Association) 또는 의존(Dependency)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 13. Java 상속과 오버라이딩</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 Java 코드의 실행 결과를 작성하시오.</p>
          <div className="code-block">
            <pre>{`
class Animal {
    public void sound() {
        System.out.print("Animal ");
    }
}

class Dog extends Animal {
    public void sound() {
        System.out.print("Dog ");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
        
        Dog d = new Dog();
        d.sound();
    }
}
            `}</pre>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>Dog Dog </pre>
            <p><strong>해설:</strong></p>
            <ul>
              <li>Animal a = new Dog(): 다형성, Dog의 sound() 메서드 호출</li>
              <li>Dog d = new Dog(): Dog의 sound() 메서드 호출</li>
              <li>오버라이딩으로 인해 두 번 모두 "Dog " 출력</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 14. 정보시스템 보안</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 암호화 방식에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 암호화는 하나의 키로 암호화와 복호화를 모두 수행하는 방식이다.</p>
            <p>( ) 암호화는 공개키와 개인키 두 개의 키를 사용하는 방식이다.</p>
            <p>( )는 메시지의 무결성을 검증하기 위해 사용되는 일방향 함수이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>대칭키(Symmetric Key)</strong></li>
              <li>두 번째 괄호: <strong>비대칭키(Asymmetric Key) 또는 공개키(Public Key)</strong></li>
              <li>세 번째 괄호: <strong>해시 함수(Hash Function)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 15. SQL JOIN</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 조건에 맞는 SQL문을 작성하시오.</p>
          <div className="code-block">
            <p>학생(student_id, name, dept_id) 테이블과 학과(dept_id, dept_name) 테이블에서</p>
            <p>모든 학과의 정보와 해당 학과에 속한 학생 수를 조회하되,</p>
            <p>학생이 없는 학과도 포함하여 학과명 오름차순으로 정렬하시오.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>{`
SELECT d.dept_name, COUNT(s.student_id) AS student_count
FROM 학과 d
LEFT JOIN 학생 s ON d.dept_id = s.dept_id
GROUP BY d.dept_id, d.dept_name
ORDER BY d.dept_name;
            `}</pre>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 16. 자료구조 스택</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 스택 연산을 순서대로 수행했을 때 최종 스택의 상태를 작성하시오.</p>
          <div className="code-block">
            <p>초기 상태: 빈 스택</p>
            <p>1. push(10)</p>
            <p>2. push(20)</p>
            <p>3. push(30)</p>
            <p>4. pop()</p>
            <p>5. push(40)</p>
            <p>6. pop()</p>
            <p>7. push(50)</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>스택 상태 (top → bottom): 50, 20, 10</pre>
            <p><strong>해설:</strong></p>
            <ul>
              <li>push(10): [10]</li>
              <li>push(20): [10, 20]</li>
              <li>push(30): [10, 20, 30]</li>
              <li>pop(): [10, 20] (30 제거)</li>
              <li>push(40): [10, 20, 40]</li>
              <li>pop(): [10, 20] (40 제거)</li>
              <li>push(50): [10, 20, 50]</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 17. 소프트웨어 생명주기</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 소프트웨어 생명주기 모델에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 모델은 각 단계를 순차적으로 진행하며, 이전 단계가 완료되어야 다음 단계로 진행할 수 있는 모델이다.</p>
            <p>( ) 모델은 시제품을 제작하여 사용자의 요구사항을 정확히 파악한 후 개발하는 모델이다.</p>
            <p>( ) 모델은 시스템을 여러 개의 작은 단위로 나누어 각각을 폭포수 모델로 개발하는 점진적 모델이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>폭포수(Waterfall)</strong></li>
              <li>두 번째 괄호: <strong>프로토타입(Prototype)</strong></li>
              <li>세 번째 괄호: <strong>점증적(Incremental)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 18. 네트워크 토폴로지</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 네트워크 토폴로지에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 토폴로지는 모든 노드가 중앙의 허브나 스위치에 연결된 형태이다.</p>
            <p>( ) 토폴로지는 노드들이 원형으로 연결되어 데이터가 한 방향으로 전송되는 형태이다.</p>
            <p>( ) 토폴로지는 모든 노드가 하나의 통신선에 연결된 형태이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>스타(Star)</strong></li>
              <li>두 번째 괄호: <strong>링(Ring)</strong></li>
              <li>세 번째 괄호: <strong>버스(Bus)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 19. Python 문자열 처리</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 Python 코드의 실행 결과를 작성하시오.</p>
          <div className="code-block">
            <pre>{`
text = "Hello World Python"
words = text.split()
result = []

for word in words:
    if len(word) > 5:
        result.append(word.upper())
    else:
        result.append(word.lower())

print(" ".join(result))
            `}</pre>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>hello world PYTHON</pre>
            <p><strong>해설:</strong></p>
            <ul>
              <li>words = ["Hello", "World", "Python"]</li>
              <li>"Hello" (길이 5): 5보다 크지 않음 → "hello"</li>
              <li>"World" (길이 5): 5보다 크지 않음 → "world"</li>
              <li>"Python" (길이 6): 5보다 큼 → "PYTHON"</li>
              <li>결과: "hello world PYTHON"</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 20. 데이터베이스 트랜잭션</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 트랜잭션의 ACID 속성에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( )는 트랜잭션이 모두 성공하거나 모두 실패해야 함을 의미한다.</p>
            <p>( )는 트랜잭션 실행 전후에 데이터베이스가 일관된 상태를 유지해야 함을 의미한다.</p>
            <p>( )는 동시에 실행되는 트랜잭션들이 서로 영향을 주지 않아야 함을 의미한다.</p>
            <p>( )는 성공적으로 완료된 트랜잭션의 결과가 영구적으로 저장되어야 함을 의미한다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>원자성(Atomicity)</strong></li>
              <li>두 번째 괄호: <strong>일관성(Consistency)</strong></li>
              <li>세 번째 괄호: <strong>고립성(Isolation)</strong></li>
              <li>네 번째 괄호: <strong>지속성(Durability)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📚 출제 경향 분석</h2>
        <div className="trend-analysis">
          <h3>🎯 주요 특징</h3>
          <ul>
            <li><strong>프로그래밍 언어:</strong> Java, Python, C언어의 기본 문법과 실행 결과</li>
            <li><strong>데이터베이스:</strong> SQL 작성, 정규화, 트랜잭션 ACID 속성</li>
            <li><strong>소프트웨어 공학:</strong> 생명주기 모델, 테스트 기법, 디자인 패턴</li>
            <li><strong>네트워크:</strong> 프로토콜, 토폴로지, 보안 공격 기법</li>
            <li><strong>자료구조:</strong> 스택, 큐 등 기본 자료구조 연산</li>
            <li><strong>운영체제:</strong> 프로세스 스케줄링, 메모리 관리</li>
          </ul>
          
          <h3>📈 학습 포인트</h3>
          <ul>
            <li>각 프로그래밍 언어의 특성과 문법 차이점 숙지</li>
            <li>SQL 고급 기능(JOIN, GROUP BY, HAVING) 활용 능력</li>
            <li>소프트웨어 공학 기본 개념과 용어 정리</li>
            <li>네트워크 기본 지식과 보안 공격 유형 이해</li>
            <li>자료구조의 동작 원리와 연산 과정 이해</li>
            <li>데이터베이스 설계 원칙과 정규화 과정 숙지</li>
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