import React, { Component } from 'react';
import { MdComputer } from 'react-icons/md';
import { FaGooglePlay, FaAppStore, FaGithub } from 'react-icons/fa';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import one from './images/Minema1.png';
import two from './images/Minema2.png';
import three from './images/Minema3.png';
import four from './images/4.png';

export default class Minema extends Component {
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
        <h2 className="mainTitle">MINEMA CHEMICALS</h2>
        <h3 className="subTitle">
          <i>Ecommerce | Admin Portal</i>
        </h3>
        <img className="mainImg" src={one} alt="Logo" />;
        <div className="techHolder">
          <div className="techLeft">
            {' '}
            <h4 className="appDesc">
              At Minema I started as my Web Developer Career. I began coding
              very Basic HTML and CSS. Expanding their E-Comerese Store.
            </h4>
            <h4 className="appDesc">
              I also build Minema a custom Backend to manage their documents for
              the sale of Chemicals. The solution is a web app where customers
              can find official documents. Minema employees uses the app to load
              and create documents, the warehouse uses it to print GHS Standard
              labels.
            </h4>
            <h4 className="appDesc">
              Contribution : Front End, Backend and Design
            </h4>
            <div className="links">
              <a target="_blank" href="http://www.minema.co.za/">
                <MdComputer /> Web
              </a>
            </div>
          </div>
          <div className="techRight">
            <p>Vue</p>
            <p>Laravel</p>
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
