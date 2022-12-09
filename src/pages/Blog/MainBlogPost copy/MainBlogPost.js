


import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Pic from "../../../assets/Image.png";
import Banner from "../../../assets/news-banner.png";
import { BlogPost } from "../BlogPost/BlogPost";
import Home from "../../../assets/home.png";

import "./_main-blog-post.scss";
export const MainBlogPost= (props) => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl"> News</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>News</p>
      </div>

      <div className="col-md-12 flexy main-blog-post mt7">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10 flexy">
          <div className="col-md-7">
            <Heading size="xl" mb="20px" mt="10px" className="tac">
             News
            </Heading>
            <img className="col-md-11 col-12" src={Pic} alt="Scholar" />
            <small>August 29th, 2022</small>
            <div className="col-md-9">
              <Heading size="md" mb="20px" mt="10px" className="tc">
                WAEC Awards Wellspring College as The Third Best School in 2015
                WASSCE in Lagos State
              </Heading>
              <p>
                Wellspring College won the West African Examination Council
                (WAEC) Endorsement Fund Prize books for producing the third best
                aggregate results in the May/June 2015 WASSCE in Lagos State.
                <br />
                <br />
                This was at the 54th annual meeting of the Nigeria National
                Committee of WAEC held at the WAEC International Office,
                Agidingbi, Lagos State on 1st December, 2016. <br />
                <br />
                The award was presented by Mr. Fela Bank-Olemoh, the Governor’s
                special adviser on Education, in his capacity as the
                representative of the Governor of Lagos state, Mr Akinwunmi
                Ambode.
              </p>
            </div>
          </div>
          <div className="col-md-5 other-posts br ">
            <Heading size="lg" mb="20px" mt="10px" className="tac">
              Other News
            </Heading>
            <div className="col-md-12 mt4">
              {" "}
              <BlogPost
                blogPhoto={Image}
                blogDate="August 29th, 2022"
                blogHeader=""
                blog="Wellspring College Celebrates its 17th Valedictory Service and Graduation Ceremony"
                blogUrl="/main-blog-post"
              />
            </div>
            <div className="col-md-12 mt4">
              {" "}
              <BlogPost
                blogPhoto={Image}
                blogDate="August 29th, 2022"
                blogHeader=""
                blog="Wellspring College Celebrates its 17th Valedictory Service and Graduation Ceremony"
                blogUrl="/main-blog-post"
              />
            </div>
            <div className="col-md-12 mt4">
              {" "}
              <BlogPost
                blogPhoto={Image}
                blogDate="August 29th, 2022"
                blogHeader=""
                blog="Wellspring College Celebrates its 17th Valedictory Service and Graduation Ceremony"
                blogUrl="/main-blog-post"
              />
            </div>
            <div className="col-md-12 mt4">
              {" "}
              <BlogPost
                blogPhoto={Image}
                blogDate="August 29th, 2022"
                blogHeader=""
                blog="Wellspring College Celebrates its 17th Valedictory Service and Graduation Ceremony"
                blogUrl="/main-blog-post"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
