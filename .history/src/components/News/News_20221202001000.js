import "./_news.scss";
import Slider1 from "../../assets/slider1.png";
import { Link, NavLink } from "react-router-dom";

export const News=(props)=>{
return (
  <>
    <div className="row">
      <div className="col-md-12 flexy news-container">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-10 flexy">
          <div className="col-md-6 news-img">
            {" "}
            <img className="col-md-12" src={Slider1} alt="Scholar" />
          </div>
          <div className="col-md-6 news-description">
            <h6>{props.date}</h6>
            <p>
              <strong>
              {props.message}
              </strong>
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}