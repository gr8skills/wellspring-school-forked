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
      <div className="col-md-12 flexy message">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-8 ">
          <div className="page-body col-md-12 flexy">
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
          <p>
            {" "}
            At Wellspring College, we emphasize academic and moral excellence.
            We are committed to turning out youths who are not only academically
            sound but also of unquestionable character.
          </p>
          <br />
         
          <p>
            Wellspring College is located in an enabling serene environment
            within Omole Phase II Estate. The school boasts of many modern
            educational facilities which include conducive classrooms equipped
            with interactive boards, ICT Laboratory, well-furnished hostels, and
            sports equipment. Our teachers are highly qualified and experienced
            in their respective fields and are committed beyond duty to
            providing the students with all the required academic support. We
            operate a coaching clinic that offers assistance to academically
            challenged students in their areas of weakness.
          </p>
          <br />
          
          <div className="flexy" style={{ textAlign: "center" }}>
            <div className="col-md-2">&nbsp;</div>
            <p className="col-md-7">
              <strong>
                Our track record of academic excellence is evident in the award
                given to us as the <span>3rd Best School</span> in Lagos State
                in 2015 WASSCE by WAEC.
              </strong>
            </p>
          </div>
          <br />
          <br />
          <p>
            We have a formidable Parent Teacher Association (PTA) that works
            hand-in-hand with the management to discover and develop the
            potential of the students. The school organizes an annual “Godly
            Parenting Seminar” for parents. This is in recognition of the
            challenges inherent in the upbringing of the total child. The Godly
            Parenting Seminar is the College’s contribution to parenting in
            Nigeria. We believe in the potential for greatness in every child,
            hence we build on the positive character traits of each child and
            inculcate the passion for competition and the zeal to excel. At
            Wellspring College, we encourage and stimulate the interest of our
            students in co-curricular activities such as debate, moral
            instruction, leadership training, public speaking, and sports. As a
            result of this, we have excelled in quiz debates and sports
            competitions in the country.
          </p>
          <br />
          <br />
          <div className="flexy" style={{ textAlign: "center" }}>
            <div className="col-md-2">&nbsp;</div>
            <p className="col-md-7">
              <strong>
                {" "}
                We have produced graduates who continue to excel in their chosen
                endeavours within and outside the country.
              </strong>
            </p>
          </div>
          <br />
          <br />
          <p>
            Finally, we operate an open-door policy and work closely with all
            stakeholders in order to put the school on the continuous wheel of
            evolvement, enabling it to anticipate and meet changes in the field
            of education, and ever-increasing expectations.
          </p>
          <br />
          <br />
          <div className="flexy" style={{ textAlign: "center" }}>
            <div className="col-md-2">&nbsp;</div>
            <p className="col-md-7">
              <strong>
                {" "}
                Above all, we are guided by the truth that{" "}
                <span>
                  if the Lord is not in charge, the builders labour in vain
                  (Psalm 127:1)
                </span>{" "}
                hence, our utmost reliance in GOD who is forever faithful.
              </strong>
            </p>
          </div>
        </div>
        <div className="col-md-2 side-menu">
          <Heading size="md" mb="30px">
            Explore this Section
          </Heading>

          <ul className="list-unstyled">
            <li>
              <Link to={"/about-us"}>About Us</Link>
            </li>
            <li className="active">
              <Link to={"/proprietor-message"}> Principal’s Message</Link>
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
