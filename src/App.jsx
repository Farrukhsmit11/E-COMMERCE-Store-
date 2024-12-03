import { useState } from 'react'
// import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import ProductCard from './components/ProductCard'
import FlashSales from './components/FlashSales'
// import Products from './Products'
import Footer from './components/Footer'
import NewArrivalGrid from './components/NewArrivalGrid'
import ProductGrid from './components/ProductGrid'






function App() {

  return (
    <>
      <Banner />
      <Navbar />
      <Home />
      <FlashSales />
      <NewArrivalGrid />
      <ProductGrid />
      <Footer />

    </>
  )
}

export default App
