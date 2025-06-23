import React from 'react';

const SqlUtilization = () => {
  return (
    <div>
      <h2>SQL 활용</h2>
      <p><b>[핵심] DDL(데이터 정의어):</b> CREATE, ALTER, DROP (테이블, 뷰, 인덱스 생성 및 변경)</p>
      <p><b>[중요] DML(데이터 조작어):</b> SELECT, INSERT, UPDATE, DELETE (데이터 검색, 삽입, 수정, 삭제)</p>
      <p><b>[시험] DCL(데이터 제어어):</b> GRANT, REVOKE (권한 부여 및 회수)</p>
      <p><b>[추가] TCL(트랜잭션 제어어):</b> COMMIT, ROLLBACK, SAVEPOINT</p>
    </div>
  );
};

export default SqlUtilization; 