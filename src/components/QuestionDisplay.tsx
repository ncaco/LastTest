import React, { useState } from 'react';
import type { Question } from '../types/question';

interface QuestionDisplayProps {
  question: Question;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question-display">
      <h3>{question.questionId}. {question.question}</h3>
      <p><strong>카테고리:</strong> {question.category}</p>
      <p><strong>난이도:</strong> {question.difficulty}</p>
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? '정답 숨기기' : '정답 보기'}
      </button>
      {showAnswer && (
        <div className="answer-section">
          <h4>정답</h4>
          <p>{question.answer}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionDisplay; 