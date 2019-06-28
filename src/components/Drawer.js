import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'rc-drawer';
import './main.scss';
import 'rc-drawer/assets/index.css';
export default class Header extends Component {
  state = {
    open: false
  };
  onClick = () => {
    this.setState({
      open: !this.state.open
    });
  };
  onClickRight = () => {
    this.setState({
      openRight: !this.state.openRight
    });
  };
  rende;
  render() {
    return (
      <div>
        <div className="drawerClose">
          <div className="drawerButton" onClick={this.onClick}>
            View Projects
          </div>
          <div className="drawerButton" onClick={this.onClickRight}>
            <i>View Presentaions</i>
          </div>
        </div>
        <Drawer
          width="30vw"
          handler={false}
          open={this.state.open}
          onMaskClick={this.onClick}
        >
          <header>
            <nav className="navContainer">
              <div className="menuItem" onClick={this.onClick}>
                <Link to="/">DNJ App</Link>
              </div>
              <div className="menuItem" onClick={this.onClick}>
                <Link to="/">Minema Chemicals</Link>
              </div>
              <div className="menuItem" onClick={this.onClick}>
                <Link to="/presentations/intro">nuDynamics</Link>
              </div>
              <div className="menuItem" onClick={this.onClick}>
                <Link to="/presentations/intro">Friends Of Design</Link>
              </div>
            </nav>
            <div className="menuFooterItem" onClick={this.onClick}>
              <Link to="/presentations/intro">Contact</Link>
            </div>
          </header>
        </Drawer>
        {/* Presentaion Drawer */}
        <Drawer
          width="30vw"
          handler={false}
          open={this.state.openRight}
          onMaskClick={this.onClickRight}
          placement="right"
        >
          <header>
            <nav className="navContainer">
              <div className="menuItem" onClick={this.onClickRight}>
                <Link to="/presentations/intro">Day One</Link>
              </div>
              <div className="menuItem" onClick={this.onClickRight}>
                <Link to="/presentations">PresentationList</Link>
              </div>
            </nav>
            <div className="menuFooterItem" onClick={this.onClick}>
              <Link to="/presentations/intro">Contact</Link>
            </div>
          </header>
        </Drawer>
      </div>
    );
  }
}
