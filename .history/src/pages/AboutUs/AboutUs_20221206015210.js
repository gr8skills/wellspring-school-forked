import Banner from "../../assets/about-us.png";

export const AboutUs = () => {
  return (
    <>
      <div className="col-md-12 conainer">
        <img className="col-md-12 imgCaro" src={Banner} alt="Scholar" />
        <div class="overlay">My Name is John</div>
      </div>
    </>
  );
};
