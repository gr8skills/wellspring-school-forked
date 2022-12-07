
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/slider1.png";

export const Home =()=>{
    return (
      <>
        <div className="page-trans col-md-12">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="imgCaro d-block w-100 img-fluid "
                src={Slider1}
                alt="Scholar"
                width=""
              />
            </Carousel.Item>

            
            
          </Carousel>
        </div>
      </>
    );
}