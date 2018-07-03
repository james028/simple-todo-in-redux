import React, { Component } from 'react';
import './App.css';
import Lister from './lister'
import store from './store/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lister store={store}/>
      </div>
    );
  }
}

export default App;
