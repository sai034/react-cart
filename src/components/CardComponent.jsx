import React from 'react';
import { Card, Col, Row } from 'antd';


const CardComponent = (props) => (
      <Card bordered={true}>
        <img src={props.images} />
        <span>{props.description}</span>
        <span>{props.price}</span>
        <br />
        <button>ADD TO CART</button>
      </Card>
//         <Card bordered={true}>
//         {props.price}
//         <br />
//         <button>ADD TO CART</button>
//         <div class="bg-blue-500 group ...">
//     <p class="text-blue-300 group-hover:text-white">Click for more</p>
// </div>
      // </Card>
);



export default CardComponent;