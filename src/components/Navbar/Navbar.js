import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { navMenus } from "./MenuItems";
import Dropdown from "./Dropdown";

import classes from "./NavBar.module.css";
import "./_navbar.scss";
import { TopNav } from "./TopNav";
import Logo from "../../assets/logo.png";

function NavBar({sticky}) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [activeMenu, setActiveMenu] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
  });

  const onMouseEnter = (e) => {
    const menuText = e.target.text.trim().toLowerCase() || "about";

    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setActiveMenu({
        menu1: menuText === "about",
        menu2: menuText === "admission",
        menu3: menuText === "curriculum",
        menu4: menuText === "facilities",
        menu5: menuText === "news",
      });
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setActiveMenu({
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
      });
    }
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const openPortalLink = () => {
    const portal =
      "https://marylandcomprehensive.educare.school/default.html#/admin/dashboard";
    window.open(portal);
  };

  return (
    <>
      <nav className={sticky ? "navContainer navbar-sticky" : "navContainer"}>
        <div className={classes.navCont}>
          <div className={classes.imgCont} id="mobile-logo">
            <Link to={"/"}>
              <img src={Logo} alt=" logo" className={classes.imgContent} />
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-list active" : "nav-list"}>
            <li
              className="nav-item leave"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                exact
                activeClassName="active"
                to={"/"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                HOME
              </NavLink>
            </li>
            <li
              className="nav-item leave"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/about-us"}
                className="nav-links"
                onClick={closeMobileMenu}
                
              >
                ABOUT
              </NavLink>
              {activeMenu.menu1 && <Dropdown menuArray={navMenus.about} />}
            </li>

            <li
              className="nav-item leave"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/admission"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ADMISSION
              </NavLink>
            </li>

            <li
              className="nav-item leave"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/national-curriculum"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CURRICULUM
              </NavLink>
              {activeMenu.menu3 && <Dropdown menuArray={navMenus.curriculum} />}
            </li>
            <li
              className="nav-item leave"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/physical-facilities"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                FACILITIES
              </NavLink>
              {activeMenu.menu4 && <Dropdown menuArray={navMenus.facilities} />}
            </li>
            <li
              className="nav-item leave"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/gallery"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                GALLERY
              </NavLink>
            </li>
            <li
              className="nav-item leave"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/school-life"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SCHOOL LIFE
              </NavLink>
            </li>
            <li
              className="nav-item leave"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/blog"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                NEWS
              </NavLink>
            </li>
            <li
              className="nav-item leave"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/contact-us"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT US
              </NavLink>
            </li>
            <div className="wrapper">
              <ul className="mainMenu">
                <li className="item" id="support">
                  <a href="/" className="btn">
                    HOME
                  </a>
                </li>
                <li className="item" id="account">
                  <a href="#account" className="btn">
                    About
                  </a>
                  <div className="subMenu">
                    <NavLink
                      to={"/about-us"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      About Us
                    </NavLink>{" "}
                    <NavLink
                      to={"/proprietor-message"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Proprietor's Message
                    </NavLink>
                    <NavLink
                      to={"/vision"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Vision , Mission & Core Values
                    </NavLink>
                    <NavLink
                      to={"/discipline"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Discipline
                    </NavLink>
                    <NavLink
                      to={"/school-song"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      School Song
                    </NavLink>{" "}
                    <NavLink
                      to={"/teaching-team"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Teaching Team
                    </NavLink>
                  </div>
                </li>
                <li className="item" id="support">
                  <a href="/admission" className="btn">
                    ADMISSION
                  </a>
                </li>
                <li className="item" id="academics">
                  <a href="#academics" className="btn">
                    CURRICULUM
                  </a>
                  <div className="subMenu">
                    <NavLink
                      to={"/national-curriculum"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      National Curriculum
                    </NavLink>{" "}
                    <NavLink
                      to={"/co-curricular"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Co-Curricular
                    </NavLink>{" "}
                    <NavLink
                      to={"/extra-curricular"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Extra Curricular
                    </NavLink>
                    <NavLink
                      to={"/beyond-classroom"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Beyond the Classroom Initiative
                    </NavLink>{" "}
                  </div>
                </li>

                <li className="item" id="admission">
                  <a href="#admission" className="btn">
                    FACILITIES
                  </a>
                  <div className="subMenu">
                    <NavLink
                      to={"/physical-faciliies"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Physical Facilities{" "}
                    </NavLink>{" "}
                    <NavLink
                      to={"/sports"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Sports{" "}
                    </NavLink>{" "}
                    <NavLink
                      to={"/building-faciliies"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Building Facilities
                    </NavLink>{" "}
                    <NavLink
                      to={"/health-catering"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Health & Catering
                    </NavLink>{" "}
                  </div>
                </li>

                <li className="item" id="support">
                  <a href="/gallery" className="btn">
                    GALLERY
                  </a>
                </li>

                <li className="item" id="support">
                  <a href="/school-life" className="btn">
                    SCHOOL LIFE{" "}
                  </a>
                </li>

                <li className="item" id="support">
                  <a href="/blog" className="btn">
                    NEWS
                  </a>
                </li>
                <li className="item" id="support">
                  <a href="/contact-us" className="btn">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
