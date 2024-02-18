import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { education } from "../../data/constant";
import EducationCard from "../Cards/EducationCard";
import "./styles.css";

const Education = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center py-5"
      id="education"
    >
      <Row className="w-100 justify-content-center align-items-center mb-5">
        <Col xs={12} className="text-center">
          <h1 className="eduTitle">Education</h1>
          <p
            className="lead"
            style={{
              color: "#b1b2b3",
              textAlign: "center",
            }}
          >
            My education has been a journey of self-discovery and growth. My
            educational details are as follows.
          </p>
        </Col>
      </Row>
      <Row className="w-100 justify-content-center mb-5">
        <Col xs={12} md={8} lg={6}>
          {education.map((educationItem, index) => (
            <EducationCard key={index} education={educationItem} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
