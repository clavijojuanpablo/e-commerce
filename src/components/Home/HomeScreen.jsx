import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'

const HomeScreen = () => {


  const products = useSelector(state => state.products)

  const [productSearch, setProductSearch] = useState("")
  const [filterProduct, setFilterProduct] = useState()

  useEffect(() => {
    console.log(productSearch)
    console.log(filterProduct)
    if (products) {
      setFilterProduct(products.filter(e => e.title.toLowerCase().includes(productSearch.toLowerCase())))
    }
  }, [productSearch])


  return (
    <div className='home'>


      <div className="LeftBar">
        <h2>Category</h2>
        <ul>
          <li>Smart TV</li>
          <li>Computers</li>
          <li>Smartphones</li>
          <li>Kitchen</li>
        </ul>
      </div>

      <div className="RightBar">
        <InputSearch 
        setProductSearch={setProductSearch}
        />

        <div className='products-container'>
          {
            filterProduct?

            filterProduct?.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
            :
            products?.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default HomeScreen