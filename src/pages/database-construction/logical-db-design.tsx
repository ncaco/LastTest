import React from 'react';

const LogicalDbDesign = () => {
  return (
    <div>
      <h2>논리 데이터베이스 설계</h2>
      <p><b>[핵심] 정규화:</b> 데이터 중복 제거, 무결성 유지. 1NF, 2NF, 3NF, BCNF, 4NF, 5NF.</p>
      <p><b>[중요] ERD(개체-관계 다이어그램):</b> 개체, 속성, 관계(1:1, 1:N, N:M).</p>
      <p><b>[시험] 논리적 설계 단계:</b> 개체 추출 → 속성 정의 → 관계 설정 → 정규화.</p>
    </div>
  );
};

export default LogicalDbDesign; 