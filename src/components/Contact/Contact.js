import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./styles.css";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowAlert(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container className="contact-page" id="about">
      <Row className="contact-wrapper">
        <Col xs={12} md={8}>
          <h2 className="contact-tittle">Contact</h2>
          <p
            className="lead"
            style={{
              color: "#b1b2b3",
              textAlign: "center",
            }}
          >
            Feel free to reach out to me for any questions or opportunities!
          </p>
          <Form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="contact-email-title">
                Email address
              </Form.Label>
              <Form.Control
                className="contact-input"
                type="email"
                placeholder="Enter email"
                name="from_email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="contact-input"
                type="text"
                placeholder="Enter your name"
                name="from_name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                className="contact-input"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                className="contact-message"
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                required
              />
            </Form.Group>

            <div type="submit" value="send" className="contact-button">
              Submit
            </div>
          </Form>
          {showAlert && (
            <Alert variant="success" className="contact-button">
              Email sent successfully!
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
