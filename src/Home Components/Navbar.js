import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const {pathname} = useLocation ();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname] );
  return null;
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <ScrollToTop/>
      <div className="container-fluid navbar-main">
        <div className="container">
        <div className="row navbar-section top-nav">
          <div className="col-lg-2 nav-logo">
            <Link to="/">
            <img src="../img/logo.svg" />
            </Link>
          </div>
          <div className="col-lg-8 nav-page">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/service">
                <li>Services</li>
              </Link>
              <Link to="/test">
              <li>Test</li>
              </Link>
              <Link to="/blog">
              <li>Blog</li>
              </Link>
            </ul>
          </div>
          <div className="col-lg-2 nav-btn">
            <Link to="/contact">
          <div className="nav-contact-btn">
              Contact Us
          </div>
            </Link>
            </div>
        </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="d-lg-none navbar-mobile-view">
        <div className="mobile-view-logo">
          <Link to="/">
          <img src="img/logo.svg" />
          </Link>
        </div>
        <div
          className={`offcanvas-menu-overlay ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(false)}
        />

        <div className="canvas-open" onClick={() => setIsOpen(true)}>
          <i className="fa-solid fa-bars-staggered"></i>
        </div>

        <div
          className={`offcanvas-menu-wrapper ${
            isOpen ? "show-offcanvas-menu-wrapper" : ""
          }`}
        >
          <div className="canvas-close" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-xmark" />
          </div>

          <div className="header-configure-area">
            <Link
              to="/contact"
              className="bk-btn"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          <div id="mobile-menu-wrap">
            <div className="slicknav_menu">
              <nav
                className="slicknav_nav slicknav_hidden"
                aria-hidden="true"
                role="menu"
                style={{ display: "none" }}
              >
                <ul>
                  <li className="active">
                    <a href="/" onClick={() => setIsOpen(false)}>
                      Home
                    </a>
                    <div className="horizontal-line"></div>
                  </li>
                  <li>
                    <a href="/about" onClick={() => setIsOpen(false)}>
                      About
                    </a>
                    <div className="horizontal-line"></div>
                  </li>
                  <li>
                    <a href="/service" onClick={() => setIsOpen(false)}>
                      Services
                    </a>
                    <div className="horizontal-line"></div>
                  </li>

                  {/* <li
                    className={`dropdown-container ${
                      isDropdownOpen ? "open" : ""
                    }`}
                  >
                    <a
                      href="/contact"
                      onClick={toggleDropdown}
                      className="dropdown"
                    >
                      Test{" "}
                      <span className="arrow">
                        {isDropdownOpen ? "▼" : "▶"}
                      </span>
                    </a>

                    <ul className="dropdown-list">
                      <li>Grade1</li>
                      <li>Grade1</li>
                      <li>Grade1</li>
                    </ul>
                    <div className="horizontal-line"></div>
                  </li> */}

                      <li>
                    <a href="/test" onClick={() => setIsOpen(false)}>
                      Test
                    </a>
                    <div className="horizontal-line"></div>
                  </li>
                  <li>
                    <a href="/blog" onClick={() => setIsOpen(false)}>
                      Blog
                    </a>
                    <div className="horizontal-line"></div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* desktop view  */}
          <div className="top-social">
            <a href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>

            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
          <ul className="top-widget">
            <li>
              <i className="fa fa-phone" /> +91 9322 803 145
            </li>
            <li>
              <i className="fa fa-envelope" /> support@treebo.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
