import Banner from "../../assets/national-c.png";
import Home from "../../assets/home.png";

import Dot from "../../assets/yellow.png";
import Dot2 from "../../assets/blue.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_national-curriculum.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const NationalCurriculum = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl"> National Curriculum</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>Curriculum</p>
        <p> National Curriculum</p>
      </div>
      <div className="col-md-12 flexy curriculum">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-5 ">
          <Heading size="lg" mb="50px" mt="30px">
            National Curriculum
          </Heading>
          <p>
            Wellspring College operates both the Nigerian Curriculum of
            Education.
          </p>
          <Heading size="lg" mb="50px" mt="30px">
            Junior Secondary School
          </Heading>
          <p>
            The Junior Secondary School curriculum requires students to offer a
            minimum of nine subjects out of the following.
          </p>

          <div className="flexy flexyM">
            <ul className="list-unstyled mr6">
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot} alt="Scholar" />
                English Language
              </li>
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot} alt="Scholar" />
                Mathematics
              </li>
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot} alt="Scholar" />
                French{" "}
              </li>{" "}
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot} alt="Scholar" />
                Religion and National Values
              </li>{" "}
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot} alt="Scholar" />
                Nigerian Languages
              </li>
            </ul>
            <ul className="list-unstyled">
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot} alt="Scholar" />
                English Language
              </li>
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot} alt="Scholar" />
                Mathematics
              </li>
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot} alt="Scholar" />
                French{" "}
              </li>{" "}
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot} alt="Scholar" />
                Religion and National Values
              </li>{" "}
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot} alt="Scholar" />
                Nigerian Languages
              </li>
            </ul>
          </div>
          <Heading size="lg" mb="50px" mt="30px">
            Senior Secondary School
          </Heading>
          <p>
            The Junior Secondary School curriculum requires students to offer a
            minimum of nine subjects out of the following.At the Senior
            Secondary level, the college prepares her students for the following
            examinations:
          </p>
          <ul className="list-unstyled">
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot} alt="Scholar" />
              West African Senior Secondary Certificate Examinations (WASSCE)
            </li>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot} alt="Scholar" />
              National Examination Council (NECO) SSCE
            </li>
          </ul>
          <ul className="list-unstyled">
            <Heading size="md" mb="20px" mt="30px">
              CORE SUBJECTS
            </Heading>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              English Language
            </li>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              Mathematics
            </li>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              French{" "}
            </li>{" "}
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              Religion and National Values
            </li>{" "}
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              Nigerian Languages
            </li>
          </ul>
          <div className="flexy flexyM">
            <ul className="list-unstyled mr6">
              <Heading size="md" mb="20px" mt="30px">
                SOCIAL SCIENCE
              </Heading>
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
                Economics
              </li>
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
                Financial Accounting
              </li>
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
                Commerce
              </li>{" "}
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
                Geography
              </li>{" "}
            </ul>
            <div
            <ul className="list-unstyled">
              <Heading size="md" mb="20px" mt="30px">
                SCIENCE
              </Heading>
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
                Physics
              </li>
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
                Chemistry
              </li>
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
                Biology
              </li>{" "}
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
                ICT
              </li>{" "}
              <li className="flexy flexyM">
                <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
                Futher Mathematics
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">&nbsp;</div>

        <div className="col-md-2 side-menu">
          <Heading size="md" mb="30px">
            Explore this Section
          </Heading>

          <ul className="list-unstyled">
            <li className="active">
              <Link to={"/national-curriculum"}>National Curriculum</Link>
            </li>
            <li>
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

      <StayConnected />
    </>
  );
};
