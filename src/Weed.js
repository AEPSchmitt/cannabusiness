import React, { useState } from 'react';
import './Weed.css';

const Weed = () => {
  // State to hold the current value
  const [value, setValue] = useState(0);

  // Handlers to update the value
  const incrementByOne = () => setValue(value + 1);
  const decrementByOne = () => setValue(value - 1);

  return (
    <div className="weed">
      <div className="weed-btn">
        <button className="inc-weed" onClick={decrementByOne}>-1</button>
      </div>
      <div style={{ margin: '1em', fontSize: '32px',  fontSize: '3em', lineHeight:'3em', marginBottom: '0.5em', display : 'inline-block'}}>
        {value} <img className="weedlogo" src="logo.svg"/>
      </div>
      <div className="weed-btn">
        <button className="inc-weed" onClick={incrementByOne}>+1</button>
      </div>
    </div>
  );
};

export default Weed;
