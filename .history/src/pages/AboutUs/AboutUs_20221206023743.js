import Banner from "../../assets/about-us.png";
import Home from "../../assets/home.png";
import { Heading } from "@chakra-ui/react";

import './_about-us.scss'
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
        <div className="page-body col-md-7">
          <Heading size="xl">About Us</Heading>
          <p></p></p>
        </div>
      </div>
    </>
  );
};
