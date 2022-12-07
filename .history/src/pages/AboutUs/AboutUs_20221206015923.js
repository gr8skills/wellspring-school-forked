import Banner from "../../assets/about-us.png";
import { Heading } from "@chakra-ui/react";

import './_about-us.scss'
export const AboutUs = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size='3xl>About Us</Heading>
        </div>
      </div>
    </>
  );
};
