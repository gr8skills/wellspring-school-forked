import Banner from "../../assets/facility1-banner.png";
import Home from "../../assets/home.png";

import Dot from "../../assets/yellow.png";
import Computer from "../../assets/computer-room.png";
import Corridor from "../../assets/balcony.png";
import Court from "../../assets/basket-b.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_physical-facilities.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const PhysicalFacilities = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">Physical Facilities</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>Facilities</p>
        <p>Physical Facilities</p>
      </div>
      <div className="col-md-12 flexy physical-facilities">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-7 ">
          <Heading size="lg" mb="50px" mt="30px" className="m-margin">
            Physical Facilities
          </Heading>
          <p>
            Research has revealed that school facilities can profoundly impact
            both teacher and student performance. Wellspring College attests to
            the fact that school facilities are responsive to the changing
            programs of educational delivery. The school environment is
            comfortable, safe, secure, accessible, well illuminated, well
            ventilated and aesthetically pleasing. With a high focus on
            achieving academic excellence, the school ensures that all
            facilities required are available. Such facilities include:
          </p>
          <ul className="list-unstyled ">
            <li className="flexy flexyM">
              <img className="col-md-12 mr1 mt1" src={Dot} alt="Scholar" />
              modern science laboratories
            </li>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1 mt1" src={Dot} alt="Scholar" />a
              well-equipped ICT room
            </li>
            <li className="flexy flexyM">
              <img className="col-md-12 mr1 mt1" src={Dot} alt="Scholar" />
              an air-conditioned library stocked with current publications
            </li>{" "}
            <li className="flexy flexyM">
              <img className="col-md-12 mr1 mt1" src={Dot} alt="Scholar" />
              modern sport facilities
            </li>{" "}
            <li className="flexy flexyM">
              <img className="col-md-12 mr1 mt1" src={Dot} alt="Scholar" />a
              well-equipped home economics laboratory.
            </li>{" "}
            <li className="flexy flexyM">
              <img className="col-md-12 mr1 mt1" src={Dot} alt="Scholar" />
              current and standard audio-visual teaching aids.
            </li>{" "}
            <li className="flexy flexyM">
              <img className="col-md-12 mr1 mt1" src={Dot} alt="Scholar" />
              an ultra-modern basic science and technology workshop
            </li>{" "}
            <li className="flexy flexyM">
              <img className="col-md-12 mr1 mt1" src={Dot} alt="Scholar" />
              excellent and conducive hostels for boys and girls.
            </li>{" "}
            <li className="flexy flexyM">
              <img className="col-md-12 mr1 mt1" src={Dot} alt="Scholar" />a
              spacious playground{" "}
            </li>{" "}
            <li className="flexy flexyM">
              <img className="col-md-12 mr1 mt1" src={Dot} alt="Scholar" />a
              sizeable music room with different kinds of musical instruments{" "}
            </li>{" "}
          </ul>
          <p>
            The school facility is much more than a passive container of the
            educational process: it is, rather, an integral component of the
            conditions of learning.
          </p>{" "}
        </div>
        <div className="col-md-1">&nbsp;</div>

        <div className="col-md-2 side-menu">
          <Heading size="md" mb="30px">
            Explore this Section
          </Heading>

          <ul className="list-unstyled">
            <li className="active">
              <Link to={"/physical-facilities"}>Physical Facilities</Link>
            </li>
            <li>
              <Link to={"/sports"}>Sports</Link>
            </li>
            <li>
              <Link to={"/boarding-facilities"}>Boarding Facilities</Link>
            </li>
            <li>
              <Link to={"/health-catering"}>Health & Catering</Link>
            </li>{" "}
          </ul>
        </div>
      </div>
      <div className="col-md-12 flexy mt5">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10 flexy">
          {" "}
          <div className="col-md-4">
            <div className="col-md-11 col-12">
              <img className="col-md-12 br" src={Computer} alt="Scholar" />
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-11 col-12">
              <img className="col-md-12 br" src={Corridor} alt="Scholar" />
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-11 col-12">
              <img className="col-md-12 br" src={Court} alt="Scholar" />
            </div>
          </div>
        </div>
      </div>
      <StayConnected />
    </>
  );
};
