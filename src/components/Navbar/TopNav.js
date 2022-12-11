import './_top-nav.scss'
import Logo from "../../assets/logo.png";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Icofont from "react-icofont";
import { SearchBar } from '../SearchBar/SearchBar';

export const TopNav = ({ element }) => {
  return (
    <>
      <div className="col-md-12 upper-nav">
        <div className="col-md-12  flexy" ref={element}>
          <div className="col-md-1">&nbsp;</div>
          <div className="col-md-2">
            <Link to={"/"}>
              {" "}
              <img className="col-md-8 imgCaro" src={Logo} alt="Scholar" />
            </Link>
          </div>
          <div className="col-md-5">&nbsp;</div>
          <div className="col-md-2">
            <ul className="list-inline list-unstyled">
              <li className="list-inline-item">
                <Link to={"#"}>
                  <i class="icofont-facebook"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"#"}>
                  <i class="icofont-youtube-play"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"#"}>
                  <i class="icofont-instagram"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"#"}>
                  <i class="icofont-twitter"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"#"}>
                  <i class="icofont-linkedin"></i>{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
};