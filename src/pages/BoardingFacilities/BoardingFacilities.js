import Banner from "../../assets/facility2-banner.png";
import Home from "../../assets/home.png";

import Image from "../../assets/Image.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// import "./_sports.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
export const BoardingFacilities = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">Boarding Facilities</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <Link to={"/"}>
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </Link>
        <p>Facilities</p>
        <p>Boarding Facilities</p>
      </div>
      <div className="col-md-12 flexy physical-facilities">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-7 ">
          <Heading size="xl" mb="50px" mt="30px">
            Boarding Facilities
          </Heading>
          <p>
            The boarding system at Wellspring College is no doubt a home away
            from home. The hostels were established primarily to facilitate the
            actualization of the mission and vision of the school.
            <br /> <br />
            To make life more comfortable for the students, the hostels are
            equipped with different facilities such as water heaters in the
            bathrooms, laundry sections, well-furnished and fully
            air-conditioned common rooms, reading rooms, games equipment – both
            outdoor and indoor games – and stand-by generating plants. <br />
            <br />
            In the hostels, the talents and potentials of an individual child
            are identified, harnessed, and developed. Challenges of students are
            equally identified and efforts are made to overcome them. <br />
            hostel The hostel routines, rules, and regulations are strictly
            adhered to under the supervision of highly qualified, experienced,
            and God-fearing teachers, boarding house masters, and mistresses.
            There are resident medical personnel who attend promptly to health
            challenges. Saturday morning aerobic exercise sessions also help
            students improve physical and cardiovascular fitness. <br />
            <br /> We organize boarders’ lessons where subject teachers spend
            time addressing students’ academic challenges. The academic
            activities of boarders are properly monitored. <br />
            <br />
            The boarders attend Sunday services coordinated by the house
            masters, with occasional guest speakers. Active student
            participation is encouraged at these gatherings.
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
            <li className="active">
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
              <img className="col-md-12 br" src={Image} alt="Scholar" />
            </div>
          </div>{" "}
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
