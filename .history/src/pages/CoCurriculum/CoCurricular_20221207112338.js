import Banner from "../../assets/co-corricular.png";
import Home from "../../assets/home.png";

import Dot from "../../assets/yellow.png";
import Dot2 from "../../assets/blue.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_co-curricular.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const CoCurricular = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl"> Co-Curricular Activities</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>Curriculum</p>
        <p> Co-Curricular Activities</p>
      </div>
      <div className="col-md-12 flexy curriculum">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-5 ">
          <Heading size="lg" mb="50px" mt="30px">
            Co-Curricular Activities
          </Heading>
          <p>
            Students are encouraged to join at least one of the clubs/societies
            in the school in a bid to make well-rounded achievers. These
            clubs/societies organize extracurricular activities that are
            informative, inspiring, enlightening, and exciting.
          </p>
          <div className="page-body col-md-8 ">
            <Heading size="lg" mb="50px" mt="30px">
              Literary and Debating Society
            </Heading>
            <p>
              This society provides an avenue for students to engage themselves
              in the art of articulating their opinions in public, thus
              enhancing their speaking, listening, and writing skills. This is
              achieved through the media of debate, talk shows, quizzes,
              spelling, and writing competitions.
            </p>
          </div>
        </div>
        <div className="col-md-3">&nbsp;</div>

        <div className="col-md-2 side-menu">
          <Heading size="md" mb="30px">
            Explore this Section
          </Heading>

          <ul className="list-unstyled">
            <li>
              <Link to={"/national-curriculum"}>National Curriculum</Link>
            </li>
            <li className="active">
              <Link to={"/co-curricular"}> Co-Curricular Activities</Link>
            </li>
            <li>
              <Link to={"/extra-curricular"}>Extra-Curricular Activities</Link>
            </li>
            <li>
              <Link to={"/beyond-classroom"}>
                Beyond the Classroom Initiative
              </Link>
            </li>{" "}
          </ul>
        </div>
      </div>
<div className="col-md-12 flexy">
  <div>&nbsp;</div>
</div>
      <StayConnected />
    </>
  );
};
