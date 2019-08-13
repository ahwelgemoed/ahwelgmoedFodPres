import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { MdComputer } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

export default class ScrollMagicGsap extends Component {
  render() {
    return (
      <div className="mainBackground">
        <h2 className="mainTitle">ScrollMagic And GSAP</h2>
        <div className="links">
          <a
            style={{ paddingLeft: 10 }}
            target="_blank"
            href="https://clever-colden-1da63e.netlify.com"
          >
            <MdComputer /> Web
          </a>
          <a
            style={{ paddingLeft: 10 }}
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ahwelgemoed/fod_Boilerplate/tree/gsapAndScrollStart"
          >
            <FaGithub /> Start Files
          </a>
          <a
            style={{ paddingLeft: 10 }}
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ahwelgemoed/fod_Boilerplate/tree/gsapAndScrollEnd"
          >
            <FaGithub /> End Files
          </a>
        </div>
        <h3 className="subTitle" />
        <Iframe
          url="https://clever-colden-1da63e.netlify.com"
          width="1200px"
          height="600px"
          allowFullScreen={true}
          frameBorder={0}
        />
      </div>
    );
  }
}
