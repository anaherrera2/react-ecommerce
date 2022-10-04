import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';


const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    // localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <h2>Orden lista</h2>
        <p className="description">
          Tu pedido esta listo para ser entregado
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Volver al menú
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success