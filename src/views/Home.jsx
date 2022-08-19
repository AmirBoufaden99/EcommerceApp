import React from 'react'

import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import Slider from '../components/Slider'
import ProductList from '../components/productList'



export default function Home() {
  return (
    <div>
        <Header />
        <Slider />
        <Footer />
    </div>
  )
}
