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
      <h1 className="textStyle">Add Flowers</h1>
      <div
        className="container mx-auto p-5 text-start"
        style={{ maxWidth: "25%", 'backgroundColor' : '#988691'}}
      >
        <h5 className="mt-3 ">Flower Name:</h5>
        <input
          onChange={handleFlowerName}
          className="form-control rounded-pill"
         
          type="text"
          name="Name"
          id=""
        />

        <h5 className="mt-3">Image:</h5>
        <input
          onChange={handleImageUrl}
          className="form-control rounded-pill"
          type="text"
          name="Image_URL"
          id=""
        />

        <h5 className="mt-3">Description:</h5>
        <input
          onChange={handleDescription}
          className="form-control rounded-pill"
          type="text"
          name="Description"
          id=""
        />

        <h5 className="mt-3">Price:</h5>
        <input
          onChange={handlePrice}
          className="form-control rounded-pill"
          type="number"
          name="text"
          id=""
        />

        <div className="text-center">
          <button className="btn mt-4 rounded-pill fw-bold px-4 py-2 text-light addButton " onClick={AddFlower}>
          Add flower
        </button>
        </div>
      </div>
    </div>
  );
};

export default AddFlower;
