import React, { useState, useEffect } from 'react';
import './App.css';
import {Carousel}  from 'antd';
import axios from 'axios';
// Setting a function onclick if we click the button it will show added to cart
let click = () => {
  alert("added to cart");
}
function App() {   
  const [ productsData, setProductsData ] = useState([]);
  //Fetching the data and dividing the data using chunk
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://dummyjson.com/products");
      console.log({response: response.data.products})
      setProductsData(response.data.products) 
    }
    fetchData()  
  }, []) 
 return (
     <div>
      {/* Setting text color in black and text size in 4xl and margin left and margin right in 80px*/}
      <h1 class="font-black mx-20 text-4xl"> 
        Products
        </h1>
       
      {/* </h1> */}
        {/* {cardsJSX} */}
      {/* Setting a container with margin left and margin-right in auto and padding in 16px*/}
    <div className="container mx-auto p-4">
      {/* Setting a grid with three columns and gap between them is 40px */}
      <div className="grid grid-cols-3 gap-10">
        {productsData.map(data => (
          // Setting padding 16px and rounded lg shadow 
          <div key={data.id} className="p-4 border rounded-lg shadow">
          {/* Setting text in bold and in size xl*/}
            <h2 className="text-xl font-bold ">{data.title}</h2> 
            <div key={data.id}>
              
           
             <Carousel arrows infinite = {false} > 
                {/* {JSX} */}
                {
                  data.images.map((image) => (
                    // Setting image height in 192 px
                    <img src={image} className='h-48'/>
                  ))
                }
             </Carousel> 
         
        </div>
        {/* Setting margin top in 8px and setting text color in purple */}
            <p className="mt-2 text-purple-600">{data.description}</p>
            {/* Setting text left and giving padding 16px and text color in red */}
            <span><b>₹{data.price} <span class="p-4 text-left text-red-600">{data.discountPercentage}% off</span> </b> </span>
          <br /> <br />
          {/* Setting a button and when we hover it will change to blue */}
            <button class =" border-2 border-blue-600 text-blue-600 hover:bg-blue-900" onClick={() => {
            alert("Added to Cart");
          }}>
              
          <span>🛒 Add to Cart</span>

        </button>
      
          </div>
        ))}
      </div>
    </div>
    </div>
         
 );    

}
export default App;
