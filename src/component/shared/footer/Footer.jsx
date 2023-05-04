import React from "react";
import "./Footer.css";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bgColor text-white footer">
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
                  <FaFacebookSquare></FaFacebookSquare> Facebook
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  <FaTwitterSquare></FaTwitterSquare> Twitter
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
