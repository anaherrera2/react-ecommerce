import React from 'react';

import { Product, Banner } from '../components';
import products from '../products.json';
import bannerData from '../product-banner.json';


const Home = () => (
  <div>
    <Banner />
    <div className="products-heading">
      <h2>Menú</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, nisl sollicitudin fermentum</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product.id} product={product} />)}
    </div>

  </div>
);

export default Home;
