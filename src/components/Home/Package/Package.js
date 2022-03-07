import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Package = ({ packg }) => {
  const { title, img, des, price, destination, _id } = packg;

  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" style={{ height: "350px" }} src={img} />
          <Card.Body>
            <h2 className="text-info"> {title}</h2>
            <h6 className="text-secondary">{destination}</h6>
            <Card.Text>{des.slice(0, 80)}</Card.Text>
            <div className="d-flex justify-content-between">
              <h4 className="text-warning">${price}</h4>
              <Link to={`/booking/${_id}`}>
                <button className="btn btn-primary ms-5">book Now</button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Package;
