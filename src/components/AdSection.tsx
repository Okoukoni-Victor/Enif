import React from "react";
import DashboardImage from "../assets/dashboardImg.png";
import StatsImage from "../assets/statsImg.png";

const AdSection: React.FC = () => {
  return (
    <section className="ad-section">
      <div className="heading display-4 py-4 text-center mb-5">
        Sells Better than you!
      </div>

      <div className="container">
        <p className="lead text-center fs-6 py-5">
          Your secret weapon for supercharging your services and boosting your
          sales. You will never miss a <br /> lead, from AI-powered chat
          assistance to seamless automation, Enif has the tools you need to{" "}
          <br /> amplify business success.
        </p>
        <img
          src={DashboardImage}
          alt="Dashboard Image"
          className="dashboard-image d-block mx-auto w-100"
        />

        <div className="py-5 my-5 row d-flex align-items-center justify-content-center">
          <div className="col-12 col-lg-4">
            <img src={StatsImage} alt="Statistics Image" className="w-100" />
          </div>

          <div className="cta col-12 col-lg-4 d-flex flex-column mt-5 mt-lg-0">
            <h4 className="fw-bold mb-3">
              Grow Your Business with the most advanced AI yet.
            </h4>
            <p>
              Enif leverages the latest advancements in conversational AI to
              help businesses stay ahead of the curve, whether you're looking to
              streamline customer support, improve sales and marketing efforts.
            </p>
            <a
              href="#"
              className="btn mt-2 px-4 rounded-4 border-2 fw-semibold text-white align-self-start"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdSection;
