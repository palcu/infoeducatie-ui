"use strict";

import $ from "jquery";
import _ from "lodash";
import React from "react";
import {Link} from "react-router";
import {Grid, Row, Col, Glyphicon} from "react-bootstrap";

import Header from "./header";
import NewsContainer from "./news/news-container";

import "./home.less";
import Google from "../../assets/img/sponsors/google.png";
import Intel from "../../assets/img/sponsors/intel.png";
import Orange from "../../assets/img/sponsors/orange.png";
import EasyHost from "../../assets/img/sponsors/easyhost.png";
import Cisco from "../../assets/img/sponsors/cisco.png";
import Intuitext from "../../assets/img/sponsors/intuitext.gif";
import Apdetic from "../../assets/img/sponsors/apdetic.png";
import TotalSoft from "../../assets/img/sponsors/totalsoft.gif";
import Upir from "../../assets/img/sponsors/upir.png";
import MEN from "../../assets/img/sponsors/edu.jpg";
import CloudBase from "../../assets/img/sponsors/cloudbase.png";
import iMedicare from "../../assets/img/sponsors/imedicare.png";
import eSkills from "../../assets/img/sponsors/eskills.png";


export default React.createClass({
  displayName: "Home",

  componentDidMount() {
    this.props.changeLanguage("en");
  },

  render() {
    return <div className="home">
        <div className="blue-section-wrapper">
            <Grid className="blue-section">
                <Header isLoggedIn={this.props.isLoggedIn}
                        language={this.props.language}
                        changeLanguage={this.props.changeLanguage}
                        login={this.props.login}
                        logout={this.props.logout} />
                <Row>
                    <Col xs={12}>
                        <h1>
                            InfoEducație
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h2>National Contest of IT&amp;C projects</h2>
                        <h5 className="tagline">
                            Edition&nbsp;
                            {this.props.current.edition.name}
                        </h5>
                    </Col>
                </Row>
                <Row className="xsmall-spacing" />
                <Row>
                    <Col md={3} mdOffset={5}>
                        <p className="right-button">
                            <Link to="about-english" className="link link-secondary">
                                About contest
                            </Link>
                        </p>
                    </Col>
                </Row>
            </Grid>
        </div>

        <div className="gray-section-wrapper">
            <Grid className="gray-section">
                <Row className="small-spacing" />
                <Row>
                    <Col md={6} mdOffset={6}>
                        <h6>Alumnus</h6>
                        <Row className="small-spacing" />
                        <p className="quote">At that time it seems to be just
                        a game, but now, infoarena is an mature organization
                        with a strong impact between young people, pasionate
                        about computer science.
                        </p>
                        <Row className="small-spacing" />
                        <h2 className="alumnus-name">Cristian Strat</h2>
                        <h6 className="alumnus-position">
                            Ex Growth Manager @ Twitter
                        </h6>
                    </Col>
                </Row>
                <Row className="small-spacing" />
            </Grid>
        </div>

        <div className="yellow-section-wrapper">
            <div className="yellow-section container-fluid">
                <Row>
                    <Col md={4} mdOffset={2} className="text middle-align">
                        <div className="wrapper-for-flexbox">
                            <h1>Gălăciuc Camp</h1>
                            <h6 className="data">
                                <span className="pink-dash"></span>
                                2 - 8 August 2015
                                <span className="pink-dash"></span>
                            </h6>
                            <h6 className="edition">23th Edition</h6>
                            <Row className="small-spacing" />
                            <p>
                                <Link to="photos"
                                   className="link link-secondary">
                                    More pictures
                                </Link>
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className="grass" />
                </Row>
            </div>
        </div>

        <div className="sponsors-section-wrapper">
            <Grid className="sponsors-section">
                <Row className="small-spacing" />
                <Row>
                    <Col xs={12}>
                        <h4>Gold Sponsors</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p className="logos">
                            <a href="http://google.ro" target="_blank">
                              <img src={Google} />
                            </a>
                            <a href="http://intel.ro" target="_blank">
                              <img src={Intel} />
                            </a>
                            <a href="http://www.orange.ro/" target="_blank">
                              <img src={Orange} />
                            </a>
                            <a href="https://imedicare.com/" target="_blank">
                              <img src={iMedicare} />
                            </a>
                        </p>
                    </Col>
                </Row>

                <Row className="small-spacing" />
                <Row>
                    <Col xs={12}>
                        <h4>Silver Sponsors</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p className="logos">
                            <a href="http://www.cisco.com/" target="_blank">
                              <img src={Cisco} />
                            </a>
                            <a href="http://www.cloudbase.it/" target="_blank">
                              <img src={CloudBase} />
                            </a>
                        </p>
                    </Col>
                </Row>

                <Row className="small-spacing" />
                <Row>
                    <Col xs={12}>
                        <h4>Bronze Sponsors</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p className="logos">
                            <a href="http://ro.easyhost.com/incubator" target="_blank">
                              <img src={EasyHost} />
                            </a>
                            <a href="http://www.intuitext.ro/" target="_blank">
                              <img src={Intuitext} />
                            </a>
                            <a href="http://asociatiait.ro/" target="_blank">
                              <img src={Apdetic} />
                            </a>
                            <a href="http://www.totalsoft.ro/" target="_blank">
                              <img src={TotalSoft} />
                            </a>
                            <a href="http://eskills4jobs.ec.europa.eu/" target="_blank">
                              <img src={eSkills} />
                            </a>
                        </p>
                    </Col>
                </Row>

                <Row className="small-spacing" />
                <Row>
                    <Col xs={12}>
                        <h4>Educational Partners</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p className="logos">
                            <a href="http://upir.ro/ro/" target="_blank">
                              <img src={Upir} />
                            </a>
                            <a href="http://www.edu.ro/" target="_blank">
                              <img src={MEN} />
                            </a>
                        </p>
                    </Col>
                </Row>
            </Grid>
        </div>
    </div>;
  }
});