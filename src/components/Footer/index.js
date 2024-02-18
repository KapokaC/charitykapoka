import React from "react";
import { Container, Nav } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Bio } from "../../data/constant";
import "./styles.css";

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Container className="footer-wrapper">
        <h1 className="logo">Charity Kapoka</h1>
        <Nav className="footer-nav">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
        </Nav>
        <div className="social-media-icons">
          <a href={Bio.facebook} target="display">
            <FacebookIcon />
          </a>
          <a href={Bio.twitter} target="display">
            <TwitterIcon />
          </a>
          <a href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </a>
          <a href={Bio.github} target="display">
            <GitHubIcon />
          </a>
          <a href={Bio.insta} target="display">
            <InstagramIcon />
          </a>
        </div>
        <p className="copyright">
          &copy; 2024 Charity Kapoka. All rights reserved.
        </p>
      </Container>
    </Container>
  );
};

export default Footer;
