import React from "react";
import { useState } from "react";
import Axios from "axios";
import './AddFlower.css'


const AddFlower = () => {
  const [flowerName, setFlowerName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  

  const handleFlowerName = (e) => {
    setFlowerName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const AddFlower = () => {
    Axios.post("http://localhost:3001/create", {
      name: flowerName,
      image: imageUrl,
      description: description,
      price: price,
    }).then(() => {
      console.log("Successfully Added");
    });

    const name = flowerName;
    const image = imageUrl;
   

    console.log(name, image, description, price);
  };

  return (
    <div className="bg">
      <h1>Add Flowers</h1>
      <div
        className="container mt-4 mb-5 pb-5 text-start"
        style={{ maxWidth: "25%" }}
      >
        <h5 className="mt-3 ">flower Name:</h5>
        <input
  
          onChange={handleFlowerName}
          className="form-control"
         
          type="text"
          name="Name"
          id=""
        />

        {/* <h5 className="mt-3">Image URL:</h5>
        <input
          onChange={handleImageUrl}
          className="form-control"
          type="text"
          name="Image_URL"
          id=""
        /> */}

        <h5 className="mt-3">Description:</h5>
        <input
          onChange={handleDescription}
          className="form-control"
          type="text"
          name="Description"
          id=""
        />

        <h5 className="mt-3">Price:</h5>
        <input
          onChange={handlePrice}
          className="form-control"
          type="number"
          name="text"
          id=""
        />

        <button className="btn btn-secondary mt-4 w-100" onClick={AddFlower}>
          Add flower
        </button>
      </div>
    </div>
  );
};

export default AddFlower;
