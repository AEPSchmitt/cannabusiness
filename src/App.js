import React from 'react';
import './App.css';
import CardComponent from './CardComponent';
import Mission from './Mission';
import logo from './logo.svg';
import Incrementer from './Incrementer';

function App() {
  const missions = "https://docs.google.com/spreadsheets/d/1LzdsgI1kk0HnYvG2oo-8weQrI1p0vFKMxF-Ur4xlLes/pub?gid=0&single=true&output=csv";
  const events = "https://docs.google.com/spreadsheets/d/1LzdsgI1kk0HnYvG2oo-8weQrI1p0vFKMxF-Ur4xlLes/pub?gid=1888771602&single=true&output=csv";
  const powers = "https://docs.google.com/spreadsheets/d/1LzdsgI1kk0HnYvG2oo-8weQrI1p0vFKMxF-Ur4xlLes/pub?gid=470410523&single=true&output=csv";

  return (
    <div className="App">
      <h1 className="main-title">HighGrow</h1>
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
      <h1>Wallet</h1>
      <Incrementer />
      <hr />
      <img src={logo} className="App-logo"/>
    </div>
  );
}

export default App;
