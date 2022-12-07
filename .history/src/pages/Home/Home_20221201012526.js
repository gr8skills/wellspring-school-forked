
import Carousel from "react-bootstrap/Carousel";
import Slider from "../assets/Circle.png";

export const Home =()=>{
    return (
      <>
        <div>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="imgCaro d-block w-100 img-fluid "
                src={scholar}
                alt="Scholar"
              />
            </Carousel.Item>

            
            
          </Carousel>
        </div>
      </>
    );
}