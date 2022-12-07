import Banner from "../../assets/team.png";
import Home from "../../assets/home.png";

import Dot from "../../assets/yellow.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_teaching-team.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const TeachingTeam= () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">Teaching Team</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>About Us</p>
        <p>Teaching Team</p>
      </div>
      <div className="col-md-12 flexy school-song">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-8 ">
          
            <Heading size="lg" mb="50px" mt="30px">
              Teaching Team
            </Heading>
            <p style={{ lineHeight: "55px" }}>
              Wellspring College is blessed with a formidable team of staff that
              are professionally and academically qualified in their various
              fields. Our teachers are versatile, friendly but firm, and good
              listeners. The college boasts of academic staff that is well
              catered and are given regular exposure to training and re-training
              programmes in order to ensure dynamism and good delivery. The
              Unilag Consult, under whose technical supervision Wellspring
              College operates, regularly organizes seminars for the teachers.
              The commitment and passion given to teaching by the staff have
              helped the school to produce students who can compete effectively
              with their counterparts in any part of the world.
            </p>
          </div>
          <div className="col-md-1">&nbsp;</div>
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
            <li>
              <Link to={"/discipline"}>Discipline</Link>
            </li>{" "}
            <li>
              <Link to={"/school-song"}>School Song</Link>
            </li>{" "}
            <li className="active">
              <Link to={"/teaching-team"}>Teaching Team</Link>
            </li>
          </ul>
        </div>
      </div>

      <StayConnected />
    </>
  );
};
