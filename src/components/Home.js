import React, { Component } from 'react';
import CodeLottie from './CodeLottie';
import { IoIosMail, IoLogoInstagram, IoLogoGithub } from 'react-icons/io';

export default class Home extends Component {
  onClick = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    return (
      <div className="mainBackground">
        <CodeLottie />
        <h2 className="mainTitle">A.H. WELGEMOED</h2>
        <h3 className="subTitle">
          <i>front_end_developer</i>
        </h3>
        <h4 className="subTitleCode">
          <i>#roadtofullstack</i>
        </h4>
        <div className="homeLinks">
          <a
            className=""
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ahwelgemoed"
          >
            <IoLogoInstagram />
          </a>

          <a
            className=""
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ahwelgemoed/"
          >
            <IoLogoGithub />
          </a>
          <a
            className=""
            target="_top"
            href="mailto:arno.welgemoed@outlook.com"
          >
            <IoIosMail />
          </a>
        </div>
      </div>
    );
  }
}
