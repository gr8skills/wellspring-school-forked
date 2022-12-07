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
              src={Admin}
              alt="Scholar"
              width="100%"
            />
          </div>
          <div className="col-md-5 testimonial-massage">
            <h1>Message from the Principal’s Desk</h1>
            <p style={{ marginBottom: "50px" }}>
              I personally believe that a good school should not only render
              academic services but also produce well-rounded students that can
              be engrafted into the society. Wellspring College has endeavored
              to instill godly values into my son and also emphasized the
              importance of sport as a means of exercise and recreation while
              giving him quality education.
            </p>
            {/* <Link style={{ color: "#359bd7" }}>Read More</Link> */}
          </div>
          <div className="col-md-1">&nbsp;</div>
        </div>
      </>
    );
}