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
          <div className="drawerButtonLeft" onClick={this.onClick}>
            <i>View Projects</i>
          </div>
          <div className="drawerButtonRight" onClick={this.onClickRight}>
            <i>View Presentation</i>
          </div>
        </div>
        <Drawer
          width="20vw"
          handler={false}
          open={this.state.open}
          onMaskClick={this.onClick}
        >
          <header>
            <nav className="navContainer">
              <div className="menuItem" onClick={this.onClick}>
                <Link to="/">Home</Link>
              </div>
              <div className="menuItem" onClick={this.onClick}>
                <Link to="/dnj">DNJ App</Link>
              </div>
              <div className="menuItem" onClick={this.onClick}>
                <Link to="/Minema">Minema Chemicals</Link>
              </div>
              <div className="menuItem" onClick={this.onClick}>
                <Link to="/">nuDynamics</Link>
              </div>
              <div className="menuItem" onClick={this.onClick}>
                <Link to="/">Friends Of Design</Link>
              </div>
            </nav>
            <div className="menuFooterItem" onClick={this.onClick}>
              <Link to="/contactMe">Contact</Link>
            </div>
          </header>
        </Drawer>
        {/* Presentaion Drawer */}
        <Drawer
          width="20vw"
          handler={false}
          open={this.state.openRight}
          onMaskClick={this.onClickRight}
          placement="right"
        >
          <header>
            <nav className="navContainer">
              <div className="menuItem" onClick={this.onClickRight}>
                <Link to="/">Home</Link>
              </div>
              <div className="menuItem" onClick={this.onClickRight}>
                <Link to="/presentations/intro">Day One</Link>
              </div>
              <div className="menuItem" onClick={this.onClickRight}>
                <Link to="/presentations/AnimationInUx">Animation in UX</Link>
              </div>
              <div className="menuItem" onClick={this.onClickRight}>
                <Link to="/presentations">Presentations List</Link>
              </div>
            </nav>
            <div className="menuFooterItem" onClick={this.onClick}>
              <Link to="/contactMe">Contact</Link>
            </div>
          </header>
        </Drawer>
      </div>
    );
  }
}
