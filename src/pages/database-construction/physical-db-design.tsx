import React from 'react';

const PhysicalDbDesign = () => {
  return (
    <div>
      <h2>물리 데이터베이스 설계</h2>
      <p><b>[핵심] 물리적 구조:</b> 저장 레코드 형식, 파일 조직(순차, 직접, 색인 순차), 접근 방법.</p>
      <p><b>[중요] 인덱스:</b> B-트리, 비트맵, 해시 인덱스. 성능 최적화.</p>
      <p><b>[시험] 트랜잭션 및 회복 기법:</b> ACID 특성, 병행 제어(잠금), 회복(로그, 체크포인트).</p>
    </div>
  );
};

export default PhysicalDbDesign; 