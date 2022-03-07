import React from 'react';

const Order = (props) => { 
    const {_id, packageName, name, duration, people} = props.order
    const {handleCancelOrder} = props;
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
             <td>{packageName}</td>
            <td>{duration}</td>
            <td>{people}</td>
            <td ><button onClick={()=>handleCancelOrder(_id)} className=" btn btn-danger">cancel</button></td>
        </tr>
    );
};

export default Order;