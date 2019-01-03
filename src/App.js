import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import TodoInput from './components/todoInput.js';
import ReactAudioPlayer from 'react-audio-player';
import Home from './home.mp3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <ReactAudioPlayer
            className='audioClass'
            src={Home}
            autoPlay={true}
            controls
            loop = {true}
          />
          <div className='todoBoxContainer'>
            <TodoInput day='Monday' />
            <TodoInput day='Tuesday' />
            <TodoInput day='Wednesday' />
            <TodoInput day='Thursday' />
            <TodoInput day='Friday' />
            <TodoInput day='Saturday' />
            <TodoInput day='Sunday' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
