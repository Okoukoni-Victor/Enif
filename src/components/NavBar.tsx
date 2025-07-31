import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg navbar-dark ${
        scrolled ? "scrolled" : "transparent"
      }`}
    >
      <div className="container">
        <a href="#" className="navbar-brand me-5">
          <img src={Logo} alt="Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav my-5 my-lg-0 gap-3">
            <li className="nav-item">
              <a href="" className="nav-link">
                Discover
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                About Us
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 ms-auto">
            <a
              href="#"
              className="btn btn-outline-light px-4 rounded-4 border-2 fw-semibold"
            >
              Log-in
            </a>
            <a
              href="#"
              className="btn btn-light px-4 rounded-4 border-2 fw-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
