import React from 'react';

function QuizSelection({ data, onSelect }) {
  
  
  const topics = Object.keys(data);

  return (
    <div>
      <h1>Let's Play</h1>
      <p>Choose a Category</p>

      <div className="category-grid">
        {topics.map((topic) => (
          <div 
            key={topic} 
            className="category-card" 
            onClick={() => onSelect(topic)}
          >
            <img 
              src={`/QuizPictures/${topic}.png`} 
              alt={topic} 
              onError={(e) => e.target.style.display = 'none'}
            />
            <h3>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizSelection;