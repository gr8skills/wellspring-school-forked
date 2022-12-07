import './_testimonials.scss'
import Admin from "../../assets/admin.png";

export const Testimonials=(props)=>{
    return (
      <>
      
        <div className="col-md-12 flexy testimonials ">
          <div className="col-md-1">&nbsp;</div>

          <div className="col-md-4">
            <img
              className="col-md-12 imgCaro"
              src={Admin}
              alt="Scholar"
              width="100%"
            />
          </div>
          <div className="col-md-6 inner-massage">
            <h1>Message from the Principal’s Desk</h1>
            <p style={{ marginBottom: "50px" }}>
              It is a fact that a nation’s future depends on the caliber of its
              youths, hence the importance of the standard of her education
              cannot be over-emphasized. Presently, Nigeria’s educational sector
              is an ailing one, for which reason the founders of Wellspring
              College came up with the idea of a school with the goal of giving
              succor to the Nigerian youth by providing an all-round education
              suitable for future leaders.
            </p>
            {/* <Link style={{ color: "#359bd7" }}>Read More</Link> */}
          </div>
        </div>
      </>
    );
}