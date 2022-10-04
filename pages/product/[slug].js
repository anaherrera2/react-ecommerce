import React, { useState } from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { useStateContext } from '../../context/StateContext';
import products from '../../products.json';




const ProductDetails = ({product}) => {  

  const { image, name, description, price, choices} = product;
  
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const choice = choices[0]

  const handleBuyNow = () => {

  
    onAdd(product, qty, choice);

    setShowCart(true);
  }

  
  const handleChoice = (select) => {

    choice = select.value

  }
  

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={image} className="product-detail-image" />
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <h4>Descripcion: </h4>
          <p>{description}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Cantidad:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <form>  
          <b> Selecciona un opcion</b>  
          <select id = "choicelist" onChange = {() => handleChoice(this)} >  
          {choices.map(function(choice){return <option> {choice} </option>})}
          </select>  
          </form>  

          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty, choice)}>Agregar al carrito</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Pagar ahora</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async ( {params: slug} ) => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export const getStaticProps = async ( {params: slug} ) => {

    const product = products.find(function(e) {
    return e.slug == slug.slug
  })

  return {
    props:{product}}
}

export default ProductDetails