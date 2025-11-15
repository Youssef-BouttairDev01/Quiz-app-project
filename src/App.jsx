import React, { useState } from 'react';
import './styles/style.css'; 
import quizzes from './Quizdata/QuizData';

import Home from './components/Home';
import QuizSelection from './components/QuizSelection';
import QuizGame from './components/QuizGame';

function App() {
  
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);


  
  const startApp = () => {
    setPage("menu");
  };

  
  const selectCategory = (selectedTopic) => {
    setCategory(selectedTopic);
    setPage("quiz");
  };

  
  const finishQuiz = (finalScore, totalQuestions) => {
    setScore(finalScore);
    setTotal(totalQuestions);
    setPage("score");
  };

  
  const restartApp = () => {
    setScore(0);
    setCategory(null);
    setPage("home");
  };

  
  
  return (
    <div className="app-container">
      
      
      {page === "home" && (
        <Home onStart={startApp} />
      )}

     
      {page === "menu" && (
        <QuizSelection 
          data={quizzes} 
          onSelect={selectCategory} 
        />
      )}

      
      {page === "quiz" && (
        <QuizGame 
          questions={quizzes[category]}
          topicName={category} 
          onFinish={finishQuiz} 
        />
      )}

      
      {page === "score" && (
        <div className="glass-box">
          <h1>Quiz Completed!</h1>
          <p>You scored:</p>
          <div className="score-text">{score} / {total}</div>
          <button className="btn-primary" onClick={restartApp}>
            Play Again
          </button>
        </div>
      )}

    </div>
  );
}

export default App;