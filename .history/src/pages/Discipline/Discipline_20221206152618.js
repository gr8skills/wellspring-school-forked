import Banner from "../../assets/discipline-banner.png";
import Home from "../../assets/home.png";

import Dot from "../../assets/yellow.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_discipline.scss";
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
      <div className="col-md-12 flexy vision">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-8 ">
          <Heading size="lg" mb="30px" mt="30px">
            Discipline
          </Heading>
          <p>
            In line with our mission to produce youths whose characters will be
            shining examples of moral and academic excellence, we make
            discipline our watchword. <br /> <br />
            We do not just teach morals, we also instill in our students the
            virtues of politeness, tolerance, moderation, honesty, kindness, and
            respect for parents, authorities, and other people’s rights. <br />{" "}
            <br />
            We reaffirm exemplary behavior by public recognition of the assembly
            and rewarding with merit points. <br /> <br /> As we mold and build
            the characters of tomorrow’s leaders, we impart in them discipline
            and values which are deep-rooted in the love of Christ. All rules
            and regulations are enforced with love.
          </p>
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
