import React from 'react'


const CartInfo = ({ productCart }) => {


  return (
    <section className='cartIntern'>
      <div className="col1"><h3>{productCart.title}</h3></div>
      <div className="col2"><h4>{productCart.brand}</h4></div>
      <div className="col3">
        <p>{productCart.productsInCart.quantity}</p>
      </div>



    </section>
  )
}

export default CartInfo