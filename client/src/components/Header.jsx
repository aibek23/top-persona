import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../img/1612490879443.jpeg";
import { slide as Menu } from "react-burger-menu";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const encodedId = encodeURIComponent(location.hash.slice(1));
      const targetElement = document.getElementById(encodedId);
      setTimeout(() => {
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
    // if (location.pathname == "/") {
    //   const targetElement = document.getElementById("carousel_5288");
    //   setTimeout(() => {
    //     if (targetElement) {
    //       targetElement.scrollIntoView({ behavior: "smooth" });
    //     }
    //   }, 299);
    // }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const header = document.querySelector("header");

      setIsHeaderFixed(scrollY > 0);
      header.classList.toggle("show", scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuOpen = (state) => {
    setIsMenuOpen(state.isOpen);
    const header = document.querySelector("header");
    header.classList.toggle("bm-open", state.isOpen);
  };
  const handleScroll = () => {
    const header = document.querySelector("header");
    header.classList.toggle("show", window.pageYOffset < prevScrollPos);
    header.classList.toggle("fixed", window.pageYOffset > prevScrollPos);
    prevScrollPos = window.pageYOffset;
  };

  let prevScrollPos = 0;
  window.addEventListener("scroll", handleScroll);

  return (
    <div className="header_section">
      <header
        className={`u-clearfix u-header u-palette-1-base show fixed ${
          (isHeaderFixed ? "fixed" : "", isMenuOpen ? "bm-open" : "")
        }`}
        id="sec-9c40"
      >
        <div className="container-lg">
          <div className=" d-flex justify-content-end burgerButton">
            <Menu
              right
              onStateChange={handleMenuOpen}
              className={isMenuOpen ? "animate-out" : ""}
              customBurgerIcon={
                <div
                  className={
                    isMenuOpen ? "hamburger-button active" : "hamburger-button"
                  }
                >
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </div>
              }
            >
              <Link className="menu-item" to="/">
                ГЛАВНАЯ
              </Link>
              <Link
                // id="about"
                className="menu-item"
                to="/#about"
                // onClick={onAboutClick}
              >
                О НАС
              </Link>
              <Link
                className="menu-item"
                to="/#contact"
                // onClick={onContactClick}
              >
                КОНТАКТЫ
              </Link>
              <Link className="menu-item" to="/reviews">
                ОТЗЫВЫ
              </Link>

              <Link className="menu-item" to="/prices">
                ЦЕНЫ
              </Link>
              <Link to="/courses" cclassName="menu-item">
                КУРСЫ НЕМЕЦКОГО
              </Link>
              {/* <Link  className="menu-item" to="/vacancies">
                ВАКАНСИИ
              </Link> */}
            </Menu>
          </div>
          <nav className="u-menu-one-level u-offcanvas u-menu-1 nav_bar">
            <div className="u-custom-menu u-nav-container d-flex justify-content-end">
              <ul className="u-nav u-spacing-2 u-unstyled u-nav-1">
                <li className="u-nav-item">
                  <Link
                    className={`headerli u-active-custom-color u-nav-link ${
                      location.hash === "" && location.pathname === "/"
                        ? "active"
                        : ""
                    }`}
                    to="/"
                    // onClick={onTopClick}
                  >
                    ГЛАВНАЯ
                  </Link>
                </li>
                <li className="u-nav-item">
                  <Link
                    to="/#about"
                    className={`headerli u-active-custom-color u-nav-link ${
                      location.hash === "#about" ? "active" : ""
                    }`}
                    // onClick={onAboutClick}
                  >
                    О НАС
                  </Link>
                </li>
                <li className="u-nav-item">
                  <Link
                    to="/#contact"
                    className={`headerli u-active-custom-color u-nav-link ${
                      location.hash === "#contact" ? "active" : ""
                    }`}
                    // onClick={onContactClick}
                  >
                    КОНТАКТЫ
                  </Link>
                </li>
                <li className="u-nav-item">
                  <NavLink
                    to="/reviews"
                    className="headerli u-active-custom-color u-nav-link"
                  >
                    ОТЗЫВЫ
                  </NavLink>
                </li>
                <li className="u-nav-item">
                  <NavLink
                    to="/prices"
                    className="headerli u-active-custom-color u-nav-link"
                  >
                    цены
                  </NavLink>
                </li>
                <li className="u-nav-item">
                  <NavLink
                    to="/courses"
                    className="headerli u-active-custom-color u-nav-link"
                  >
                    КУРСЫ НЕМЕЦКОГО
                  </NavLink>
                </li>

                {/* <li className="u-nav-item">
                  <NavLink
                    to="/vacancies"
                    className="headerli u-active-custom-color u-nav-link"
                  >
                    ВАКАНСИИ
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </nav>
          <Link
            to="/"
            className="u-image u-logo u-image-1"
            data-image-width={144}
            data-image-height={144}
          >
            <img
              style={{ borderRadius: "10%" }}
              src={Logo}
              className="u-logo-image u-logo-image-1"
              alt="Logo"
            />
          </Link>
          <Link
            to="/"
            className="u-active-none u-border-3 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-btn-rectangle u-button-style u-hover-none u-none u-radius-0 u-text-body-alt-color u-top-left-radius-0 u-top-right-radius-0 u-btn-1"
          >
            TOP-Persona
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
