import React from 'react';

const AllOrder = (props) => {
    const {_id, packageName, name, duration, people} = props.order
    const {handleRemoveOrder}= props;
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
             <td>{packageName}</td>
            <td>{duration}</td>
            <td>{people}</td>
            <td className="text-warning"><button onClick={()=>handleRemoveOrder(_id)} className=" btn btn-danger">delete</button></td>
        </tr>
    );
};

export default AllOrder;