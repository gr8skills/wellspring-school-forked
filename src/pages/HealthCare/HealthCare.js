import Banner from "../../assets/health-banner.png";
import Home from "../../assets/home.png";

import Image from "../../assets/Image.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// import "./_sports.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const HealthCare = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">Health & Catering</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>Facilities</p>
        <p>Health & Catering</p>
      </div>
      <div className="col-md-12 flexy physical-facilities">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-7 ">
          <Heading size="xl" mb="50px" mt="30px">
            Health & Catering{" "}
          </Heading>
          <p>
            Health is wealth and it is the most critical issue in life. There is
            no alternative to healthy living. Therefore, necessary machinery has
            been put in place to provide a healthy and attractive atmosphere
            that avails students the opportunity to learn with enthusiasm. The
            school is interested in the total well-being of every student in the
            College. To this end, every meal in Wellspring College is prepared
            under hygienic conditions and served by experienced catering staff
            under the supervision of a professional nutritionist. The school has
            a functional sick bay and retains the services of an experienced
            physician. Since the inception of the school, there has not been any
            record of epidemic or spread of diseases because the school is
            always fumigated, and the water is treated to prevent any waterborne
            diseases. The classrooms are well-lit and ventilated thereby
            providing a conducive atmosphere for learning.
          </p>
        </div>
        <div className="col-md-1">&nbsp;</div>

        <div className="col-md-2 side-menu">
          <Heading size="md" mb="30px">
            Explore this Section
          </Heading>

          <ul className="list-unstyled">
            <li>
              <Link to={"/physical-facilities"}>Physical Facilities</Link>
            </li>
            <li>
              <Link to={"/sports"}>Sports</Link>
            </li>
            <li>
              <Link to={"/boarding-facilities"}>Boarding Facilities</Link>
            </li>
            <li className="active">
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
              <img className="col-md-12 br" src={Image} alt="Scholar" />
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-11 col-12">
              <img className="col-md-12 br" src={Image} alt="Scholar" />
            </div>
          </div>{" "}
         
        </div>
      </div>
      <StayConnected />
    </>
  );
};
