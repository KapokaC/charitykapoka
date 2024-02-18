import React from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { SiAkamai } from "react-icons/si";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container className="navContainer">
        <Navbar.Brand href="#home">
          <h1
            href="/"
            className="navLogo"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <SiAkamai size="4rem" />
            <span className="span">Portfolio</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="mobileIcon"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="mobileMenu">
          <Nav className="navItems">
            <Nav.Link className="navLink" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="navLink" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="navLink" href="#experience">
              Experience
            </Nav.Link>
            <Nav.Link className="navLink" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="navLink" href="#education">
              Education
            </Nav.Link>
          </Nav>
          <Nav>
            <Container className="githubContainer">
              <Button
                href="https://github.com/KapokaC"
                target="_blank"
                variant="outline-light"
                className="github"
              >
                Github Profile
              </Button>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
