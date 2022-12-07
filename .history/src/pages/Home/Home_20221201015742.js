
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/slider1.png";
import Slider2 from "../../assets/slider2.png";
import "./_home.scss";
export const Home =()=>{
    return (
      <>
        <div className="home-page-trans col-md-12">
          <Carousel fade>
            <Carousel.Item>
              
              <div className="col-md-6"><h1>WELLSPRING SCHOOL</h1></div>
              <div className="col-md-6">
                <img
                  className="imgCaro d-block w-100 img-fluid "
                  src={Slider1}
                  alt="Scholar"
                  width="100%"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="imgCaro d-block w-100 img-fluid "
                src={Slider2}
                alt="Scholar"
                width="100%"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
}