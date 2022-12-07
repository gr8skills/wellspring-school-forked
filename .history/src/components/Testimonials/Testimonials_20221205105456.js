import './_testimonials.scss'
import Admin from "../../assets/admin.png";

export const Testimonials=(props)=>{
    return (
      <>
        <div className="col-md-12 flexy testimonial ">
          <div className="col-md-1">&nbsp;</div>

          <div className="col-md-4">
            <img
              className="col-md-12 imgCaro"
              src={props.sliderImg}
              alt="Scholar"
              width="100%"
            />
          </div>
          <div className="col-md-5 testimonial-massage">
            <h1>{props.title}</h1>
            <small>{props.speaker}</small>
            <p style={{ marginBottom: "50px" }}>{props.message}</p>
            {/* <Link style={{ color: "#359bd7" }}>Read More</Link> */}
          </div>
          <div className="col-md-1">&nbsp;</div>
        </div>
      </>
    );
}