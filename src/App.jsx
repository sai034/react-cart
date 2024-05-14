import React, { useState, useEffect } from 'react';
import './App.css';
import CardComponent from './components/CardComponent.jsx';
import axios from 'axios';
import { chunk } from 'lodash';
import { Col, Row } from 'antd';

function App() {
    
  const [ productsData, setProductsData ] = useState([]);
  //Fetching the data and dividing the data using chunk
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://dummyjson.com/products");
      console.log({response: response.data.products})
      const chunkedArray = chunk(response.data.products, 3)
      console.log({chunkedArray})
      setProductsData(chunkedArray)
    }
    fetchData()  
  }, []) 
//Arranging the 3 cards in each row
  const cardsJSX = productsData.map((product) => (
    <div>
      <Row gutter={24}>
        <Col span={8}>
          {product.length > 0 &&
          <CardComponent
            brand = {product[0].brand}
            description = {product[0].description}
            images = {product[0].images}
            price = {product[0].price}
            discountPercentage = {product[0].discountPercentage}
          />}
        </Col>
        <Col span={8}>
          {product.length > 1 &&
          <CardComponent
            brand = {product[1].brand}
            description = {product[1].description}
            images = {product[1].images}
            price = {product[1].price}
            discountPercentage = {product[1].discountPercentage}
          />}
        </Col>
        <Col span={8}>
        {product.length > 2 &&
          <CardComponent
            brand = {product[2].brand}
            description = {product[2].description}
            images = {product[2].images}
            price = {product[2].price}
            discountPercentage = {product[2].discountPercentage}
          />}
        </Col>
    </Row>
    <br />
  </div>
  ))

  return (
     <div>
      {/* <h1 className='text-xl mx-20'> */}
      <h1 class="font-black mx-20 text-4xl"> 
        Products
        </h1>
      {/* </h1> */}
        {cardsJSX}
    
      </div>  
  )
}

export default App;
