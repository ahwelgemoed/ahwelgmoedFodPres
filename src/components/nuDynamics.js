import React, { Component } from 'react';
import { MdComputer } from 'react-icons/md';
import Horizontal from './images/Horizontal.gif';

export default class nuDynamics extends Component {
  render() {
    return (
      <div className="mainBackgroundPages">
        <h2 className="mainTitle">nuDynamics</h2>
        <h3 className="subTitle">
          <i>React | Redux</i>
        </h3>
        {/* <img className="mainImg" src={Horizontal} alt="Logo" />; */}
        <div className="techHolder">
          <div className="techLeft">
            <h4 className="appDesc">
              At nuDynamics I was responsabile for building projects using React
              and Redux. The projects include an Admin Protal to mannage Hikes
              and Product Sales. It also included Auth routing using JWT tokens,
              and a custom HATIOS REST API build by the team. We aslo build
              mto's public facing site where users could book hikes and buy
              courses and products. The side also and was managed by the cliend
              using the custom Admin Poral and Headless Wordpress setup.
            </h4>
            <h4 className="appDesc">
              At nuDynamics I also build an Electron App that is used so show
              the Deadlines of projects with the Active Sprind burn down
            </h4>
            <h4 className="appDesc">Contribution : Code, Team Lead</h4>
            <div className="links">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.mto.group/"
              >
                <MdComputer /> MTO
              </a>
            </div>
            <br />
            <br />
          </div>
          <div className="techRight">
            <p>React</p>
            <p>Redux</p>
            <p>ANT Design</p>
            <p>Firebases</p>
            <p>REST API</p>
            <p>Headless Wordpress</p>
          </div>
        </div>
      </div>
    );
  }
}
