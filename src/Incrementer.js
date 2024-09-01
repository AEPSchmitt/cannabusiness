import React, { useState } from 'react';
import './Incrementer.css';

const Incrementer = () => {
  // State to hold the current value
  const [value, setValue] = useState(0);

  // Handlers to update the value
  const incrementByOne = () => setValue(value + 1);
  const decrementByOne = () => setValue(value - 1);
  const incrementByFive = () => setValue(value + 5);
  const decrementByFive = () => setValue(value - 5);

  return (
    <div style={{ display: 'inline-block', textAlign: 'center', fontFamily: 'Arial' }}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <button className="inc-btn" onClick={incrementByFive}>+5</button>
        <br />
        <button className="inc-btn" onClick={incrementByOne}>+1</button>
      </div>
      <div style={{ margin: '10px 0', fontSize: '32px', marginTop: '0.2em', fontSize: '3em', marginBottom: '0.5em'}}>
        {value} <img className="bitcoin" src="bitcoin.svg"/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <button className="inc-btn" onClick={decrementByOne}>-1</button>
        <br />
        <button className="inc-btn" onClick={decrementByFive}>-5</button>
      </div>
    </div>
  );
};

export default Incrementer;
