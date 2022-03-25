import React from "react";
import { useState } from "react";
import Axios from "axios";

const ShowFlowers = () => {
  const [flowerList, setFlowerList] = useState([]);

//   const getFlowers = () => {
    Axios.get("http://localhost:3001/flowers").then((response) => {
      setFlowerList(response.data);
    });
//   };
  return (
    <div>
      {/* <button onClick={getFlowers}>Show Flowers</button> */}

      


      
      {flowerList.map((val, key) => {
        return (
          <div className="card row mx-auto w-50 d-flex -3 ">
            <div className="card-body ">
              <h3>Image: {val.image}</h3>
              <h3>Name: {val.name}</h3>
              <h3>Description: {val.description}</h3>
              <h3>Price: {val.price}</h3>
            </div>
          </div>
        )
      })}
      
    </div>
  );
};
export default ShowFlowers;
