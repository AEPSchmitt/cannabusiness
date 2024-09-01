import React, { useState } from 'react';
import './App.css';
import './Modal.css';
import CardComponent from './CardComponent';
import Mission from './Mission';
import logo from './logo.svg';
import bitcoin from './btc.svg';
import bitcoin_off from './btc_close.svg';
import Incrementer from './Incrementer';

function App() {
  const missions = "https://docs.google.com/spreadsheets/d/1LzdsgI1kk0HnYvG2oo-8weQrI1p0vFKMxF-Ur4xlLes/pub?gid=0&single=true&output=csv";
  const events = "https://docs.google.com/spreadsheets/d/1LzdsgI1kk0HnYvG2oo-8weQrI1p0vFKMxF-Ur4xlLes/pub?gid=1888771602&single=true&output=csv";
  const powers = "https://docs.google.com/spreadsheets/d/1LzdsgI1kk0HnYvG2oo-8weQrI1p0vFKMxF-Ur4xlLes/pub?gid=470410523&single=true&output=csv";
  const [modalActive, setModalStatus] = useState(false);

  const toggleModal = () => {
    setModalStatus(!modalActive);
  };

  return (
    <div className="App">
      <h1 className="main-title">HighGrow</h1>
      <hr/>
      <h1>Missions</h1>
      <div className="mission-container">
        <Mission colour="green-mission" sheetUrl={missions} />
        <Mission colour="yellow-mission" sheetUrl={missions} />
        <Mission colour="red-mission" sheetUrl={missions} />
      </div>
      <hr/>
      <h1>Events</h1>
      <CardComponent sheetUrl={events} />
      <hr/>
      <h1>Powers</h1>
      <CardComponent sheetUrl={powers} />
      <hr/>
      {
        <div className="modal" style={{display : modalActive ? 'block' : 'none'}}>
          <h1>Wallet</h1>
          <Incrementer />
        </div>
      }
      <div className='modal-btn' onClick={toggleModal}>
        <img src={ modalActive ? (bitcoin_off) : (bitcoin)
          }/>
      </div>
      <hr />
      <img src={logo} className="App-logo"/>
    </div>
  );
}

export default App;
