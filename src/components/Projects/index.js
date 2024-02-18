import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constant";
import "./styles.css";

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center py-5 projects-container"
      id="projects"
    >
      <Row className="w-100 justify-content-center align-items-center mb-5 wrapper-row">
        <Col xs={12} className="text-center">
          <h1 className="display-5 fw-bold mb-3" style={{ color: "#F2F3F4" }}>
            Projects
          </h1>
          <p className="lead" style={{ color: "#b1b2b3" }}>
            I have worked on a wide range of projects. From web apps to Android
            apps. Here are some of my projects.
          </p>
        </Col>
      </Row>
      <Row className="w-100 justify-content-center mb-5 projects-card-container">
        {projects.map((project) => (
          <Col key={project.id} xs={12} md={6} lg={4} xl={3}>
            <ProjectCard
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
