import Banner from "../../assets/logo-girl.png";
import Home from "../../assets/home.png";
import Lab from "../../assets/lab2.png";

import Image from "../../assets/Image.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_school-life.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const SchoolLife = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">School Life</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>School Life</p>
      </div>
      <div className="col-md-12 flexy ">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-6 ">
          <Heading size="xl" mb="50px" mt="30px" className="tac">
            School Life
          </Heading>
          <div className="col-md-11">
            <p>
              At Wellspring College student life is well-adjusted and directed
              towards enabling a conducive environment to learn and play. We
              care about things that you as parents care about; building
              character, instilling strong principles and values, college and
              career readiness, safety, security, accessible teachers, academic
              excellence, and wholesome peer influence, developing leadership
              skills and abilities, and nurturing a love for God.
              <br /> <br /> Students engage in various academic, co-curricular,
              and extracurricular activities. The learning beyond the classroom
              initiative is action-packed and will create memories for a
              lifetime. Our students are active and impressive in their
              abilities to thrive in the arts and sports and excel in various
              external competitions.
              <br /> <br /> We encourage our students to make the most of
              student life activities since they complement academics to make
              for an overall well-rounded education. <br /> <br /> Teaching is
              outstanding and teachers devote a huge amount of time to making
              their lessons challenging, interactive and fun. This is the main
              reason why students enjoy their learning experience at the
              College. <br /> <br /> At the end of their time at the College, we
              want our graduates to have the self-belief to be whomever they
              want to be and to feel confident and excited about their future.
            </p>
          </div>
        </div>

        <div className="col-md-4 ml2 mt6">
          {" "}
          <div className="col-md-12 col-12 mt6">
            <img className="col-md-12 br" src={Lab} alt="Scholar" />
          </div>{" "}
          <div className="col-md-12 col-12 mt2">
            <img className="col-md-12 br" src={Image} alt="Scholar" />
          </div>
        </div>
      </div>

      <StayConnected />
    </>
  );
};
