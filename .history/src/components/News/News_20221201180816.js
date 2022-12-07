import "./_news.scss";
import Slider1 from "../../assets/slider1.png";
import { Link, NavLink } from "react-router-dom";

export const News=()=>{
return (
  <>
    <div className="col-md-6 flexy news-container">
      <div className="col-md-2">&nbsp;</div>
      <div className="col-md-">
        <div className="col-md-4">
          {" "}
          <img className="col-md-12 imgCaro" src={Slider1} alt="Scholar" />
        </div>
        <div className="col-md-4">
          <h6>August 29th, 2022</h6>
          <p>
            <strong>Wellspringl dskldm</strong>
          </p>
          <Link to="#">Read More</Link>
        </div>
      </div>
    </div>
  </>
);
}