
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/slider1.png";
import Slider2 from "../../assets/slider2.png";
import "./_home.scss";
export const Home =()=>{
    return (
      <>
        <div className="home-page-trans col-md-12 flexy">
          <div className="col-md-1">&nbsp;</div>
          <div className="col-md-10">
            {" "}
            <Carousel fade>
              <Carousel.Item>
                <div className="col-md-12 flexy">
                  <div className="col-md-6 slider-label">
                    <h1>Beyond the Classroom</h1>
                    <p>Well</p>
                  </div>
                  <div className="col-md-6">
                    <img className="col-md-12 " src={Slider1} alt="Scholar" />
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="col-md-12 flexy">
                  <div className="col-md-6 slider-label">
                    <h1>WELLSPRING jkhghghi </h1>
                  </div>
                  <div className="col-md-6">
                    <img className="col-md-12 " src={Slider2} alt="Scholar" />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </>
    );
}