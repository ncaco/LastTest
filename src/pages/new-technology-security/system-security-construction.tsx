import React from 'react';

const SystemSecurityConstruction = () => {
  return (
    <div>
      <h2>시스템 보안 구축</h2>
      <p><b>[핵심] 방화벽:</b> 네트워크 접근 제어, 패킷 필터링.</p>
      <p><b>[중요] 침입 탐지/방지 시스템 (IDS/IPS):</b> 비정상 트래픽 탐지 및 차단.</p>
      <p><b>[시험] VPN(가상 사설망):</b> 암호화된 터널을 통한 안전한 원격 접속.</p>
      <p><b>[추가] 보안 취약점 분석:</b> 서비스 거부 공격(DDoS), SQL 인젝션, XSS.</p>
      <p><b>[예시] 네트워크 보안 아키텍처:</b> DMZ(비무장지대), 다계층 방어(Defense in Depth).</p>
      <p><b>[예시] 엔드포인트 보안:</b> 안티바이러스, EDR(Endpoint Detection and Response), 데이터 유출 방지(DLP).</p>
    </div>
  );
};

export default SystemSecurityConstruction; 