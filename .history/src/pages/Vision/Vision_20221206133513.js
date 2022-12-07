import Banner from "../../assets/vision-banner.png";
import Home from "../../assets/home.png";

import Dot from "../../assets/yellow.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_vision.scss";
export const VMCV= () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">Vision, Mission & Core Values</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>About Us</p>
        <p>Vision, Mission & Core Values</p>
      </div>
      <div className="col-md-12 flexy vision">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-8 ">
          <div className="col-md-3">
            <Heading size="lg" mb="30px" mt="30px">
              Vision
            </Heading>
            <p>To provide functional education based on sound morals</p>
          </div>
          <div className="col-md-4">
            <Heading size="lg" mb="30px" mt="30px">
              Mission
            </Heading>
            <p>
              To produce a total child by laying a solid foundation for
              righteousness, integrity and high academic standard.
            </p>
          </div>
          <div className="col-md-4">
            <Heading size="lg" mb="30px" mt="30px">
              Core Values
            </Heading>
            <p>Our Core values are;</p>
            <div className="col-md-12 flexy flexyM">
              <ul className="list-unstyled">
                <li className="flexy flexyM">
                  <img className="col-md-12" src={Dot} alt="Scholar" />
                  Integrity
                </li>
                <li className="flexy flexyM">
                  <img className="col-md-12" src={Dot} alt="Scholar" />
                  Excellence
                </li>
                <li className="flexy flexyM">
                  <img className="col-md-12" src={Dot} alt="Scholar" />
                  Dignity
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="flexy flexyM">
                  <img className="col-md-12" src={Dot} alt="Scholar" />
                  Diligence
                </li>
                <li className="flexy flexyM">
                  <img className="col-md-12" src={Dot} alt="Scholar" />
                  Fear of god
                </li>
                <li className="flexy flexyM">
                  <img className="col-md-12" src={Dot} alt="Scholar" />
                  Discipline
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-2 side-menu">
          <Heading size="md" mb="30px">
            Explore this Section
          </Heading>

          <ul className="list-unstyled">
            <li>
              <Link to={"/about-us"}>About Us</Link>
            </li>
            <li >
              <Link to={"/proprietor-message"}> Principal’s Message</Link>
            </li>
            <li className="active">
              <Link to={"/vision"}>Vision , Mission & Core Values</Link>
            </li>
            <li>
              <Link to={"/discipline"}>Discipline</Link>
            </li>{" "}
            <li>
              <Link to={"/school-song"}>School Song</Link>
            </li>{" "}
            <li>
              <Link to={"/teaching-team"}>Teaching Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
