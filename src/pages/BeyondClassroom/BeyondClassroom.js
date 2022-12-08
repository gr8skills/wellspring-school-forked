import React, { useState } from "react";

import Banner from "../../assets/piano-banner.png";
import Home from "../../assets/home.png";


import Tour from "../../assets/tour2.png";

import Capture from "../../assets/gallery.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_beyond-classroom.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const BeyondClassroom = () => {
  
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">Beyond the Classroom Initiative</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>Curriculum</p>
        <p> Beyond the Classroom Initiative</p>
      </div>
      <div className="col-md-12 flexy beyond-classroom">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-7 ">
          <Heading size="lg" mb="50px" mt="30px">
            Beyond the Classroom Initiative
          </Heading>{" "}
          <Heading size="md" mb="10px" mt="20px">
            Vocational Training{" "}
          </Heading>
          <p>
            The “Beyond the Classroom” Initiative projects an engaging and
            exciting education for our students beyond the four walls of the
            classroom. It takes a more practical approach to learn ensuring that
            students are inspired and motivated, as they learn new things.
            Students visit key industry players, tour their workspaces,
            participate in some of their day-to-day work activities and get some
            training while building relationships.
          </p>
          <div className="flexy col-md-12">
            <div className="col-md-6">
              {" "}
              <img className="col-md-11 mt6 mb6 br" src={Capture} alt="Scholar" />
            </div><div className="col-md-6">
              {" "}
              <img className="col-md-11 mt6 mb6 br" src={Tour} alt="Scholar" />
            </div>
          </div>
        </div>
        <div className="col-md-1">&nbsp;</div>

        <div className="col-md-2 side-menu">
          <Heading size="md" mb="30px">
            Explore this Section
          </Heading>

          <ul className="list-unstyled">
            <li>
              <Link to={"/national-curriculum"}>National Curriculum</Link>
            </li>
            <li>
              <Link to={"/co-curricular"}> Co-Curricular Activities</Link>
            </li>
            <li>
              <Link to={"/extra-curricular"}>Extra-Curricular Activities</Link>
            </li>
            <li className="active">
              <Link to={"/beyond-classroom"}>
                Beyond the Classroom Initiative
              </Link>
            </li>{" "}
          </ul>
        </div>
      </div>

      <StayConnected />
    </>
  );
};
