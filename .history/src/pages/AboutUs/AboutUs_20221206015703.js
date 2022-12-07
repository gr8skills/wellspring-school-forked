import Banner from "../../assets/about-us.png";
import './_about-us.scss'
export const AboutUs = () => {
  return (
    <>
      <div className="col-md-12 holder">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div className="overlay"><Heading>About Us</Heading></div>
      </div>
    </>
  );
};
