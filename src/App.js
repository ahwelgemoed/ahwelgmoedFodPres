import React, { Component } from 'react';
import Main from './components/Main';
import Drawer from './components/Drawer';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#121212' }}>
        <Drawer />
        <Main />
      </div>
    );
  }
}
