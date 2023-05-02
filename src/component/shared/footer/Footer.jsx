import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-danger text-white mt-5">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0 fw-bold fs-5">Connect with us:</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Facebook
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Twitter
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <p className="mb-0 fw-bold fs-5">Contact us:</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="mailto:info@example.com"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  info@example.com
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Send us a message
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
