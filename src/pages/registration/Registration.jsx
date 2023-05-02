import React, { useState } from "react";
import Lottie from "lottie-react";
import { Form, Container, Row, Col } from "react-bootstrap";
import loglott from "../../assets/lottie.json";
import "./Registar.css";
import { Link } from "react-router-dom";
const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };
  return (
    <Container className="margin-bottom">
      <Row className="align-items-center justify-content-center h-100">
        <Col md={4} className="">
          <Form
            onSubmit={handleSubmit}
            className="rounded p-3 mt-5 border border-danger"
          >
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="mt-2">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPhotoUrl">
              <Form.Label className="mt-2">Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photo_url"
                placeholder="Enter photo URL"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="mt-2">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                minLength={8}
                required
              />
            </Form.Group>

            <div className="text-center mt-3">
              <button className="btn btn-outline-danger w-100">Loging</button>
            </div>
            <div className="d-flex justify-content-center align-items-center my-3">
              <hr className="w-25" />
              <p className="mx-2 mb-0">or</p>
              <hr className="w-25" />
            </div>
            <p>
              Already have an account{" "}
              <Link to="/login" className="fw-bold fs-6">
                {" "}
                Login
              </Link>
            </p>
          </Form>
        </Col>
        <Col md={4}>
          <Lottie animationData={loglott}></Lottie>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
