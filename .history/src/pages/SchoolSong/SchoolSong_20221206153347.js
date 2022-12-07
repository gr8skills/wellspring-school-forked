import Banner from "../../assets/discipline-banner.png";
import Home from "../../assets/home.png";

import Dot from "../../assets/yellow.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_school-song.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const Discipline= () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">Discipline</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>About Us</p>
        <p>Discipline</p>
      </div>
      <div className="col-md-12 flexy discipline">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-8 ">
          
          <StayConnected />
        </div>
        <div className="col-md-2 side-menu">
          <Heading size="md" mb="30px">
            Explore this Section
          </Heading>

          <ul className="list-unstyled">
            <li>
              <Link to={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link to={"/proprietor-message"}> Principal’s Message</Link>
            </li>
            <li>
              <Link to={"/vision"}>Vision , Mission & Core Values</Link>
            </li>
            <li className="active">
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
