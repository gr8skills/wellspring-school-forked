


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
          <div className="col-md-5 zooom">
            <img className="col-md-11 col-12" src={Pic} alt="Scholar" />
          </div>
          <div className="col-md-6">
            <small>{props.blogDate}</small>
            <Link to={props.blogUrl}>
              <Heading size="lg" mb="20px" mt="10px" className="tc">
                {props.blogHeader}
              </Heading>

              <p className="mb2">{props.blog}</p>
            </Link>
            <Link to={props.blogUrl} className="tc">
              {props.linkContent}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
