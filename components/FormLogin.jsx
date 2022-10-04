
import React, { useState, useEffect } from "react";
import {useRouter} from 'next/router'
import { useStateContext } from '../context/StateContext';


const FormLogin = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  const orders = []
  useEffect(() => {
      // Perform localStorage action
      const orders_str = localStorage.getItem('orders');
      if (orders_str){
        orders = JSON.parse(orders_str)
      }
      
    }, []);

  // User Login info
  const database = [
    {
      username: "test@test.com",
      password: "abcd"
    },
    {
      username: "test2@test.com",
      password: "1234"
    }
  ];

  const errors = {
    uname: "Correo inválido",
    pass: "Contrseña incorrecta"
  };
  const router = useRouter()
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
   

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        router.push('/payment')
        orders.push({"correo": userData.username, "products": cartItems})
        localStorage.setItem('orders', JSON.stringify(orders))
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          
          <label>Correo </label>
          <input type="email" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Contraseña </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input className="submit" type="submit" />
        </div>
      </form>
    </div>
  );


  return (
    <div className="app">
      <div className="">
        {renderForm}
      </div>
    </div>
  
  );
}

export default FormLogin;