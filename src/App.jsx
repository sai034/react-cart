import React, { useState, useEffect } from 'react';
import './App.css';
import CardComponent from './components/CardComponent.jsx';
import axios from 'axios';
import { chunk } from 'lodash';
import { Col, Row } from 'antd';

function App() {
  const [ productsData, setProductsData ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://dummyjson.com/products");
      console.log({response: response.data.products})
      const chunkedArray = chunk(response.data.products, 3)
      console.log({chunkedArray})
      setProductsData(response.data.products)
    }
    fetchData()  
  }, []) 

  const cardsJSX = productsData.map((product) => (
    <div>
      <Row gutter={24}>
        <Col span={8}>
          <CardComponent
            brand = {product.brand}
            description = {product.description}
            images = {product.images}
            price = {product.price}
            discountPercentage = {product.discountPercentage}
          />
        </Col>
        <Col span={8}>
          <CardComponent
            brand = {product.brand}
            description = {product.description}
            images = {product.images}
            price = {product.price}
            discountPercentage = {product.discountPercentage}
          />
        </Col>
        <Col span={8}>
          <CardComponent
            brand = {product.brand}
            description = {product.description}
            images = {product.images}
            price = {product.price}
            discountPercentage = {product.discountPercentage}
          />
        </Col>  
    </Row>
  </div>
  ))

  return (
      <div>
        <h1>
          Product 
        </h1>
        {cardsJSX}
    
      </div>  
  )
}

export default App;
