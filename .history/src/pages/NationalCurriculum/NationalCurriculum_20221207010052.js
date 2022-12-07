import Banner from "../../assets/national-c.png";
import Home from "../../assets/home.png";

import Dot from "../../assets/yellow.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_national-curriculum.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const NationalCurriculum= () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl"> National Curriculum</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>Curriculum</p>
        <p> National Curriculum</p>
      </div>
      <div className="col-md-12 flexy school-song">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-8 ">
          <div className="col-md-4">
            <Heading size="lg" mb="50px" mt="30px">
              National Curriculum
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
        <div className="col-md-2 side-menu">
          <Heading size="md" mb="30px">
            Explore this Section
          </Heading>

          <ul className="list-unstyled">
            <li className="active">
              <Link to={"/national-curriculum"}>National Curriculum</Link>
            </li>
            <li>
              <Link to={"/co"}> Co-Curricular Activities</Link>
            </li>
            <li>
              <Link to={"/vision"}>Extra-Curricular Activities</Link>
            </li>
            <li>
              <Link to={"/discipline"}>Beyond the Classroom Initiative</Link>
            </li>{" "}
            
          </ul>
        </div>
      </div>

      <StayConnected />
    </>
  );
};
