


import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Pic from "../../../assets/Image.png";

import "./_blog-post.scss";
export const BlogPost= (props) => {
  return (
    <>
      <div className="col-md-12 flexy blog-post">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10 flexy">
          <div className="col-md-5">
            <img className="col-md-11 col-12" src={Pic} alt="Scholar" />
          </div>
          <div className="col-md-6">
            {" "}
            <small>{props.blogDate}</small>
            <Heading size="lg" mb="20px" mt="10px" className="tc">
             {props.blogHeader}
            </Heading>
            <p className="mb2">{props.blog}</p>
            <Link to={props.blogUrl} className="tc">Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
};
