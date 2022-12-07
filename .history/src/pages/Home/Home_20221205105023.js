import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/slider1.png";
import Slider2 from "../../assets/slider2.png";
import Slider3 from "../../assets/slider3.png";
import Admin from "../../assets/admin.png";
import Principal from "../../assets/principal.png";
import { Flex, Spacer, Center, Square, Box, Text } from "@chakra-ui/react";
// import Slider4 from "../../assets/compute.png";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "./_home.scss";
import { AppButton } from "../../components/AppButton/AppButton";
import { Calendar } from "../../components/Calendar/Calendar";
import { News } from "../../components/News/News";
import { AppTab } from "../../components/AppTab/AppTab";
export const Home = () => {
  return (
    <>
      <div className="home-page-trans col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10">
          {" "}
          <Carousel fade>
            <Carousel.Item>
              <div className="col-md-12 flexy">
                <div className="col-md-4 slider-label">
                  <h1>Beyond the Classroom</h1>
                  <p>
                    Wellspring College Students Visit Foremost Award-Winning
                    Fashion Designer Mai Atafo
                  </p>
                </div>
                <div className="col-md-1">&nbsp;</div>
                <div className="col-md-7 slider-container">
                  <img
                    className="col-md-12 imgCaro"
                    src={Slider1}
                    alt="Scholar"
                  />
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="col-md-12 flexy">
                <div className="col-md-4 slider-label">
                  <h1>WELLSPRING OUTINGS</h1>
                  <p>
                    Wellspring College Students Visit Foremost Award-Winning
                    Designer Mai Atafo
                  </p>
                </div>
                <div className="col-md-1">&nbsp;</div>

                <div className="col-md-7 slider-container">
                  <img
                    className="col-md-12 imgCaro"
                    src={Slider2}
                    alt="Scholar"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-12 flexy">
                <div className="col-md-4 slider-label">
                  <h1>WELLSPRING OUTINGS</h1>
                  <p>
                    Wellspring College Students Visit Foremost Award-Winning
                    Designer Mai Atafo
                  </p>
                </div>
                <div className="col-md-1">&nbsp;</div>

                <div className="col-md-7 slider-container">
                  <img
                    className="col-md-12 imgCaro"
                    src={Slider3}
                    alt="Scholar"
                  />
                </div>
              </div>
            </Carousel.Item>
            {/* <Carousel.Item>
              <div className="col-md-12 flexy">
                <div className="col-md-4 slider-label">
                  <h1>WELLSPRING OUTINGS</h1>
                  <p>
                    Wellspring College Students Visit Foremost Award-Winning
                    Designer Mai Atafo
                  </p>
                </div>
                <div className="col-md-1">&nbsp;</div>

                <div className="col-md-7 slider-container">
                  <img
                    className="col-md-12 imgCaro"
                    src={Slider4}
                    alt="Scholar"
                  />
                </div>
              </div>
            </Carousel.Item> */}
          </Carousel>
          <AppButton text="Apply Here" />
          {/* <Calendar month="Nov" day="10" year="2022" event="Open Day" time="10:00am-3:00pm"/> */}
          {/* <News date="August 29th, 2022" message="Wellspring College celebrates it's 17th Valedictory Service and Graduation Ceremony" url=""/> */}
          {/* <div className="row">
            <div className="col-md-12 flexy welcome-message">
              <div className="col-md-1">&nbsp;</div>
              <div className="col-md-3">
                <img src={Admin} alt="Scholar" width="100%" />
              </div>
              <div className="col-md-1">&nbsp;</div>
              <div className="col-md-6 message">
                <h1>Message from the Principal’s Desk</h1>
                <p>
                  It is a fact that a nation’s future depends on the caliber of
                  its youths, hence the importance of the standard of her
                  education cannot be over-emphasized. Presently, Nigeria’s
                  educational sector is an ailing one, for which reason the
                  founders of Wellspring College came up with the idea of a
                  school with the goal of giving succor to the Nigerian youth by
                  providing an all-round education suitable for future leaders.
                </p>
              </div>
            </div>
          </div> */}
          <div className="welcome-message-header">
            <h1>Welcome to Wellspring College</h1>
          </div>
          <div className="col-md-12 flexy welcome-message">
            <div className="col-md-5">
              <img className="col-md-12 imgCaro" src={Admin} alt="Scholar" />
            </div>
            <div className="col-md-6 inner-massage">
              <h1>Message from the Principal’s Desk</h1>
              <p style={{ marginBottom: "50px" }}>
                {" "}
                It is a fact that a nation’s future depends on the caliber of
                its youths, hence the importance of the standard of her
                education cannot be over-emphasized. Presently, Nigeria’s
                educational sector is an ailing one, for which reason the
                founders of Wellspring College came up with the idea of a school
                with the goal of giving succor to the Nigerian youth by
                providing an all-round education suitable for future leaders.
              </p>
              <Link style={{ color: "#359bd7" }}>Read More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 welcome-message-title">
        <h1 style={{ textAlign: "center" }}> Our Testimonials</h1>
        <Testimonials
          message="I personally believe that a good school should not only render
              academic services but also produce well-rounded students that can
              be engrafted into the society. Wellspring College has endeavored
              to instill godly values into my son and also emphasized the
              importance of sport as a means of exercise and recreation while
              giving him quality education."
          sliderImg={Admin}
          title="Mrs. Olabode"
          speaker="parent"
        />
      </div>

      <div className="tab-container col-md-12">
        <AppTab />
      </div>
    </>
  );
};
