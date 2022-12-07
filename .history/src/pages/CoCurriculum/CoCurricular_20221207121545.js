import React, { useState } from "react";

import Banner from "../../assets/co-corricular.png";
import Home from "../../assets/home.png";

import Draw from "../../assets/draw.png";
import Blue2 from "../../assets/blue-double2.png";
import Blue from "../../assets/blue-double.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_co-curricular.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
import { Playground } from "../../components/Playground/Playground";
export const CoCurricular = () => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div className="col-md-12 flexy">
      <div className="col-md-1">&nbsp;</div>
      <div className="col-md-10 flexy">
        <div className="col-md-6 ">
          <img className="col-md-12 mt6 mb6" src={Blue2} alt="Scholar" />
          <Heading size="lg" mb="30px" mt="30px">
            Shapes and Figures Club{" "}
          </Heading>
          <p>
            This club falls within the auspices of the Mathematics Department
            and serves the purpose of stimulating students’ interest in
            Mathematics, thereby reducing the apathy/hatred that they might have
            for the subject. Shapes and figures club draws students to
            mathematics. All students are required to be members of this club.
          </p>
          <img className="col-md-12 mt6" src={Draw} alt="Scholar" />
        </div>
        {/* <div className="col-md-1">&nbsp;</div> */}
        <div className="col-md-6">
          <Heading size="lg" mb="30px" mt="30px">
            Press Club
          </Heading>
          <p>
            The Press Club encourages students’ critical assessment of societal
            issues, enhances their reading culture as well as develops their
            writing and reading skills through activities such as writing,
            editing, reporting, and news broadcasting.
          </p>
          <img className="col-md-12 mt6 mb6" src={Blue} alt="Scholar" />
          <Heading size="lg" mb="30px" mt="30px">
            Drama Club
          </Heading>
          <p>
            The Drama Club focuses on sharpening its members’ sense of
            imagination. They learn to create characters and plots with which
            they address critical societal issues. The members develop an
            appreciation for the performing arts and gain confidence as they
            participate in in-house and external drama presentations.
          </p>
          <img className="col-md-12 mt6 mb6" src={Blue} alt="Scholar" />{" "}
        </div>
      </div>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";
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
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10 flexy">
          <div className="col-md-6 ">
            <img className="col-md-12 mt6 mb6" src={Blue2} alt="Scholar" />
            <Heading size="lg" mb="30px" mt="30px">
              Shapes and Figures Club{" "}
            </Heading>
            <p>
              This club falls within the auspices of the Mathematics Department
              and serves the purpose of stimulating students’ interest in
              Mathematics, thereby reducing the apathy/hatred that they might
              have for the subject. Shapes and figures club draws students to
              mathematics. All students are required to be members of this club.
            </p>
            <img className="col-md-12 mt6" src={Draw} alt="Scholar" />
          </div>
          {/* <div className="col-md-1">&nbsp;</div> */}
          <div className="col-md-6">
            <Heading size="lg" mb="30px" mt="30px">
              Press Club
            </Heading>
            <p>
              The Press Club encourages students’ critical assessment of
              societal issues, enhances their reading culture as well as
              develops their writing and reading skills through activities such
              as writing, editing, reporting, and news broadcasting.
            </p>
            <img className="col-md-12 mt6 mb6" src={Blue} alt="Scholar" />
            <Heading size="lg" mb="30px" mt="30px">
              Drama Club
            </Heading>
            <p>
              The Drama Club focuses on sharpening its members’ sense of
              imagination. They learn to create characters and plots with which
              they address critical societal issues. The members develop an
              appreciation for the performing arts and gain confidence as they
              participate in in-house and external drama presentations.
            </p>
            <img className="col-md-12 mt6 mb6" src={Blue} alt="Scholar" />{" "}
          </div>
        </div>
      </div>
      <div className="read-more col-md-12">
        <a
          className="read-more-link"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          <h2>{linkName}</h2>
        </a>
        {viewMore && extraContent}
      </div>
      {/* <Playground /> */}
      <StayConnected />
    </>
  );
};
