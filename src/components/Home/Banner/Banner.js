import React from "react";
import { Carousel } from "react-bootstrap";
import caroselPhoto1 from '../../../images/travel.jpg'
import caroselPhoto2 from '../../../images/travel1.jpg'
import caroselPhoto3 from '../../../images/travel3.jpg'
import './Banner.css'
const Banner = () => {
  return (
    <div>
      <Carousel className="position-relative">
        <Carousel.Item className="carousel">
          <img 
            className="d-block w-100"
            src= {caroselPhoto1}
            alt="First slide"
          />
          <Carousel.Caption className="position-absolute  top-50">
            <h3 className="text-info banner-title">Enjoy senary of the world</h3>
            <p className="fs-4 text-danger">Life is  to small to see the world so don't waste your time.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {caroselPhoto2}
            alt="Second slide"
          />

          <Carousel.Caption className="position-absolute  top-50">
            <h2 className="text-warning banner-title">It's Time to go High</h2>
            <p className="fs-4">Do forget to live life joyfully. It will never come again</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={caroselPhoto3}
            alt="Third slide"
          />

          <Carousel.Caption className="position-absolute  top-50">
            <h2 className="text-success banner-title">Are you ready to go out</h2>
            <p className="fs-4">
              World nature is always waiting for you just need to respond
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
