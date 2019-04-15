import React, { Component } from 'react';
import './styles/App.scss';
import Navigation from './components/Navigation';
import SideBar from './components/SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="appHeader">
          <Navigation />
        </header>
        <SideBar />
      </div>
    );
  }
}

export default App;
