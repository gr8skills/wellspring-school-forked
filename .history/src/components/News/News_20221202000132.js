import "./_news.scss";
import Slider1 from "../../assets/slider1.png";
import { Link, NavLink } from "react-router-dom";

export const News=()=>{
return (
  <>
  <div class></div>
    <div className="col-md-12 flexy news-container">
      <div className="col-md-2">&nbsp;</div>
      <div className="col-md-10 flexy">
        <div className="col-md-6 news-img">
          {" "}
          <img className="col-md-12" src={Slider1} alt="Scholar" />
        </div>
        <div className="col-md-6 news-description">
          <h6>August 29th, 2022</h6>
          <p>
            <strong>Wellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldmellspringl dskldm</strong>
          </p>
          <Link to="#">Read More</Link>
        </div>
      </div>
    </div>
  </>
);
}