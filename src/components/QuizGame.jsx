import React, { useState, useRef } from 'react';

function QuizGame({ questions, topicName, onFinish }) {
  
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0); 
  const [lock, setLock] = useState(false); 

  
  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const currentQuestion = questions[index];

  const checkAns = (e, selectedAnswer) => {
    
    if (lock === false) {
      
      if (currentQuestion.ans === selectedAnswer) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        
        
        option_array[currentQuestion.ans - 1].current.classList.add("correct");
      }
    }
  };

  const nextQuestion = () => {
    
    if (lock === true) {
      
      
      if (index === questions.length - 1) {
        onFinish(score, questions.length);
        return;
      }

      setIndex(prev => prev + 1);
      setLock(false);

      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  return (
    <div className="glass-box">
      
      <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.7 }}>
        <span>Topic: {topicName.toUpperCase()}</span>
        <span>{index + 1} of {questions.length}</span>
      </div>

      

      <h2 className="question-text">{index + 1}. {currentQuestion.question}</h2>

      {/* Les Options */}

      <ul className="options-list">
        <li ref={Option1} className="option-item" onClick={(e) => checkAns(e, 1)}>
          {currentQuestion.option1}
        </li>
        <li ref={Option2} className="option-item" onClick={(e) => checkAns(e, 2)}>
          {currentQuestion.option2}
        </li>
        <li ref={Option3} className="option-item" onClick={(e) => checkAns(e, 3)}>
          {currentQuestion.option3}
        </li>
        <li ref={Option4} className="option-item" onClick={(e) => checkAns(e, 4)}>
          {currentQuestion.option4}
        </li>
      </ul>

      {/* Next Button */}
      
      <button className="btn-primary" onClick={nextQuestion}>
        {index === questions.length - 1 ? "Finish Quiz" : "Next Question"}
      </button>

    </div>
  );
}

export default QuizGame;