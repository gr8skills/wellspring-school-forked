import Banner from "../../assets/p-message.png";
import Admin from "../../assets/admin.png";
import Home from "../../assets/home.png";
import Song from "../../assets/song.png";
import Discipline from "../../assets/discipline.png";
import Message from "../../assets/message.png";
import Vision from "../../assets/vision.png";
import Team from "../../assets/teaching-team.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_message.scss";
export const ProprietorMessage = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">Proprietor's Message</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>About Us</p>
        <p>Proprietor's Message</p>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-8 flexy">
          <div className="col-md-5 ">
            <div className="col-md-5 ">
              <Heading size="lg" mt="40px" mb="40px">
                Welcome to Wellsping College
              </Heading>
              <img className="col-md-12 " src={Admin} alt="Scholar" />
            </div>
            <div
              className="col-md-6 "
              style={{ marginLeft: "30px", marginTop: "98px" }}
            >
              <Heading size="md" mt="20px" mb="20px">
                Welcome to Wellsping College
              </Heading>
              <p>
                It is a fact that a nation’s future depends on the caliber of
                its youths, hence the importance of the standard of her
                education cannot be over-emphasized. Presently, Nigeria’s
                educational sector is an ailing one, for which reason the
                founders of Wellspring College came up with the idea of a school
                with the goal of giving succor to the Nigerian youth by
                providing an all-round education suitable for future leaders.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-2 side-menu">
          <Heading size="md" mb="30px">
            Explore this Section
          </Heading>

          <ul className="list-unstyled">
            <li className="active">
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Principal’s Message</Link>
            </li>
            <li>
              <Link>Vision , Mission & Core Values</Link>
            </li>
            <li>
              <Link>Discipline</Link>
            </li>{" "}
            <li>
              <Link>School Song</Link>
            </li>{" "}
            <li>
              <Link>Teaching Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
