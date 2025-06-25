import React from 'react';

const Exam2024First: React.FC = () => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>2024년도-1회차 정보처리기사 실기 복원 문제</h1>
        <p className="page-description">
          2024년 1회 정보처리기사 실기 시험 복원 문제입니다. 소프트웨어 개발 프로세스 중심의 문제들로 구성되어 있습니다.
        </p>
      </div>

      <div className="content-section">
        <h2>📝 문제 1. 소프트웨어 생명주기 모델</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 소프트웨어 생명주기 모델에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( ) 모델은 각 단계를 순차적으로 진행하며, 이전 단계가 완료되어야 다음 단계로 진행할 수 있는 모델이다.</p>
            <p>( ) 모델은 위험을 최소화하기 위해 점진적으로 개발하는 모델로, 계획 수립, 위험 분석, 개발 및 검증, 고객 평가의 과정을 반복한다.</p>
            <p>( ) 모델은 시스템의 일부분을 반복적으로 개발하여 점진적으로 시스템을 완성해 나가는 모델이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>폭포수(Waterfall)</strong></li>
              <li>두 번째 괄호: <strong>나선형(Spiral)</strong></li>
              <li>세 번째 괄호: <strong>점증적(Incremental)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 2. 요구사항 분석</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 요구사항 분석 기법에 대한 설명에서 괄호안에 알맞는 용어를 작성하시오.</p>
          <div className="code-block">
            <p>( )는 사용자가 시스템과 상호작용하는 시나리오를 기술하는 기법이다.</p>
            <p>( )는 시스템의 기능과 제약사항을 명세서 형태로 기술하는 문서이다.</p>
            <p>( )는 요구사항의 우선순위를 결정하기 위해 비용과 중요도를 고려하는 기법이다.</p>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <ul>
              <li>첫 번째 괄호: <strong>유스케이스(Use Case)</strong></li>
              <li>두 번째 괄호: <strong>SRS(Software Requirements Specification)</strong></li>
              <li>세 번째 괄호: <strong>우선순위 분석(Priority Analysis)</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📝 문제 3. 프로그래밍 언어 (Java)</h2>
        <div className="question-box">
          <p><strong>문제:</strong> 다음 Java 코드의 실행 결과를 작성하시오.</p>
          <div className="code-block">
            <pre>{`
class Animal {
    String name = "Animal";
    
    void sound() {
        System.out.print(name + " ");
    }
}

class Dog extends Animal {
    String name = "Dog";
    
    void sound() {
        System.out.print(name + " ");
    }
}

public class Test {
    public static void main(String[] args) {
        Animal a = new Animal();
        Animal b = new Dog();
        Dog c = new Dog();
        
        a.sound();
        b.sound();
        c.sound();
        
        System.out.print(a.name + " ");
        System.out.print(b.name + " ");
        System.out.print(c.name);
    }
}
            `}</pre>
          </div>
          <div className="answer-box">
            <p><strong>정답:</strong></p>
            <pre>Animal Dog Dog Animal Animal Dog</pre>
            <p><strong>해설:</strong></p>
            <ul>
              <li>메서드는 동적 바인딩, 필드는 정적 바인딩</li>
              <li>a.sound(): Animal 클래스의 sound() → "Animal "</li>
              <li>b.sound(): Dog 클래스의 sound() → "Dog "</li>
              <li>c.sound(): Dog 클래스의 sound() → "Dog "</li>
              <li>필드는 참조 타입에 따라 결정</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>📚 출제 경향 분석</h2>
        <div className="trend-analysis">
          <h3>🎯 주요 특징</h3>
          <ul>
            <li><strong>소프트웨어 공학:</strong> 생명주기 모델과 요구사항 분석 기법 중심</li>
            <li><strong>객체지향:</strong> Java의 상속과 다형성, 동적/정적 바인딩 개념</li>
            <li><strong>개발 방법론:</strong> 전통적 방법론과 최신 방법론의 특징 비교</li>
          </ul>
          
          <h3>📈 학습 포인트</h3>
          <ul>
            <li>소프트웨어 생명주기 모델별 특징과 적용 상황 이해</li>
            <li>요구사항 분석의 주요 산출물과 기법 숙지</li>
            <li>Java의 상속 관계에서 메서드와 필드의 바인딩 차이점 이해</li>
          </ul>
        </div>
      </div>

      <div className="reference-section">
        <h2>📖 참고 자료</h2>
        <p>출처: <a href="https://chobopark.tistory.com/476" target="_blank" rel="noopener noreferrer">2024년 1회 정보처리기사 실기 복원 문제 - Life-Journey 블로그</a></p>
      </div>
    </div>
  );
};

export default Exam2024First; 