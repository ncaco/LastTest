import React from 'react';

const Exam2025First: React.FC = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>2025년도-1회차 정보처리기사 실기 복원 문제</h1>
        <p className="page-description">
          2025년 1회 정보처리기사 실기 시험 복원 문제입니다. 최신 출제 경향을 반영한 문제들로 구성되어 있습니다.
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
        <h2>📝 문제 2. 데이터베이스 정규화</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 관계형 데이터베이스의 정규화에 관한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
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
        <h2>📝 문제 3. 프로그래밍 언어 (Python)</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 Python 코드의 실행 결과를 작성하시오.</p>
          <div className="code-block">
            <pre>{`
def func(x, y=2, *args, **kwargs):
    result = x * y
    for arg in args:
        result += arg
    for key, value in kwargs.items():
        result += value
    return result

print(func(3))
print(func(3, 4))
print(func(3, 4, 5, 6))
print(func(3, 4, 5, 6, a=7, b=8))
            `}</pre>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>{`
6
12
23
38
            `}</pre>
            <p><strong>해설:</strong></p>
            <ul>
              <li>func(3): 3 * 2 = 6</li>
              <li>func(3, 4): 3 * 4 = 12</li>
              <li>func(3, 4, 5, 6): 3 * 4 + 5 + 6 = 23</li>
              <li>func(3, 4, 5, 6, a=7, b=8): 3 * 4 + 5 + 6 + 7 + 8 = 38</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 4. SQL 활용</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 조건에 맞는 SQL문을 작성하시오.</p>
          <div className="code-block">
            <p>학생(Student) 테이블에서 학번, 이름, 학과, 성적을 조회하되,</p>
            <p>성적이 80점 이상인 학생만 조회하고, 성적 내림차순으로 정렬하시오.</p>
            <p>테이블 구조: Student(student_id, name, department, grade)</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>{`
SELECT student_id, name, department, grade
FROM Student
WHERE grade >= 80
ORDER BY grade DESC;
            `}</pre>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 5. 소프트웨어 개발 방법론</h2>
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
        <h2>📝 문제 6. 신기술 동향</h2>
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
        <h2>📚 출제 경향 분석</h2>
        <div className="trend-analysis">
          <h3>🎯 주요 특징</h3>
          <ul>
            <li><strong>네트워크 보안:</strong> 세션 하이재킹 등 실무에서 중요한 보안 개념 출제</li>
            <li><strong>데이터베이스:</strong> 정규화, SQL 활용 등 기본기 중시</li>
            <li><strong>프로그래밍:</strong> Python의 함수 매개변수 활용법 심화 문제</li>
            <li><strong>개발 방법론:</strong> 애자일 방법론의 세부 개념 출제</li>
            <li><strong>신기술:</strong> 블록체인, P2P, 가상화 등 최신 기술 동향</li>
          </ul>
          
          <h3>📈 학습 포인트</h3>
          <ul>
            <li>네트워크 보안 공격 기법과 대응 방안 숙지</li>
            <li>데이터베이스 정규화 과정과 각 단계의 특징 이해</li>
            <li>Python의 매개변수 종류(*args, **kwargs)와 활용법 연습</li>
            <li>애자일 방법론의 구체적인 활동과 산출물 정리</li>
            <li>최신 IT 기술 트렌드와 기본 개념 학습</li>
          </ul>
        </div>
      </div>

      <div className="reference-section">
        <h2>📖 참고 자료</h2>
        <p>출처: <a href="https://chobopark.tistory.com/540" target="_blank" rel="noopener noreferrer">정보처리기사 실기 복원 문제 - Life-Journey 블로그</a></p>
      </div>
    </div>
  );
};

export default Exam2025First; 