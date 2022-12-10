import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { navMenus } from "./MenuItems";
import Dropdown from "./Dropdown";

import classes from "./NavBar.module.css";
import "./_navbar.scss";
import { TopNav } from "./TopNav";
import Logo from "../../assets/logo.png";

function NavBar() {
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
      <nav className="navContainer">
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
              <Link to={"/"} className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li
              className="nav-item leave"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to={"/about"}
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
                to={"/facilities"}
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
              <Link
                to={"/gallery"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                GALLERY
              </Link>
            </li>
            <li
              className="nav-item leave"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to={"/school-life"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SCHOOL LIFE
              </Link>
            </li>
            <li
              className="nav-item leave"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to={"/blog"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                NEWS{" "}
              </Link>
            </li>
            <li
              className="nav-item leave"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to={"/contact-us"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>
            <div className="wrapper">
              <ul className="mainMenu">
                <li className="item" id="account">
                  <a href="#account" className="btn">
                    About
                  </a>
                  <div className="subMenu">
                    <NavLink
                      to={"/principal"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Administrator's Message
                    </NavLink>{" "}
                    <NavLink
                      to={"/message"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Proprietor's Message
                    </NavLink>
                    <NavLink
                      to={"/history"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      History
                    </NavLink>
                    <NavLink
                      to={"/contact"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Contact Us
                    </NavLink>
                    <NavLink
                      to={"/Conduct"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Parents Code-of-Conduct
                    </NavLink>
                  </div>
                </li>

                <li className="item" id="academics">
                  <a href="#academics" class="btn">
                    Admission
                  </a>
                  <div className="subMenu">
                    <NavLink
                      to={"/apply"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      How to Apply
                    </NavLink>{" "}
                    <NavLink
                      to={"/fees"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      School Fees
                    </NavLink>{" "}
                    <NavLink
                      to={"/transfer"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Transfer
                    </NavLink>{" "}
                  </div>
                </li>

                <li className="item" id="admission">
                  <a href="#admission" class="btn">
                    Academics
                  </a>
                  <div className="subMenu">
                    <NavLink
                      to={"/senior"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Creche
                    </NavLink>{" "}
                    <NavLink
                      to={"/junior"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Higher Primary
                    </NavLink>{" "}
                    <NavLink
                      to={"/Primary"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Junior Primary
                    </NavLink>{" "}
                    <NavLink
                      to={"/secondary"}
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      Secondary
                    </NavLink>{" "}
                  </div>
                </li>

                <li className="item" id="support">
                  <a href={"/school"} class="btn">
                    School Life
                  </a>
                </li>

                <li className="item" id="support">
                  <a href="/Gallery" class="btn">
                    Gallery
                  </a>
                </li>

                <li className="item" id="support">
                  <a href="/News" class="btn">
                    News & Events
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
