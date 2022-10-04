import React, { useState, useEffect } from 'react';

import { Product, Banner } from '../components';
import products from '../products.json';
import bannerData from '../product-banner.json';



const Orders = () => {

    const orders = []
    useEffect(() => {
        // Perform localStorage action
        const orders_str = localStorage.getItem('orders');
        orders = JSON.parse(orders_str)
        console.log(orders)
      }, []);
    
      return(
        <div>
        <h3>Orders</h3>
        <div className="products-container">
          {orders?.map((order) => <h3>{order.correo}</h3>)}
        </div>
      </div>   
      )

}

  
  export default Orders;
  