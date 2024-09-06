import React, { useState } from 'react';
import './App.css';
import './Modal.css';
import CardComponent from './CardComponent';
import Mission from './Mission';
import Weed from './Weed';
import logo from './logo_white.svg';
import bitcoin from './btc.svg';
import qrcode from './qrcode.png';
import bitcoin_off from './close.svg';
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
      <h1 className="main-title">Cannabusiness</h1>
      <hr/>
      <div className="wallets">
        <Incrementer player="player-red" />
        <Incrementer player="player-blue" />
        <Incrementer player="player-orange" />
        <Incrementer player="player-yellow" />
        <Incrementer player="player-black" />
        <Incrementer player="player-green" />
      </div>
      <hr/>
      <div className="page">
        <div className="left">
          <h1>Events</h1>
          <CardComponent sheetUrl={events} />
          <hr/>
          
        </div>
        <div className="right">
          
          <h1>Powers</h1>
          <CardComponent sheetUrl={powers} type="powers"/>
          <hr/>
        </div>
      </div>
        {
            <div className="modal" style={{display : modalActive ? 'block' : 'none'}}>
              <h1>Wallets</h1>
              <Incrementer />
              <Incrementer />
              <Incrementer />
              <Incrementer />
              <Incrementer />
            </div>
          }
      
      <div className='modal-btn'>
        <img className="qrcode" src={qrcode}/>
      </div>
      <img src={logo} className="App-logo"/>
    </div>
  );
}

export default App;
