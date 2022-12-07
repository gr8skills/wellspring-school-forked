import Banner from "../../assets/about-us.png";
import './_about-us.scss'
export const AboutUs = () => {
  return (
    <>
      <div className="col-md-12 r">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay">My Name is John</div>
      </div>
    </>
  );
};
