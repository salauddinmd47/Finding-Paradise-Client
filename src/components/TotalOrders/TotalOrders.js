import React, { useEffect,useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import AllOrder from '../AllOrder/AllOrder';
const TotalOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:4000/myBookings")
      .then((res) => res.json())
      .then((data) => setOrders(data))
    },[])
    const handleRemoveOrder= id =>{
        fetch(`http://localhost:4000/myBookings/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data=>{
            const proceed = window.confirm('Are sure you want to remove this Order')
            if(proceed){
                if(data.deletedCount){
                    const remainingOrders = orders.filter(order=> order._id !== id)
                    setOrders(remainingOrders)
                }
            }
  
        })
    }
      return (
          <div style={{ height:"100vh" }}> 
          <h2 className="text-center">Manage All Orders</h2>
        <Container  className="my-3">
        <Table className="w-100" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>BookingId</th>
              <th>Name</th>
              <th>Package Name</th>
              <th>People</th>
              <th>Duration</th>
              <th>Remove Order</th>
            </tr>
          </thead>
          <tbody>
                  {
                      orders.map(order=> <AllOrder 
                      key={order._id}
                      order={order}
                      handleRemoveOrder={handleRemoveOrder}
                      ></AllOrder>)
                  }
          </tbody>
          </Table >
        </Container>
      </div>
      );
};

export default TotalOrders;