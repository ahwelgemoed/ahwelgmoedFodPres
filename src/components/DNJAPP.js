import React, { Component } from 'react';
import { MdComputer } from 'react-icons/md';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';

export default class DNJAPP extends Component {
  render() {
    return (
      <div className="mainBackgroundPages">
        <h2 className="mainTitle">DIS NET JY</h2>
        <div className="techHolder">
          <div className="techLeft">
            {' '}
            <h4 className="appDesc">
              Dis net jy started as as An Idea - "Where Do I Post althese
              notebooks worth of words so that other can read it and expand on
              it" It transformed into an Web app with an costom Express Backend.
              After being live for about a day we merged with Klyntji to grow
              our audiance. Read more here about Klyntji. (TL;DR Its and Art
              Blog)
            </h4>
            <h4 className="appDesc">
              Later I wanted to furrfull an "Dream" of mine of creating a Native
              App for iOS and Android (Smart get into Native just as everyone
              gets into PWA's 🙄) I build the native app and had it into app
              tores in about a month and a half. But like everything javascript
              its never finished and as soon as I thing of an new idea and get
              time. It get build
            </h4>
            <div className="links">
              <a href="http://">
                <FaAppStore /> iOS
              </a>
              <a href="http://">
                <FaGooglePlay /> Android
              </a>
              <a href="http://">
                <MdComputer /> Web
              </a>
            </div>
          </div>
          <div className="techRight">
            <p>React</p>
            <p>React-Native</p>
            <p>Expo</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>NodeMailer</p>
            <p>FireBase</p>
          </div>
        </div>
      </div>
    );
  }
}
