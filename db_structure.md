# db_structure.md

이 파일은 정보처리기사 실기 문제에 대한 정보를 저장하는 데이터베이스의 구조를 설명합니다.

## `questions` 테이블

| 필드명      | 타입     | 설명                               |
|-----------|----------|------------------------------------|
| `questionId` | INT      | 문제의 고유 ID (Primary Key)      |
| `question`  | TEXT     | 문제 내용                          |
| `category`  | VARCHAR(50)| 문제 분류 (예: 소프트웨어 개발, 데이터베이스) |
| `difficulty`| VARCHAR(20)| 문제 난이도 (예: 상, 중, 하)        |
| `answer`    | TEXT     | 문제 정답                          | 