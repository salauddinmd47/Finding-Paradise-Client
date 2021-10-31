import React from "react"; 
import {  NavLink } from "react-router-dom";
import TotalOrders from "../TotalOrders/TotalOrders";

const ManageOrders = () => {
  return (
      <div className="d-flex">
          <div className="w-25 bg-secondary">
             <div className="d-flex  mt-5 flex-column justify-content-center ">
             <h2 className="text-center text-warning">Total orders</h2>
              <li>
                  <NavLink className="fs-4 d-block text-light text-center"  to='/allOrders'>All Orders</NavLink>
              </li>
              <li>
                  <NavLink className="fs-4 d-block text-light text-center" to='/addPackage'>Add Package</NavLink>
              </li>
             </div>
          </div>
          <div className="w-75">
              <TotalOrders></TotalOrders>
          </div>
      </div>
  ) 
    
};

export default ManageOrders;
