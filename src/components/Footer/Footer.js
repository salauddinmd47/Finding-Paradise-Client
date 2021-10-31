import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container pt-5 px-5 bg-dark text-light">
      <Container fluid>
        <Row lg={4} xs={1}>
          <Col>
            <h6>Contact Information</h6>
            <p>info@intravel.sdemo.site</p>
            <p>
              P: 0123 456 789 <br />
              P: 0123 456 789
            </p>
            <p>34 Barnard St - Suite 111 United States</p>
          </Col>
          <Col>
            <h6>Useful Links</h6>
            <li>
              <Link>Privacy policy</Link>
            </li>
            <li>
              <Link>Terms and conditions</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Our Team</Link>
            </li>
          </Col>
          <Col>
            <h6>Service and Support</h6>
            <li>
              <a href="">Travel Insurance</a>
            </li>
            <li>
              <a href="">24/7 helpline</a>
            </li>
            <li>
              <a href="">Money refund</a>
            </li>
            <li>
              <a href="">No cancellation fees</a>
            </li>
            
          </Col>
          <Col>
            <h6>Follow us</h6>{" "}
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Tweeter</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Youtube</a>
            </li>
          </Col> 
        </Row>
        <hr />
        <p className="text-center text-light"><small>Copyright 2021 © All rights reserved</small></p>
      </Container>
    </div>
  );
};

export default Footer;
