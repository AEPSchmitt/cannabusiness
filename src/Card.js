import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, text }) => {
  const [player, setPlayer] = useState(0);
  let players = ['player-none', 'player-blue', 'player-orange', 'player-yellow', 'player-black', 'player-red', 'player-green', 'player-pink']

  const changePlayer = () => {
    setPlayer((player+1) % players.length)
  };

  return (
    <div className={`card ${players[player]}`} onClick={changePlayer} style={{
      padding: '20px',
      textAlign: 'center',
      cursor: 'pointer',
    }}>
      <h2 className="title">{title}</h2>
      <div className="text">{text}</div>
    </div>
  );
};

export default Card;
