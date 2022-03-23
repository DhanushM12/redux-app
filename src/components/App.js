import React, { Component } from 'react';
import Header from './Header';
import TaskInput from './TaskInput';
import Tasklist from './Tasklist';
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <TaskInput />
          <Tasklist />
      </div>
    );
  }
}

export default App;
