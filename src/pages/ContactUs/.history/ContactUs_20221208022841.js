import Banner from "../../assets/contact-banner.png";
import Home from "../../assets/home.png";
import Lab from "../../assets/lab2.png";

import Image from "../../assets/Image.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

import "./_contact-us.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const ContactUs = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">Contact Us</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>Contact Us</p>
      </div>
      <div className="col-md-12 flexy ">
        <div className="col-md-1">&nbsp;</div>

        <div className="col-md-4">
          <Heading size="xl" mb="50px" mt="30px" className="tac">
            Contact Us
          </Heading>
          <Heading size="sm" mb="30">
            Wellspring College
          </Heading>
          <ul className="list-unstyled">
            <li>
              <PhoneIcon />
              25B Somide Odujinrin Street, Omole Phase 2, Ikeja, Lagos.
            </li>
          </ul>
        </div>

        <div className="col-md-6 ml2 mt6">
          {" "}
          
        </div>
      </div>

      <StayConnected />
    </>
  );
};
