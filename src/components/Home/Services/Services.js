import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import flight from '../../../images/flight.png'
import watch from '../../../images/watch.png'
import bed from '../../../images/bed.png'
import man from '../../../images/man.png'
import './Services.css'
const Services = () => {
  return (
    <div className="my-5">
      <div className="text-center mb-5">
        <h4 className="text-warning fs-2">SERVICES</h4>
        <h2 className="text-secondary fs-1">Service We Provides</h2>
      </div>
      <div className="services-container">
        <Container>
          <Row lg={4} xs={1} sm={2}  >
            <Col>
                <img src={flight} alt="" />
                <h5> Flight Booking</h5>
                <p>We arrange flight tickets for our respective customer for their hassels free travel.For extra discount please book your flight as early as possible</p>
            </Col>
            <Col>
                <img src={bed} alt="" />
                <h5>Hotel Reservation</h5>
                <p>Reservation hotel impotant part of a comfortable tour we always care for best hotel services </p>
            </Col>
            <Col>
                <img src={watch} alt="" />
                <h5>Pre Reservation</h5>
                <p>Some our customer want to reserve their tour packages month before. For them we give them extra discount</p>
            </Col>
            <Col>
                <img src={man} alt="" />
                <h5>Wandering Management</h5>
                <p>This is our exclusive service those who wants to explore landscape.Yearly two time we organize this package.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
