
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/slider1.png";
import Slider2 from "../../assets/slider2.png";
import "./_home"
export const Home =()=>{
    return (
      <>
        <div className="home-page-trans col-md-6">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="imgCaro d-block w-100 img-fluid "
                src={Slider1}
                alt="Scholar"
                width="100%"
              />
            </Carousel.Item><Carousel.Item>
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