import React from 'react';

const Order = ({order}) => {
    console.log(order)
    const {_id, packageName, name, duration, people} = order
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
             <td>{packageName}</td>
            <td>{duration}</td>
            <td>{people}</td>
            <td className="text-warning">pending...</td>
        </tr>
    );
};

export default Order;