import React, { useState, useEffect } from 'react';

import { useStateContext } from '../context/StateContext';
import FormPayment from '../components/FormPayment';

const Payment = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
  }, []);

  return (

  <FormPayment/>
  )
}

export default Payment