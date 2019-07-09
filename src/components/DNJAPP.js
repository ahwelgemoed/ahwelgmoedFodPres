import React, { Component } from 'react';
import { MdComputer } from 'react-icons/md';
import { FaGooglePlay, FaAppStore, FaGithub } from 'react-icons/fa';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';

export default class DNJAPP extends Component {
  render() {
    const images = [
      {
        original: one
      },
      {
        original: two
      },
      {
        original: three
      }
    ];
    return (
      <div className="mainBackgroundPages">
        <h2 className="mainTitle">DIS NET JY</h2>
        <h3 className="subTitle">
          <i>Web | Mobile</i>
        </h3>
        <img className="mainImg" src={four} alt="Logo" />;
        <div className="techHolder">
          <div className="techLeft">
            {' '}
            <h4 className="appDesc">
              DNJ started with the idea -{' '}
              <i>
                I would like to 'Post' some of the thoughts/poems from my notes
                apps.
              </i>
              It transformed into an Web app with an custom Express Backend.
              After being live for about a day we <i>merged</i>
              with Klyntji to grow our audience. Read more here about{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://klyntji.com/"
              >
                Klyntji
              </a>
              . (TL;DR - Its an Art Blog)
            </h4>
            <h4 className="appDesc">
              Later I wanted to fulfill a "Dream/Want" of mine of creating a
              Native App for iOS and Android (Smart - get into Native just as
              everyone gets into PWA's 🙄) I build the native app and had it
              into app stores in about a month and a half. But like everything
              javascript its never finished and as soon as I thing of an new
              idea and get time. It get build
            </h4>
            <h4 className="appDesc">
              Contribution : Front End, Backend and Design
            </h4>
            <div className="links">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://apps.apple.com/us/app/dis-net-jy/id1462187171?ls=1"
              >
                <FaAppStore /> iOS
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.disnetons.googlesignin"
              >
                <FaGooglePlay /> Android
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.disnetjy.com/"
              >
                <MdComputer /> Web
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ahwelgemoed/dnjRN"
              >
                <FaGithub /> Github
              </a>
            </div>
          </div>
          <div className="techRight">
            <p>React</p>
            <p>React-Native</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>NodeMailer</p>
            <p>FireBase</p>
          </div>
        </div>
        <ImageGallery
          autoPlay={true}
          disableArrowKeys={true}
          items={images}
          showThumbnails={false}
          showBullets={false}
          showPlayButton={false}
          showFullscreenButton={false}
          slideDuration={3000}
        />
      </div>
    );
  }
}
