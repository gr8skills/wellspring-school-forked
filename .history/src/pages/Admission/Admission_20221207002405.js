import Banner from "../../assets/admission.png";
import Home from "../../assets/home.png";
import VideoIcon from "../../assets/vid2.png";
import Happy from "../../assets/happy.png";
import Microsoft from "../../assets/microsoft.png";
import Users from "../../assets/profile2user.png";
import Cup from "../../assets/cup.png";
import Graduate from "../../assets/graduate.png";

import Dot from "../../assets/yellow.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_admission.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
import { Prospectus } from "../../components/Prospectus/Prospectus";
export const Admission = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <div className="videoIcon">
            {" "}
            <img className="col-md-1" src={VideoIcon} alt="Scholar" />
          </div>
          <Heading size="3xl">Admission</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>About Us</p>
        <p>Admission</p>
      </div>
      <div className="col-md-12 flexy admission">
        <div className="col-md-3">&nbsp;</div>
        <div className="page-body col-md-6 ">
          <Heading size="lg" mb="50px" mt="30px">
            Admission
          </Heading>
          <p style={{ lineHeight: "35px" }}>
            Thank you for your interest in Wellspring College.
            <br /> Our admissions policy states the criteria and standards
            required for students to gain admission to the College. Students
            must meet the following:
          </p>
        </div>
      </div>
      <div className="col-md-12 flexy mt6">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10 flexy">
          <div className="page-body col-md-5 ">
            <Heading size="lg" mb="50px" mt="30px">
              Academic Requirements
            </Heading>
            <p>
              Applicants seeking admission into junior school must be 10 years
              or older within their admission year. have at minimum a score of
              50% in their Entrance Examination while students seeking entrance
              into the senior classes must score an average of 65% on their
              Entrance Examination. Wellspring College is an English-speaking
              school and all students must demonstrate proficiency in the
              English language before admissions
            </p>
          </div>
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-5">
            {" "}
            <img className="col-md-12 br" src={Happy} alt="Scholar" />
          </div>
        </div>
      </div>
      <div className="col-md-12 admission-process-container mt6">
        <div style={{ textAlign: "center" }}>
          <Heading size="xl" mb="30px" mt="10px">
            Application Process
          </Heading>
          <p>
            To begin the Admission process, kindly follow the following steps:
          </p>
        </div>
        <div className="col-md-12 admission-process mt5">
          <div className="col-md-12 flexy">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10 flexy">
              <div className="col-md-4">
                <div className="col-md-8">
                  {" "}
                  <h1 className="tc2">
                    <span>1</span>
                    Get Form
                  </h1>
                  <p className="mt2">
                    Fill out and submit the online application form or purchase
                    the hard copy at the school.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-8">
                  <h1 className="tc2">
                    <span>2</span>
                    Pay Fees
                  </h1>
                  <p className="mt2">
                    Pay a non-refundable fee of N10,000 to Wellspring College
                    Account (UBA 1018787398) and send the proof of payment via
                    email to:{" "}
                    <a href="#" className="tc">
                      admissions@wellspringcollege.org
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-md-8">
                  <h1 className="tc2">
                    <span>3</span>
                    Submit Certicifate
                  </h1>
                  <p className="mt2">
                    For both online and offline applications, submit 3 hard copy
                    passport photos, and a copy of the candidate’s birth
                    certificate to the school.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 flexy admission-process mt5">
          <div className="col-md-3">&nbsp;</div>
          <div className="col-md-6 flexy">
            <div className="col-md-6">
              <div className="col-md-8">
                <h1 className="tc2">
                  <span>4</span>
                  Write Exams
                </h1>
                <p className="mt2">
                  Upon receipt of all application documents, applicants are
                  expected to take the entrance examination
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-8">
                <h1 className="tc2">
                  <span>5</span>
                  Admission letter
                </h1>
                <p className="mt2">
                  Successful candidates will receive admission letters with
                  further instructions on registration procedures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 flexy about">
        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-6">
          <Heading size="xl" mb="70px" mt="90px">
            About Us
          </Heading>
          <p>
            Founded in 2003, today Wellspring College proudly welcomes over 650
            students representing different ethnicities, embracing a vision of
            transformative learning and a culture of excellence. Through rich
            enhancements in curricular and extracurricular activities, we strive
            to provide good education, one that grooms our students to be
            globally competitive and exceptional leaders. We ensure that
            students are equipped with requisite 21st century skills by which
            they are empowered to provide winning solutions for tomorrow’s
            challenges.
            <br /> <br /> At Wellspring College, we seek every occasion to
            provide our students with opportunities for sound academic, mental,
            spiritual and social development.We ensure that for our students
            learning is not a challenge, it’s interesting, it’s fun, it’s
            hands-on. <br /> <br /> We continuously train unique, and
            exceptional students, which gives them the leverage to be distinct
            amongst their pears.
          </p>
        </div>
      </div>
      <Prospectus />
      <div className="col-md-12 flexy achievements mt6">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-2 tac">
          <img className="col-md-12" src={Microsoft} alt="Scholar" />
          <small>Wellspring College is designated by</small>
          <Heading size="xl" noOfLines={3}>
            Microsoft Certified Educators
          </Heading>
          <small>across Nigeria</small>
        </div>
        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-5">
          <div className="col-md-12 flexy flexyM">
            <img className="col-md-12 mr2" src={Users} alt="Scholar" />
            <div>
              <h1 className="tc2">Over 650</h1>
              <p>active students</p>
            </div>
          </div>
          <hr />
          <div className="col-md-12 flexy flexyM mt6">
            <img className="col-md-12 mr2" src={Users} alt="Scholar" />
            <div>
              <h1 className="tc2">Over 650</h1>
              <p>active students</p>
            </div>
          </div>{" "}
          <hr />
          <div className="col-md-12 flexy flexyM mt6">
            <img className="col-md-12 mr2" src={Users} alt="Scholar" />
            <div>
              <h1 className="tc2">Over 650</h1>
              <p>active students</p>
            </div>
          </div>
        </div>
      </div>
      <StayConnected />
    </>
  );
};
