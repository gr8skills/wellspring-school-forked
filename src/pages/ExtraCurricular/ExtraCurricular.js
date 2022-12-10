import React, { useState } from "react";

import Banner from "../../assets/sew-banner.png";
import Home from "../../assets/home.png";

import Draw from "../../assets/draw.png";
import Music from "../../assets/music.png";
import Grill from "../../assets/grill.png";
import Blue2 from "../../assets/blue-double2.png";
import Blue from "../../assets/blue-double.png";
import Cake from "../../assets/cook.png";
import Tour from "../../assets/visit.png";
import Cook from "../../assets/cook2.png";
import Lab from "../../assets/compute-lab.png";
import Sew from "../../assets/sew-double.png";
import Egnr from "../../assets/egnr.png";
import Revamp from "../../assets/revamp.png";
import Capture from "../../assets/capture.png";
import Hat from "../../assets/hat.png";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "./_extra-curricular.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
import { Playground } from "../../components/Playground/Playground";
export const ExtraCurricular = () => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div className="col-md-12 flexy extra-content">
      <div className="col-md-1">&nbsp;</div>
      <div className="col-md-10 flexy">
        <div className="col-md-6 ">
          <div className="col-md-11">
            <Heading size="lg" mb="30px" mt="30px">
              Shoe and Bag Making{" "}
            </Heading>
            <p>
              Students are taught how to identify and properly use work tools,
              identify generator parts and disassemble and assemble a generator
              set. They learn to identify and fix different faults, do general
              servicing and couple a new generator set amongst other things.
            </p>
            <img className="col-md-12 mt6" src={Revamp} alt="Scholar" />
            <Heading size="lg" mb="30px" mt="30px">
              Fashion Designing & Tailoring{" "}
            </Heading>
            <p>
              Students learn how to take proper body measurements, draft
              patterns, sew different hand sewn stitches and use the sewing
              machine. They learn to draft, cut and sew different types of
              skirts, blouses, dresses, male and female native attires and
              children clothing.
            </p>
            <img className="col-md-12 mt6" src={Sew} alt="Scholar" />
            <Heading size="lg" mb="30px" mt="30px">
              Proprietary Training{" "}
            </Heading>
            <p>
              We have partnered with the Etiquette Poise and Protocol Resource
              Academy, a finishing and grooming school. Students are trained to
              skillfully develop etiquette poise, and etiquette IQ and observe
              proper grooming. Students through this training enhance their
              social graces which enables them to put their best foot forward
              and have a good edge over others in today’s fast-paced world.
            </p>
            <img className="col-md-12 mt6" src={Blue2} alt="Scholar" />
          </div>
        </div>
        {/* <div className="col-md-1">&nbsp;</div> */}
        <div className="col-md-6">
          <div className="col-md-11">
            <Heading size="lg" mb="30px" mt="30px">
              Generating Repairs{" "}
            </Heading>
            <p>
              Students are taught how to identify and properly use work tools,
              identify generator parts and disassemble and assemble a generator
              set. They learn to identify and fix different faults, do general
              servicing and couple a new generator set amongst other things.
            </p>
            <img className="col-md-12 mt6 mb6" src={Egnr} alt="Scholar" />
            <Heading size="lg" mb="30px" mt="30px">
              Photography{" "}
            </Heading>
            <p>
              Students are taught how to identify and use a DSLR camera,
              different lenses, and studio photography equipment amongst other
              things. The classes which are a balanced mix of theory and
              practical help the students appreciate and grasp the art and
              science of photography.
            </p>
            <img className="col-md-12 mt6 mb6" src={Capture} alt="Scholar" />{" "}
            <Heading size="lg" mb="30px" mt="30px">
              Hat Making{" "}
            </Heading>
            <p>
              In our hat making classes, the students are taught the art of
              making beautiful headdresses ranging from comb hair accessories
              and fascinators, to hats for all occasions.
            </p>
            <img className="col-md-12 mt6 mb6" src={Hat} alt="Scholar" />
            
          </div>
        </div>
      </div>
    </div>
  );
  const linkName = readMore ? "View Less " : "View More ";
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="2xl"> Extra-Curricular Activities</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>Curriculum</p>
        <p> Extra-Curricular Activities</p>
      </div>
      <div className="col-md-12 flexy curriculum">
        <div className="col-md-1">&nbsp;</div>
        <div className="page-body col-md-5 ">
          <Heading size="lg" mb="50px" mt="30px" className="m-margin">
            Extra-Curricular Activities
          </Heading>{" "}
          <Heading size="md" mb="10px" mt="20px">
            Vocational Training{" "}
          </Heading>
          <p>
            We have employed the services of highly skilled professionals to
            provide hands-on training in the areas of cookery, generator
            repairs, shoe and bag making, fashion design and tailoring, hat
            making, and photography. The vocational training classes are open to
            all students and they are encouraged to participate in any one of
            their choice.
          </p>
          <div className=" col-md-8 col-12">
            <Heading size="md" mb="10px" mt="40px">
              Cake Making
            </Heading>
            <p>
              Students are acquainted with the process of measuring, mixing,
              baking, and decorating different types of cakes. They learn to
              make cakes for special events while keeping up with baking trends.
            </p>
          </div>
        </div>
        <div className="col-md-3">&nbsp;</div>

        <div className="col-md-2 side-menu">
          <Heading size="md" mb="30px">
            Explore this Section
          </Heading>

          <ul className="list-unstyled">
            <li>
              <Link to={"/national-curriculum"}>National Curriculum</Link>
            </li>
            <li>
              <Link to={"/co-curricular"}> Co-Curricular Activities</Link>
            </li>
            <li className="active">
              <Link to={"/extra-curricular"}>Extra-Curricular Activities</Link>
            </li>
            <li>
              <Link to={"/beyond-classroom"}>
                Beyond the Classroom Initiative
              </Link>
            </li>{" "}
          </ul>
        </div>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10 flexy">
          <div className="col-md-6 ">
            <div className="col-md-11">
              {" "}
              <img className="col-md-12 mt6 mb6" src={Cake} alt="Scholar" />
              <Heading size="lg" mb="30px" mt="30px">
                Entrepreneurship Club (In Partnership with SME100 Africa){" "}
              </Heading>
              <p>
                The college has partnered with Nigeria’s foremost
                entrepreneurship initiative “SME100 Africa” to provide
                entrepreneurship training for our students. SME100 Africa is a
                social enterprise that inspires, empowers, equips young
                entrepreneurs and small and medium scale enterprises in Africa.
                Students will be mentored in various aspects of business
                operations and involved in solving real life business problems.
                Every year the top performers will be awarded holiday internship
                opportunities.
              </p>
              <img className="col-md-12 mt6" src={Tour} alt="Scholar" />
            </div>
          </div>
          {/* <div className="col-md-1">&nbsp;</div> */}
          <div className="col-md-6">
            <div className="col-md-11">
              {" "}
              <Heading size="lg" mb="30px" mt="30px">
                Pastry & Dishes{" "}
              </Heading>
              <p>
                Students gain hands-on experience creating a variety of baked
                goods and desserts. they learn the ingredients and techniques
                used in making loaves of bread, pastries, cookies, and a variety
                of desserts. They also learn how to make local and continental
                dishes.
              </p>
              <img className="col-md-12 mt6 mb6" src={Cook} alt="Scholar" />
              <Heading size="lg" mb="30px" mt="30px">
                Animation, Coding & Robotics
              </Heading>
              <p>
                Students are taught the step-by-step techniques of HTML & CSS,
                and Python in creating games, animations, websites and robots.
                The project’s activities gradually introduce coding concepts to
                allow young people build their knowledge incrementally.
              </p>
              <img className="col-md-12 mt6 mb6" src={Lab} alt="Scholar" />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="read-more col-md-12">
        <button
          className="read-more-link"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          <h1>{linkName}</h1>
        </button>
        {readMore && extraContent}
      </div>
      {/* <Playground /> */}
      <StayConnected />
    </>
  );
};
