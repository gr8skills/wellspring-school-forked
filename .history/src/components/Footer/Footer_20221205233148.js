import "./_footer.scss";
import Logo from "../../assets/Logo.png";

export const Footer = () => {
  return (
    <>
      <div className="col-md-12 flexy footer-container">
        <div className="footer-links col-md-2 ">
          <div className="col-md-12 flexy">
            <ul className="list-unstyled">
              <li>
                <a href="#">About Us</a>
              </li>{" "}
              <li>
                <a href="#">Curriculum</a>
              </li>{" "}
              <li>
                <a href="#">Facilities</a>
              </li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <a href="#">School Life</a>
              </li>{" "}
              <li>
                <a href="#">News</a>
              </li>{" "}
              <li>
                <a href="#">Media Gallery</a>
              </li>
            </ul>
          </div>
          <p>© Copyright 2022 Wellspring College. All Rights Reserved</p>
          <small>Cookies Policy . Privacy Policy</small>
        </div>
        <div className=" col-md-3 ">&nbsp;</div>
        <div className=" col-md-2 footer-logo">
          {" "}
          <img className="col-md-12 " src={Logo} alt="Scholar" />
        </div>
        <div className=" col-md-2">&nbsp;</div>
        <div className=" col-md-2 footer-contacts">
          <ul className="list-unstyled">
            <li>
              {" "}
              <img className="col-md-12 " src={Locate} alt="Scholar" />
              25B Somide Odujinrin Street Omole Phase 2, Ikeja, Lagos.
            </li>
            <li>
              {" "}
              <img className="col-md-12 " src={Phone} alt="Scholar" />
              (+234) 803 395 4138
            </li>
            <li>
              {" "}
              <img className="col-md-12 " src={Logo} alt="Scholar" />
              info@wellspringcollege.org
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
