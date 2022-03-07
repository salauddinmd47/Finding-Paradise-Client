import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Booking.css";
const Booking = () => {
  const { packageId } = useParams();
  const { user } = useAuth();
  const history = useHistory();
  const [packeage, setPackage] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://macabre-mansion-28000.herokuapp.com/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPackage(data));
  }, [packageId]);
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://macabre-mansion-28000.herokuapp.com/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your booking successfully Completed");
          history.push("/myorders");
        }
      });
  };

  return (
    <Container>
    <Row lg={2} sm={1} xs={1}>
      <Col className="px-5">
        <Card  style={{ width: "100%" }}>
          <Card.Img  variant="top" src={packeage.img} />
          <Card.Body>
            <Card.Title className="text-warning">{packeage.title}</Card.Title>
            <h4 className="text-secondary">{packeage.destination}</h4>
            <Card.Text>
              {packeage.des}
            </Card.Text>
            <h2>${packeage.price}</h2>
            <h4 className="text-danger">Want to Booking? Just  fill up the form</h4>
          </Card.Body>
        </Card>
      </Col>
      <Col className="booking-form">
        <form className="shadow " onSubmit={handleSubmit(onSubmit)}>
          <label>Name:</label>
          <input defaultValue={user.displayName} {...register("name")} />
          <label>Email:</label>
          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          <label>Package name;</label>
          <br />
          <select {...register("packageName")}>
            {/* <option value={packeage.title}>select</option> */}
            <option value="Hot Baloon Special Journey">
              Hot Baloon Special Journey
            </option>
            <option value="Weekdays in Thailand">Weekdays in Thailand</option>
            <option value="Peek Mountain View">Peek Mountain View</option>
            <option value="Pensacola Beach, Florida">
              Pensacola Beach, Florida
            </option>
            <option value="A Trip to Villa De Cosa">
              A Trip to Villa De Cosa
            </option>
            <option value="The Grand Canyons">The Grand Canyons</option>
          </select>
          <br />
          <label>No. of day</label>
          <br />
          <select {...register("duration")}>
            {/* <option value={packeage.duration}>select</option> */}
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <br />
          <label htmlFor="">No. of people</label>
          <br />
          <select {...register("people")}>
            {/* <option value={packeage.people}>select</option> */}
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <br /> 
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <br /> 
          <input
            className="text-center btn-warning"
            type="submit"
            value="confirm booking"
          />
        </form>
      </Col>
    </Row>
    </Container>
  );
};

export default Booking;
