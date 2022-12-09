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
      <div className="col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10">
          <div className="col-md-12 mt5 mb2">
            <BlogPost
              blogPhoto={Image}
              blogDate="August 29th, 2022"
              blogHeader="WAEC Awards Wellspring College as The Third Best School in 2015 WASSCE in Lagos State"
              blog="Wellspring College won the West African Examination Council (WAEC) Endorsement Fund Prize books for producing the third best aggregate results in the May/June 2015 WASSCE in Lagos State....."
              blogUrl="/main-blog-post"
              linkContent="Read More"
            />
          </div>
          <hr />

          <div className="col-md-12 mt2 mb2">
            <BlogPost
              blogPhoto={Image}
              blogDate="August 29th, 2022"
              blogHeader="Wellspring College affirms Excellence through God"
              blog="Wellspring College, Omole, Lagos State recorded a hundred percent in nineteen subjects in the 2016 West Africa Senior Secondary Certificate Examination. Subjects with these excellent results are: English Language, Chemistry, Physics, Biology....."
              blogUrl="/main-blog-post"
              linkContent="Read More"
            />
          </div>
          <hr />

          <div className="col-md-12 mt2 mb2">
            <BlogPost
              blogPhoto={Image}
              blogDate="August 29th, 2022"
              blogHeader="Wellspring College Founder’s Football Competition"
              blog="The maiden edition of the Wellspring College Founder’s Football Competition was held in the school. The competition has come and gone but its memory lingers on in the minds of all. The college combines academics with sports development, providing......"
              blogUrl="/main-blog-post"
              linkContent="Read More"
            />
          </div>
          <hr />

          <div className="col-md-12 mt2 mb2">
            <BlogPost
              blogPhoto={Image}
              blogDate="August 29th, 2022"
              blogHeader="Wellspring Alumni Excel – Idris Yakubu"
              blog="Idris Yakubu is a proud Alumnus of Wellspring College. He is doing the school proud in faraway USA. The list of his achievements in so short a time between passing out and now is overwhelming...."
              blogUrl="/main-blog-post"
              linkContent="Read More"
            />
          </div>
          <hr />

          <div className="col-md-12 mt2 mb2">
            <BlogPost
              blogPhoto={Image}
              blogDate="August 29th, 2022"
              blogHeader="Wellspring College students’ visit to Forbes under 30 CEO and shoemaker, Kene Rapu"
              blog="On the 9th of May 2018, our shoemaking vocational students visited Nigerian shoemaker and 2018 Forbes under 30 CEO, Kene Rapu in her factory. This was to give the students an opportunity to gain some insight into the world of shoemaking, thus reinforcing ....."
              blogUrl="/main-blog-post"
              linkContent="Read More"
            />
          </div>
          <hr />
          <div className="col-md-12 mt4">
            <BlogPost
              blogPhoto={Image}
              blogDate="August 29th, 2022"
              blogHeader="Wellspring College inroduces Vocational Training Program"
              blog="At Wellspring College, we are constantly seeking opportunities to provide our students with functional education. For this reason, we have engaged the services ofhiof highlled professionals in the areas of photography, baking...."
              blogUrl="/main-blog-post"
              linkContent="Read More"
            />
          </div>
        </div>
      </div>

      <StayConnected />
    </>
  );
};
