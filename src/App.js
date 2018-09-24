import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
          destination="La grande Muraille"
          country="Chine"
          photo="https://i.postimg.cc/x81sMDd9/great-wall-of-china-2044405_1920.jpg"
          distance="8200 km"
        />
        <Travel
          destination="Les chutes du Niagara"
          country="Canada"
          photo="https://i.postimg.cc/SsDdyTf3/niagara-falls-553608_1920.jpg"
          distance="6000 km"
        />
      </div>
    );
  }
}

export default App;
