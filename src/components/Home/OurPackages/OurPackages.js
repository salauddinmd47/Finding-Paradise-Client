import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Package from "../Package/Package";

const OurPackages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div>
      <div className="text-center my-5">
        <h4 className="text-warning fs-3">PACKAGES</h4>
        <h2 className="fs-1 text-secondary">Our Exclusive Packages</h2>
      </div>
      <Container>
        <Row lg={3} xs={1} sm={1} className="g-3">
          {packages.map((packg) => (
            <Package packg={packg} key={packg.key}></Package>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurPackages;
