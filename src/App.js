import React, { Component } from 'react';
import Main from './components/Main';
import Drawer from './components/Drawer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Drawer />
        <Main />
      </div>
    );
  }
}
