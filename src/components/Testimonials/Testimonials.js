import './_testimonials.scss'
import Admin from "../../assets/admin.png";

export const Testimonials=(props)=>{
    return (
      <>
        <div className="col-md-12 flexy testimonial">
          <div className="col-md-1">&nbsp;</div>

          <div className="col-md-4 testimonial-content" >
            <img
              className="col-md-12 imgCaro br"
              src={props.sliderImg}
              alt="Scholar"
              width="100%"
            />
          </div>
          <div className="col-md-5 testimonial-massage">
            <h1>
              <strong style={{ marginRight: "5px" }}>"</strong>
              {props.title}
            </h1>
            <small style={{ marginLeft: "40px" }}>
              <em>{props.speaker}</em>
            </small>
            <p>{props.message}</p>
          </div>
          <div className="col-md-1">&nbsp;</div>
        </div>
      </>
    );
}