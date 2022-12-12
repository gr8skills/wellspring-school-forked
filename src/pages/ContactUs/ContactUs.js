import Banner from "../../assets/contact-banner.png";
import Home from "../../assets/home.png";
import Fb from "../../assets/f.png";

import Image from "../../assets/Image.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Icofont from "react-icofont";

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
        <Link to={"/"}>
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </Link>
        <p>Contact Us</p>
      </div>
      <div className="col-md-12 flexy contact">
        <div className="col-md-1">&nbsp;</div>

        <div className="col-md-4 mt7 m-margin">
          <Heading size="sm" mb="30">
            Wellspring College
          </Heading>
          <ul className="list-unstyled">
            <li>
              <i class="icofont-location-pin"></i>
              25B Somide Odujinrin Street, Omole Phase 2, Ikeja, Lagos.
            </li>{" "}
            <li>
              <i class="icofont-phone"></i> (+234) 818- 648-3476 <br />
              <span className="ml5">(+234) 908-5772-150</span>
            </li>
            <li>
              <i class="icofont-briefcase-1"></i> Monday - Friday: 08:00-17:00
              <br />
              <span className="ml5">Saturday & Sunday: Closed</span>
            </li>
            <li>
              <i class="icofont-ui-message"></i> info@wellspringcollege.org
            </li>
            <li>
              <i class="icofont-facebook"></i> Wellspring College
            </li>{" "}
            <li>
              <i class="icofont-instagram ig"></i> Wellspring_college
            </li>
          </ul>
        </div>

        <div className="col-md-6 ml2 mt6 map-container">
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
