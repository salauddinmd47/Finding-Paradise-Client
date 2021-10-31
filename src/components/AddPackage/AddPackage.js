import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
const AddPackage = () => { 
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
      fetch('http://localhost:4000/addPackage',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(data=>{
          if(data.insertedId){
              alert('New package added successfully')
               reset()
          }
      })
      console.log(data);
  } 
  return (
    <div>
      <h2 className="text-warning text-center my-3">Add a New Package</h2>
      <div className="w-50 mx-auto border mb-5 py-5 px-3 bg-light">
        <form clssName="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}> 
          <input className="d-block w-100 mb-3" placeholder="package title" {...register("title")} />
          <input className="d-block w-100 mb-3" placeholder="destination" {...register("destination")} />
          <input className="d-block w-100 mb-3" placeholder="price" {...register("price")} />
          <input className="d-block w-100 mb-3" placeholder="product key" {...register("key")} />
          <textarea className="d-block w-100 mb-3" placeholder="description" {...register("des")} />
          <input className="d-block w-100 mb-3" placeholder="give img url here" {...register("img")} /> 
          
          <input className="w-50 mx-auto d-block btn-warning" value="Add Package" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
