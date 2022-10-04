import React from 'react';
import Link from 'next/link';


import jsonData from '../product-banner.json';


const Banner = () => {
  return (
    <div className="banner-container">
      <div>
        <p className="small-text">{jsonData.smallText}</p>
        <h3>{jsonData.midText}</h3>
        <h1>{jsonData.largeText}</h1>
        <img src={jsonData.image} alt="hambuguesa" className="banner-image" />

        <div>
          <Link href={`/product/${jsonData.product}`}>
            <button type="button">{jsonData.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Descripción</h5>
            <p>{jsonData.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner