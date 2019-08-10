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
  render() {
    return (
      <div>
        <div className="drawerClose">
          <div className="drawerButtonLeft" onClick={this.onClick}>
            Projects
          </div>
          <div className="drawerButtonRight" onClick={this.onClickRight}>
            Presentations
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
                <Link to="/nuDynamics">nuDynamics</Link>
              </div>
              <div className="menuItem" onClick={this.onClick}>
                <Link to="/horizontaltextscroll">NPM Package</Link>
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
                <Link to="/presentations/intro">Introduction</Link>
              </div>
              <div className="menuItem" onClick={this.onClickRight}>
                <Link to="/presentations/AnimationInUx">Animation in UX</Link>
              </div>
              <div className="menuItem" onClick={this.onClickRight}>
                <a
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ahwelgemoed/fod_Boilerplate"
                >
                  Project Files
                </a>
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
