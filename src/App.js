import React from 'react';
import './App.css';
import CardComponent from './CardComponent';
import logo from './logo.svg';

function App() {
  const missions = "https://docs.google.com/spreadsheets/d/1LzdsgI1kk0HnYvG2oo-8weQrI1p0vFKMxF-Ur4xlLes/pub?gid=0&single=true&output=csv";
  const events = "https://docs.google.com/spreadsheets/d/1LzdsgI1kk0HnYvG2oo-8weQrI1p0vFKMxF-Ur4xlLes/pub?gid=1888771602&single=true&output=csv";
  const powers = "https://docs.google.com/spreadsheets/d/1LzdsgI1kk0HnYvG2oo-8weQrI1p0vFKMxF-Ur4xlLes/pub?gid=470410523&single=true&output=csv";

  return (
    <div className="App">
      <h1>Missions</h1>
      <CardComponent sheetUrl={missions} />
      <hr/>
      <h1>Events</h1>
      <CardComponent sheetUrl={events} />
      <hr/>
      <h1>Powers</h1>
      <CardComponent sheetUrl={powers} />
      <hr/>
      <img src={logo} className="App-logo"/>
    </div>
  );
}

export default App;
