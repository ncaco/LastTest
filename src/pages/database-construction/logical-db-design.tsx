import React from 'react';

const LogicalDbDesign = () => {
  return (
    <div>
      <h2>논리 데이터베이스 설계</h2>
      <p><b>[핵심] 정규화:</b> 데이터 중복 제거, 무결성 유지. 1NF, 2NF, 3NF, BCNF, 4NF, 5NF.</p>
      <p><b>[중요] ERD(개체-관계 다이어그램):</b> 개체, 속성, 관계(1:1, 1:N, N:M).</p>
      <p><b>[시험] 논리적 설계 단계:</b> 개체 추출 → 속성 정의 → 관계 설정 → 정규화.</p>
      <p><b>[추가] 정규화 단계:</b> 1NF(원자값), 2NF(부분 함수적 종속성 제거), 3NF(이행적 종속성 제거), BCNF(결정자가 후보키).</p>
      <p><b>[예시] ERD 표기법:</b> IE(Information Engineering), Barker, IDEF1X, UML 표기법.</p>
      <p><b>[예시] 반정규화:</b> 성능 향상을 위해 의도적으로 정규화를 완화. 테이블 병합, 컬럼 중복.</p>
    </div>
  );
};

export default LogicalDbDesign; 