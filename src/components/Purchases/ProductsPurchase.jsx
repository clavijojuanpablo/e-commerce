import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductsPurchase = ({ product }) => {

  const navigate = useNavigate()

  const goToProductId = () => navigate(`/product/${product.id}`)

  return (
    <div onClick={goToProductId} className='productIntern'>

      <div className="col1">
        <p>{product.title}</p>
      </div>

      <div className="col2">
        <p>{product.productsInCart.quantity}</p>
      </div>

      <div className="col3">
        <p>{product.price}</p>
      </div>

    </div>
  )
}

export default ProductsPurchase