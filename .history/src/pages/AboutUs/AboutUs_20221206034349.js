import Banner from "../../assets/about-us.png";
import Home from "../../assets/home.png";
import Song from "../../assets/song.png";
import Discipline from "../../assets/discipline.png";
import Message from "../../assets/message.png";
import Vision from "../../assets/vision.png";
import Team from "../../assets/teaching-team.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_about-us.scss";
export const AboutUs = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">About Us</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>About Us</p>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-8">
          <Heading size="xl" mt="40px" mb="40px">
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
          </p>
          <br />{" "}
          <p>
            At Wellspring College, we seek every occasion to provide our
            students with opportunities for sound academic, mental, spiritual
            and social development.{" "}
          </p>{" "}
          <p>
            We ensure that for our students learning is not a challenge, it’s
            interesting, it’s fun, it’s hands-on. <br /> <br /> We continuously
            train unique, and exceptional students, which gives them the
            leverage to be distinct amongst their pears.
          </p>
        </div>
        <div className="col-md-2 side-menu">
          <Heading size="md" mb="30px">
            Explore this Section
          </Heading>

          <ul className="list-unstyled">
            <li className="active">
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Principal’s Message</Link>
            </li>
            <li>
              <Link>Vision , Mission & Core Values</Link>
            </li>
            <li>
              <Link>Discipline</Link>
            </li>{" "}
            <li>
              <Link>School Song</Link>
            </li>{" "}
            <li>
              <Link>Teaching Team</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8 flexy">
          <div className="col-md-4 holder2">
            <a href="#">
              {" "}
              <img className="col-md-10 " src={Message} alt="Scholar" />
              <div className="overlay2">
                <h5>Principal's Message</h5>
              </div>
            </a>
          </div><div className="col-md-4 holder2">
            <a href="#">
              {" "}
              <img className="col-md-10 " src={Message} alt="Scholar" />
              <div className="overlay2">
                <h5>Principal's Message</h5>
              </div>
            </a>
          </div><div className="col-md-4 holder2">
            <a href="#">
              {" "}
              <img className="col-md-10 " src={Message} alt="Scholar" />
              <div className="overlay2">
                <h5>Principal's Message</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
