import React, { Component } from 'react';
// import Header from './Header';

export default class Home extends Component {
  onClick = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    return (
      <div className="mainBackground">
        <h2 className="mainTitle">A.H WELGEMOED</h2>
        <h3 className="subTitle">
          <i>front_end_developer</i>
        </h3>
      </div>
    );
  }
}
