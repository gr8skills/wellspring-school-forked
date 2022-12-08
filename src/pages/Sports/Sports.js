import Banner from "../../assets/sports-banner.png";
import Home from "../../assets/home.png";

import Dot from "../../assets/yellow.png";
import Computer from "../../assets/ball.png";
import Corridor from "../../assets/kick.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_sports.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const Sports = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">Sports</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>Facilities</p>
        <p>Sports</p>
      </div>
      <div className="col-md-12 flexy physical-facilities">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-7 ">
          <Heading size="3xl" mb="50px" mt="30px">
            Sports
          </Heading>
          <p>
            The importance of sports cannot be overemphasized. Through sports
            activities, we encourage physical fitness, inculcate safety habits,
            and develop the spirit of sportsmanship.
            <br />
            <br /> Wellspring College is well equipped with modern sports
            facilities; providing opportunities for students to participate in a
            wide range of indoor and outdoor games such as Monopoly, Scrabble,
            Chess, Draft, Skipping, Football, Handball, Basketball, Badminton,
            Table Tennis, Athletics, Javelin, Shot Put, Discus, etc. These
            enhance their psycho-motor skills. Swimming lessons are also
            available to interested students. <br />
            <br />
            We encourage students to participate in inter-school and inter-house
            sports competitions.
          </p>
        </div>
        <div className="col-md-1">&nbsp;</div>

        <div className="col-md-2 side-menu">
          <Heading size="md" mb="30px">
            Explore this Section
          </Heading>

          <ul className="list-unstyled">
            <li>
              <Link to={"/physical-facilities"}>Physical Facilities</Link>
            </li>
            <li className="active">
              <Link to={"/sports"}>Sports</Link>
            </li>
            <li>
              <Link to={"/boarding-facilities"}>Boarding Facilities</Link>
            </li>
            <li>
              <Link to={"/health-catering"}>Health & Catering</Link>
            </li>{" "}
          </ul>
        </div>
      </div>
      <div className="col-md-12 flexy mt5">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10 flexy">
          {" "}
          <div className="col-md-4">
            <div className="col-md-11 col-12">
              <img className="col-md-12 br" src={Computer} alt="Scholar" />
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-11 col-12">
              <img className="col-md-12 br" src={Corridor} alt="Scholar" />
            </div>
          </div>{" "}
        </div>
      </div>
      <StayConnected />
    </>
  );
};
