import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constant";

const Experience = () => {
  return (
    <Container
      id="experience"
      className="d-flex flex-column justify-content-center align-items-center py-5"
    >
      <Row className="w-100 justify-content-center align-items-center mb-5">
        <Col xs={12} className="text-center">
          <h1 className="display-5 fw-bold mb-3" style={{ color: "#F2F3F4" }}>
            Experience
          </h1>
          <p className="lead" style={{ color: "#F2F3F4" }}>
            My work experience as a software engineer and working on different
            companies and projects.
          </p>
        </Col>
      </Row>
      <Row className="w-100 justify-content-center mb-5">
        <Col xs={12} md={8} lg={6}>
          {experiences.map((experience, index) => (
            <div key={index} className="mb-4">
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
