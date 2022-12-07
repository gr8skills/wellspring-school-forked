import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/slider1.png";
import Slider2 from "../../assets/slider2.png";
import Slider3 from "../../assets/slider3.png";
import Admin from "../../assets/admin.png";
import Principal from "../../assets/principal.png";
import Class from "../../assets/class.png";
import Compute from "../../assets/compute.png";
import Grad from "../../assets/grad.png";
import Speech from "../../assets/speech.png";
import Medal from "../../assets/medal.png";
import Read from "../../assets/read2.png";
import FB from "../../assets/fb.png";
import LI from "../../assets/linkedin.png";
import { Heading } from "@chakra-ui/react";
import Logo from "../../assets/logo2.png";
import { Carousel as CalendarCarousel } from "@trendyol-js/react-carousel";

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
import { AspectRatio } from "@chakra-ui/react";
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
          <Calendar
            month="Nov"
            day="10"
            year="2022"
            event="Open Day"
            time="10:00am-3:00pm"
          />
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
      <div className="col-md-12 prospectus-container flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10 prospectus flexy">
          <div className="col-md-1">&nbsp;</div>
          <div className="col-md-4">
            <img className="col-md-12 imgCaro" src={Read} alt="Scholar" />
          </div>
          <div className="col-md-1">&nbsp;</div>

          <div className="col-md-5">
            <h4>Are you looking for the perfect school for your children?</h4>
            <p>Take a look at our</p>
            <h1>Wellspring College Prospectus</h1>
            <AppButton text="Download Now" />
          </div>
        </div>
      </div>
      <div className="col-md-12 flexy video-container">
        <div className="col-md-5">
          <h1>Take a tour our School today</h1>
          <AspectRatio ratio={1}>
            <iframe
              width="1081"
              height="608"
              src="https://www.youtube.com/embed/9laqxoXfz8A"
              title="Wellspring College Virtual Tour"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </AspectRatio>
        </div>
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-5">
          <h1>Wellspring Edge Video</h1>
          <AspectRatio ratio={1}>
            <iframe
              width="1074"
              height="608"
              src="https://www.youtube.com/embed/JZVdF4Yc6Do"
              title="A recommendation from someone you know...  Veteran actress Ayo Adesanya."
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </AspectRatio>
        </div>
      </div>
      <div className="col-md-12 testimonial-title">
        <h1 style={{ textAlign: "center" }}> Our Testimonials</h1>{" "}
      </div>
      <Carousel fade>
        <Carousel.Item>
          {" "}
          <Testimonials
            message="I personally believe that a good school should not only render
              academic services but also produce well-rounded students that can
              be engrafted into the society. Wellspring College has endeavored
              to instill godly values into my son and also emphasized the
              importance of sport as a means of exercise and recreation while
              giving him quality education."
            sliderImg={Principal}
            title="Mrs. Olabode"
            speaker="Parent"
          />
        </Carousel.Item>{" "}
        <Carousel.Item>
          {" "}
          <Testimonials
            message="I personally believe that a good school should not only render
              academic services but also produce well-rounded students that can
              be engrafted into the society. Wellspring College has endeavored
              to instill godly values into my son and also emphasized the
              importance of sport as a means of exercise and recreation while
              giving him quality education."
            sliderImg={Admin}
            title="Mrs. Olabode"
            speaker="Staff"
          />
        </Carousel.Item>
      </Carousel>

      <div className="tab-container col-md-12">
        <AppTab />
      </div>

      <div className="col-md-12 logo-display flexy">
        <div className="col-md-7">&nbsp;</div>
        <div className="col-md-3">
          <img className="col-md-12 imgCaro" src={Logo} alt="Scholar" />
        </div>
      </div>

      <div className="events-header">
        <h1>Upcoming Events</h1>
      </div>
      <div className="col-md-12 upcoming-events">
        {" "}
        <div className=" col-md-12 flexy">
          <div className="col-md-1">&nbsp;</div>
          <div className="col-md-10">
            <CalendarCarousel
              show={4}
              slide={1}
              autoSwipe={1}
              transition={0.9}
              swiping={true}
              infinite={true}
              useArrowKeys={true}
            >
              <Calendar
                month="Nov"
                day="10"
                year="2022"
                event="Open Day"
                time="10:00am-3:00pm"
              />
              <Calendar
                month="Apr"
                day="10"
                year="2023"
                event="Open Day"
                time="10:00am-3:00pm"
              />
              <Calendar
                month="Dec"
                day="20"
                year="2022"
                event="Xmas Party"
                time="10:00am-3:00pm"
              />
              <Calendar
                month="jan"
                day="10"
                year="2022"
                event="Graduation Day"
                time="10:00am-3:00pm"
              />
              <Calendar
                month="jan"
                day="10"
                year="2022"
                event="Graduation Day"
                time="10:00am-3:00pm"
              />
              <Calendar
                month="Dec"
                day="20"
                year="2022"
                event="Xmas Party"
                time="10:00am-3:00pm"
              />
              <Calendar
                month="Nov"
                day="10"
                year="2022"
                event="Open Day"
                time="10:00am-3:00pm"
              />
              <Calendar
                month="Apr"
                day="10"
                year="2023"
                event="Open Day"
                time="10:00am-3:00pm"
              />
              <Calendar
                month="Dec"
                day="20"
                year="2022"
                event="Xmas Party"
                time="10:00am-3:00pm"
              />
              <Calendar
                month="jan"
                day="10"
                year="2022"
                event="Graduation Day"
                time="10:00am-3:00pm"
              />
              <Calendar
                month="jan"
                day="10"
                year="2022"
                event="Graduation Day"
                time="10:00am-3:00pm"
              />
              <Calendar
                month="Dec"
                day="20"
                year="2022"
                event="Xmas Party"
                time="10:00am-3:00pm"
              />
            </CalendarCarousel>
          </div>
        </div>
        <Button style={{ left: "45%" }}>View all events</Button>
      </div>

      <div className="col-md-12 flexy news-container">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-5">
          <Heading as="h6" size="lg">
            Wellspring College News
          </Heading>
          <News
            date="August 29th, 2022"
            message="Wellspring College celebrates it's 17th Valedictory Service and Graduation Ceremony"
            img={Grad}
            url=""
          />
          <hr />
          <News
            date="August 29th, 2022"
            message="The Breakroom Mentorship Programme"
            img={Speech}
            url=""
          />
          <hr />
          <News
            date="August 29th, 2022"
            message="Wellspring College SS1 Science students' visit to Swiss Pharma, Lagos"
            img={Medal}
            url=""
          />
          <hr />
        </div>
        {/* <div className="col-md-1">&nbsp;</div> */}

        <div className="col-md-4 stay-connected">
          <Heading as="h6" size="lg">
            Stay Connected
          </Heading>
          <div className="news-channel">
            <Heading as="h6" size="md" style={{ marginBottom: "10px" }}>
              @Wellspringcollege
            </Heading>
            <p style={{ marginBottom: "30px" }}>
              Watch all of our videos on our YouTube Channel
            </p>
            <AppButton text="Subscribe to our Channel" />
          </div>
          <div className="col-md-12 flexy" style={{ marginTop: "40px" }}>
            <div className="col-md-6" style={{ marginRight: "15px" }}>
              <img
                className="col-md-12 imgCaro"
                src={Class}
                alt="Scholar"
                width="80%"
              />
            </div>
            <div className="col-md-6">
              <img
                className="col-md-12 imgCaro"
                src={Compute}
                alt="Scholar"
                width="80%"
              />
            </div>
          </div>
          <Button>Follow us on instagram</Button>
          <div className="col-md-12 flexy handles">
            <div className="col-md-2">&nbsp;</div>
            <div className="col-md-3">
              <img
                className="col-md-12 imgCaro"
                src={FB}
                alt="Scholar"
                width="100%"
              />
              <Heading as="h6" size="sm">
                Follow us on Facebook
              </Heading>
            </div>
            <div className="col-md-3">&nbsp;</div>

            <div className="col-md-3">
              <div className="col-md-12 linked">
                <img
                  className="col-md-12 imgCaro "
                  src={LI}
                  alt="Scholar"
                  width="100%"
                />
              </div>
              <Heading as="h6" size="sm">
                Connect with us on Linkedin
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
