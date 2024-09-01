import React, { useState } from 'react';

const Card = ({ title, text }) => {
  const [isMarked, setIsMarked] = useState(false);

  const toggleClass = () => {
    setIsMarked(!isMarked);
  };

  return (
    <div className='card' onClick={toggleClass} style={{
      padding: '20px',
      backgroundColor: isMarked ? '#d3d3d38a' : '#d3d3d300',
      textAlign: 'center',
      cursor: 'pointer',
    }}>
      <h2 className="title">{title}</h2>
      <div className="text">{text}</div>
    </div>
  );
};

export default Card;
