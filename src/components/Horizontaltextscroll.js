import React, { Component } from 'react';
import { FaNpm, FaGithub } from 'react-icons/fa';
import Horizontal from './images/Horizontal.gif';

export default class Horizontaltextscroll extends Component {
  render() {
    return (
      <div className="mainBackgroundPages">
        <h2 className="mainTitle">React Native Horizontal Scroll</h2>
        <h3 className="subTitle">
          <i>React Native | NPM Package</i>
        </h3>
        <img className="mainImg" src={Horizontal} alt="Logo" />;
        <div className="techHolder">
          <div className="techLeft">
            <h4 className="appDesc">
              A React Native component that extends Flatlist that has Fullscreen
              Horizontal Scroll and Vertical scroll on every Item rendered.
            </h4>
            <h4 className="appDesc">Contribution : Idea, Code, Publish</h4>
            <div className="links">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ahwelgemoed/horizontaltextscroll"
              >
                <FaGithub /> GitHub
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.npmjs.com/package/horizontaltextscroll"
              >
                <FaNpm /> NPM
              </a>
            </div>
            <br />
            <br />
          </div>
          <div className="techRight">
            <p>NPM</p>
            <p>React</p>
            <p>React-Native</p>
          </div>
        </div>
      </div>
    );
  }
}
