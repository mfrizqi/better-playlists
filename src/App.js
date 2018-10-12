import React, { Component } from 'react';
import './App.css';

let defaultStyle={
  color : '#131313'
};

class Aggregate extends Component{
  render(){
    let width = "40%";
    let display = 'inline-block';
    return (
    <div style={{...defaultStyle,width,display}}>
      <h2>Number Text</h2>
    </div>
    );
  }
}

class Filter extends Component{
  render(){
    return(
      <div>
        <img/>
        <input type="text" placeholder="Filter"/>
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    let width = "25%";
    let display = 'inline-block';
    return(
        <div style={{...defaultStyle,width,display}}>
          <img />
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
      let name = "Muhammad Fajar Rizqi";

      return (
      <div className="App">
      <h1>Title</h1>
      <Aggregate />
      <Aggregate />
      <Filter />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      </div>
    );
  }
}

export default App;
