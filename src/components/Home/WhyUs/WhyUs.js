import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import globe from "../../../images/globe.png";
import book from "../../../images/book.png";
import trolly from "../../../images/trolly.png";
import whyUs from "../../../images/why-us-img-new.png";
import './whyUs.css'

const WhyUs = () => {
  return (
    <div className="why-container my-5">
      <Container>
        <Row lg={2} xs={1} sm={1}>
          <Col>
            <div className="mt-3">
              <h2 className="text-danger fs-1 ">Why Chose us?</h2>
              <p>We make all the process easy</p>
            </div>
            <div className='mt-5'>
              <div className="d-flex align-items-start">
                <img className=" img-fluid" src={globe} alt="" />
                <div className="px-3">
                  <h4 className="text-secondary ">All Around the World Tours</h4>
                  <p>
                    we arrange almost world around tours for our client <br />
                    exploring the world
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <img className="img-fluid" src={trolly} alt="" />
                <div className="px-3" >
                  <h4 className="text-secondary ">Private & Customized Tours</h4>
                  <p>
                    we arrange almost world around tours for our client <br />
                    exploring the world
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <img className=" img-fluid" src={book} alt="" />
                <div className="px-3" >
                  <h4 className="text-secondary ">Immigration & Passport Help</h4>
                  <p>
                    we arrange almost world around tours for our client <br />
                    exploring the world
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <img className=" img-fluid" style={{ height:'500px' }} src={whyUs} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyUs;
