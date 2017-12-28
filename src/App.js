import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  display: "inline-block"
}

class Agregate extends Component {
  render() {
    return (
      <div style={ {width: '40%', display: "inline-block" } }>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img alt="icon" />
        <input type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: '25%'}} >
        <img alt="image" />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    let headerStyle = {"font-size": "50px"}
    return (
      <div className="App">
        <header>
          <h1 style={headerStyle} >Title</h1>
          <Agregate />
          <Agregate />
          <Filter />

          <br/><br/><br/>

          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
        </header>
      </div>
    );
  }
}

export default App;
