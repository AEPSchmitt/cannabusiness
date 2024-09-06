import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, text }) => {
  const [player, setPlayer] = useState(0);
  let players = ['player-none', 'player-red', 'player-blue', 'player-orange', 'player-yellow', 'player-black', 'player-green', 'player-pink']

  const changePlayer = () => {
    setPlayer((player+1) % players.length)
  };
  const deleteCard = (me) => {
    me.target.parentNode.remove();
  }
  return (
    <div className={`card ${players[player]}`} onClick={changePlayer} style={{
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
      }}>
        <span className="closer" onClick={deleteCard}>X</span>
      <h2 className="title">{title}</h2>
      <div className="text">{text}</div>
    </div>
  );
};

export default Card;
