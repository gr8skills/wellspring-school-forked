import Banner from "../../assets/news-banner.png";
import Home from "../../assets/home.png";

import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Image from "../../assets/Image.png";

import "./_blog.scss";
import { StayConnected } from "../../components/StayConnected/StayConnected";
import { BlogPost } from "./BlogPost/BlogPost";
export const Blog= () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">
          <Heading size="3xl">News</Heading>
        </div>
      </div>
      <div className="flexy breadcrumb">
        <div className="col-md-1">&nbsp;</div>
        <a href="#">
          <img className="col-md-12 home-icon" src={Home} alt="Scholar" />
        </a>
        <p>News</p>
      </div>
      <BlogPost
        blogPhoto={Image}
        blogDate="August 29th, 2022"
        blogHeader="WAEC Awards Wellspring College as The Third Best School in 2015 WASSCE in Lagos State"
        blog="Wellspring College won the West African Examination Council (WAEC) Endorsement Fund Prize books for producing the third best aggregate results in the May/June 2015 WASSCE in Lagos State....."
        blogUrl="#"
      />

      <StayConnected />
    </>
  );
};
