
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../assets/slider.png";

export const Home =()=>{
    return (
      <>
        <div>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="imgCaro d-block w-100 img-fluid "
                src={Slider1}
                alt="Scholar"
              />
            </Carousel.Item>

            
            
          </Carousel>
        </div>
      </>
    );
}