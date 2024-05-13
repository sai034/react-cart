import React from 'react';
import { Card, Col, Row, Button, notification, App, Carousel } from 'antd';

// import { ReactComponent as CartIcon } from '../icons/shopping-cart.svg';
let click = () => {
  alert("added to cart");
}

const CardComponent = (props) => {
  props.images.forEach((image) => console.log(image))

  const imagesJSX = props.images.map((image) => (
    <img src={image} />
  ))

  return(
      <Card bordered={true} className="mx-3">
        <Carousel arrows infinite = {false}>
          {imagesJSX}
        </Carousel>
        <span><b>{props.description}</b></span>
        <hr/ >
        <span><b>₹{props.price}   <span class="p-4 text-left text-red-600">{props.discountPercentage}</span>
      </b></span>
        <br />
   
      
      <br />
        <button class =" border-2 border-blue-600 text-blue-600 hover:bg-blue-900" onClick={() => {
            alert("Added to Cart");
          }}>
              
          <span>🛒 Add to Cart</span>

        </button>
        
        {/* <Button icon={CartIcon} iconPosition='start'>ADD TO CART</Button> */}
      </Card>
//         <Card bordered={true}>
//         {props.price}
//         <br />
//         <button>ADD TO CART</button>
//         
//     
// 
      // </Card>
)
};



export default CardComponent;