import Banner from "../../assets/admission.png";
import Home from "../../assets/home.png";
import VideoIcon from "../../assets/vid2.png";

import Dot from "../../assets/yellow.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_admission.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
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
        <p>School Song</p>
      </div>
      <div className="col-md-12 flexy admission">
        <div className="col-md-3">&nbsp;</div>
        <div className="page-body col-md-6 ">
          <div className="col-md-4">
            <Heading size="lg" mb="50px" mt="30px">
              School Song
            </Heading>
            <p style={{ lineHeight: "55px" }}>
              Wellspring College for great achievers School built for knowledge,
              progress and for truth Christ the Lord, our banner, our shield and
              our strength Gives understanding the wellspring of life Wellspring
              College, we’re proud of you Moral and academic excellence: our
              goal We shall work hard to bring glory unto you As we rise and
              shine with God on our side Wellspring achievers, let’s work and
              pray Wisdom is the principal goal, so obtain wisdom And together
              with wisdom, understanding Which are what we need to possess
              life’s Wellspring Make Enquiry
            </p>
          </div>
        </div>
        
      </div>

      <StayConnected />
    </>
  );
};
