
import React, { useState } from "react";
import { Form, Field } from "react"
import {useRouter} from 'next/router'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './cardUtils'





const FormPayment = () => {

  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/success')

   
  }

  const [values, setvalues] = useState({});
  const [submitting, setsubmitting] = useState(false);


        return (
          <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Número de tarjeta </label>
              <input
                name="number"
                component="input"
                type="text"
                pattern="[\d| ]{16,22}"
                placeholder="16 digitos"
                required
                format={formatCreditCardNumber}
              />
            </div>
            <div>
              <label>Nombre en la tarjeta</label>
              <input
                name="Tu nombre"
                component="input"
                type="text"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
            <label>Fecha de expiración</label>
              <input
                name="expiry"
                component="input"
                type="text"
                pattern="\d\d/\d\d"
                placeholder="MM/AA"
                format={formatExpirationDate}
                required
              />
              <label>CVC</label>
              <input
                name="cvc"
                component="input"
                type="text"
                pattern="\d{3,4}"
                placeholder="CVC"
                format={formatCVC}
                required
              />
            </div>
            <div className="buttons">
              <button className="submit" type="submit" disabled={submitting} >
                Pagar
              </button>
            </div>
          </form>
          </div>
        )
      }

 export default FormPayment;