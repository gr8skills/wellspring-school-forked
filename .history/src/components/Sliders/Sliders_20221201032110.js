import './_sliders.scss'
import Slider2 from "../../assets/slider2.png";

export const Sliders=(props)=>{
    return (
      <>
        <div className="col-md-12 slider-header">
          <h1>{props.header}</h1>
        </div>
        <div className="col-md-12 flexy">
          <div className="col-md-1">&nbsp;</div>
          <div className="col-md-4">
            <img className="col-md-12 imgCaro" src={Slider2} alt="Scholar" />
          </div>
          <div className="col-md-1">&nbsp;</div>
          <div></div>
        </div>
      </>
    );
}