import React from 'react'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import ProductList from '../components/productList'

export default function Products() {
  return (
    <div>
        <Header />
        <ProductList />
        <Footer />
    </div>
  )
}
