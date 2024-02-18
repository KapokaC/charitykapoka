import React from "react";
import "./HeroStyles.css";
import HeroImg from "../../images/HeroImage.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constant";
import HeroAnimation from "../HeroAnimation";
import Button from "react-bootstrap/Button";

const HeroSection = () => {
  return (
    <div>
      <div className="container col-xxl-9 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-sm-8 col-lg-6 offset-lg-1 ">
            <img
              src={HeroImg}
              className="z-2  position-absolute d-block mx-lg-auto img-fluid rounded-circle"
              alt="cleo-img"
              width="350"
              height="350"
              loading="lazy"
              style={{ border: "2px solid #fff" }}
            />
            <HeroAnimation />
          </div>
          <div className="col-lg-5">
            <h1
              className="display-5 fw-bold lh-1 mb-3 font-weight-bold"
              style={{
                fontSize: "50px",
                lineHeight: "68px",
                color: "#F2F3F4",
              }}
            >
              Hi, I am <br /> {Bio.name}
            </h1>
            <div className="typeWriter">
              I am a
              <div className="tw" style={{ color: "#854CE6" }}>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <p
              className="lead"
              style={{
                fontSize: "20px",
                lineHeight: "32px",
                marginBottom: "42px",
                color: "#F2F3F4",
              }}
            >
              {Bio.description}{" "}
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button
                href="https://github.com/KapokaC"
                target="_blank"
                variant="outline-light"
                className="github"
              >
                Check Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
