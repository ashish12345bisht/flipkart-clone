import React from 'react'
import ProductImages from '../components/ProductImages'
import ProductDetails from '../components/ProductDetails'

function Product() {
  return (
    <div className="product__container">
        <ProductImages />
        <ProductDetails />
    </div>
  )
}

export default Product