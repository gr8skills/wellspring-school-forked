
import Carousel from "react-bootstrap/Carousel";

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

            <Carousel.Item>
              <img
                className="imgCaro  d-block w-100 img-fluid "
                src={Des}
                alt="Student"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="imgCaro d-block w-100 img-fluid "
                src={Hard}
                alt=""
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgCaro d-block w-100 img-fluid "
                src={Pex}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
}