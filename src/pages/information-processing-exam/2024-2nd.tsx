import React from 'react';

const Exam2024Second: React.FC = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>2024년도-2회차 정보처리기사 실기 복원 문제</h1>
        <p className="page-description">
          2024년 2회 정보처리기사 실기 시험 복원 문제입니다. 데이터베이스 및 프로그래밍 중심의 문제들로 구성되어 있습니다.
        </p>
      </div>

      <div className="content-section">
        <h2>📝 문제 1. 정규화 과정</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 정규화 과정에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( )는 릴레이션에 있는 모든 속성의 도메인이 원자값으로만 구성되어야 한다는 조건이다.</p>
            <p>( )는 기본키가 아닌 모든 속성이 기본키에 완전 함수 종속되어야 한다는 조건이다.</p>
            <p>( )는 기본키가 아닌 모든 속성이 기본키에 대해 이행적 함수 종속 관계를 갖지 않아야 한다는 조건이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>제1정규형(1NF)</strong></li>
              <li>두 번째 괄호: <strong>제2정규형(2NF)</strong></li>
              <li>세 번째 괄호: <strong>제3정규형(3NF)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 2. 프로그래밍 언어 (C언어)</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 C 코드의 실행 결과를 작성하시오.</p>
          <div className="code-block">
            <pre>{`
#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int *ptr = arr;
    
    printf("%d ", *ptr);
    printf("%d ", *(ptr + 2));
    printf("%d ", *ptr + 2);
    printf("%d ", ptr[3]);
    
    return 0;
}
            `}</pre>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>1 3 3 4</pre>
            <p><strong>해설:</strong></p>
            <ul>
              <li>*ptr: arr[0] = 1</li>
              <li>*(ptr + 2): arr[2] = 3</li>
              <li>*ptr + 2: arr[0] + 2 = 1 + 2 = 3</li>
              <li>ptr[3]: arr[3] = 4</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 3. 알고리즘</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 정렬 알고리즘에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 정렬은 인접한 두 원소를 비교하여 정렬하는 방법으로, 시간복잡도가 O(n²)이다.</p>
            <p>( ) 정렬은 배열을 반으로 나누어 각각을 정렬한 다음 병합하는 방법으로, 시간복잡도가 O(n log n)이다.</p>
            <p>( ) 정렬은 피벗을 기준으로 작은 값과 큰 값으로 분할하여 정렬하는 방법이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>버블(Bubble)</strong></li>
              <li>두 번째 괄호: <strong>병합(Merge)</strong></li>
              <li>세 번째 괄호: <strong>퀵(Quick)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 4. SQL 문제</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 조건에 맞는 SQL문을 작성하시오.</p>
          <div className="code-block">
            <p>직원(Employee) 테이블과 부서(Department) 테이블을 조인하여</p>
            <p>부서명이 '개발부'인 직원들의 이름과 급여를 조회하시오.</p>
            <p>테이블 구조:</p>
            <p>Employee(emp_id, name, salary, dept_id)</p>
            <p>Department(dept_id, dept_name)</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>{`
SELECT e.name, e.salary
FROM Employee e
JOIN Department d ON e.dept_id = d.dept_id
WHERE d.dept_name = '개발부';
            `}</pre>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 5. 소프트웨어 테스팅</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 테스트 기법에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 테스트는 소프트웨어의 내부 구조를 고려하지 않고 기능만을 테스트하는 기법이다.</p>
            <p>( ) 테스트는 소프트웨어의 내부 로직 경로를 테스트하는 기법이다.</p>
            <p>( ) 테스트는 블랙박스와 화이트박스 테스트 기법을 결합한 테스트 기법이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>블랙박스(Black Box)</strong></li>
              <li>두 번째 괄호: <strong>화이트박스(White Box)</strong></li>
              <li>세 번째 괄호: <strong>그레이박스(Gray Box)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 6. 시스템 보안</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 보안 기술에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( )는 네트워크 트래픽을 모니터링하고 의심스러운 활동을 탐지하는 보안 시스템이다.</p>
            <p>( )는 인가되지 않은 접근을 차단하기 위해 네트워크 간의 트래픽을 제어하는 보안 시스템이다.</p>
            <p>( )는 데이터를 암호화하여 안전한 통신 채널을 제공하는 네트워크 기술이다.</p>
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
        <h2>📚 출제 경향 분석</h2>
        <div className="trend-analysis">
          <h3>🎯 주요 특징</h3>
          <ul>
            <li><strong>데이터베이스:</strong> 정규화 과정과 조인을 활용한 복합 쿼리 중심</li>
            <li><strong>프로그래밍:</strong> C언어의 포인터와 배열 개념 심화</li>
            <li><strong>알고리즘:</strong> 기본 정렬 알고리즘의 특성과 시간복잡도</li>
            <li><strong>소프트웨어 공학:</strong> 테스트 기법의 분류와 특징</li>
            <li><strong>보안:</strong> 네트워크 보안 시스템의 종류와 역할</li>
          </ul>
          
          <h3>📈 학습 포인트</h3>
          <ul>
            <li>데이터베이스 정규화 과정과 각 단계별 조건 숙지</li>
            <li>C언어 포인터 연산과 배열 접근 방법 연습</li>
            <li>정렬 알고리즘별 시간복잡도와 동작 원리 이해</li>
            <li>테스트 기법 분류와 각 기법의 특징 정리</li>
            <li>네트워크 보안 시스템의 기능과 적용 분야 학습</li>
          </ul>
        </div>
      </div>

      <div className="reference-section">
        <h2>📖 참고 자료</h2>
        <p>출처: <a href="https://chobopark.tistory.com/483" target="_blank" rel="noopener noreferrer">2024년 2회 정보처리기사 실기 복원 문제 - Life-Journey 블로그</a></p>
      </div>
    </div>
  );
};

export default Exam2024Second; 