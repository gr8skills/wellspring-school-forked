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
            <div className="col-md-3">&nbsp;</div>
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
      <div className="col-md-12 curriculum flexy">
        <div className="col-md-1"></div>
        <div className="flexy flexyM col-md-8">
          <ul className="list-unstyled mr6 4">
            <Heading size="md" mb="20px" mt="30px">
              ARTS/HUMMANITIES
            </Heading>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              Government
            </li>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              Literature
            </li>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              Christian Religious Studies
            </li>{" "}
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              French Language
            </li>{" "}
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              Igbo Language
            </li>{" "}
          </ul>
          <div className="col-md-1">&nbsp;</div>
          <ul className="list-unstyled ">
            <Heading size="md" mb="20px" mt="30px">
              TRADE AND VOCATIONAL SUBJECTS
            </Heading>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              Agricultural Science
            </li>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              Technical Drawing
            </li>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              Auto Mechanical Works
            </li>{" "}
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              Data Processing
            </li>{" "}
          </ul>{" "}
          <div className="col-md-1">&nbsp;</div>
          <ul className="list-unstyled mt6">
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              Catering Craft Practice
            </li>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              Foods and Nutrition
            </li>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1" src={Dot2} alt="Scholar" />
              BiologyBook-Keeping
            </li>{" "}
          </ul>
        </div>
      </div>
      <StayConnected />
    </>
  );
};
