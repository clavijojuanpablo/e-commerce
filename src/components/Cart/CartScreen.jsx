import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style/cartScreen.css'
import getConfig from '../../utils/getConfig'
import { useDispatch, useSelector } from 'react-redux'
import CartInfo from './CartInfo'
import './style/cartScreen.css'
import { getAllProductsCart } from '../../store/slices/cart.slice'

const CartScreen = () => {

  const postPurchase = () => {

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }


    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/purchases"
    axios.post(URL, objPurchase, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))   
      .finally(() => window.location.reload(true)) 
  }  

  const cart = useSelector(state => state.cart)

  return (
    <div className='CartContainer'>
      <div className="Header">
        <h2>My Cart</h2>

        <div className="buttonBuy">
          <button onClick={postPurchase}>Confirm Purchase</button>
        </div>

      </div>

      <div className="productContainer">
        {
          cart?.map(productCart => (
            <CartInfo
              key={productCart.id}
              productCart={productCart}
            />
          ))
        }
      </div>
    </div>
  )
}

export default CartScreen