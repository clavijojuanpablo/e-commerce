import axios from 'axios'
import React, { useEffect } from 'react'
import './style/cartScreen.css'
import getConfig from '../../utils/getConfig'
import { useDispatch, useSelector } from 'react-redux'
import CartInfo from './CartInfo'

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
  }

  const cart = useSelector(state => state.cart)
  

  return (
    <div>
      <button onClick={postPurchase}>Confirm Purchase</button>
      <h2>My Cart</h2>
      {
        cart?.map(productCart => (
          <CartInfo
          key={productCart.id}
          productCart={productCart}
          />
        ))
      }
    </div>
  )
}

export default CartScreen