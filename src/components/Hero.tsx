import React from "react";
import HeroImg from "../assets/heroImg.png";
import SMSIcon from "../assets/smsIcon.svg";
import InstagramIcon from "../assets/instagramIcon.svg";
import TelegramIcon from "../assets/telegramIcon.svg";

const Hero: React.FC = () => {
  return (
    <section className="hero d-flex align-items-center py-5">
      <div className="container mt-5 mt-lg-0">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="fw-bold display-5 text-white mb-3">
              Your Super-
              <br />
              Human Sales
              <br />
              Partner.
            </h1>
            <p className="text-white fs-5 mb-5 fw-semibold">
              Fast, Smart, Powerful
            </p>
            <a
              href="#"
              className="btn fw-semibold mb-5 text-white border-0 rounded-4 px-4 py-3 d-block d-lg-inline mx-auto mx-lg-0"
            >
              Get Started
            </a>
          </div>

          <div className="col-lg-5 mt-5 mt-lg-0 d-flex flex-column flex-lg-row  align-items-center justify-content-lg-end justify-content-start gap-4">
            <div className="social-links d-flex gap-3 align-self-lg-end mb-5">
              <a
                href="#"
                className="rounded-circle d-inline-flex justify-content-center align-items-center"
              >
                <img src={SMSIcon} alt="SMS Icon" width="25" />
              </a>
              <a
                href="#"
                className="rounded-circle d-inline-flex justify-content-center align-items-center"
              >
                <img src={InstagramIcon} alt="Instagram Icon" width="25" />
              </a>
              <a
                href="#"
                className="rounded-circle d-inline-flex justify-content-center align-items-center"
              >
                <img src={TelegramIcon} alt="Telegram Icon" width="25" />
              </a>
            </div>

            <img src={HeroImg} alt="Hero Image" height="400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
