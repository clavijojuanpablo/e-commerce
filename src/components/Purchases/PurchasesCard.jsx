import React, { useEffect, useState } from 'react'
import ProductsPurchase from './ProductsPurchase'

const PurchasesCard = ({ purchase }) => {

  const [date, setDate] = useState("")

  const transformDate = () => {
    let day = purchase.updatedAt[8] + purchase.updatedAt[9]
    let monthNum = purchase.updatedAt[5] + purchase.updatedAt[6]
    let month = ""
    let year = purchase.updatedAt[0]+
    purchase.updatedAt[1]+
    purchase.updatedAt[2]+
    purchase.updatedAt[3]
    
    if (monthNum === ("01")) {
      month = "January"
    } else if (monthNum === ("02")) {
      month = "February"
    } else if (monthNum === ("03")) {
      month = "March"
    } else if (monthNum === ("04")) {
      month = "April"
    } else if (monthNum === ("05")) {
      month = "May"
    } else if (monthNum === ("06")) {
      month = "June"
    } else if (monthNum === ("07")) {
      month = "July"
    } else if (monthNum === ("08")) {
      month = "August"
    } else if (monthNum === ("09")) {
      month = "September"
    } else if (monthNum === ("10")) {
      month = "Octuber"
    } else if (monthNum === ("11")) {
      month = "November"
    } else if (monthNum === ("12")) {
      month = "December"
    }

    let date = `${month} ${day}, ${year}`
    setDate(date)
  }

  useEffect(() => {
    transformDate()
  }, [])  

  return (
    <article className='puchase-card'>
      <h3>{date}</h3>
      {
        purchase.cart.products.map(product => (
          <ProductsPurchase
            key={product.id}
            product={product}
          />
        ))
      }
    </article>
  )
}

export default PurchasesCard