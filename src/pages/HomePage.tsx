import React from 'react';
import { Link } from 'react-router-dom';
import { mockQuestions } from '../data/mockQuestions';

const HomePage: React.FC = () => {
  // 처음 20개 문제만 가져오기 (현재 mockQuestions에는 5개뿐이므로 모두 표시)
  const questions = mockQuestions.slice(0, 20);

  return (
    <div style={{ 
      height: '100vh',
      overflow: 'auto',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '30px',
          padding: '10px 0',
          borderBottom: '1px solid #ddd'
        }}>
          <h1 style={{ margin: 0, color: '#333' }}>
            정보처리기사 문제은행
          </h1>
          <Link 
            to="/docs"
            style={{
              padding: '10px 20px',
              backgroundColor: '#3498db',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2980b9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3498db';
            }}
          >
            문서 보기
          </Link>
        </div>
        
        <div style={{ display: 'grid', gap: '20px', paddingBottom: '40px' }}>
          {questions.map((question, index) => (
            <div 
              key={question.questionId} 
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <h3 style={{ margin: 0, color: '#2c3e50' }}>
                  문제 {index + 1}
                </h3>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{
                    backgroundColor: '#3498db',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {question.category}
                  </span>
                  <span style={{
                    backgroundColor: 
                      question.difficulty === '상' ? '#e74c3c' :
                      question.difficulty === '중' ? '#f39c12' : '#27ae60',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {question.difficulty}
                  </span>
                </div>
              </div>
              <p style={{ 
                fontSize: '16px', 
                lineHeight: '1.6', 
                color: '#2c3e50',
                marginBottom: '15px',
                fontWeight: '500'
              }}>
                {question.question}
              </p>
              <details style={{ marginTop: '10px' }}>
                <summary style={{ 
                  cursor: 'pointer', 
                  color: '#3498db',
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                  답안 보기
                </summary>
                <div style={{
                  backgroundColor: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '6px',
                  borderLeft: '4px solid #3498db',
                  marginTop: '10px'
                }}>
                  <p style={{ 
                    fontSize: '14px', 
                    lineHeight: '1.6', 
                    color: '#2c3e50',
                    margin: 0
                  }}>
                    {question.answer}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>
        
        {questions.length < 20 && (
          <div style={{
            textAlign: 'center',
            marginTop: '30px',
            marginBottom: '40px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #dee2e6'
          }}>
            <p style={{ color: '#6c757d', margin: 0 }}>
              현재 {questions.length}개의 문제가 등록되어 있습니다. 
              더 많은 문제가 추가될 예정입니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage; 