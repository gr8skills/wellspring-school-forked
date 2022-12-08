import Banner from "../../assets/contact-banner.png";
import Home from "../../assets/home.png";
import Fb from "../../assets/f.png";

import Image from "../../assets/Image.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

import "./_contact-us.scss";
import Map from "./Map";
import { StayConnected } from "../../components/StayConnected/StayConnected";
import { EnquiryForm } from "../../components/Form/Form";
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
          <Heading size="sm" mb="30">
            Wellspring College
          </Heading>
          <ul className="list-unstyled">
            <li>
              <PhoneIcon />
              25B Somide Odujinrin Street, Omole Phase 2, Ikeja, Lagos.
            </li>{" "}
            <li>
              <PhoneIcon />
              25B Somide Odujinrin Street, Omole Phase 2, Ikeja, Lagos.
            </li>
          </ul>
        </div>

        <div className="col-md-6 ml2 mt6">
          <Heading size="xl" mb="50px" className="tac">
            Contact
          </Heading>{" "}
          <Map />
        </div>
      </div>
      <div className=" col-md-12 enquiry flexy">
        <div className="col-md-6">&nbsp;</div>

        <div className="col-md-5">
          <Heading as="h3" size="md">
            Send Us a Message to make Inquiry
          </Heading>{" "}
          <EnquiryForm />
        </div>
      </div>
      <StayConnected />
    </>
  );
};
