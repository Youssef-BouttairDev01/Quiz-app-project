import React from 'react';

function Home({ onStart }) {
  return (
    <div className="glass-box">
      <h1 style={{ fontSize: '3rem', margin: '10px 0' }}>QuizMagic</h1>
      <p style={{ opacity: 0.8 }}> 50+ Quizzes in Different Subjects</p>
      
      <img 
        src="/QuizPictures/tresure.png" 
        alt="Treasure" 
        style={{ width: "400px",
                display: "block",
                margin: "40px auto"}} 
      />
      
      <br />
      
      <button className="btn-primary" onClick={onStart}>
        Start Playing
      </button>
    </div>
  );
}

export default Home;