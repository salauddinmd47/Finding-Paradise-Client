import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Order from "../Order/Order";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/myBookings")
    .then((res) => res.json())
    .then((data) => {
      const myOrders = data.filter((dt) => dt.email === user.email);
      setOrders(myOrders);
    });
  },[user])
  return (
    <div style={{ height:"100vh" }}> 
        <h2 className="text-center">My Orders</h2>
      <Container className="my-3">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>BookingId</th>
            <th>Name</th>
            <th>Package Name</th>
            <th>People</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
                {
                    orders.map(order=> <Order 
                    key={order._id}
                    order={order}
                    ></Order>)
                }
        </tbody>
        </Table >
      </Container>
    </div>
  );
};

export default MyOrders;
